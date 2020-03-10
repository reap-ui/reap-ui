import * as React from "react";
import DocHeading from "../../DocHeading";
import DemoExample from "../../DemoExample";
import SyntaxHighlighter from "../../SyntaxHighlighter";
import Basic from "./Basic";
import BasicSrc from "!!raw-loader!./Basic";
import OutlinedSrc from "!!raw-loader!./Outlined";
import Outlined from "./Outlined";
import { Button } from "reap-ui";
import ButtonGroup from "../ButtonGroup";
import Checkbox from "./Checkbox";
import CheckboxSrc from "!!raw-loader!./Checkbox";
import Radio from "./Radio";
import RadioSrc from "!!raw-loader!./Radio";
import API from "./API";
import ButtonGroupAPI from "../ButtonGroup/API";

export default () => (
    <>
        <DocHeading>Button</DocHeading>
        <div>
            Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
        </div>
        <DemoExample
            title="Basic examples"
            className="btn-demo"
            component={<Basic />}
            source={BasicSrc}>
            Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.
        </DemoExample>
        <DemoExample
            title="Outline buttons"
            className="btn-demo"
            component={<Outlined />}
            source={OutlinedSrc}>
            In need of a button, but not the hefty background colors they bring? Add <code>outline</code> prop to remove all background images and colors on any button.
        </DemoExample>
        <DocHeading tag="h3">Sizes</DocHeading>
        <div>
            Fancy larger or smaller buttons? Set <code>size="lg"</code> or <code>size="sm"</code> for additional sizes.
        </div>
        <div className="btn-demo bd-example">
            <div>
                <Button variant="primary" size="lg">Large Button</Button>
                <Button variant="secondary" size="lg">Large Button</Button>
            </div>
            <SyntaxHighlighter code={`<Button variant="primary" size="lg">Large button</Button>
<Button variant="secondary" size="lg">Large button</Button>`} />
        </div>
        <div className="btn-demo bd-example">
            <div>
                <Button variant="primary" size="sm">Small button</Button>
                <Button variant="secondary" size="sm">Small button</Button>
            </div>
            <SyntaxHighlighter code={`<Button variant="primary" size="sm">Small button</Button>
<Button variant="secondary" size="sm">Small button</Button>`} />
        </div>
        <div>
            Create block level buttons—those that span the full width of a parent—by adding <code>block</code> prop.
        </div>
        <div className="btn-demo bd-example">
            <div>
                <Button variant="primary" size="lg" block>Block level button</Button>
                <Button variant="secondary" size="lg" block>Block level button</Button>
            </div>
            <SyntaxHighlighter code={`<Button variant="primary" size="lg" block>Block level button</Button>
<Button variant="secondary" size="lg" block>Block level button</Button>`} />
        </div>
        <DocHeading tag="h3">Active state</DocHeading>
        <div>
            Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. You can force the same active appearance with <code>active</code> prop, should you need to replicate the state programmatically.
        </div>
        <div className="btn-demo bd-example">
            <div>
                <Button variant="primary" href="#" active>Primary Link</Button>
                <Button variant="secondary" href="#" active>Link</Button>
            </div>
            <SyntaxHighlighter code={`<Button variant="primary" href="#" active>Primary Link</Button>
<Button variant="secondary" href="#" active>Link</Button>`} />
        </div>
        <DocHeading tag="h3">Disabled state</DocHeading>
        <div>
            Make buttons look inactive by adding the disabled boolean prop to any <code>Button</code> component.
        </div>
        <div className="btn-demo bd-example">
            <div>
                <Button variant="primary" href="#" disabled>Primary Link</Button>
                <Button variant="secondary" href="#" disabled>Link</Button>
            </div>
            <SyntaxHighlighter code={`<Button variant="primary" href="#" disabled>Primary Link</Button>
<Button variant="secondary" href="#" disabled>Link</Button>`} />
        </div>
        <DemoExample
            title="Checkbox and radio buttons"
            component={<Checkbox />}
            source={CheckboxSrc}>
            <p>
                Bootstrap’s <code>Button</code> styles can be applied to other elements, such as <code>label</code>s, to provide checkbox or radio style button toggling. Add <code dangerouslySetInnerHTML={{ __html: `<Button.ToggleGroup/>` }} /> to style the <code>input</code>s within your buttons. <strong>Note that you can create single input-powered buttons or groups of them</strong>.``
            </p>
            The checked state for these buttons is only updated via click event on the button. You’ll need to toggle <code>active</code> prop manually.
        </DemoExample>
        <DemoExample
            component={<Radio />}
            source={RadioSrc} />
        <ButtonGroup />
        <API />
        <ButtonGroupAPI />
    </>
);