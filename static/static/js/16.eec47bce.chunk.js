(this["webpackJsonpdata-science-platform"]=this["webpackJsonpdata-science-platform"]||[]).push([[16,25],{429:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(7),u=t(152),o=t(5),i=t(4),l=t(75),m=t(52),d=t(49);function f(){var e=Object(o.a)(["\n  margin-left: auto;\n"]);return f=function(){return e},e}function s(){var e=Object(o.a)(["\n  &:hover {\n    text-decoration: underline;\n  }\n\n  &:not(:first-child) {\n    margin-left: 6.2rem;\n  }\n"]);return s=function(){return e},e}function b(){var e=Object(o.a)(["\n  display: flex;\n  margin: auto 0 auto 6.2rem;\n"]);return b=function(){return e},e}function v(){var e=Object(o.a)(["\n  margin-top: 6.4rem;\n  display: flex;\n  color: ",";\n\n  @media (max-width: ",") {\n    margin-top: 2.4rem;\n  }\n"]);return v=function(){return e},e}var j=Object(i.d)(m.b)(v(),(function(e){return e.inverted?e.theme.copy.primaryInverted:e.theme.copy.primary}),c.a.H750),O=i.d.div(b()),p=Object(i.d)(l.b)(s()),g=i.d.div(f()),h=function(e){var n=e.inverted,t=e.navigationLinks,o=e.children,i=Object(r.useRef)(),l=Object(r.useContext)(u.a);if(i.current){var m=i.current.clientHeight;l.setValue(u.b.HeaderHeight,m)}return a.a.createElement(j,{inverted:n,ref:i},a.a.createElement(d.b,{showName:!t}),t&&a.a.createElement(O,null,t.map((function(e){return a.a.createElement(p,Object.assign({},e,{fontWeight:c.e.Bold,serif:!0}),e.children)}))),o&&a.a.createElement(g,null,o))};t.d(n,"default",(function(){return h}))},434:function(e,n,t){"use strict";var r=t(0);n.a=function(e,n,t){return Object(r.useEffect)((function(){var r=e.current;if(null!=r)return r.addEventListener(n,t),function(){return r.removeEventListener(n,t)}}),[e,n,t])}},450:function(e,n,t){"use strict";n.a=function(e,n){return e?e.querySelector('[name="'.concat(n,'"]')).value:""}},482:function(e,n,t){"use strict";t.r(n);var r,a=t(96),c=t(0),u=t.n(c),o=t(41),i=t(30),l=t(7),m=t(74),d=t(52),f=t(443);!function(e){e[e.Increment=0]="Increment",e[e.Decrement=1]="Decrement"}(r||(r={}));var s={currentIndex:0},b=function(e,n){return n.type===r.Increment?{currentIndex:e.currentIndex+1}:n.type===r.Decrement?{currentIndex:e.currentIndex-1}:e},v=t(5),j=t(4),O=t(48),p=t(69),g=t(75),h=function(e){var n=e.question,t=Object(p.a)(e,["question"]);return u.a.createElement(g.c,Object.assign({},t,{type:"submit"}),n?n.salutation||"Naar volgende vraag":"Naar volgende stap")},E=t(95),y=t(429),x=t(20),k=t(77),w=t(450),S=t(117);function C(){var e=Object(v.a)(["\n  margin-left: auto;\n\n  &:not(:first-child) {\n    margin-top: 1rem;\n  }\n"]);return C=function(){return e},e}function F(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  margin-left: 1.5rem;\n"]);return F=function(){return e},e}function I(){var e=Object(v.a)(["\n  display: ",";\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n"]);return I=function(){return e},e}function q(){var e=Object(v.a)(["\n  width: 100%;\n  position: relative;\n  padding: 1.5rem 2.5rem;\n  background: ",";\n  box-shadow: ",";\n  border-radius: ","px;\n"]);return q=function(){return e},e}function R(){var e=Object(v.a)(["\n  display: flex;\n  margin-bottom: 3rem;\n"]);return R=function(){return e},e}var A=j.d.div(R()),L=j.d.div(q(),(function(e){return e.theme.card.background}),(function(e){return e.theme.card.shadow}),(function(e){return e.theme.card.borderRadius})),Q=O.a,T=Object(j.d)(O.a)(I(),(function(e){return e.visible?"block":"none"})),H=j.d.div(F()),N=Object(j.d)(g.a)(C()),D=function(e){var n=e.label,t=e.value,r=e.info,o=e.onSelect,i=Object(c.useState)(!1),m=Object(a.a)(i,2),d=m[0],f=m[1],s=Object(c.useCallback)((function(){f(!d)}),[f,d]),b=Object(c.useCallback)((function(e){return o&&o(t,e)}),[o,t]);return u.a.createElement(A,null,u.a.createElement(L,null,u.a.createElement(Q,null,n),r&&u.a.createElement(T,{fontColor:l.b.Secondary,fontSize:l.d.Small,visible:d},r)),u.a.createElement(H,null,r&&u.a.createElement(N,{onClick:s,active:d,inverted:!0},u.a.createElement(S.a.Info,null)),u.a.createElement(N,{onClick:b},u.a.createElement(S.a.Forward,null))))};function B(){var e=Object(v.a)([""]);return B=function(){return e},e}function M(){var e=Object(v.a)([""]);return M=function(){return e},e}function _(){var e=Object(v.a)(["\n  ","\n"]);return _=function(){return e},e}function W(){var e=Object(v.a)(["\n  ","\n"]);return W=function(){return e},e}function z(){var e=Object(v.a)(["\n  opacity: 0.5;\n\n  &:hover {\n    opacity: 1;\n  }\n"]);return z=function(){return e},e}function J(){var e=Object(v.a)(["\n  display: ",";\n"]);return J=function(){return e},e}function V(){var e=Object(v.a)(["\n  &:not(:last-child) {\n    margin-bottom: 1rem;\n  }\n"]);return V=function(){return e},e}function X(){var e=Object(v.a)(["\n  padding: 0;\n  list-style: none;\n"]);return X=function(){return e},e}var G=j.d.ul(X()),K=j.d.li(V()),P=(j.d.div(J(),(function(e){return e.show?"block":"none"})),Object(j.c)(z())),U=(Object(j.d)(g.d)(W(),P),Object(j.d)(g.d)(_(),P),Object(j.d)(S.a.ArrowForward)(M()),Object(j.d)(S.a.ArrowForward)(B()),function(e){var n=e.name,t=e.options,r=e.onClick,o=Object(c.useState)(""),i=Object(a.a)(o,2),l=i[0],m=i[1],d=Object(c.useRef)(0),f=Object(c.useCallback)((function(e,n){m(e),clearTimeout(d.current),d.current=setTimeout((function(){return r&&r(e,n)}),0)}),[m,r]);return Object(c.useEffect)((function(){return function(){clearTimeout(d.current)}})),u.a.createElement(c.Fragment,null,u.a.createElement(G,null,t.map((function(e){return u.a.createElement(K,{key:e.value},u.a.createElement(D,Object.assign({},e,{onSelect:f})))}))),u.a.createElement("input",{type:"hidden",name:n,value:l}))});function Y(){var e=Object(v.a)(["\n  margin-bottom: 4rem;\n"]);return Y=function(){return e},e}function Z(){var e=Object(v.a)([""]);return Z=function(){return e},e}var $=j.d.div(Z()),ee=Object(j.d)(m.b)(Y()),ne=function(e){var n=e._id,t=e.question,r=e.options,a=u.a.createRef(),o=Object(c.useCallback)((function(){a.current&&a.current.click()}),[a]);return u.a.createElement($,null,u.a.createElement(ee,{headingType:m.a.Secondary},t),u.a.createElement(U,{name:n,options:r,onClick:o}),u.a.createElement("button",{type:"submit",ref:a,hidden:!0},"Naar volgende vraag"))},te=t(434),re=t(76);function ae(){var e=Object(v.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 3.2rem;\n"]);return ae=function(){return e},e}function ce(){var e=Object(v.a)(["\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 1.5rem;\n  height: calc(100% + 2rem);\n  border-radius: 1.5rem;\n  background: ",";\n  box-shadow: ","\n  transition: left .1s ",";\n  cursor: pointer;\n  border: none;\n  outline: none;\n"]);return ce=function(){return e},e}function ue(){var e=Object(v.a)(["\n  position: relative;\n  height: 1.5rem;\n  background: ",";\n  border-radius: 1.5rem;\n  cursor: pointer;\n"]);return ue=function(){return e},e}function oe(){var e=Object(v.a)(["\n  margin-left: auto;\n  margin-bottom: 2.4rem;\n"]);return oe=function(){return e},e}function ie(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return ie=function(){return e},e}var le=j.d.div(ie()),me=Object(j.d)(m.b)(oe()),de=j.d.div(ue(),(function(e){return e.theme.background.accent})),fe=j.d.div(ce(),(function(e){return e.theme.copy.primary}),(function(e){return e.theme.button.solid.shadow}),re.a.easeOutExpo),se=j.d.div(ae()),be=O.a,ve={fontWeight:l.e.Bold,fontSize:l.d.Small,fontColor:l.b.Secondary},je=function(e){var n=e.name,t=e.min,r=void 0===t?0:t,o=e.max,i=void 0===o?1:o,l=Object(a.a)(e.labels,2),m=l[0],d=l[1],f=Object(c.useState)(0),s=Object(a.a)(f,2),b=s[0],v=s[1],j=Object(c.useRef)(null),O=Object(c.useRef)(null),p=Object(c.useRef)(0),g=function(e){return function(){if(null!=O.current){var n=O.current.getBoundingClientRect(),t=e.touches?e.touches[0].pageX:e.pageX,r=n.width,a=t-n.left,c=Math.max(0,Math.min(a,r));v(1/r*c)}}},h=function(e){cancelAnimationFrame(p.current),p.current=requestAnimationFrame(g(e)),document.body.style.userSelect="none";var n=function(e){cancelAnimationFrame(p.current),p.current=requestAnimationFrame(g(e))},t=function(){document.body.style.userSelect="",document.removeEventListener("mousemove",n)};document.addEventListener("mousemove",n),document.addEventListener("touchmove",n),document.addEventListener("mouseup",t),document.addEventListener("touchend",t)};return Object(te.a)(j,"mousedown",h),Object(te.a)(O,"mousedown",h),Object(te.a)(j,"touchstart",h),Object(te.a)(O,"touchstart",h),Object(c.useEffect)((function(){return function(){return cancelAnimationFrame(p.current)}}),[]),u.a.createElement(le,null,u.a.createElement(me,null,Math.round(10*b),"/",10),u.a.createElement(de,{ref:O},u.a.createElement(fe,{style:{left:"".concat(100*b,"%")},ref:j})),u.a.createElement(se,null,u.a.createElement(be,ve,m),u.a.createElement(be,ve,d)),u.a.createElement("input",{type:"hidden",name:n,value:(i-r)*b+r}))};function Oe(){var e=Object(v.a)(["\n  margin: 4rem auto auto;\n"]);return Oe=function(){return e},e}var pe=m.b,ge=Object(j.d)(g.c)(Oe()),he=["Niet mee eens","Mee eens"],Ee=function(e){var n=e._id,t=e.question,r=e.min,a=e.max,o=e.nextQuestion;return u.a.createElement(c.Fragment,null,u.a.createElement(pe,{headingType:m.a.Secondary},t),u.a.createElement(je,{name:n,min:r,max:a,labels:he}),u.a.createElement(ge,{type:"submit"},o&&o.salutation||"Naar volgende vraag"))};function ye(){var e=Object(v.a)(["\n  margin: 4rem auto 0;\n"]);return ye=function(){return e},e}function xe(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return xe=function(){return e},e}var ke=j.d.form(xe()),we=(Object(j.d)(h)(ye()),function(e){var n=e.question,t=e.nextQuestion,r=e.next,a=n.options&&n.options.length?ne:Ee,o=Object(c.useContext)(f.a),i=Object(c.useCallback)((function(e){e.preventDefault();var t=n._id;console.log("string value: "),console.log(parseFloat("3.333")),console.log(Object(w.a)(e.currentTarget,t));var a=parseFloat(Object(w.a)(e.currentTarget,t));null==a||a<0||(o.setResult(Object(k.a)({},o.result,{answers:Object(k.a)({},o.result.answers,Object(x.a)({},t,a))})),r())}),[r,n,o]);return u.a.createElement(ke,{onSubmit:i},u.a.createElement(a,Object.assign({},n,{key:n._id,nextQuestion:t})))});function Se(){var e=Object(v.a)(["\n  margin: 6.2rem auto 0;\n"]);return Se=function(){return e},e}function Ce(){var e=Object(v.a)(["\n  margin-left: auto;\n"]);return Ce=function(){return e},e}function Fe(){var e=Object(v.a)([""]);return Fe=function(){return e},e}function Ie(){var e=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 5.2rem;\n\n  @media (max-width: ",") {\n    display: block;\n  }\n"]);return Ie=function(){return e},e}function qe(){var e=Object(v.a)(["\n  margin: 4rem auto;\n  pointer-events: all;\n  display: flex;\n  flex-direction: column;\n"]);return qe=function(){return e},e}function Re(){var e=Object(v.a)(["\n  position: absolute;\n  top: 0;\n  display: flex;\n  width: 100%;\n  min-height: 100vh;\n  padding: 10rem 0;\n  pointer-events: none;\n\n  @media (max-width: ",") {\n    position: relative;\n    min-height: 0;\n    padding: 6.4rem 0;\n  }\n"]);return Re=function(){return e},e}j.d.div(Re(),l.a.H1000);var Ae=Object(j.d)(d.b)(qe()),Le=j.d.div(Ie(),l.a.H500),Qe=Object(j.d)(m.b)(Fe()),Te=Object(j.d)(O.a)(Ce()),He=(Object(j.d)(h)(Se()),function(){var e=Object(c.useContext)(f.a),n=Object(c.useReducer)(b,s),t=Object(a.a)(n,2),v=t[0],j=t[1],O=e.data.quickScanQuestions,p=O.length,g=v.currentIndex;return null==e.result.company?u.a.createElement(o.a,{to:i.a.QuickScanOnboarding}):g>=p?u.a.createElement(o.a,{to:i.a.QuickScanContactDetails}):u.a.createElement(c.Fragment,null,u.a.createElement(y.default,null),u.a.createElement(E.b,{x:25,y:-20}),u.a.createElement(Ae,{width:d.a.Smaller},u.a.createElement(Le,null,u.a.createElement(Qe,{headingType:m.a.Secondary,fontColor:l.b.Accent},"Quick Scan"),u.a.createElement(Te,{fontColor:l.b.Secondary,fontWeight:l.e.Bold},"Vraag ",g+1," van ",p)),u.a.createElement(we,{question:O[g],nextQuestion:O[g+1],next:function(){return j({type:r.Increment})}})))});t.d(n,"default",(function(){return He}))}}]);
//# sourceMappingURL=16.eec47bce.chunk.js.map