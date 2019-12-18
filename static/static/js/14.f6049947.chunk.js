(this["webpackJsonpdata-science-platform"]=this["webpackJsonpdata-science-platform"]||[]).push([[14,25],{429:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(7),i=t(152),c=t(5),u=t(4),l=t(75),f=t(52),d=t(49);function m(){var n=Object(c.a)(["\n  margin-left: auto;\n"]);return m=function(){return n},n}function s(){var n=Object(c.a)(["\n  &:hover {\n    text-decoration: underline;\n  }\n\n  &:not(:first-child) {\n    margin-left: 6.2rem;\n  }\n"]);return s=function(){return n},n}function b(){var n=Object(c.a)(["\n  display: flex;\n  margin: auto 0 auto 6.2rem;\n"]);return b=function(){return n},n}function p(){var n=Object(c.a)(["\n  margin-top: 6.4rem;\n  display: flex;\n  color: ",";\n\n  @media (max-width: ",") {\n    margin-top: 2.4rem;\n  }\n"]);return p=function(){return n},n}var v=Object(u.d)(f.b)(p(),(function(n){return n.inverted?n.theme.copy.primaryInverted:n.theme.copy.primary}),o.a.H750),h=u.d.div(b()),O=Object(u.d)(l.b)(s()),j=u.d.div(m()),g=function(n){var e=n.inverted,t=n.navigationLinks,c=n.children,u=Object(r.useRef)(),l=Object(r.useContext)(i.a);if(u.current){var f=u.current.clientHeight;l.setValue(i.b.HeaderHeight,f)}return a.a.createElement(v,{inverted:e,ref:u},a.a.createElement(d.b,{showName:!t}),t&&a.a.createElement(h,null,t.map((function(n){return a.a.createElement(O,Object.assign({},n,{fontWeight:o.e.Bold,serif:!0}),n.children)}))),c&&a.a.createElement(j,null,c))};t.d(e,"default",(function(){return g}))},432:function(n,e,t){"use strict";var r;!function(n){n.Text="text",n.Number="tel",n.Search="search",n.Email="email",n.Phone="tel",n.Password="password"}(r||(r={})),e.a=r},434:function(n,e,t){"use strict";var r=t(0);e.a=function(n,e,t){return Object(r.useEffect)((function(){var r=n.current;if(null!=r)return r.addEventListener(e,t),function(){return r.removeEventListener(e,t)}}),[n,e,t])}},435:function(n,e,t){"use strict";var r=t(5),a=t(4),o=t(69),i=t(96),c=t(0),u=t.n(c),l=t(434),f=t(117);function d(){var n=Object(r.a)(["\n  position: absolute;\n  left: -1rem;\n  top: 50%;\n  padding: 1rem 1.5rem 1rem 4.5rem;\n  border-radius: 0.8rem;\n  white-space: nowrap;\n  background: ",";\n  box-shadow: ",";\n  animation: 0.4s "," forwards;\n"]);return d=function(){return n},n}function m(){var n=Object(r.a)(["\n  position: relative;\n  z-index: 1;\n"]);return m=function(){return n},n}function s(){var n=Object(r.a)(["\n  position: relative;\n  display: inline-block;\n  animation: 0.5s "," forwards;\n\n  svg {\n    display: block;\n  }\n"]);return s=function(){return n},n}function b(){var n=Object(r.a)(["\n  0% {\n    transform: translate(1rem, -50%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0rem, -50%);\n    opacity: 1;\n  }\n"]);return b=function(){return n},n}function p(){var n=Object(r.a)(["\n  0% {\n    transform: translateY(1rem);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0rem);\n    opacity: 1;\n  }\n"]);return p=function(){return n},n}var v=Object(a.e)(p()),h=Object(a.e)(b()),O=a.d.div(s(),v),j=a.d.div(m()),g=a.d.div(d(),(function(n){return n.theme.tooltip.backgroundColor}),(function(n){return n.theme.tooltip.shadow}),h);function E(){var n=Object(r.a)(["\n    cursor: pointer;\n    fill: ",";\n  "]);return E=function(){return n},n}var y=function(n){var e=n.children,t=n.className,r=n.error,d=n.icon,m=void 0===d?f.a.Info:d,s=Object(c.useRef)(null),b=Object(c.useState)(!1),p=Object(i.a)(b,2),v=p[0],h=p[1];Object(l.a)(s,"mouseenter",(function(){return h(!0)})),Object(l.a)(s,"mouseleave",(function(){return h(!1)}));var y=m,w=Object(a.d)((function(n){n.error;var e=Object(o.a)(n,["error"]);return u.a.createElement(y,e)}))(E(),(function(n){return n.error?n.theme.copy.error:n.theme.copy.secondary}));return u.a.createElement(O,{className:t,ref:s},v&&u.a.createElement(g,null,e),u.a.createElement(j,null,u.a.createElement(w,{error:r})))},w=t(7),x=t(76);function k(){var n=Object(r.a)(["\n  display: inline-flex;\n  position: relative;\n  font-size: 1.4rem;\n  align-items: center;\n  justify-content: center;\n"]);return k=function(){return n},n}function C(){var n=Object(r.a)(["\n  background: ",";\n  border: 1px solid ",";\n  border-radius: ","rem;\n  color: ",";\n  font-size: 1.6rem;\n  line-height: 1;\n  min-height: 7rem;\n  outline: none;\n  padding: 0 ","rem;\n  position: relative;\n  transition: 0.2s ",' border-color;\n  width: 100%;\n\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  /* Firefox */\n  &[type="number"] {\n    -moz-appearance: textfield;\n  }\n\n  &:placeholder-shown {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n\n    &:focus + '," {\n      opacity: 0.5;\n    }\n  }\n\n  &:not(:placeholder-shown) {\n    padding-top: 2rem;\n  }\n\n  &:not(:placeholder-shown) + "," {\n    transform: translateY(-1rem);\n    font-size: 1.4rem;\n  }\n"]);return C=function(){return n},n}function z(){var n=Object(r.a)(["\n  position: absolute;\n  left: ","rem;\n  font-weight: ",";\n  font-size: 1.6rem;\n  pointer-events: none;\n  transition: 0.25s "," all;\n"]);return z=function(){return n},n}function S(){var n=Object(r.a)(["\n  position: absolute;\n  right: 2rem;\n"]);return S=function(){return n},n}t.d(e,"d",(function(){return N})),t.d(e,"c",(function(){return P})),t.d(e,"a",(function(){return I})),t.d(e,"b",(function(){return T}));var N=Object(a.d)(y)(S()),P=a.d.label(z(),(function(n){return n.theme.input.padding}),w.e.Black,x.a.easeOutExpo),I=a.d.input(C(),(function(n){return n.theme.input.backgroundColor}),(function(n){return n.theme.input.borderColor}),(function(n){return n.theme.input.borderRadius}),(function(n){return n.theme.input.copyColor}),(function(n){return n.theme.input.padding}),x.a.easeOutExpo,P,P),T=a.d.div(k())},436:function(n,e,t){"use strict";var r=t(96),a=t(69),o=t(0),i=t.n(o),c=t(432),u=t(435),l=function(n){var e=n.className,t=n.defaultValue,l=void 0===t?"":t,f=n.type,d=void 0===f?c.a.Text:f,m=n.onChange,s=n.label,b=n.formatter,p=n.validator,v=Object(a.a)(n,["className","defaultValue","type","onChange","label","formatter","validator"]),h=Object(o.useState)(l),O=Object(r.a)(h,2),j=O[0],g=O[1],E=Object(o.useState)(),y=Object(r.a)(E,2),w=y[0],x=y[1],k=Object(o.useState)(!1),C=Object(r.a)(k,2),z=C[0],S=C[1];Object(o.useEffect)((function(){p&&x(p(l))}),[x,l,p]);var N=Object(o.useCallback)((function(n){var e=b?b(n.currentTarget.value,n):n.currentTarget.value;g(e),!z&&S(!0),p&&x(p(e)),m&&m(n)}),[b,p,z,m]);return i.a.createElement(u.b,{className:e,hasError:!0},i.a.createElement(u.a,Object.assign({},v,{placeholder:" ",id:v.name,value:j,type:d,onChange:N})),i.a.createElement(u.c,{htmlFor:v.name},s),w&&i.a.createElement(u.d,{icon:w.icon,error:z},w.children))};t.d(e,"a",(function(){return l}))},491:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(30),i=t(7),c=t(74),u=t(5),l=t(4),f=t(436),d=t(117),m=t(75),s=t(95),b=t(429);function p(){var n=Object(u.a)(["\n  margin: 2.6rem auto 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return p=function(){return n},n}function v(){var n=Object(u.a)(["\n  margin: 4rem auto 0;\n"]);return v=function(){return n},n}function h(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return h=function(){return n},n}function O(){var n=Object(u.a)(["\n  margin-bottom: 2.6rem;\n"]);return O=function(){return n},n}function j(){var n=Object(u.a)(["\n  max-width: 40rem;\n  padding: 2rem;\n  box-sizing: content-box;\n  width: 100%;\n  margin: auto;\n  pointer-events: all;\n"]);return j=function(){return n},n}function g(){var n=Object(u.a)(["\n  display: flex;\n  position: absolute;\n  top: 0;\n  min-height: 100vh;\n  width: 100%;\n  pointer-events: none;\n"]);return g=function(){return n},n}function E(){var n=Object(u.a)(["\n  width: 100%;\n  margin-bottom: 0.75rem;\n\n  &:first-child {\n    margin-bottom: 2rem;\n  }\n"]);return E=function(){return n},n}function y(){var n=Object(u.a)(["\n  fill: ",";\n"]);return y=function(){return n},n}function w(){var n=Object(u.a)(["\n  fill: ",";\n"]);return w=function(){return n},n}function x(){var n=Object(u.a)(["\n  fill: ",";\n"]);return x=function(){return n},n}var k=Object(l.d)(d.a.Info)(x(),(function(n){return n.theme.copy.tertiary})),C=(Object(l.d)(d.a.Warning)(w(),(function(n){return n.theme.copy.warning})),Object(l.d)(d.a.Error)(y(),(function(n){return n.theme.copy.error})),Object(l.d)(f.a)(E())),z=l.d.div(g()),S=l.d.form(j()),N=Object(l.d)(c.b)(O()),P=l.d.div(h()),I=Object(l.d)(m.c)(v()),T=Object(l.d)(m.b)(p()),F=t(432),H={icon:k,children:"Dit veld is verplicht"},W=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(s.b,{x:25,y:-20}),a.a.createElement(b.default,null),a.a.createElement(z,null,a.a.createElement(S,{method:"post"},a.a.createElement(N,{headingType:c.a.Secondary,serif:!0},"Inloggen"),a.a.createElement(C,{label:"E-mailadres",name:"email",type:F.a.Email,tooltip:H}),a.a.createElement(C,{label:"Password",name:"password",type:F.a.Password,tooltip:H}),a.a.createElement(P,null,a.a.createElement(I,null,"Inloggen"),a.a.createElement(T,{href:o.a.ForgetPassword,fontSize:i.d.Small,fontWeight:i.e.Bold,fontColor:i.b.Primary,serif:!0},"Wachtwoord vergeten")))))};t.d(e,"default",(function(){return W}))}}]);
//# sourceMappingURL=14.f6049947.chunk.js.map