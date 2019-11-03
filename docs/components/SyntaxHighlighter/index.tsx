import * as React from "react";
import Highlighter from "react-syntax-highlighter/dist/esm/prism";
import {tomorrow} from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SyntaxHighlighter(props: { code: string }) {

    function handleClick() {
        const input = document.createElement("input");
        input.value = props.code;
        document.body.append(input);
        input.select();
        document.execCommand("copy");
        input.remove();
    }

    return (
        <div className="position-relative">
            <Highlighter
                language="javascript"
                style={tomorrow}>
                {props.code}
            </Highlighter>
            <button className="btn-clipboard" onClick={handleClick}>copy</button>
        </div>
    );

}