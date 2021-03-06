import * as React from "react"

export const commonLang = {
    visibleApi: "Control the visibility(controlled component)",
    defaultVisibleApi: "The initial visibility",
    fadeApi: "Enable fade effect of dropdown popup or not",
    forceRenderApi: <>If <code>true</code> will render once mounted, otherwise will render it when <code>visible</code> is <code>true</code></>,
    offsetApi: "Offset of dropdown popup([horizontal, vertical])",
    delayApi: "A millisecond delay to show or hide the popup",
    onShowApi: <>Callback is invoked when <code>visible</code> changes from <code>false</code> to <code>true</code></>, 
    onShownApi: "Callback is invoked when popup has shown",
    onHideApi: <>Callback is invoked when <code>visible</code> changes from <code>true</code> to <code>false</code></>
}

export default {
    compDesc: "Dropdowns are toggleable, contextual overlays for displaying lists of links and more.",
    singleTitle: "Single button",
    splitTitle: "Split button",
    sizeTitle: "Sizing",
    sizeDesc: "Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.",
    renderTitle: "Custom render",
    dirTitle: "Directions",
    dirDesc: <>Trigger dropdown menus above,bottom,left or right by <code>placement</code> prop.</>,
    alignmentTitle: "Alignment",
    alignmentDesc: <>By default, a dropdown menu is automatically positioned 100% from the top and along the left side. Change it by <code>alignment</code> prop.</>,
    customTitle: "Customization",
    ...commonLang,
    onHiddenApi: "Callback is invoked when popup has hidden",
    placementApi: "The dropdown popup position",
    alignmentApi: "Horizontal alignment of dropdown popup",
    overlayApi: "The dropdown popup",
    variantApi: "Appearance of Button",
    sizeApi: "Specifies the large or small button",
    disabledApi: "Disable the button and apply 'disabled' class",
    outlineApi: "Outlined button",
    hrefApi: "Render the button as 'a' element, styled like button",
    splitApi: "Split button dropdowns with virtually the same markup as single button dropdowns",
    see: "see",
    renderApi: "Customize the buttons",
    headerAPi: "Header of the menu",
    tagApi: "A custom element type",
    itemHrefApi: "Href attribute of 'a' tag, if tag equals 'a' will apply otherwise will ignore",
    activeApi: "Activate the component",
    itemDisabledApi: "Disable the component"
}