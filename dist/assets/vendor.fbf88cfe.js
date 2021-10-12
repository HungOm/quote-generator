/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function yn(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function X(n,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function wn(n,t,a){return t&&X(n.prototype,t),a&&X(n,a),n}function kn(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function f(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{},e=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(e=e.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),e.forEach(function(r){kn(n,r,a[r])})}return n}function Y(n,t){return xn(n)||In(n,t)||Mn()}function xn(n){if(Array.isArray(n))return n}function In(n,t){var a=[],e=!0,r=!1,i=void 0;try{for(var o=n[Symbol.iterator](),s;!(e=(s=o.next()).done)&&(a.push(s.value),!(t&&a.length===t));e=!0);}catch(l){r=!0,i=l}finally{try{!e&&o.return!=null&&o.return()}finally{if(r)throw i}}return a}function Mn(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var V=function(){},N={},G={},On=null,q={mark:V,measure:V};try{typeof window!="undefined"&&(N=window),typeof document!="undefined"&&(G=document),typeof MutationObserver!="undefined"&&(On=MutationObserver),typeof performance!="undefined"&&(q=performance)}catch(n){}var An=N.navigator||{},Q=An.userAgent,J=Q===void 0?"":Q,S=N,u=G,P=q;S.document;var R=!!u.documentElement&&!!u.head&&typeof u.addEventListener=="function"&&typeof u.createElement=="function";~J.indexOf("MSIE")||~J.indexOf("Trident/");var b="___FONT_AWESOME___",Z="fa",K="svg-inline--fa",Cn="data-fa-i2svg";(function(){try{return!0}catch(n){return!1}})();var D={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},nn=S.FontAwesomeConfig||{};function En(n){var t=u.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}function zn(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(u&&typeof u.querySelector=="function"){var Sn=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Sn.forEach(function(n){var t=Y(n,2),a=t[0],e=t[1],r=zn(En(a));r!=null&&(nn[e]=r)})}var Pn={familyPrefix:Z,replacementClass:K,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},$=f({},Pn,nn);$.autoReplaceSvg||($.observeMutations=!1);var d=f({},$);S.FontAwesomeConfig=d;var y=S||{};y[b]||(y[b]={});y[b].styles||(y[b].styles={});y[b].hooks||(y[b].hooks={});y[b].shims||(y[b].shims=[]);var v=y[b],_n=[],Ln=function n(){u.removeEventListener("DOMContentLoaded",n),W=1,_n.map(function(t){return t()})},W=!1;R&&(W=(u.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(u.readyState),W||u.addEventListener("DOMContentLoaded",Ln));typeof global!="undefined"&&typeof global.process!="undefined"&&global.process.emit;var C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Tn(n){if(!(!n||!R)){var t=u.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var a=u.head.childNodes,e=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return u.head.insertBefore(t,e),n}}var Nn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _(){for(var n=12,t="";n-- >0;)t+=Nn[Math.random()*62|0];return t}function tn(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Rn(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(tn(n[a]),'" ')},"").trim()}function en(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(n[a],";")},"")}function an(n){return n.size!==C.size||n.x!==C.x||n.y!==C.y||n.rotate!==C.rotate||n.flipX||n.flipY}function rn(n){var t=n.transform,a=n.containerWidth,e=n.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:l,path:c}}var j={x:0,y:0,width:"100%",height:"100%"};function on(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function Dn(n){return n.tag==="g"?n.children:[n]}function $n(n){var t=n.children,a=n.attributes,e=n.main,r=n.mask,i=n.maskId,o=n.transform,s=e.width,l=e.icon,c=r.width,g=r.icon,m=rn({transform:o,containerWidth:c,iconWidth:s}),k={tag:"rect",attributes:f({},j,{fill:"white"})},M=l.children?{children:l.children.map(on)}:{},x={tag:"g",attributes:f({},m.inner),children:[on(f({tag:l.tag,attributes:f({},l.attributes,m.path)},M))]},I={tag:"g",attributes:f({},m.outer),children:[x]},p="mask-".concat(i||_()),h="clip-".concat(i||_()),O={tag:"mask",attributes:f({},j,{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,I]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:Dn(g)},O]};return t.push(E,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")")},j)}),{children:t,attributes:a}}function Wn(n){var t=n.children,a=n.attributes,e=n.main,r=n.transform,i=n.styles,o=en(i);if(o.length>0&&(a.style=o),an(r)){var s=rn({transform:r,containerWidth:e.width,iconWidth:e.width});t.push({tag:"g",attributes:f({},s.outer),children:[{tag:"g",attributes:f({},s.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:f({},e.icon.attributes,s.path)}]}]})}else t.push(e.icon);return{children:t,attributes:a}}function jn(n){var t=n.children,a=n.main,e=n.mask,r=n.attributes,i=n.styles,o=n.transform;if(an(o)&&a.found&&!e.found){var s=a.width,l=a.height,c={x:s/l/2,y:.5};r.style=en(f({},i,{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Fn(n){var t=n.prefix,a=n.iconName,e=n.children,r=n.attributes,i=n.symbol,o=i===!0?"".concat(t,"-").concat(d.familyPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f({},r,{id:o}),children:e}]}]}function Un(n){var t=n.icons,a=t.main,e=t.mask,r=n.prefix,i=n.iconName,o=n.transform,s=n.symbol,l=n.title,c=n.maskId,g=n.titleId,m=n.extra,k=n.watchable,M=k===void 0?!1:k,x=e.found?e:a,I=x.width,p=x.height,h=r==="fak",O=h?"":"fa-w-".concat(Math.ceil(I/p*16)),E=[d.replacementClass,i?"".concat(d.familyPrefix,"-").concat(i):"",O].filter(function(z){return m.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(m.classes).join(" "),A={children:[],attributes:f({},m.attributes,{"data-prefix":r,"data-icon":i,class:E,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(p)})},T=h&&!~m.classes.indexOf("fa-fw")?{width:"".concat(I/p*16*.0625,"em")}:{};M&&(A.attributes[Cn]=""),l&&A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(g||_())},children:[l]});var w=f({},A,{prefix:r,iconName:i,main:a,mask:e,maskId:c,transform:o,symbol:s,styles:f({},T,m.styles)}),H=e.found&&a.found?$n(w):Wn(w),pn=H.children,bn=H.attributes;return w.children=pn,w.attributes=bn,s?Fn(w):jn(w)}var sn=function(){};d.measurePerformance&&P&&P.mark&&P.measure;var Bn=function(t,a){return function(e,r,i,o){return t.call(a,e,r,i,o)}},F=function(t,a,e,r){var i=Object.keys(t),o=i.length,s=r!==void 0?Bn(a,r):a,l,c,g;for(e===void 0?(l=1,g=t[i[0]]):(l=0,g=e);l<o;l++)c=i[l],g=s(g,t[c],c,t);return g};function fn(n,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,i=Object.keys(t).reduce(function(o,s){var l=t[s],c=!!l.icon;return c?o[l.iconName]=l.icon:o[s]=l,o},{});typeof v.hooks.addPack=="function"&&!r?v.hooks.addPack(n,i):v.styles[n]=f({},v.styles[n]||{},i),n==="fas"&&fn("fa",t)}var ln=v.styles,Hn=v.shims,cn=function(){var t=function(r){return F(ln,function(i,o,s){return i[s]=F(o,r,{}),i},{})};t(function(e,r,i){return r[3]&&(e[r[3]]=i),e}),t(function(e,r,i){var o=r[2];return e[i]=i,o.forEach(function(s){e[s]=i}),e});var a="far"in ln;F(Hn,function(e,r){var i=r[0],o=r[1],s=r[2];return o==="far"&&!a&&(o="fas"),e[i]={prefix:o,iconName:s},e},{})};cn();v.styles;function un(n,t,a){if(n&&n[t]&&n[t][a])return{prefix:t,iconName:a,icon:n[t][a]}}function mn(n){var t=n.tag,a=n.attributes,e=a===void 0?{}:a,r=n.children,i=r===void 0?[]:r;return typeof n=="string"?tn(n):"<".concat(t," ").concat(Rn(e),">").concat(i.map(mn).join(""),"</").concat(t,">")}function U(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=new Error().stack}U.prototype=Object.create(Error.prototype);U.prototype.constructor=U;var L={fill:"currentColor"},dn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};f({},L,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var B=f({},dn,{attributeName:"opacity"});f({},L,{cx:"256",cy:"364",r:"28"}),f({},dn,{attributeName:"r",values:"28;14;28;28;14;28;"}),f({},B,{values:"1;0;1;1;0;1;"});f({},L,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),f({},B,{values:"1;0;0;0;0;1;"});f({},L,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),f({},B,{values:"0;0;1;1;0;0;"});v.styles;function gn(n){var t=n[0],a=n[1],e=n.slice(4),r=Y(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.familyPrefix,"-").concat(D.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.familyPrefix,"-").concat(D.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.familyPrefix,"-").concat(D.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}v.styles;var Xn=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function Yn(){var n=Z,t=K,a=d.familyPrefix,e=d.replacementClass,r=Xn;if(a!==n||e!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(e))}return r}var Vn=function(){function n(){yn(this,n),this.definitions={}}return wn(n,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=f({},a.definitions[s]||{},o[s]),fn(s,o[s]),cn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,c=o.icon;a[s]||(a[s]={}),a[s][l]=c}),a}}]),n}();function Gn(){d.autoAddCss&&!vn&&(Tn(Yn()),vn=!0)}function qn(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(e){return mn(e)})}}),Object.defineProperty(n,"node",{get:function(){if(!!R){var e=u.createElement("div");return e.innerHTML=n.html,e.children}}}),n}function hn(n){var t=n.prefix,a=t===void 0?"fa":t,e=n.iconName;if(!!e)return un(Jn.definitions,a,e)||un(v.styles,a,e)}function Qn(n){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(t||{}).icon?t:hn(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:hn(r||{})),n(e,f({},a,{mask:r}))}}var Jn=new Vn,vn=!1,Zn=Qn(function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,e=a===void 0?C:a,r=t.symbol,i=r===void 0?!1:r,o=t.mask,s=o===void 0?null:o,l=t.maskId,c=l===void 0?null:l,g=t.title,m=g===void 0?null:g,k=t.titleId,M=k===void 0?null:k,x=t.classes,I=x===void 0?[]:x,p=t.attributes,h=p===void 0?{}:p,O=t.styles,E=O===void 0?{}:O;if(!!n){var A=n.prefix,T=n.iconName,w=n.icon;return qn(f({type:"icon"},n),function(){return Gn(),d.autoA11y&&(m?h["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(M||_()):(h["aria-hidden"]="true",h.focusable="false")),Un({icons:{main:gn(w),mask:s?gn(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:T,transform:f({},C,e),symbol:i,title:m,maskId:c,titleId:M,extra:{attributes:h,styles:E,classes:I}})})}});/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var Kn={prefix:"fas",iconName:"quote-left",icon:[512,512,[],"f10d","M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"]};/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var nt={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};export{nt as a,Kn as f,Zn as i,Jn as l};
