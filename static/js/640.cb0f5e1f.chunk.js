"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[640],{4640:function(n,e,t){t.r(e),t.d(e,{default:function(){return se}});var r=t(2791),o=t(9434),i=t(4942),a=t(9439),s=t(1413);function c(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var u=t(3433);function l(n){var e,t,r="";if("string"==typeof n||"number"==typeof n)r+=n;else if("object"==typeof n)if(Array.isArray(n))for(e=0;e<n.length;e++)n[e]&&(t=l(n[e]))&&(r&&(r+=" "),r+=t);else for(e in n)n[e]&&(r&&(r+=" "),r+=e);return r}var f=function(){for(var n,e,t=0,r="";t<arguments.length;)(n=arguments[t++])&&(e=l(n))&&(r&&(r+=" "),r+=e);return r},d=["theme","type"],p=["delay","staleId"],m=function(n){return"number"==typeof n&&!isNaN(n)},h=function(n){return"string"==typeof n},g=function(n){return"function"==typeof n},v=function(n){return h(n)||g(n)?n:null},y=function(n){return(0,r.isValidElement)(n)||h(n)||g(n)||m(n)};function b(n){var e=n.enter,t=n.exit,o=n.appendPosition,i=void 0!==o&&o,a=n.collapse,s=void 0===a||a,c=n.collapseDuration,l=void 0===c?300:c;return function(n){var o=n.children,a=n.position,c=n.preventExitTransition,f=n.done,d=n.nodeRef,p=n.isIn,m=i?"".concat(e,"--").concat(a):e,h=i?"".concat(t,"--").concat(a):t,g=(0,r.useRef)(0);return(0,r.useLayoutEffect)((function(){var n,e=d.current,t=m.split(" "),r=function n(r){var o;r.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==r.type&&(o=e.classList).remove.apply(o,(0,u.Z)(t)))};(n=e.classList).add.apply(n,(0,u.Z)(t)),e.addEventListener("animationend",r),e.addEventListener("animationcancel",r)}),[]),(0,r.useEffect)((function(){var n=d.current,e=function e(){n.removeEventListener("animationend",e),s?function(n,e,t){void 0===t&&(t=300);var r=n.scrollHeight,o=n.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(t,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(e,t)}))}))}(n,f,l):f()};p||(c?e():(g.current=1,n.className+=" ".concat(h),n.addEventListener("animationend",e)))}),[p]),r.createElement(r.Fragment,null,o)}}function E(n,e){return null!=n?{content:n.content,containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,status:e}:{}}var x={list:new Map,emitQueue:new Map,on:function(n,e){return this.list.has(n)||this.list.set(n,[]),this.list.get(n).push(e),this},off:function(n,e){if(e){var t=this.list.get(n).filter((function(n){return n!==e}));return this.list.set(n,t),this}return this.list.delete(n),this},cancelEmit:function(n){var e=this.emitQueue.get(n);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(n)),this},emit:function(n){var e=arguments,t=this;this.list.has(n)&&this.list.get(n).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,u.Z)([].slice.call(e,1)))}),0);t.emitQueue.has(n)||t.emitQueue.set(n,[]),t.emitQueue.get(n).push(o)}))}},w=function(n){var e=n.theme,t=n.type,o=c(n,d);return r.createElement("svg",(0,s.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(t,")")},o))},T={info:function(n){return r.createElement(w,(0,s.Z)({},n),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(n){return r.createElement(w,(0,s.Z)({},n),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(n){return r.createElement(w,(0,s.Z)({},n),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(n){return r.createElement(w,(0,s.Z)({},n),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function Z(n){var e=(0,r.useReducer)((function(n){return n+1}),0),t=(0,a.Z)(e,2)[1],o=(0,r.useState)([]),i=(0,a.Z)(o,2),l=i[0],f=i[1],d=(0,r.useRef)(null),b=(0,r.useRef)(new Map).current,w=function(n){return-1!==l.indexOf(n)},Z=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:n,containerId:null,isToastActive:w,getToast:function(n){return b.get(n)}}).current;function C(n){var e=n.containerId;!Z.props.limit||e&&Z.containerId!==e||(Z.count-=Z.queue.length,Z.queue=[])}function O(n){f((function(e){return null==n?[]:e.filter((function(e){return e!==n}))}))}function k(){var n=Z.queue.shift();_(n.toastContent,n.toastProps,n.staleId)}function I(n,e){var o=e.delay,i=e.staleId,u=c(e,p);if(y(n)&&!function(n){return!d.current||Z.props.enableMultiContainer&&n.containerId!==Z.props.containerId||b.has(n.toastId)&&null==n.updateId}(u)){var l=u.toastId,f=u.updateId,w=u.data,C=Z.props,I=function(){return O(l)},j=null==f;j&&Z.count++;var L,N,z=(0,s.Z)((0,s.Z)((0,s.Z)({},C),{},{style:C.toastStyle,key:Z.toastKey++},Object.fromEntries(Object.entries(u).filter((function(n){var e=(0,a.Z)(n,2);e[0];return null!=e[1]})))),{},{toastId:l,updateId:f,data:w,closeToast:I,isIn:!1,className:v(u.className||C.toastClassName),bodyClassName:v(u.bodyClassName||C.bodyClassName),progressClassName:v(u.progressClassName||C.progressClassName),autoClose:!u.isLoading&&(L=u.autoClose,N=C.autoClose,!1===L||m(L)&&L>0?L:N),deleteToast:function(){var n=E(b.get(l),"removed");b.delete(l),x.emit(4,n);var e=Z.queue.length;if(Z.count=null==l?Z.count-Z.displayedToast:Z.count-1,Z.count<0&&(Z.count=0),e>0){var r=null==l?Z.props.limit:1;if(1===e||1===r)Z.displayedToast++,k();else{var o=r>e?e:r;Z.displayedToast=o;for(var i=0;i<o;i++)k()}}else t()}});z.iconOut=function(n){var e=n.theme,t=n.type,o=n.isLoading,i=n.icon,a=null,s={theme:e,type:t};return!1===i||(g(i)?a=i(s):(0,r.isValidElement)(i)?a=(0,r.cloneElement)(i,s):h(i)||m(i)?a=i:o?a=T.spinner():function(n){return n in T}(t)&&(a=T[t](s))),a}(z),g(u.onOpen)&&(z.onOpen=u.onOpen),g(u.onClose)&&(z.onClose=u.onClose),z.closeButton=C.closeButton,!1===u.closeButton||y(u.closeButton)?z.closeButton=u.closeButton:!0===u.closeButton&&(z.closeButton=!y(C.closeButton)||C.closeButton);var R=n;(0,r.isValidElement)(n)&&!h(n.type)?R=(0,r.cloneElement)(n,{closeToast:I,toastProps:z,data:w}):g(n)&&(R=n({closeToast:I,toastProps:z,data:w})),C.limit&&C.limit>0&&Z.count>C.limit&&j?Z.queue.push({toastContent:R,toastProps:z,staleId:i}):m(o)?setTimeout((function(){_(R,z,i)}),o):_(R,z,i)}}function _(n,e,t){var r=e.toastId;t&&b.delete(t);var o={content:n,props:e};b.set(r,o),f((function(n){return[].concat((0,u.Z)(n),[r]).filter((function(n){return n!==t}))})),x.emit(4,E(o,null==o.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return Z.containerId=n.containerId,x.cancelEmit(3).on(0,I).on(1,(function(n){return d.current&&O(n)})).on(5,C).emit(2,Z),function(){b.clear(),x.emit(3,Z)}}),[]),(0,r.useEffect)((function(){Z.props=n,Z.isToastActive=w,Z.displayedToast=l.length})),{getToastToRender:function(e){var t=new Map,r=Array.from(b.values());return n.newestOnTop&&r.reverse(),r.forEach((function(n){var e=n.props.position;t.has(e)||t.set(e,[]),t.get(e).push(n)})),Array.from(t,(function(n){return e(n[0],n[1])}))},containerRef:d,isToastActive:w}}function C(n){return n.targetTouches&&n.targetTouches.length>=1?n.targetTouches[0].clientX:n.clientX}function O(n){return n.targetTouches&&n.targetTouches.length>=1?n.targetTouches[0].clientY:n.clientY}function k(n){var e=(0,r.useState)(!1),t=(0,a.Z)(e,2),o=t[0],i=t[1],s=(0,r.useState)(!1),c=(0,a.Z)(s,2),u=c[0],l=c[1],f=(0,r.useRef)(null),d=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,r.useRef)(n),m=n.autoClose,h=n.pauseOnHover,v=n.closeToast,y=n.onClick,b=n.closeOnClick;function E(e){if(n.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",Z),document.addEventListener("mouseup",k),document.addEventListener("touchmove",Z),document.addEventListener("touchend",k);var t=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=t.getBoundingClientRect(),t.style.transition="",d.x=C(e.nativeEvent),d.y=O(e.nativeEvent),"x"===n.draggableDirection?(d.start=d.x,d.removalDistance=t.offsetWidth*(n.draggablePercent/100)):(d.start=d.y,d.removalDistance=t.offsetHeight*(80===n.draggablePercent?1.5*n.draggablePercent:n.draggablePercent/100))}}function x(e){if(d.boundingRect){var t=d.boundingRect,r=t.top,o=t.bottom,i=t.left,a=t.right;"touchend"!==e.nativeEvent.type&&n.pauseOnHover&&d.x>=i&&d.x<=a&&d.y>=r&&d.y<=o?T():w()}}function w(){i(!0)}function T(){i(!1)}function Z(e){var t=f.current;d.canDrag&&t&&(d.didMove=!0,o&&T(),d.x=C(e),d.y=O(e),d.delta="x"===n.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),t.style.transform="translate".concat(n.draggableDirection,"(").concat(d.delta,"px)"),t.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function k(){document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",k),document.removeEventListener("touchmove",Z),document.removeEventListener("touchend",k);var e=f.current;if(d.canDrag&&d.didMove&&e){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void n.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(n.draggableDirection,"(0)"),e.style.opacity="1"}}(0,r.useEffect)((function(){p.current=n})),(0,r.useEffect)((function(){return f.current&&f.current.addEventListener("d",w,{once:!0}),g(n.onOpen)&&n.onOpen((0,r.isValidElement)(n.children)&&n.children.props),function(){var n=p.current;g(n.onClose)&&n.onClose((0,r.isValidElement)(n.children)&&n.children.props)}}),[]),(0,r.useEffect)((function(){return n.pauseOnFocusLoss&&(document.hasFocus()||T(),window.addEventListener("focus",w),window.addEventListener("blur",T)),function(){n.pauseOnFocusLoss&&(window.removeEventListener("focus",w),window.removeEventListener("blur",T))}}),[n.pauseOnFocusLoss]);var I={onMouseDown:E,onTouchStart:E,onMouseUp:x,onTouchEnd:x};return m&&h&&(I.onMouseEnter=T,I.onMouseLeave=w),b&&(I.onClick=function(n){y&&y(n),d.canCloseOnClick&&v()}),{playToast:w,pauseToast:T,isRunning:o,preventExitTransition:u,toastRef:f,eventHandlers:I}}function I(n){var e=n.closeToast,t=n.theme,o=n.ariaLabel,i=void 0===o?"close":o;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(t),type:"button",onClick:function(n){n.stopPropagation(),e(n)},"aria-label":i},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function _(n){var e=n.delay,t=n.isRunning,o=n.closeToast,a=n.type,c=void 0===a?"default":a,u=n.hide,l=n.className,d=n.style,p=n.controlledProgress,m=n.progress,h=n.rtl,v=n.isIn,y=n.theme,b=u||p&&0===m,E=(0,s.Z)((0,s.Z)({},d),{},{animationDuration:"".concat(e,"ms"),animationPlayState:t?"running":"paused",opacity:b?0:1});p&&(E.transform="scaleX(".concat(m,")"));var x=f("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(c),{"Toastify__progress-bar--rtl":h}),w=g(l)?l({rtl:h,type:c,defaultClassName:x}):f(x,l);return r.createElement("div",(0,i.Z)({role:"progressbar","aria-hidden":b?"true":"false","aria-label":"notification timer",className:w,style:E},p&&m>=1?"onTransitionEnd":"onAnimationEnd",p&&m<1?null:function(){v&&o()}))}var j=function(n){var e=k(n),t=e.isRunning,o=e.preventExitTransition,i=e.toastRef,a=e.eventHandlers,c=n.closeButton,u=n.children,l=n.autoClose,d=n.onClick,p=n.type,m=n.hideProgressBar,h=n.closeToast,v=n.transition,y=n.position,b=n.className,E=n.style,x=n.bodyClassName,w=n.bodyStyle,T=n.progressClassName,Z=n.progressStyle,C=n.updateId,O=n.role,j=n.progress,L=n.rtl,N=n.toastId,z=n.deleteToast,R=n.isIn,A=n.isLoading,S=n.iconOut,P=n.closeOnClick,M=n.theme,B=f("Toastify__toast","Toastify__toast-theme--".concat(M),"Toastify__toast--".concat(p),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":P}),F=g(b)?b({rtl:L,position:y,type:p,defaultClassName:B}):f(B,b),D=!!j||!l,q={closeToast:h,type:p,theme:M},H=null;return!1===c||(H=g(c)?c(q):(0,r.isValidElement)(c)?(0,r.cloneElement)(c,q):I(q)),r.createElement(v,{isIn:R,done:z,position:y,preventExitTransition:o,nodeRef:i},r.createElement("div",(0,s.Z)((0,s.Z)({id:N,onClick:d,className:F},a),{},{style:E,ref:i}),r.createElement("div",(0,s.Z)((0,s.Z)({},R&&{role:O}),{},{className:g(x)?x({type:p}):f("Toastify__toast-body",x),style:w}),null!=S&&r.createElement("div",{className:f("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!A})},S),r.createElement("div",null,u)),H,r.createElement(_,(0,s.Z)((0,s.Z)({},C&&!D?{key:"pb-".concat(C)}:{}),{},{rtl:L,theme:M,delay:l,isRunning:t,isIn:R,closeToast:h,hide:m,type:p,style:Z,className:T,controlledProgress:D,progress:j||0}))))},L=function(n,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(n,"-enter"),exit:"Toastify--animate Toastify__".concat(n,"-exit"),appendPosition:e}},N=b(L("bounce",!0)),z=(b(L("slide",!0)),b(L("zoom")),b(L("flip")),(0,r.forwardRef)((function(n,e){var t=Z(n),o=t.getToastToRender,i=t.containerRef,a=t.isToastActive,c=n.className,u=n.style,l=n.rtl,d=n.containerId;function p(n){var e=f("Toastify__toast-container","Toastify__toast-container--".concat(n),{"Toastify__toast-container--rtl":l});return g(c)?c({position:n,rtl:l,defaultClassName:e}):f(e,v(c))}return(0,r.useEffect)((function(){e&&(e.current=i.current)}),[]),r.createElement("div",{ref:i,className:"Toastify",id:d},o((function(n,e){var t=e.length?(0,s.Z)({},u):(0,s.Z)((0,s.Z)({},u),{},{pointerEvents:"none"});return r.createElement("div",{className:p(n),style:t,key:"container-".concat(n)},e.map((function(n,t){var o=n.content,i=n.props;return r.createElement(j,(0,s.Z)((0,s.Z)({},i),{},{isIn:a(i.toastId),style:(0,s.Z)((0,s.Z)({},i.style),{},{"--nth":t+1,"--len":e.length}),key:"toast-".concat(i.key)}),o)})))})))})));z.displayName="ToastContainer",z.defaultProps={position:"top-right",transition:N,autoClose:5e3,closeButton:I,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var R,A=new Map,S=[],P=1;function M(){return""+P++}function B(n){return n&&(h(n.toastId)||m(n.toastId))?n.toastId:M()}function F(n,e){return A.size>0?x.emit(0,n,e):S.push({content:n,options:e}),e.toastId}function D(n,e){return(0,s.Z)((0,s.Z)({},e),{},{type:e&&e.type||n,toastId:B(e)})}function q(n){return function(e,t){return F(e,D(n,t))}}function H(n,e){return F(n,D("default",e))}H.loading=function(n,e){return F(n,D("default",(0,s.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},H.promise=function(n,e,t){var r,o=e.pending,i=e.error,a=e.success;o&&(r=h(o)?H.loading(o,t):H.loading(o.render,(0,s.Z)((0,s.Z)({},t),o)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(n,e,o){if(null!=e){var i=(0,s.Z)((0,s.Z)((0,s.Z)({type:n},c),t),{},{data:o}),a=h(e)?{render:e}:e;return r?H.update(r,(0,s.Z)((0,s.Z)({},i),a)):H(a.render,(0,s.Z)((0,s.Z)({},i),a)),o}H.dismiss(r)},l=g(n)?n():n;return l.then((function(n){return u("success",a,n)})).catch((function(n){return u("error",i,n)})),l},H.success=q("success"),H.info=q("info"),H.error=q("error"),H.warning=q("warning"),H.warn=H.warning,H.dark=function(n,e){return F(n,D("default",(0,s.Z)({theme:"dark"},e)))},H.dismiss=function(n){A.size>0?x.emit(1,n):S=S.filter((function(e){return null!=n&&e.options.toastId!==n}))},H.clearWaitingQueue=function(n){return void 0===n&&(n={}),x.emit(5,n)},H.isActive=function(n){var e=!1;return A.forEach((function(t){t.isToastActive&&t.isToastActive(n)&&(e=!0)})),e},H.update=function(n,e){void 0===e&&(e={}),setTimeout((function(){var t=function(n,e){var t=e.containerId,r=A.get(t||R);return r&&r.getToast(n)}(n,e);if(t){var r=t.props,o=t.content,i=(0,s.Z)((0,s.Z)((0,s.Z)({delay:100},r),e),{},{toastId:e.toastId||n,updateId:M()});i.toastId!==n&&(i.staleId=n);var a=i.render||o;delete i.render,F(a,i)}}),0)},H.done=function(n){H.update(n,{progress:1})},H.onChange=function(n){return x.on(4,n),function(){x.off(4,n)}},H.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},H.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},x.on(2,(function(n){R=n.containerId||n,A.set(R,n),S.forEach((function(n){x.emit(0,n.content,n.options)})),S=[]})).on(3,(function(n){A.delete(n.containerId||n),0===A.size&&x.off(0).off(1).off(5)}));var Q,V,U,G,K=t(168),W=t(225),X=W.Z.div(Q||(Q=(0,K.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: ",";\n\n  width: ",";\n  margin-left: auto;\n  margin-right: auto;\n  padding: ",";\n"])),(function(n){return n.theme.spacing(7.5)}),(function(n){return n.theme.spacing(250)}),(function(n){return n.theme.spacing(7.5)})),Y=W.Z.div(V||(V=(0,K.Z)(["\n  text-align: center;\n  font-size: ",";\n"])),(function(n){return n.theme.fontSizes.medium})),$=W.Z.div(U||(U=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  width: 80%;\n\n  padding: ",";\n  margin-left: auto;\n  margin-right: auto;\n\n  box-shadow: ",";\n  border-radius: ",";\n  background: ",";\n"])),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.shadows.regular}),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.white})),J=W.Z.h2(G||(G=(0,K.Z)(["\n  font-size: ",";\n  font-weight: bold;\n\n  margin-bottom: ",";\n"])),(function(n){return n.theme.fontSizes.large}),(function(n){return n.theme.spacing(10)})),nn=t(3329);function en(n){var e=n.title,t=n.children;return(0,nn.jsxs)($,{children:[e&&(0,nn.jsx)(J,{children:e}),t]})}var tn=t(5861),rn=t(4687),on=t.n(rn),an=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},sn={position:"top-left",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"},cn=t(3634),un="NOT_FOUND";var ln=function(n,e){return n===e};function fn(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?ln:r,i=t.maxSize,a=void 0===i?1:i,s=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),u=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:un},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return un}return{get:r,put:function(e,o){r(e)===un&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,c);function l(){var e=u.get(arguments);if(e===un){if(e=n.apply(null,arguments),s){var t=u.getEntries(),r=t.find((function(n){return s(n.value,e)}));r&&(e=r.value)}u.put(arguments,e)}return e}return l.clearCache=function(){return u.clear()},l}function dn(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function pn(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,a=0,s={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(s=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var u=s,l=u.memoizeOptions,f=void 0===l?t:l,d=Array.isArray(f)?f:[f],p=dn(r),m=n.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(d)),h=n((function(){for(var n=[],e=p.length,t=0;t<e;t++)n.push(p[t].apply(null,arguments));return i=m.apply(null,n)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:m,dependencies:p,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),h};return o}var mn,hn,gn,vn,yn,bn=pn(fn),En=function(n){return n.filter},xn=function(n){return n.contacts.items},wn=function(n){return n.contacts.isLoading},Tn=function(n){return n.contacts.error},Zn=bn([xn,En],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().trim().includes(t)}))})),Cn=W.Z.form(mn||(mn=(0,K.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  gap: ",";\n\n  width: ",";\n"])),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.spacing(50)})),On=W.Z.div(hn||(hn=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),kn=W.Z.label(gn||(gn=(0,K.Z)(["\n  display: block;\n  color: ",";\n  font-size: ",";\n  line-height: ",";\n  font-weight: 500;\n  margin-bottom: ",";\n  margin-left: ",";\n"])),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.fontSizes.small}),(function(n){return n.theme.spacing(4.5)}),(function(n){return n.theme.spacing(1.25)}),(function(n){return n.theme.spacing(1.25)})),In=W.Z.input(vn||(vn=(0,K.Z)(["\n  display: block;\n  padding: "," ",";\n  color: ",";\n  border-radius: ",";\n  border: "," solid ",";\n  box-shadow: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(1.25)}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(.25)}),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.shadows.small})),_n=W.Z.button(yn||(yn=(0,K.Z)(["\n  display: flex;\n  padding: "," ",";\n  background: ",";\n  color: ",";\n  font-size: ",";\n\n  line-height: ",";\n  font-weight: 600;\n  justify-content: center;\n  width: ",";\n  border-radius: ",";\n  box-shadow: ",";\n  cursor: pointer;\n  border: "," solid ",";\n  margin-top: ",";\n\n  :hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(2.5)}),(function(n){return n.theme.colors.tagBackground}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.small}),(function(n){return n.theme.spacing(4.5)}),(function(n){return n.theme.spacing(27.5)}),(function(n){return n.theme.spacing(1.25)}),(function(n){return n.theme.shadows.small}),(function(n){return n.theme.spacing(.25)}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.spacing(2.5)}),(function(n){return n.theme.colors.accent}));function jn(){var n=(0,r.useState)(an()),e=(0,a.Z)(n,1)[0],t=(0,r.useState)(an()),i=(0,a.Z)(t,1)[0],s=(0,r.useState)(""),c=(0,a.Z)(s,2),u=c[0],l=c[1],f=(0,r.useState)(""),d=(0,a.Z)(f,2),p=d[0],m=d[1],h=(0,o.v9)(Zn),g=(0,o.I0)(),v=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":l(r);break;case"number":m(r)}},y=function(){var n=(0,tn.Z)(on().mark((function n(e){var t;return on().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!h.find((function(n){return n.name===e.name}))){n.next=3;break}return n.abrupt("return",H.error('Contact with name "'.concat(e.name,'" already exists!'),sn));case 3:return n.prev=3,n.next=6,g((0,cn.uK)(e)).unwrap();case 6:t=n.sent,H.success("Contact with name ".concat(t.name," is added to the contact list!"),sn),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),console.error("Error adding contact:",n.t0);case 13:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(e){return n.apply(this,arguments)}}(),b=function(){l(""),m("")};return(0,nn.jsxs)(Cn,{onSubmit:function(n){n.preventDefault();var e={id:an(),name:u,number:p};y(e),b()},children:[(0,nn.jsxs)(On,{children:[(0,nn.jsx)(kn,{htmlFor:e,children:"Name"}),(0,nn.jsx)(In,{type:"text",name:"name",placeholder:"Enter a name",pattern:"^[^\\d]+$",title:"The name must contain only letters, apostrophes, hyphens and indents",required:!0,id:e,value:u,onChange:v})]}),(0,nn.jsxs)(On,{children:[(0,nn.jsx)(kn,{htmlFor:i,children:"Number"}),(0,nn.jsx)(In,{type:"tel",name:"number",placeholder:"Enter a phone number",pattern:"\\+\\d{12}",minlength:"13",maxlength:"13",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:i,value:p,onChange:v})]}),(0,nn.jsx)(_n,{type:"submit",children:"Add contact"})]})}var Ln,Nn,zn,Rn,An,Sn,Pn={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Mn=r.createContext&&r.createContext(Pn),Bn=function(){return Bn=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},Bn.apply(this,arguments)},Fn=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t};function Dn(n){return n&&n.map((function(n,e){return r.createElement(n.tag,Bn({key:e},n.attr),Dn(n.child))}))}function qn(n){return function(e){return r.createElement(Hn,Bn({attr:Bn({},n.attr)},e),Dn(n.child))}}function Hn(n){var e=function(e){var t,o=n.attr,i=n.size,a=n.title,s=Fn(n,["attr","size","title"]),c=i||e.size||"1em";return e.className&&(t=e.className),n.className&&(t=(t?t+" ":"")+n.className),r.createElement("svg",Bn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,s,{className:t,style:Bn(Bn({color:n.color||e.color},e.style),n.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),n.children)};return void 0!==Mn?r.createElement(Mn.Consumer,null,(function(n){return e(n)})):e(Pn)}function Qn(n){return qn({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"}},{tag:"path",attr:{d:"M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}}]})(n)}function Vn(n){return qn({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"}}]})(n)}var Un,Gn,Kn,Wn=W.Z.ul(Ln||(Ln=(0,K.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  gap: ",";\n"])),(function(n){return n.theme.spacing(2.5)})),Xn=W.Z.li(Nn||(Nn=(0,K.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: ",";\n  align-items: center;\n  padding: ",";\n\n  border-radius: ",";\n  border: "," solid ",";\n  box-shadow: ",";\n  transition-property: transform, box-shadow;\n  transition-duration: 0.15s;\n\n  background-color: ",";\n\n  &:hover {\n    transform: scale(1.02);\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.spacing(75)}),(function(n){return n.theme.spacing(2.5)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(.25)}),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.shadows.small}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.shadows.small})),Yn=W.Z.p(zn||(zn=(0,K.Z)(["\n  font-size: ",";\n  line-height: ",";\n  margin: 0;\n"])),(function(n){return n.theme.fontSizes.small}),(function(n){return n.theme.spacing(4.5)})),$n=W.Z.button(Rn||(Rn=(0,K.Z)(["\n  display: flex;\n  padding: "," ",";\n  background: ",";\n  color: ",";\n  justify-content: center;\n  border-radius: ",";\n  box-shadow: ",";\n  cursor: pointer;\n\n  & svg {\n    width: 18px;\n    height: 18px;\n    pointer-events: none;\n  }\n\n  :hover {\n    background: ",";\n  }\n"])),(function(n){return n.theme.spacing(1.25)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.tagBackground}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.spacing(1.25)}),(function(n){return n.theme.shadows.small}),(function(n){return n.theme.colors.accent})),Jn=W.Z.div(An||(An=(0,K.Z)(["\n  position: relative;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n\n  & svg {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    fill: ",";\n    stroke: ",";\n    stroke-width: 1px;\n    pointer-events: none;\n  }\n"])),(function(n){return n.isFavorite?"#f58e03":"none"}),(function(n){return n.isFavorite?"none":"#4f46e5"})),ne=W.Z.div(Sn||(Sn=(0,K.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: 25%;\n"])));function ee(){var n=(0,o.v9)(Zn),e=(0,o.I0)(),t=function(){var n=(0,tn.Z)(on().mark((function n(t){var r;return on().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e((0,cn.GK)(t)).unwrap();case 3:r=n.sent,H.info("Contact with name ".concat(r.name," has been deleted!"),sn),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Error deleting contact:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,nn.jsx)(Wn,{children:n.map((function(n){var e=n.id,r=n.name,o=n.number,i=n.isFavorite;return(0,nn.jsxs)(Xn,{children:[(0,nn.jsxs)(Yn,{children:[r,": ",o]}),(0,nn.jsxs)(ne,{children:[(0,nn.jsx)(Jn,{isFavorite:i,children:(0,nn.jsx)(Vn,{color:i?"yellow":"gray"})}),(0,nn.jsx)($n,{onClick:function(){return t(e,r)},children:(0,nn.jsx)(Qn,{})})]})]},e)}))})}var te=W.Z.div(Un||(Un=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  width: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(50)}),(function(n){return n.theme.spacing(2.5)})),re=W.Z.p(Gn||(Gn=(0,K.Z)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: 500;\n  margin-bottom: ",";\n  margin-left: ",";\n"])),(function(n){return n.theme.fontSizes.small}),(function(n){return n.theme.spacing(4.5)}),(function(n){return n.theme.spacing(1.25)}),(function(n){return n.theme.spacing(1.25)})),oe=W.Z.input(Kn||(Kn=(0,K.Z)(["\n  display: block;\n  padding: "," ",";\n  color: ",";\n  border-radius: ",";\n  border: "," solid ",";\n  box-shadow: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(1.25)}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(.25)}),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.shadows.small})),ie=t(1273);function ae(n){var e=n.title,t=(0,o.I0)(),r=(0,o.v9)(En);return(0,nn.jsxs)(te,{children:[(0,nn.jsx)(re,{children:e}),(0,nn.jsx)(oe,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:r,onChange:function(n){t((0,ie.T)(n.target.value.toLowerCase()))}})]})}function se(){var n=(0,o.I0)(),e=(0,o.v9)(xn),t=(0,o.v9)(wn),i=(0,o.v9)(Tn);return(0,r.useEffect)((function(){n((0,cn.yF)())}),[n]),(0,nn.jsxs)(X,{children:[(0,nn.jsx)(en,{title:"Phonebook",children:(0,nn.jsx)(jn,{})}),(0,nn.jsx)(z,{}),(0,nn.jsxs)(en,{title:"Contacts",children:[e.length>0?(0,nn.jsx)(ae,{title:"Find contact by name"}):(0,nn.jsx)(Y,{children:"Add contact!"}),t&&!i&&(0,nn.jsx)("b",{children:"Request in progress..."}),e.length>0&&(0,nn.jsx)(ee,{})]}),(0,nn.jsx)(z,{})]})}}}]);
//# sourceMappingURL=640.cb0f5e1f.chunk.js.map