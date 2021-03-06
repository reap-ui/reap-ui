import * as React from "react"
import PropTypes from "prop-types"
import {classNames} from "../utils"
import {CommonProps} from "../Common/CommonPropsInterface"
import {omit} from "../utils"

export interface PaginationProps extends CommonProps<HTMLUListElement> {
    size?: "lg" | "sm"
    alignment?:"left" | "center" | "right"
}

export default function Pagination(props: PaginationProps) {
    const {
        size,
        alignment,
        ...otherProps
    } = props
    const PREFIX = "pagination"
    const alignmentMap: any = {
        center: "justify-content-center",
        right: "justify-content-end"
    }

    omit(otherProps, ["className"])

    return (
        <ul className={
            classNames(
                PREFIX,
                size && `${PREFIX}-${size}`,
                alignment && alignmentMap[alignment]
            )
        } {...otherProps} />
    )
}

Pagination.propTypes = {
    size: PropTypes.oneOf(["lg", "sm"]),
    alignment: PropTypes.oneOf(["left", "center", "right"])
}