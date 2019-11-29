import * as React from "react";
import PropTypes from "prop-types";
import NavItem from "./NavItem";
import { classNames } from "../utils";

export interface NavProps extends React.HTMLAttributes<HTMLElement> {
    alignment?: "center" | "right";
    vertical?: boolean;
    pill?: boolean;
    fill?: boolean;
    tab?: boolean;
}

export default function Nav(props: NavProps) {
    const {
        className,
        alignment,
        vertical,
        pill,
        fill,
        tab,
        ...otherProps
    } = props;
    const alignmentMap: any = {
        center: "justify-content-center",
        right: "justify-content-end"
    };

    return (
        <nav className={
            classNames(
                className,
                "nav",
                pill ? "nav-pills" : tab ? "nav-tabs" : "",
                alignment && alignmentMap[alignment],
                vertical && "flex-column",
                fill && "nav-fill"
            )
        } {...otherProps} />
    );
}

Nav.propTypes = {
    alignment: PropTypes.oneOf(["right", "center"]),
    vertical: PropTypes.bool,
    pill: PropTypes.bool,
    fill: PropTypes.bool,
    tab: PropTypes.bool
};
Nav.Item = NavItem;