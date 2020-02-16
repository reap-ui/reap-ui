import * as React from "react";
import CSSTransition, { CSSTransitionProps } from "./CSSTransition";
import { classNames } from "./utils";

export interface FadeProps extends CSSTransitionProps {
    hidingClass?: string;
    toggleDisplay?: boolean;
    animation?: boolean;
}

export default function Fade(props: FadeProps) {
    let {
        children,
        hidingClass,
        toggleDisplay,
        style,
        animation,
        timeout,
        ...otherProps
    } = props;
    let display: any;

    return (
        <CSSTransition {...otherProps}>
            {
                state => {
                    const child = React.Children.only(children) as React.ReactElement;
                    const className = child.props.className;
                    let classes = classNames(className, animation && "fade");
                    let enterSet = new Set(["enter", "entering", "entered"]);

                    if (enterSet.has(state)) {
                        toggleDisplay && (display = "block");

                        if (state !== "enter") {
                            classes = classNames(classes, "show");
                        }
                    } else {
                        if (state === "exited") {
                            classes = classNames(classes, hidingClass);
                            toggleDisplay && (display = "none");
                        }
                    }

                    return React.cloneElement(
                        child,
                        {
                            className: classes,
                            style: {
                                ...style,
                                ...child.props.style,
                                display
                            }
                        }
                    );
                }
            }
        </CSSTransition>
    );
}

Fade.defaultProps = {
    timeout: 150,
    animation: true
};