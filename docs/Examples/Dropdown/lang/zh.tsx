import * as React from "react"

export const commonLang = {
    visibleApi: "控制下拉菜单是否可见(受控组件)",
    defaultVisibleApi: "下拉菜单是否默认可见",
    fadeApi: "是否允许下拉菜单的淡入淡出效果。",
    forceRenderApi: <>强制渲染，如果为<code>true</code>将会直接渲染，否则当<code>visible</code>为<code></code>的时候渲染</>,
    offsetApi: "下拉菜单的偏移量([水平, 垂直])",
    delayApi: "延迟下拉菜单的显示和隐藏（以毫秒为单位）",
    onShowApi: <>当<code>visible</code>从<code>false</code>变为<code>true</code>是的回调</>, 
    onShownApi: "当下拉菜单显示出来后的回调",
    onHideApi: <>当<code>visible</code>从<code>true</code>变为<code>false</code>时的回调</>,
    onHiddenApi: "下拉菜单完全隐藏时候的回调函数"
}

export default {
    compDesc: "弹出的下拉列表。",
    singleTitle: "单个按钮",
    splitTitle: "分开的按钮",
    sizeTitle: "尺寸",
    sizeDesc: "支持所有尺寸的按钮包括默认的和分开的按钮。",
    renderTitle: "自定义渲染",
    dirTitle: "方向",
    dirDesc: <>通过<code>placement</code>设置下拉菜单弹出的方向（上、下、左或右）</>,
    alignmentTitle: "排列方式",
    alignmentDesc: <>默认情况下下拉菜单的定位是相对按钮top： 100%、left与按钮左对齐。设置<code>alignment</code>属性改变对齐方式</>,
    customTitle: "自定义",
    ...commonLang,
    placementApi: "下拉菜单弹出的方向",
    alignmentApi: "水平方向的排列方式",
    overlayApi: "弹出的下拉菜单",
    variantApi: "按钮的外观样式",
    sizeApi: "设置按钮的大小",
    disabledApi: "禁用按钮",
    outlineApi: "轮廓按钮",
    hrefApi: "将按钮渲染为a元素",
    splitApi: "按钮是否分开",
    see: "详见",
    renderApi: "自定义按钮",
    headerAPi: "菜单的头部",
    tagApi: "自定义的元素",
    itemHrefApi: "同a标签的href属性，如果tag传入的不是a则忽略。",
    activeApi: "激活菜单项",
    itemDisabledApi: "禁用菜单项"
}