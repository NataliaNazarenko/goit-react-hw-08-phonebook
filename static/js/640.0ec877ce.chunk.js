"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[640],{4640:function(e,n,t){t.r(n),t.d(n,{default:function(){return rn}});var r=t(2791),o=t(9434),a=t(4942),i=t(9439),s=t(1413);function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=t(3433);function l(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=l(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}var f=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=l(e))&&(r&&(r+=" "),r+=n);return r},d=["theme","type"],p=["delay","staleId"],m=function(e){return"number"==typeof e&&!isNaN(e)},h=function(e){return"string"==typeof e},g=function(e){return"function"==typeof e},v=function(e){return h(e)||g(e)?e:null},y=function(e){return(0,r.isValidElement)(e)||h(e)||g(e)||m(e)};function b(e){var n=e.enter,t=e.exit,o=e.appendPosition,a=void 0!==o&&o,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,l=void 0===c?300:c;return function(e){var o=e.children,i=e.position,c=e.preventExitTransition,f=e.done,d=e.nodeRef,p=e.isIn,m=a?"".concat(n,"--").concat(i):n,h=a?"".concat(t,"--").concat(i):t,g=(0,r.useRef)(0);return(0,r.useLayoutEffect)((function(){var e,n=d.current,t=m.split(" "),r=function e(r){var o;r.target===d.current&&(n.dispatchEvent(new Event("d")),n.removeEventListener("animationend",e),n.removeEventListener("animationcancel",e),0===g.current&&"animationcancel"!==r.type&&(o=n.classList).remove.apply(o,(0,u.Z)(t)))};(e=n.classList).add.apply(e,(0,u.Z)(t)),n.addEventListener("animationend",r),n.addEventListener("animationcancel",r)}),[]),(0,r.useEffect)((function(){var e=d.current,n=function n(){e.removeEventListener("animationend",n),s?function(e,n,t){void 0===t&&(t=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(t,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(n,t)}))}))}(e,f,l):f()};p||(c?n():(g.current=1,e.className+=" ".concat(h),e.addEventListener("animationend",n)))}),[p]),r.createElement(r.Fragment,null,o)}}function E(e,n){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:n}:{}}var x={list:new Map,emitQueue:new Map,on:function(e,n){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(n),this},off:function(e,n){if(n){var t=this.list.get(e).filter((function(e){return e!==n}));return this.list.set(e,t),this}return this.list.delete(e),this},cancelEmit:function(e){var n=this.emitQueue.get(e);return n&&(n.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var n=arguments,t=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,u.Z)([].slice.call(n,1)))}),0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(o)}))}},w=function(e){var n=e.theme,t=e.type,o=c(e,d);return r.createElement("svg",(0,s.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":"var(--toastify-icon-color-".concat(t,")")},o))},T={info:function(e){return r.createElement(w,(0,s.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(w,(0,s.Z)({},e),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(w,(0,s.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(w,(0,s.Z)({},e),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function Z(e){var n=(0,r.useReducer)((function(e){return e+1}),0),t=(0,i.Z)(n,2)[1],o=(0,r.useState)([]),a=(0,i.Z)(o,2),l=a[0],f=a[1],d=(0,r.useRef)(null),b=(0,r.useRef)(new Map).current,w=function(e){return-1!==l.indexOf(e)},Z=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:w,getToast:function(e){return b.get(e)}}).current;function C(e){var n=e.containerId;!Z.props.limit||n&&Z.containerId!==n||(Z.count-=Z.queue.length,Z.queue=[])}function O(e){f((function(n){return null==e?[]:n.filter((function(n){return n!==e}))}))}function k(){var e=Z.queue.shift();_(e.toastContent,e.toastProps,e.staleId)}function I(e,n){var o=n.delay,a=n.staleId,u=c(n,p);if(y(e)&&!function(e){return!d.current||Z.props.enableMultiContainer&&e.containerId!==Z.props.containerId||b.has(e.toastId)&&null==e.updateId}(u)){var l=u.toastId,f=u.updateId,w=u.data,C=Z.props,I=function(){return O(l)},j=null==f;j&&Z.count++;var L,N,z=(0,s.Z)((0,s.Z)((0,s.Z)({},C),{},{style:C.toastStyle,key:Z.toastKey++},Object.fromEntries(Object.entries(u).filter((function(e){var n=(0,i.Z)(e,2);n[0];return null!=n[1]})))),{},{toastId:l,updateId:f,data:w,closeToast:I,isIn:!1,className:v(u.className||C.toastClassName),bodyClassName:v(u.bodyClassName||C.bodyClassName),progressClassName:v(u.progressClassName||C.progressClassName),autoClose:!u.isLoading&&(L=u.autoClose,N=C.autoClose,!1===L||m(L)&&L>0?L:N),deleteToast:function(){var e=E(b.get(l),"removed");b.delete(l),x.emit(4,e);var n=Z.queue.length;if(Z.count=null==l?Z.count-Z.displayedToast:Z.count-1,Z.count<0&&(Z.count=0),n>0){var r=null==l?Z.props.limit:1;if(1===n||1===r)Z.displayedToast++,k();else{var o=r>n?n:r;Z.displayedToast=o;for(var a=0;a<o;a++)k()}}else t()}});z.iconOut=function(e){var n=e.theme,t=e.type,o=e.isLoading,a=e.icon,i=null,s={theme:n,type:t};return!1===a||(g(a)?i=a(s):(0,r.isValidElement)(a)?i=(0,r.cloneElement)(a,s):h(a)||m(a)?i=a:o?i=T.spinner():function(e){return e in T}(t)&&(i=T[t](s))),i}(z),g(u.onOpen)&&(z.onOpen=u.onOpen),g(u.onClose)&&(z.onClose=u.onClose),z.closeButton=C.closeButton,!1===u.closeButton||y(u.closeButton)?z.closeButton=u.closeButton:!0===u.closeButton&&(z.closeButton=!y(C.closeButton)||C.closeButton);var R=e;(0,r.isValidElement)(e)&&!h(e.type)?R=(0,r.cloneElement)(e,{closeToast:I,toastProps:z,data:w}):g(e)&&(R=e({closeToast:I,toastProps:z,data:w})),C.limit&&C.limit>0&&Z.count>C.limit&&j?Z.queue.push({toastContent:R,toastProps:z,staleId:a}):m(o)?setTimeout((function(){_(R,z,a)}),o):_(R,z,a)}}function _(e,n,t){var r=n.toastId;t&&b.delete(t);var o={content:e,props:n};b.set(r,o),f((function(e){return[].concat((0,u.Z)(e),[r]).filter((function(e){return e!==t}))})),x.emit(4,E(o,null==o.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return Z.containerId=e.containerId,x.cancelEmit(3).on(0,I).on(1,(function(e){return d.current&&O(e)})).on(5,C).emit(2,Z),function(){b.clear(),x.emit(3,Z)}}),[]),(0,r.useEffect)((function(){Z.props=e,Z.isToastActive=w,Z.displayedToast=l.length})),{getToastToRender:function(n){var t=new Map,r=Array.from(b.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var n=e.props.position;t.has(n)||t.set(n,[]),t.get(n).push(e)})),Array.from(t,(function(e){return n(e[0],e[1])}))},containerRef:d,isToastActive:w}}function C(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function O(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function k(e){var n=(0,r.useState)(!1),t=(0,i.Z)(n,2),o=t[0],a=t[1],s=(0,r.useState)(!1),c=(0,i.Z)(s,2),u=c[0],l=c[1],f=(0,r.useRef)(null),d=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,r.useRef)(e),m=e.autoClose,h=e.pauseOnHover,v=e.closeToast,y=e.onClick,b=e.closeOnClick;function E(n){if(e.draggable){"touchstart"===n.nativeEvent.type&&n.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",Z),document.addEventListener("mouseup",k),document.addEventListener("touchmove",Z),document.addEventListener("touchend",k);var t=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=t.getBoundingClientRect(),t.style.transition="",d.x=C(n.nativeEvent),d.y=O(n.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=t.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=t.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function x(n){if(d.boundingRect){var t=d.boundingRect,r=t.top,o=t.bottom,a=t.left,i=t.right;"touchend"!==n.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=r&&d.y<=o?T():w()}}function w(){a(!0)}function T(){a(!1)}function Z(n){var t=f.current;d.canDrag&&t&&(d.didMove=!0,o&&T(),d.x=C(n),d.y=O(n),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),t.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),t.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function k(){document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",k),document.removeEventListener("touchmove",Z),document.removeEventListener("touchend",k);var n=f.current;if(d.canDrag&&d.didMove&&n){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();n.style.transition="transform 0.2s, opacity 0.2s",n.style.transform="translate".concat(e.draggableDirection,"(0)"),n.style.opacity="1"}}(0,r.useEffect)((function(){p.current=e})),(0,r.useEffect)((function(){return f.current&&f.current.addEventListener("d",w,{once:!0}),g(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;g(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}}),[]),(0,r.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||T(),window.addEventListener("focus",w),window.addEventListener("blur",T)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",w),window.removeEventListener("blur",T))}}),[e.pauseOnFocusLoss]);var I={onMouseDown:E,onTouchStart:E,onMouseUp:x,onTouchEnd:x};return m&&h&&(I.onMouseEnter=T,I.onMouseLeave=w),b&&(I.onClick=function(e){y&&y(e),d.canCloseOnClick&&v()}),{playToast:w,pauseToast:T,isRunning:o,preventExitTransition:u,toastRef:f,eventHandlers:I}}function I(e){var n=e.closeToast,t=e.theme,o=e.ariaLabel,a=void 0===o?"close":o;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(t),type:"button",onClick:function(e){e.stopPropagation(),n(e)},"aria-label":a},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function _(e){var n=e.delay,t=e.isRunning,o=e.closeToast,i=e.type,c=void 0===i?"default":i,u=e.hide,l=e.className,d=e.style,p=e.controlledProgress,m=e.progress,h=e.rtl,v=e.isIn,y=e.theme,b=u||p&&0===m,E=(0,s.Z)((0,s.Z)({},d),{},{animationDuration:"".concat(n,"ms"),animationPlayState:t?"running":"paused",opacity:b?0:1});p&&(E.transform="scaleX(".concat(m,")"));var x=f("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(c),{"Toastify__progress-bar--rtl":h}),w=g(l)?l({rtl:h,type:c,defaultClassName:x}):f(x,l);return r.createElement("div",(0,a.Z)({role:"progressbar","aria-hidden":b?"true":"false","aria-label":"notification timer",className:w,style:E},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){v&&o()}))}var j=function(e){var n=k(e),t=n.isRunning,o=n.preventExitTransition,a=n.toastRef,i=n.eventHandlers,c=e.closeButton,u=e.children,l=e.autoClose,d=e.onClick,p=e.type,m=e.hideProgressBar,h=e.closeToast,v=e.transition,y=e.position,b=e.className,E=e.style,x=e.bodyClassName,w=e.bodyStyle,T=e.progressClassName,Z=e.progressStyle,C=e.updateId,O=e.role,j=e.progress,L=e.rtl,N=e.toastId,z=e.deleteToast,R=e.isIn,A=e.isLoading,S=e.iconOut,P=e.closeOnClick,M=e.theme,B=f("Toastify__toast","Toastify__toast-theme--".concat(M),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":P}),D=g(b)?b({rtl:L,position:y,type:p,defaultClassName:B}):f(B,b),F=!!j||!l,q={closeToast:h,type:p,theme:M},H=null;return!1===c||(H=g(c)?c(q):(0,r.isValidElement)(c)?(0,r.cloneElement)(c,q):I(q)),r.createElement(v,{isIn:R,done:z,position:y,preventExitTransition:o,nodeRef:a},r.createElement("div",(0,s.Z)((0,s.Z)({id:N,onClick:d,className:D},i),{},{style:E,ref:a}),r.createElement("div",(0,s.Z)((0,s.Z)({},R&&{role:O}),{},{className:g(x)?x({type:p}):f("Toastify__toast-body",x),style:w}),null!=S&&r.createElement("div",{className:f("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!A})},S),r.createElement("div",null,u)),H,r.createElement(_,(0,s.Z)((0,s.Z)({},C&&!F?{key:"pb-".concat(C)}:{}),{},{rtl:L,theme:M,delay:l,isRunning:t,isIn:R,closeToast:h,hide:m,type:p,style:Z,className:T,controlledProgress:F,progress:j||0}))))},L=function(e,n){return void 0===n&&(n=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:n}},N=b(L("bounce",!0)),z=(b(L("slide",!0)),b(L("zoom")),b(L("flip")),(0,r.forwardRef)((function(e,n){var t=Z(e),o=t.getToastToRender,a=t.containerRef,i=t.isToastActive,c=e.className,u=e.style,l=e.rtl,d=e.containerId;function p(e){var n=f("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":l});return g(c)?c({position:e,rtl:l,defaultClassName:n}):f(n,v(c))}return(0,r.useEffect)((function(){n&&(n.current=a.current)}),[]),r.createElement("div",{ref:a,className:"Toastify",id:d},o((function(e,n){var t=n.length?(0,s.Z)({},u):(0,s.Z)((0,s.Z)({},u),{},{pointerEvents:"none"});return r.createElement("div",{className:p(e),style:t,key:"container-".concat(e)},n.map((function(e,t){var o=e.content,a=e.props;return r.createElement(j,(0,s.Z)((0,s.Z)({},a),{},{isIn:i(a.toastId),style:(0,s.Z)((0,s.Z)({},a.style),{},{"--nth":t+1,"--len":n.length}),key:"toast-".concat(a.key)}),o)})))})))})));z.displayName="ToastContainer",z.defaultProps={position:"top-right",transition:N,autoClose:5e3,closeButton:I,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var R,A=new Map,S=[],P=1;function M(){return""+P++}function B(e){return e&&(h(e.toastId)||m(e.toastId))?e.toastId:M()}function D(e,n){return A.size>0?x.emit(0,e,n):S.push({content:e,options:n}),n.toastId}function F(e,n){return(0,s.Z)((0,s.Z)({},n),{},{type:n&&n.type||e,toastId:B(n)})}function q(e){return function(n,t){return D(n,F(e,t))}}function H(e,n){return D(e,F("default",n))}H.loading=function(e,n){return D(e,F("default",(0,s.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},n)))},H.promise=function(e,n,t){var r,o=n.pending,a=n.error,i=n.success;o&&(r=h(o)?H.loading(o,t):H.loading(o.render,(0,s.Z)((0,s.Z)({},t),o)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(e,n,o){if(null!=n){var a=(0,s.Z)((0,s.Z)((0,s.Z)({type:e},c),t),{},{data:o}),i=h(n)?{render:n}:n;return r?H.update(r,(0,s.Z)((0,s.Z)({},a),i)):H(i.render,(0,s.Z)((0,s.Z)({},a),i)),o}H.dismiss(r)},l=g(e)?e():e;return l.then((function(e){return u("success",i,e)})).catch((function(e){return u("error",a,e)})),l},H.success=q("success"),H.info=q("info"),H.error=q("error"),H.warning=q("warning"),H.warn=H.warning,H.dark=function(e,n){return D(e,F("default",(0,s.Z)({theme:"dark"},n)))},H.dismiss=function(e){A.size>0?x.emit(1,e):S=S.filter((function(n){return null!=e&&n.options.toastId!==e}))},H.clearWaitingQueue=function(e){return void 0===e&&(e={}),x.emit(5,e)},H.isActive=function(e){var n=!1;return A.forEach((function(t){t.isToastActive&&t.isToastActive(e)&&(n=!0)})),n},H.update=function(e,n){void 0===n&&(n={}),setTimeout((function(){var t=function(e,n){var t=n.containerId,r=A.get(t||R);return r&&r.getToast(e)}(e,n);if(t){var r=t.props,o=t.content,a=(0,s.Z)((0,s.Z)((0,s.Z)({delay:100},r),n),{},{toastId:n.toastId||e,updateId:M()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,D(i,a)}}),0)},H.done=function(e){H.update(e,{progress:1})},H.onChange=function(e){return x.on(4,e),function(){x.off(4,e)}},H.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},H.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},x.on(2,(function(e){R=e.containerId||e,A.set(R,e),S.forEach((function(e){x.emit(0,e.content,e.options)})),S=[]})).on(3,(function(e){A.delete(e.containerId||e),0===A.size&&x.off(0).off(1).off(5)}));var Q,V,U,G,K=t(168),W=t(225),X=W.Z.div(Q||(Q=(0,K.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: ",";\n\n  width: ",";\n  margin-left: auto;\n  margin-right: auto;\n  padding: ",";\n"])),(function(e){return e.theme.spacing(7.5)}),(function(e){return e.theme.spacing(250)}),(function(e){return e.theme.spacing(7.5)})),Y=W.Z.div(V||(V=(0,K.Z)(["\n  text-align: center;\n  font-size: ",";\n"])),(function(e){return e.theme.fontSizes.medium})),$=W.Z.div(U||(U=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  width: 80%;\n\n  padding: ",";\n  margin-left: auto;\n  margin-right: auto;\n\n  box-shadow: ",";\n  border-radius: ",";\n  background: ",";\n"])),(function(e){return e.theme.spacing(5)}),(function(e){return e.theme.shadows.regular}),(function(e){return e.theme.spacing(4)}),(function(e){return e.theme.colors.white})),J=W.Z.h2(G||(G=(0,K.Z)(["\n  font-size: ",";\n  font-weight: bold;\n\n  margin-bottom: ",";\n"])),(function(e){return e.theme.fontSizes.large}),(function(e){return e.theme.spacing(10)})),ee=t(3329);function ne(e){var n=e.title,t=e.children;return(0,ee.jsxs)($,{children:[n&&(0,ee.jsx)(J,{children:n}),t]})}var te=t(5861),re=t(4687),oe=t.n(re),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")},ie={position:"top-left",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"},se=t(3634),ce="NOT_FOUND";var ue=function(e,n){return e===n};function le(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,o=void 0===r?ue:r,a=t.maxSize,i=void 0===a?1:a,s=t.resultEqualityCheck,c=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}}(o),u=1===i?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:ce},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(c):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return ce}return{get:r,put:function(n,o){r(n)===ce&&(t.unshift({key:n,value:o}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,c);function l(){var n=u.get(arguments);if(n===ce){if(n=e.apply(null,arguments),s){var t=u.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}u.put(arguments,n)}return n}return l.clearCache=function(){return u.clear()},l}function fe(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function de(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var a,i=0,s={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(s=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var u=s,l=u.memoizeOptions,f=void 0===l?t:l,d=Array.isArray(f)?f:[f],p=fe(r),m=e.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(d)),h=e((function(){for(var e=[],n=p.length,t=0;t<n;t++)e.push(p[t].apply(null,arguments));return a=m.apply(null,e)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:m,dependencies:p,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return o}var pe,me,he,ge,ve,ye=de(le),be=function(e){return e.filter},Ee=function(e){return e.contacts.items},xe=function(e){return e.contacts.isLoading},we=function(e){return e.contacts.error},Te=ye([Ee,be],(function(e,n){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().trim().includes(t)}))})),Ze=W.Z.form(pe||(pe=(0,K.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  gap: ",";\n\n  width: ",";\n"])),(function(e){return e.theme.spacing(5)}),(function(e){return e.theme.spacing(50)})),Ce=W.Z.div(me||(me=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),Oe=W.Z.label(he||(he=(0,K.Z)(["\n  display: block;\n  color: ",";\n  font-size: ",";\n  line-height: ",";\n  font-weight: 500;\n  margin-bottom: ",";\n  margin-left: ",";\n"])),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.fontSizes.small}),(function(e){return e.theme.spacing(4.5)}),(function(e){return e.theme.spacing(1.25)}),(function(e){return e.theme.spacing(1.25)})),ke=W.Z.input(ge||(ge=(0,K.Z)(["\n  display: block;\n  padding: "," ",";\n  color: ",";\n  border-radius: ",";\n  border: "," solid ",";\n  box-shadow: ",";\n"])),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(1.25)}),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(.25)}),(function(e){return e.theme.colors.gray}),(function(e){return e.theme.shadows.small})),Ie=W.Z.button(ve||(ve=(0,K.Z)(["\n  display: flex;\n  padding: "," ",";\n  background: ",";\n  color: ",";\n  font-size: ",";\n\n  line-height: ",";\n  font-weight: 600;\n  justify-content: center;\n  width: ",";\n  border-radius: ",";\n  box-shadow: ",";\n  cursor: pointer;\n  border: "," solid ",";\n  margin-top: ",";\n\n  :hover {\n    background: ",";\n  }\n"])),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(2.5)}),(function(e){return e.theme.colors.tagBackground}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.fontSizes.small}),(function(e){return e.theme.spacing(4.5)}),(function(e){return e.theme.spacing(27.5)}),(function(e){return e.theme.spacing(1.25)}),(function(e){return e.theme.shadows.small}),(function(e){return e.theme.spacing(.25)}),(function(e){return e.theme.colors.accent}),(function(e){return e.theme.spacing(2.5)}),(function(e){return e.theme.colors.accent}));function _e(){var e=(0,r.useState)(ae()),n=(0,i.Z)(e,1)[0],t=(0,r.useState)(ae()),a=(0,i.Z)(t,1)[0],s=(0,r.useState)(""),c=(0,i.Z)(s,2),u=c[0],l=c[1],f=(0,r.useState)(""),d=(0,i.Z)(f,2),p=d[0],m=d[1],h=(0,o.v9)(Te),g=(0,o.I0)(),v=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":l(r);break;case"number":m(r)}},y=function(){var e=(0,te.Z)(oe().mark((function e(n){var t;return oe().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h.find((function(e){return e.name===n.name}))){e.next=3;break}return e.abrupt("return",H.error('Contact with name "'.concat(n.name,'" already exists!'),ie));case 3:return e.prev=3,e.next=6,g((0,se.uK)(n)).unwrap();case 6:t=e.sent,H.success("Contact with name ".concat(t.name," is added to the contact list!"),ie),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("Error adding contact:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(n){return e.apply(this,arguments)}}(),b=function(){l(""),m("")};return(0,ee.jsxs)(Ze,{onSubmit:function(e){e.preventDefault();var n={id:ae(),name:u,number:p};y(n),b()},children:[(0,ee.jsxs)(Ce,{children:[(0,ee.jsx)(Oe,{htmlFor:n,children:"Name"}),(0,ee.jsx)(ke,{type:"text",name:"name",placeholder:"Enter a name",pattern:"^[^\\d]+$",title:"The name must contain only letters, apostrophes, hyphens and indents",required:!0,id:n,value:u,onChange:v})]}),(0,ee.jsxs)(Ce,{children:[(0,ee.jsx)(Oe,{htmlFor:a,children:"Number"}),(0,ee.jsx)(ke,{type:"tel",name:"number",placeholder:"Enter a phone number",pattern:"\\+\\d{12}",minlength:"13",maxlength:"13",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:a,value:p,onChange:v})]}),(0,ee.jsx)(Ie,{type:"submit",children:"Add contact"})]})}var je,Le,Ne,ze,Re,Ae={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Se=r.createContext&&r.createContext(Ae),Pe=function(){return Pe=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},Pe.apply(this,arguments)},Me=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};function Be(e){return e&&e.map((function(e,n){return r.createElement(e.tag,Pe({key:n},e.attr),Be(e.child))}))}function De(e){return function(n){return r.createElement(Fe,Pe({attr:Pe({},e.attr)},n),Be(e.child))}}function Fe(e){var n=function(n){var t,o=e.attr,a=e.size,i=e.title,s=Me(e,["attr","size","title"]),c=a||n.size||"1em";return n.className&&(t=n.className),e.className&&(t=(t?t+" ":"")+e.className),r.createElement("svg",Pe({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,s,{className:t,style:Pe(Pe({color:e.color||n.color},n.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==Se?r.createElement(Se.Consumer,null,(function(e){return n(e)})):n(Ae)}function qe(e){return De({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"}},{tag:"path",attr:{d:"M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}}]})(e)}var He,Qe,Ve,Ue=W.Z.ul(je||(je=(0,K.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  gap: ",";\n"])),(function(e){return e.theme.spacing(2.5)})),Ge=W.Z.li(Le||(Le=(0,K.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: ",";\n  align-items: center;\n  padding: ",";\n\n  border-radius: ",";\n  border: "," solid ",";\n  box-shadow: ",";\n  transition-property: transform, box-shadow;\n  transition-duration: 0.15s;\n\n  background-color: ",";\n\n  &:hover {\n    transform: scale(1.02);\n    box-shadow: ",";\n  }\n"])),(function(e){return e.theme.spacing(75)}),(function(e){return e.theme.spacing(2.5)}),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(.25)}),(function(e){return e.theme.colors.gray}),(function(e){return e.theme.shadows.small}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.shadows.small})),Ke=W.Z.p(Ne||(Ne=(0,K.Z)(["\n  font-size: ",";\n  line-height: ",";\n  margin: 0;\n"])),(function(e){return e.theme.fontSizes.small}),(function(e){return e.theme.spacing(4.5)})),We=W.Z.button(ze||(ze=(0,K.Z)(["\n  display: flex;\n  padding: "," ",";\n  background: ",";\n  color: ",";\n  justify-content: center;\n  border-radius: ",";\n  box-shadow: ",";\n  cursor: pointer;\n  margin-left: auto;\n\n  & svg {\n    width: 18px;\n    height: 18px;\n    pointer-events: none;\n  }\n\n  :hover {\n    background: ",";\n  }\n"])),(function(e){return e.theme.spacing(1.25)}),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.colors.tagBackground}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.spacing(1.25)}),(function(e){return e.theme.shadows.small}),(function(e){return e.theme.colors.accent})),Xe=W.Z.div(Re||(Re=(0,K.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: 25%;\n"])));function Ye(){var e=(0,o.v9)(Te),n=(0,o.I0)(),t=function(){var e=(0,te.Z)(oe().mark((function e(t){var r;return oe().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n((0,se.GK)(t)).unwrap();case 3:r=e.sent,H.info("Contact with name ".concat(r.name," has been deleted!"),ie),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error deleting contact:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}();return(0,ee.jsx)(Ue,{children:e.map((function(e){var n=e.id,r=e.name,o=e.number;e.isFavorite;return(0,ee.jsxs)(Ge,{children:[(0,ee.jsxs)(Ke,{children:[r,": ",o]}),(0,ee.jsx)(Xe,{children:(0,ee.jsx)(We,{onClick:function(){return t(n,r)},children:(0,ee.jsx)(qe,{})})})]},n)}))})}var $e=W.Z.div(He||(He=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  width: ",";\n  margin-bottom: ",";\n"])),(function(e){return e.theme.spacing(50)}),(function(e){return e.theme.spacing(2.5)})),Je=W.Z.p(Qe||(Qe=(0,K.Z)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: 500;\n  margin-bottom: ",";\n  margin-left: ",";\n"])),(function(e){return e.theme.fontSizes.small}),(function(e){return e.theme.spacing(4.5)}),(function(e){return e.theme.spacing(1.25)}),(function(e){return e.theme.spacing(1.25)})),en=W.Z.input(Ve||(Ve=(0,K.Z)(["\n  display: block;\n  padding: "," ",";\n  color: ",";\n  border-radius: ",";\n  border: "," solid ",";\n  box-shadow: ",";\n"])),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(1.25)}),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(.25)}),(function(e){return e.theme.colors.gray}),(function(e){return e.theme.shadows.small})),nn=t(1273);function tn(e){var n=e.title,t=(0,o.I0)(),r=(0,o.v9)(be);return(0,ee.jsxs)($e,{children:[(0,ee.jsx)(Je,{children:n}),(0,ee.jsx)(en,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:r,onChange:function(e){t((0,nn.T)(e.target.value.toLowerCase()))}})]})}function rn(){var e=(0,o.I0)(),n=(0,o.v9)(Ee),t=(0,o.v9)(xe),a=(0,o.v9)(we);return(0,r.useEffect)((function(){e((0,se.yF)())}),[e]),(0,ee.jsxs)(X,{children:[(0,ee.jsx)(ne,{title:"Phonebook",children:(0,ee.jsx)(_e,{})}),(0,ee.jsx)(z,{}),(0,ee.jsxs)(ne,{title:"Contacts",children:[n.length>0?(0,ee.jsx)(tn,{title:"Find contact by name"}):(0,ee.jsx)(Y,{children:"Add contact!"}),t&&!a&&(0,ee.jsx)("b",{children:"Request in progress..."}),n.length>0&&(0,ee.jsx)(Ye,{})]}),(0,ee.jsx)(z,{})]})}}}]);
//# sourceMappingURL=640.0ec877ce.chunk.js.map