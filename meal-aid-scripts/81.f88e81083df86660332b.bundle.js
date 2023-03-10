"use strict";(self.webpackChunkmealaid=self.webpackChunkmealaid||[]).push([[81],{8201:(e,t,o)=>{var i=o(5318);t.Z=void 0;var r=i(o(4938)),n=o(5893),a=(0,r.default)((0,n.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"AccountCircle");t.Z=a},6638:(e,t,o)=>{var i=o(5318);t.Z=void 0;var r=i(o(4938)),n=o(5893),a=(0,r.default)((0,n.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");t.Z=a},3720:(e,t,o)=>{o.d(t,{Z:()=>v});var i=o(3366),r=o(7462),n=o(7294),a=o(6010),s=o(7192),l=o(9602),d=o(6122),c=o(8216),p=o(6501),u=o(8979);function m(e){return(0,u.Z)("MuiAppBar",e)}(0,o(6087).Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var g=o(5893);const b=["className","color","enableColorOnDark","position"],h=(0,l.ZP)(p.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${(0,c.Z)(o.position)}`],t[`color${(0,c.Z)(o.color)}`]]}})((({theme:e,ownerState:t})=>{const o="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,r.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===t.position&&{position:"fixed",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===t.position&&{position:"absolute",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===t.position&&{position:"sticky",zIndex:e.zIndex.appBar,top:0,left:"auto",right:0},"static"===t.position&&{position:"static"},"relative"===t.position&&{position:"relative"},"default"===t.color&&{backgroundColor:o,color:e.palette.getContrastText(o)},t.color&&"default"!==t.color&&"inherit"!==t.color&&"transparent"!==t.color&&{backgroundColor:e.palette[t.color].main,color:e.palette[t.color].contrastText},"inherit"===t.color&&{color:"inherit"},"dark"===e.palette.mode&&!t.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===t.color&&(0,r.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"}))})),v=n.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiAppBar"}),{className:n,color:l="primary",enableColorOnDark:p=!1,position:u="fixed"}=o,v=(0,i.Z)(o,b),f=(0,r.Z)({},o,{color:l,position:u,enableColorOnDark:p}),Z=(e=>{const{color:t,position:o,classes:i}=e,r={root:["root",`color${(0,c.Z)(t)}`,`position${(0,c.Z)(o)}`]};return(0,s.Z)(r,m,i)})(f);return(0,g.jsx)(h,(0,r.Z)({square:!0,component:"header",ownerState:f,elevation:4,className:(0,a.Z)(Z.root,n,"fixed"===u&&"mui-fixed"),ref:t},v))}))},7720:(e,t,o)=>{o.d(t,{Z:()=>h});var i=o(3366),r=o(7462),n=o(7294),a=o(6010),s=o(7192),l=o(1796),d=o(9602),c=o(6122),p=o(5097),u=o(5893);const m=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],g=(0,d.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.absolute&&t.absolute,t[o.variant],o.light&&t.light,"vertical"===o.orientation&&t.vertical,o.flexItem&&t.flexItem,o.children&&t.withChildren,o.children&&"vertical"===o.orientation&&t.withChildrenVertical,"right"===o.textAlign&&"vertical"!==o.orientation&&t.textAlignRight,"left"===o.textAlign&&"vertical"!==o.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:(0,l.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,r.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,r.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),b=(0,d.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.wrapper,"vertical"===o.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,r.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),h=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiDivider"}),{absolute:n=!1,children:l,className:d,component:h=(l?"div":"hr"),flexItem:v=!1,light:f=!1,orientation:Z="horizontal",role:y=("hr"!==h?"separator":void 0),textAlign:x="center",variant:w="fullWidth"}=o,S=(0,i.Z)(o,m),C=(0,r.Z)({},o,{absolute:n,component:h,flexItem:v,light:f,orientation:Z,role:y,textAlign:x,variant:w}),I=(e=>{const{absolute:t,children:o,classes:i,flexItem:r,light:n,orientation:a,textAlign:l,variant:d}=e,c={root:["root",t&&"absolute",d,n&&"light","vertical"===a&&"vertical",r&&"flexItem",o&&"withChildren",o&&"vertical"===a&&"withChildrenVertical","right"===l&&"vertical"!==a&&"textAlignRight","left"===l&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,s.Z)(c,p.V,i)})(C);return(0,u.jsx)(g,(0,r.Z)({as:h,className:(0,a.Z)(I.root,d),role:y,ref:t,ownerState:C},S,{children:l?(0,u.jsx)(b,{className:I.wrapper,ownerState:C,children:l}):null}))}))},5097:(e,t,o)=>{o.d(t,{V:()=>r,Z:()=>n});var i=o(8979);function r(e){return(0,i.Z)("MuiDivider",e)}const n=(0,o(6087).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},799:(e,t,o)=>{o.d(t,{ZP:()=>$});var i=o(3366),r=o(7462),n=o(7294),a=o(6010),s=o(7192),l=o(8442),d=o(1796),c=o(9602),p=o(6122),u=o(9327),m=o(8502),g=o(8974),b=o(1705),h=o(9773),v=o(8979),f=o(6087);function Z(e){return(0,v.Z)("MuiListItem",e)}const y=(0,f.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),x=(0,f.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function w(e){return(0,v.Z)("MuiListItemSecondaryAction",e)}(0,f.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var S=o(5893);const C=["className"],I=(0,c.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.disableGutters&&t.disableGutters]}})((({ownerState:e})=>(0,r.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0}))),k=n.forwardRef((function(e,t){const o=(0,p.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:l}=o,d=(0,i.Z)(o,C),c=n.useContext(h.Z),u=(0,r.Z)({},o,{disableGutters:c.disableGutters}),m=(e=>{const{disableGutters:t,classes:o}=e,i={root:["root",t&&"disableGutters"]};return(0,s.Z)(i,w,o)})(u);return(0,S.jsx)(I,(0,r.Z)({className:(0,a.Z)(m.root,l),ownerState:u,ref:t},d))}));k.muiName="ListItemSecondaryAction";const A=k,R=["className"],M=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],L=(0,c.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,"flex-start"===o.alignItems&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters,!o.disablePadding&&t.padding,o.button&&t.button,o.hasSecondaryAction&&t.secondaryAction]}})((({theme:e,ownerState:t})=>(0,r.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&(0,r.Z)({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${x.root}`]:{paddingRight:48}},{[`&.${y.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${y.selected}`]:{backgroundColor:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${y.focusVisible}`]:{backgroundColor:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${y.disabled}`]:{opacity:e.palette.action.disabledOpacity}},"flex-start"===t.alignItems&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${e.palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${y.selected}:hover`]:{backgroundColor:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,d.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48}))),N=(0,c.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),$=n.forwardRef((function(e,t){const o=(0,p.Z)({props:e,name:"MuiListItem"}),{alignItems:d="center",autoFocus:c=!1,button:v=!1,children:f,className:x,component:w,components:C={},componentsProps:I={},ContainerComponent:k="li",ContainerProps:{className:$}={},dense:P=!1,disabled:T=!1,disableGutters:G=!1,disablePadding:V=!1,divider:B=!1,focusVisibleClassName:F,secondaryAction:j,selected:O=!1}=o,z=(0,i.Z)(o.ContainerProps,R),D=(0,i.Z)(o,M),q=n.useContext(h.Z),W={dense:P||q.dense||!1,alignItems:d,disableGutters:G},H=n.useRef(null);(0,g.Z)((()=>{c&&H.current&&H.current.focus()}),[c]);const Y=n.Children.toArray(f),X=Y.length&&(0,m.Z)(Y[Y.length-1],["ListItemSecondaryAction"]),E=(0,r.Z)({},o,{alignItems:d,autoFocus:c,button:v,dense:W.dense,disabled:T,disableGutters:G,disablePadding:V,divider:B,hasSecondaryAction:X,selected:O}),J=(e=>{const{alignItems:t,button:o,classes:i,dense:r,disabled:n,disableGutters:a,disablePadding:l,divider:d,hasSecondaryAction:c,selected:p}=e,u={root:["root",r&&"dense",!a&&"gutters",!l&&"padding",d&&"divider",n&&"disabled",o&&"button","flex-start"===t&&"alignItemsFlexStart",c&&"secondaryAction",p&&"selected"],container:["container"]};return(0,s.Z)(u,Z,i)})(E),K=(0,b.Z)(H,t),Q=C.Root||L,U=I.root||{},_=(0,r.Z)({className:(0,a.Z)(J.root,U.className,x),disabled:T},D);let ee=w||"li";return v&&(_.component=w||"div",_.focusVisibleClassName=(0,a.Z)(y.focusVisible,F),ee=u.Z),X?(ee=_.component||w?ee:"div","li"===k&&("li"===ee?ee="div":"li"===_.component&&(_.component="div")),(0,S.jsx)(h.Z.Provider,{value:W,children:(0,S.jsxs)(N,(0,r.Z)({as:k,className:(0,a.Z)(J.container,$),ref:K,ownerState:E},z,{children:[(0,S.jsx)(Q,(0,r.Z)({},U,!(0,l.Z)(Q)&&{as:ee,ownerState:(0,r.Z)({},E,U.ownerState)},_,{children:Y})),Y.pop()]}))})):(0,S.jsx)(h.Z.Provider,{value:W,children:(0,S.jsxs)(Q,(0,r.Z)({},U,{as:ee,ref:K,ownerState:E},!(0,l.Z)(Q)&&{ownerState:(0,r.Z)({},E,U.ownerState)},_,{children:[Y,j&&(0,S.jsx)(A,{children:j})]}))})}))},9334:(e,t,o)=>{o.d(t,{Z:()=>h});var i=o(3366),r=o(7462),n=o(7294),a=o(6010),s=o(7192),l=o(2658),d=o(9773),c=o(6122),p=o(9602),u=o(6336),m=o(5893);const g=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],b=(0,p.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${u.Z.primary}`]:t.primary},{[`& .${u.Z.secondary}`]:t.secondary},t.root,o.inset&&t.inset,o.primary&&o.secondary&&t.multiline,o.dense&&t.dense]}})((({ownerState:e})=>(0,r.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56}))),h=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiListItemText"}),{children:p,className:h,disableTypography:v=!1,inset:f=!1,primary:Z,primaryTypographyProps:y,secondary:x,secondaryTypographyProps:w}=o,S=(0,i.Z)(o,g),{dense:C}=n.useContext(d.Z);let I=null!=Z?Z:p,k=x;const A=(0,r.Z)({},o,{disableTypography:v,inset:f,primary:!!I,secondary:!!k,dense:C}),R=(e=>{const{classes:t,inset:o,primary:i,secondary:r,dense:n}=e,a={root:["root",o&&"inset",n&&"dense",i&&r&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,s.Z)(a,u.L,t)})(A);return null==I||I.type===l.Z||v||(I=(0,m.jsx)(l.Z,(0,r.Z)({variant:C?"body2":"body1",className:R.primary,component:"span",display:"block"},y,{children:I}))),null==k||k.type===l.Z||v||(k=(0,m.jsx)(l.Z,(0,r.Z)({variant:"body2",className:R.secondary,color:"text.secondary",display:"block"},w,{children:k}))),(0,m.jsxs)(b,(0,r.Z)({className:(0,a.Z)(R.root,h),ownerState:A,ref:t},S,{children:[I,k]}))}))},6336:(e,t,o)=>{o.d(t,{L:()=>r,Z:()=>n});var i=o(8979);function r(e){return(0,i.Z)("MuiListItemText",e)}const n=(0,o(6087).Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"])},5305:(e,t,o)=>{o.d(t,{Z:()=>I});var i=o(3366),r=o(7462),n=o(7294),a=o(6010),s=o(7192),l=o(1796),d=o(9602),c=o(6122),p=o(9773),u=o(9327),m=o(8974),g=o(1705),b=o(5097),h=o(6087);const v=(0,h.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var f=o(6336),Z=o(8979);function y(e){return(0,Z.Z)("MuiMenuItem",e)}const x=(0,h.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var w=o(5893);const S=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],C=(0,d.ZP)(u.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.divider&&t.divider,!o.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,r.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${e.palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${x.selected}`]:{backgroundColor:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${x.focusVisible}`]:{backgroundColor:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${x.selected}:hover`]:{backgroundColor:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${x.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${x.disabled}`]:{opacity:e.palette.action.disabledOpacity},[`& + .${b.Z.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${b.Z.inset}`]:{marginLeft:52},[`& .${f.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${f.Z.inset}`]:{paddingLeft:36},[`& .${v.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,r.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${v.root} svg`]:{fontSize:"1.25rem"}})))),I=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:l=!1,component:d="li",dense:u=!1,divider:b=!1,disableGutters:h=!1,focusVisibleClassName:v,role:f="menuitem",tabIndex:Z}=o,x=(0,i.Z)(o,S),I=n.useContext(p.Z),k={dense:u||I.dense||!1,disableGutters:h},A=n.useRef(null);(0,m.Z)((()=>{l&&A.current&&A.current.focus()}),[l]);const R=(0,r.Z)({},o,{dense:k.dense,divider:b,disableGutters:h}),M=(e=>{const{disabled:t,dense:o,divider:i,disableGutters:n,selected:a,classes:l}=e,d={root:["root",o&&"dense",t&&"disabled",!n&&"gutters",i&&"divider",a&&"selected"]},c=(0,s.Z)(d,y,l);return(0,r.Z)({},l,c)})(o),L=(0,g.Z)(A,t);let N;return o.disabled||(N=void 0!==Z?Z:-1),(0,w.jsx)(p.Z.Provider,{value:k,children:(0,w.jsx)(C,(0,r.Z)({ref:L,role:f,tabIndex:N,component:d,focusVisibleClassName:(0,a.Z)(M.focusVisible,v)},x,{ownerState:R,classes:M}))})}))},4386:(e,t,o)=>{o.d(t,{Z:()=>b});var i=o(3366),r=o(7462),n=o(7294),a=o(6010),s=o(7192),l=o(6122),d=o(9602),c=o(8979);function p(e){return(0,c.Z)("MuiToolbar",e)}(0,o(6087).Z)("MuiToolbar",["root","gutters","regular","dense"]);var u=o(5893);const m=["className","component","disableGutters","variant"],g=(0,d.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disableGutters&&t.gutters,t[o.variant]]}})((({theme:e,ownerState:t})=>(0,r.Z)({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},"dense"===t.variant&&{minHeight:48})),(({theme:e,ownerState:t})=>"regular"===t.variant&&e.mixins.toolbar)),b=n.forwardRef((function(e,t){const o=(0,l.Z)({props:e,name:"MuiToolbar"}),{className:n,component:d="div",disableGutters:c=!1,variant:b="regular"}=o,h=(0,i.Z)(o,m),v=(0,r.Z)({},o,{component:d,disableGutters:c,variant:b}),f=(e=>{const{classes:t,disableGutters:o,variant:i}=e,r={root:["root",!o&&"gutters",i]};return(0,s.Z)(r,p,t)})(v);return(0,u.jsx)(g,(0,r.Z)({as:d,className:(0,a.Z)(f.root,n),ref:t,ownerState:v},h))}))}}]);