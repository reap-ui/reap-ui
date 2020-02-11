import * as React from "react";
import {
    OverlayContext,
    handleFuncProp,
    chainFunction
} from "../utils";
import Popup, { PopupCommonProps } from "./Popup";
import PropTypes from "prop-types";
import { findDOMNode } from "react-dom";

export type action = "hover" | "click" | "contextmenu" | "focus";

export interface CommonProps extends PopupCommonProps {
    trigger?: action[] | action;
    onVisibleChange?: Function;
}

export interface OverlayProps extends CommonProps {
    alignment?: string;
    mountTo?: HTMLElement;
    popup: React.ReactNode;
    popupProps?: React.HTMLAttributes<HTMLElement>;
    wrapper?: React.ReactElement;
    unmountOnclose?: boolean;
    verticalCenter?: boolean;
    alignmentPrefix?: string;
    escClose?: boolean;
    clickOutsideClose?: boolean;
    onKeydown?: (evt: KeyboardEvent, arg: any) => any;
}

interface OverlayState {
    visible: boolean;
    node?: HTMLElement;
}

const actionType = ["hover", "contextmenu", "click", "focus"];

export default class Overlay extends React.Component<OverlayProps, OverlayState> {

    private srcEl: HTMLElement | null = null;
    private timer: NodeJS.Timeout | null = null;

    static propTypes = {
        trigger: PropTypes.oneOfType([
            PropTypes.oneOf(actionType),
            PropTypes.arrayOf(PropTypes.oneOf(actionType))
        ])
    };

    constructor(props: OverlayProps) {
        super(props);

        this.state = {
            visible: !!props.defaultVisible
        };
    }

    componentDidMount() {
        const node = findDOMNode(this) as HTMLElement;

        this.setState({
            node
        });
    }

    getAction() {
        const { trigger } = this.props;
        let action: Array<any> = [];

        if (Array.isArray(trigger)) {
            action = trigger;
        } else {
            action = [trigger];
        }

        return action;
    }

    handleEvent = (evt: React.MouseEvent<HTMLElement & HTMLButtonElement>) => {
        const src = evt.currentTarget;
        const type = evt.type;
        this.srcEl = src;

        //disabled
        if (src.disabled || src.classList.contains("disabled")) return;

        this.clearTimer();

        switch (type) {
            case "click":
            case "contextmenu":
                this.toggle();
                evt.preventDefault();
                break;
            case "mouseenter":
            case "focus":
                this.open();
                break;
            case "mouseleave":
                this.delayClose();
                break;
            case "blur":
                this.close();
                break;
        }
    };

    clearTimer() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    handlePopupMouseEnter = () => {
        this.clearTimer();
    }

    handlePopupMouseLeave = () => {
        const action = this.getAction();

        if (action.indexOf("hover") > -1) {
            this.delayClose();
        }
    }

    handleClickOutside = (target: HTMLElement) => {
        const action = this.getAction();
        const set = new Set<any>(action);

        if (
            (set.has("click") ||
                set.has("contextmenu")) &&
            this.srcEl !== target
        ) {
            this.props.clickOutsideClose && this.close();
        }
    };

    handleKeydown = (evt: KeyboardEvent, el: HTMLElement) => {
        const key = evt.key;
        const { onKeydown, escClose } = this.props;

        if (escClose && key === "Escape") {
            this.close();
        }

        handleFuncProp(onKeydown)(evt, el);
    };

    open = () => {
        const {
            state: { visible },
            props: { onVisibleChange },
            srcEl
        } = this;

        if (!srcEl || visible) return;

        this.setState({
            visible: true
        });

        handleFuncProp(onVisibleChange)(true);
    };

    close = () => {
        const {
            state: { visible },
            props: { onVisibleChange }
        } = this;

        if (visible) {
            this.setState({
                visible: false
            });
            handleFuncProp(onVisibleChange)(false);
        }

        this.srcEl = null;
    };

    toggle = () => {
        const { visible } = this.state;

        visible ? this.close() : this.open();
    };

    delayClose() {
        if (this.timer != null) {
            clearTimeout(this.timer);
            this.timer = null;
        }

        this.timer = setTimeout(this.close, 150);
    }

    renderChildren() {
        const {
            children,
            wrapper,
            ...otherProps
        } = this.props;
        const handler = this.handleEvent;
        const {
            onClick,
            onMouseEnter,
            onMouseLeave,
            onContextMenu,
            onBlur,
            onFocus
        } = (children as React.ReactElement<React.HTMLAttributes<HTMLElement>>).props;
        const actionMap: any = {
            hover: {
                onMouseEnter: chainFunction(handler, otherProps.onMouseEnter, onMouseEnter),
                onMouseLeave: chainFunction(handler, otherProps.onMouseLeave, onMouseLeave)
            },
            click: {
                onClick: chainFunction(handler, otherProps.onClick, onClick)
            },
            contextmenu: {
                onContextMenu: chainFunction(handler, otherProps.onContextMenu, onContextMenu)
            },
            focus: {
                onFocus: chainFunction(handler, otherProps.onFocus, onFocus),
                onBlur: chainFunction(handler, otherProps.onBlur, onBlur)
            }
        };
        let eventHandlers: any = {};
        let action = this.getAction();

        delete otherProps.popup;
        delete otherProps.popupProps;
        delete otherProps.onKeydown;
        delete otherProps.placement;
        delete otherProps.alignment;
        delete otherProps.alignmentPrefix
        delete otherProps.offset;
        delete otherProps.clickOutsideClose;
        delete otherProps.escClose;
        delete otherProps.fade;
        delete otherProps.flip;
        delete otherProps.unmountOnclose;
        delete otherProps.verticalCenter;
        delete otherProps.onVisibleChange;
        delete otherProps.trigger;
        delete otherProps.defaultVisible;

        action.forEach((a: string) => {
            if (a in actionMap) {
                eventHandlers = {
                    ...eventHandlers,
                    ...actionMap[a]
                };
            }
        });

        const el = React.cloneElement(
            children as React.ReactElement,
            {
                ...otherProps,
                ...eventHandlers
            }
        );

        return wrapper ? React.cloneElement(wrapper, {}, el) : el;
    }

    render() {
        const {
            props: {
                children,
                popup,
                popupProps,
                placement,
                alignment,
                offset,
                fade,
                unmountOnclose,
                alignmentPrefix,
                verticalCenter
            },
            state: {
                visible,
                node
            }
        } = this;
        const props = {
            fade,
            offset,
            placement,
            alignment,
            unmountOnclose,
            alignmentPrefix,
            verticalCenter,
            ...popupProps
        };

        if (!popup) return children;

        return (
            <>
                {this.renderChildren()}
                <OverlayContext.Provider value={{ close: this.close }}>
                    <Popup
                        visible={visible}
                        onKeydown={this.handleKeydown}
                        onMouseEnter={this.handlePopupMouseEnter}
                        onMouseLeave={this.handlePopupMouseLeave}
                        onClickOutside={this.handleClickOutside}
                        node={node}
                        {...props}>
                        {popup}
                    </Popup>
                </OverlayContext.Provider>
            </>
        );
    }

}