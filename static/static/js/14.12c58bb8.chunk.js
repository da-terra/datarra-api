(window["webpackJsonpdata-science-platform"]=window["webpackJsonpdata-science-platform"]||[]).push([[14,25],{430:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(8),o=t(152),c=t(6),u=t(5),l=t(150),f=t(92),d=t(47);function m(){var n=Object(c.a)(["\n  margin-left: auto;\n"]);return m=function(){return n},n}function s(){var n=Object(c.a)(["\n  &:hover {\n    text-decoration: underline;\n  }\n\n  &:not(:first-child) {\n    margin-left: 6.2rem;\n  }\n"]);return s=function(){return n},n}function b(){var n=Object(c.a)(["\n  display: flex;\n  margin: auto 0 auto 6.2rem;\n"]);return b=function(){return n},n}function p(){var n=Object(c.a)(["\n  margin-top: 6.4rem;\n  display: flex;\n  color: ",";\n\n  @media (max-width: ",") {\n    margin-top: 2.4rem;\n  }\n"]);return p=function(){return n},n}var v=Object(u.d)(f.b)(p(),(function(n){return n.inverted?n.theme.copy.primaryInverted:n.theme.copy.primary}),i.a.H750),h=u.d.div(b()),O=Object(u.d)(l.b)(s()),j=u.d.div(m()),g=function(n){var e=n.inverted,t=n.navigationLinks,c=n.children,u=Object(r.useRef)(),l=Object(r.useContext)(o.a);if(u.current){var f=u.current.clientHeight;l.setValue(o.b.HeaderHeight,f)}return a.a.createElement(v,{inverted:e,ref:u},a.a.createElement(d.b,{showName:!t}),t&&a.a.createElement(h,null,t.map((function(n){return a.a.createElement(O,Object.assign({},n,{fontWeight:i.e.Bold,serif:!0}),n.children)}))),c&&a.a.createElement(j,null,c))};t.d(e,"default",(function(){return g}))},434:function(n,e,t){"use strict";var r=t(0);e.a=function(n,e,t){return Object(r.useEffect)((function(){var r=n.current;if(null!=r)return r.addEventListener(e,t),function(){return r.removeEventListener(e,t)}}),[n,e,t])}},435:function(n,e,t){"use strict";var r=t(6),a=t(5),i=t(94),o=t(0),c=t.n(o),u=t(434),l=t(115);function f(){var n=Object(r.a)(["\n  position: absolute;\n  left: -1rem;\n  top: 50%;\n  padding: 1rem 1.5rem 1rem 4.5rem;\n  border-radius: 0.8rem;\n  white-space: nowrap;\n  background: ",";\n  box-shadow: ",";\n  animation: 0.4s "," forwards;\n"]);return f=function(){return n},n}function d(){var n=Object(r.a)(["\n  position: relative;\n  z-index: 1;\n"]);return d=function(){return n},n}function m(){var n=Object(r.a)(["\n  position: relative;\n  display: inline-block;\n  animation: 0.5s "," forwards;\n\n  svg {\n    display: block;\n  }\n"]);return m=function(){return n},n}function s(){var n=Object(r.a)(["\n  0% {\n    transform: translate(1rem, -50%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0rem, -50%);\n    opacity: 1;\n  }\n"]);return s=function(){return n},n}function b(){var n=Object(r.a)(["\n  0% {\n    transform: translateY(1rem);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0rem);\n    opacity: 1;\n  }\n"]);return b=function(){return n},n}var p=Object(a.e)(b()),v=Object(a.e)(s()),h=a.d.div(m(),p),O=a.d.div(d()),j=a.d.div(f(),(function(n){return n.theme.tooltip.backgroundColor}),(function(n){return n.theme.tooltip.shadow}),v);function g(){var n=Object(r.a)(["\n    cursor: pointer;\n  "]);return g=function(){return n},n}var E=function(n){var e=n.children,t=n.className,r=n.icon,f=void 0===r?l.a.Info:r,d=Object(o.useRef)(null),m=Object(o.useState)(!1),s=Object(i.a)(m,2),b=s[0],p=s[1];Object(u.a)(d,"mouseenter",(function(){return p(!0)})),Object(u.a)(d,"mouseleave",(function(){return p(!1)}));var v=Object(a.d)(f)(g());return c.a.createElement(h,{className:t,ref:d},b&&c.a.createElement(j,null,e),c.a.createElement(O,null,c.a.createElement(v,null)))},y=t(8),w=t(74);function x(){var n=Object(r.a)(["\n  display: inline-flex;\n  position: relative;\n  font-size: 1.4rem;\n  align-items: center;\n  justify-content: center;\n"]);return x=function(){return n},n}function k(){var n=Object(r.a)(["\n  background: ",";\n  border: 1px solid ",";\n  border-radius: ","rem;\n  color: ",";\n  font-size: 1.6rem;\n  line-height: 1;\n  min-height: 7rem;\n  outline: none;\n  padding: 0 ","rem;\n  position: relative;\n  transition: 0.2s "," border-color;\n  width: 100%;\n\n  &:placeholder-shown {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n\n    &:focus + "," {\n      opacity: 0.5;\n    }\n  }\n\n  &:not(:placeholder-shown) {\n    padding-top: 2rem;\n  }\n\n  &:not(:placeholder-shown) + "," {\n    transform: translateY(-1rem);\n    font-size: 1.4rem;\n  }\n"]);return k=function(){return n},n}function z(){var n=Object(r.a)(["\n  position: absolute;\n  left: ","rem;\n  font-weight: ",";\n  font-size: 1.6rem;\n  pointer-events: none;\n  transition: 0.05s "," all;\n"]);return z=function(){return n},n}function C(){var n=Object(r.a)(["\n  position: absolute;\n  right: 2rem;\n"]);return C=function(){return n},n}t.d(e,"d",(function(){return N})),t.d(e,"c",(function(){return S})),t.d(e,"a",(function(){return H})),t.d(e,"b",(function(){return I}));var N=Object(a.d)(E)(C()),S=a.d.label(z(),(function(n){return n.theme.input.padding}),y.e.Black,w.a.easeOutExpo),H=a.d.input(k(),(function(n){return n.theme.input.backgroundColor}),(function(n){return n.theme.input.borderColor}),(function(n){return n.theme.input.borderRadius}),(function(n){return n.theme.input.copyColor}),(function(n){return n.theme.input.padding}),w.a.easeOutExpo,S,S),I=a.d.div(x())},436:function(n,e,t){"use strict";var r=t(66),a=t(0),i=t.n(a),o=t(435),c=function(n){var e=n.className,t=n.tooltip,a=n.label,c=Object(r.a)(n,["className","tooltip","label"]);return i.a.createElement(o.b,{className:e,hasError:!0},i.a.createElement(o.a,Object.assign({},c,{id:c.name,placeholder:" "})),i.a.createElement(o.c,{htmlFor:c.name},a),t&&i.a.createElement(o.d,{icon:t.icon},t.message))};t.d(e,"a",(function(){return c}))},489:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(93),o=t(30),c=t(8),u=t(72),l=t(6),f=t(5),d=t(115),m=t(150),s=t(436),b=t(430);function p(){var n=Object(l.a)(["\n  margin: 2.6rem auto 0;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return p=function(){return n},n}function v(){var n=Object(l.a)(["\n  display: block;\n  margin: 4rem auto 0;\n"]);return v=function(){return n},n}function h(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return h=function(){return n},n}function O(){var n=Object(l.a)(["\n  width: 100%;\n"]);return O=function(){return n},n}function j(){var n=Object(l.a)(["\n  margin-bottom: 2.6rem;\n"]);return j=function(){return n},n}function g(){var n=Object(l.a)(["\n  max-width: 40rem;\n  padding: 2rem;\n  box-sizing: content-box;\n  width: 100%;\n  margin: auto;\n  pointer-events: all;\n"]);return g=function(){return n},n}function E(){var n=Object(l.a)(["\n  display: flex;\n  position: absolute;\n  top: 0;\n  min-height: 100vh;\n  width: 100%;\n  pointer-events: none;\n"]);return E=function(){return n},n}function y(){var n=Object(l.a)(["\n  fill: ",";\n"]);return y=function(){return n},n}function w(){var n=Object(l.a)(["\n  fill: ",";\n"]);return w=function(){return n},n}function x(){var n=Object(l.a)(["\n  fill: ",";\n"]);return x=function(){return n},n}var k=Object(f.d)(d.a.Info)(x(),(function(n){return n.theme.copy.tertiary})),z=(Object(f.d)(d.a.Warning)(w(),(function(n){return n.theme.copy.warning})),Object(f.d)(d.a.Error)(y(),(function(n){return n.theme.copy.error})),f.d.div(E())),C=f.d.form(g()),N=Object(f.d)(u.b)(j()),S=Object(f.d)(s.a)(O()),H=f.d.div(h()),I=Object(f.d)(m.c)(v()),R=Object(f.d)(m.b)(p()),W={icon:k,message:"Dit veld is verplicht"},B=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(i.b,{x:25,y:-20}),a.a.createElement(b.default,null),a.a.createElement(z,null,a.a.createElement(C,{method:"post"},a.a.createElement(N,{headingType:u.a.Secondary,serif:!0},"Wachtwoord vergeten"),a.a.createElement(S,{label:"E-mailadres",name:"email",type:"email",tooltip:W}),a.a.createElement(H,null,a.a.createElement(I,null,"Reset wachtwoord"),a.a.createElement(R,{href:o.a.Signin,fontSize:c.d.Small,fontWeight:c.e.Bold,fontColor:c.b.Primary,serif:!0},"Inloggen")))))};t.d(e,"default",(function(){return B}))}}]);
//# sourceMappingURL=14.12c58bb8.chunk.js.map