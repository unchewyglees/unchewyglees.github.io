(self.webpackChunkmealaid=self.webpackChunkmealaid||[]).push([[290],{5318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},8076:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const n=e=>e,o=(()=>{let e=n;return{configure(t){e=t},generate:t=>e(t),reset(){e=n}}})()},7192:(e,t,r)=>{"use strict";function n(e,t,r){const n={};return Object.keys(e).forEach((o=>{n[o]=e[o].reduce(((e,n)=>(n&&(r&&r[n]&&e.push(r[n]),e.push(t(n))),e)),[]).join(" ")})),n}r.d(t,{Z:()=>n})},8979:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(8076);const o={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function i(e,t){return o[t]||`${n.Z.generate(e)}-${t}`}},6087:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(8979);function o(e,t){const r={};return t.forEach((t=>{r[t]=(0,n.Z)(e,t)})),r}},4938:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=r(2112)},2658:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(3366),o=r(7462),i=r(7294),a=r(6010),s=r(9707),u=r(7192),c=r(9602),l=r(6122),d=r(8216),p=r(8979);function m(e){return(0,p.Z)("MuiTypography",e)}(0,r(6087).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=r(5893);const h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Z=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,d.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=i.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiTypography"}),i=(e=>g[e]||e)(r.color),c=(0,s.Z)((0,o.Z)({},r,{color:i})),{align:p="inherit",className:y,component:b,gutterBottom:w=!1,noWrap:S=!1,paragraph:x=!1,variant:M="body1",variantMapping:E=v}=c,T=(0,n.Z)(c,h),B=(0,o.Z)({},c,{align:p,color:i,className:y,component:b,gutterBottom:w,noWrap:S,paragraph:x,variant:M,variantMapping:E}),P=b||(x?"p":E[M]||v[M])||"span",k=(e=>{const{align:t,gutterBottom:r,noWrap:n,paragraph:o,variant:i,classes:a}=e,s={root:["root",i,"inherit"!==e.align&&`align${(0,d.Z)(t)}`,r&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,u.Z)(s,m,a)})(B);return(0,f.jsx)(Z,(0,o.Z)({as:P,ref:t,ownerState:B,className:(0,a.Z)(k.root,y)},T))}))},6122:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(7925),o=r(6631);var i=r(247);function a({props:e,name:t}){return function({props:e,name:t,defaultTheme:r}){const i=function(e){const{theme:t,name:r,props:o}=e;return t&&t.components&&t.components[r]&&t.components[r].defaultProps?(0,n.Z)(t.components[r].defaultProps,o):o}({theme:(0,o.Z)(r),name:t,props:e});return i}({props:e,name:t,defaultTheme:i.Z})}},8216:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r(8320).Z},5949:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(7462),o=r(7294),i=r(3366),a=r(6010),s=r(7192),u=r(8216),c=r(6122),l=r(9602),d=r(8979);function p(e){return(0,d.Z)("MuiSvgIcon",e)}(0,r(6087).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var m=r(5893);const f=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],h=(0,l.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"inherit"!==r.color&&t[`color${(0,u.Z)(r.color)}`],t[`fontSize${(0,u.Z)(r.fontSize)}`]]}})((({theme:e,ownerState:t})=>{var r,n,o,i,a,s,u,c,l,d,p,m,f,h,Z,v,g;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(r=e.transitions)||null==(n=r.create)?void 0:n.call(r,"fill",{duration:null==(o=e.transitions)||null==(i=o.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(a=e.typography)||null==(s=a.pxToRem)?void 0:s.call(a,20))||"1.25rem",medium:(null==(u=e.typography)||null==(c=u.pxToRem)?void 0:c.call(u,24))||"1.5rem",large:(null==(l=e.typography)||null==(d=l.pxToRem)?void 0:d.call(l,35))||"2.1875"}[t.fontSize],color:null!=(p=null==(m=e.palette)||null==(f=m[t.color])?void 0:f.main)?p:{action:null==(h=e.palette)||null==(Z=h.action)?void 0:Z.active,disabled:null==(v=e.palette)||null==(g=v.action)?void 0:g.disabled,inherit:void 0}[t.color]}})),Z=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiSvgIcon"}),{children:o,className:l,color:d="inherit",component:Z="svg",fontSize:v="medium",htmlColor:g,inheritViewBox:y=!1,titleAccess:b,viewBox:w="0 0 24 24"}=r,S=(0,i.Z)(r,f),x=(0,n.Z)({},r,{color:d,component:Z,fontSize:v,instanceFontSize:e.fontSize,inheritViewBox:y,viewBox:w}),M={};y||(M.viewBox=w);const E=(e=>{const{color:t,fontSize:r,classes:n}=e,o={root:["root","inherit"!==t&&`color${(0,u.Z)(t)}`,`fontSize${(0,u.Z)(r)}`]};return(0,s.Z)(o,p,n)})(x);return(0,m.jsxs)(h,(0,n.Z)({as:Z,className:(0,a.Z)(E.root,l),ownerState:x,focusable:"false",color:g,"aria-hidden":!b||void 0,role:b?"img":void 0,ref:t},M,S,{children:[o,b?(0,m.jsx)("title",{children:b}):null]}))}));Z.muiName="SvgIcon";const v=Z;function g(e,t){const r=(r,o)=>(0,m.jsx)(v,(0,n.Z)({"data-testid":`${t}Icon`,ref:o},r,{children:e}));return r.muiName=v.muiName,o.memo(o.forwardRef(r))}},7144:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r(7596).Z},2112:(e,t,r)=>{"use strict";r.r(t),r.d(t,{capitalize:()=>o.Z,createChainedFunction:()=>i,createSvgIcon:()=>a.Z,debounce:()=>s.Z,deprecatedPropType:()=>u,isMuiElement:()=>c.Z,ownerDocument:()=>l.Z,ownerWindow:()=>d.Z,requirePropFactory:()=>p,setRef:()=>m,unstable_ClassNameGenerator:()=>w,unstable_useEnhancedEffect:()=>f.Z,unstable_useId:()=>h,unsupportedProp:()=>Z,useControlled:()=>v.Z,useEventCallback:()=>g.Z,useForkRef:()=>y.Z,useIsFocusVisible:()=>b.Z});var n=r(8076),o=r(8216);const i=r(9064).Z;var a=r(5949),s=r(7144);const u=function(e,t){return()=>null};var c=r(8502),l=r(8038),d=r(5340);r(7462);const p=function(e,t){return()=>null},m=r(7960).Z;var f=r(8974);const h=r(7579).Z,Z=function(e,t,r,n,o){return null};var v=r(2893),g=r(2068),y=r(1705),b=r(3511);const w={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),n.Z.configure(e)}}},8502:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(7294);const o=function(e,t){return n.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},8038:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r(7094).Z},5340:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r(8290).Z},2893:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(7294);const o=function({controlled:e,default:t,name:r,state:o="value"}){const{current:i}=n.useRef(void 0!==e),[a,s]=n.useState(t);return[i?e:a,n.useCallback((e=>{i||s(e)}),[])]}},8974:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r(6600).Z},2068:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r(3633).Z},1705:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r(67).Z},3511:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(7294);let o,i=!0,a=!1;const s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function u(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function c(){i=!1}function l(){"hidden"===this.visibilityState&&a&&(i=!0)}const d=function(){const e=n.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",u,!0),t.addEventListener("mousedown",c,!0),t.addEventListener("pointerdown",c,!0),t.addEventListener("touchstart",c,!0),t.addEventListener("visibilitychange",l,!0))}),[]),t=n.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!function(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return i||function(e){const{type:t,tagName:r}=e;return!("INPUT"!==r||!s[t]||e.readOnly)||"TEXTAREA"===r&&!e.readOnly||!!e.isContentEditable}(t)}(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(a=!0,window.clearTimeout(o),o=window.setTimeout((()=>{a=!1}),100),t.current=!1,!0)},ref:e}}},9707:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(7462),o=r(3366),i=r(9766),a=r(4178);const s=["sx"];function u(e){const{sx:t}=e,r=(0,o.Z)(e,s),{systemProps:u,otherProps:c}=(e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((r=>{a.Gc[r]?t.systemProps[r]=e[r]:t.otherProps[r]=e[r]})),t})(r);let l;return l=Array.isArray(t)?[u,...t]:"function"==typeof t?(...e)=>{const r=t(...e);return(0,i.P)(r)?(0,n.Z)({},u,r):u}:(0,n.Z)({},u,t),(0,n.Z)({},c,{sx:l})}},9064:(e,t,r)=>{"use strict";function n(...e){return e.reduce(((e,t)=>null==t?e:function(...r){e.apply(this,r),t.apply(this,r)}),(()=>{}))}r.d(t,{Z:()=>n})},7596:(e,t,r)=>{"use strict";function n(e,t=166){let r;function n(...n){clearTimeout(r),r=setTimeout((()=>{e.apply(this,n)}),t)}return n.clear=()=>{clearTimeout(r)},n}r.d(t,{Z:()=>n})},7094:(e,t,r)=>{"use strict";function n(e){return e&&e.ownerDocument||document}r.d(t,{Z:()=>n})},8290:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(7094);function o(e){return(0,n.Z)(e).defaultView||window}},7925:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(7462);function o(e,t){const r=(0,n.Z)({},t);return Object.keys(e).forEach((t=>{void 0===r[t]&&(r[t]=e[t])})),r}},7960:(e,t,r)=>{"use strict";function n(e,t){"function"==typeof e?e(t):e&&(e.current=t)}r.d(t,{Z:()=>n})},6600:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(7294);const o="undefined"!=typeof window?n.useLayoutEffect:n.useEffect},3633:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(7294),o=r(6600);function i(e){const t=n.useRef(e);return(0,o.Z)((()=>{t.current=e})),n.useCallback(((...e)=>(0,t.current)(...e)),[])}},67:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(7294),o=r(7960);function i(e,t){return n.useMemo((()=>null==e&&null==t?null:r=>{(0,o.Z)(e,r),(0,o.Z)(t,r)}),[e,t])}},7579:(e,t,r)=>{"use strict";var n;r.d(t,{Z:()=>s});var o=r(7294);let i=0;const a=(n||(n=r.t(o,2))).useId;function s(e){if(void 0!==a){const t=a();return null!=e?e:t}return function(e){const[t,r]=o.useState(e),n=e||t;return o.useEffect((()=>{null==t&&(i+=1,r(`mui-${i}`))}),[t]),n}(e)}},6010:(e,t,r)=>{"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:()=>o})}}]);