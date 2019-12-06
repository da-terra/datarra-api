(window["webpackJsonpdata-science-platform"]=window["webpackJsonpdata-science-platform"]||[]).push([[8,22],{432:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(482),i=n(476),o={addSuffix:!0,includeSeconds:!0,locale:n(474).a},u=function(e){var t=e.children,n=Object(c.a)(Object(i.a)(parseInt(t,10)/1e3),o);return a.a.createElement(r.Fragment,null,n)};n.d(t,"a",(function(){return u}))},438:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(8),i=n(441),o=n(92),u=n(6),l=n(5),m=n(72),d=n(73),s=n(432);function f(){var e=Object(u.a)(['\n  &:after {\n    content: "-";\n    display: inline-block;\n    margin: 0 1.5rem;\n  }\n']);return f=function(){return e},e}function p(){var e=Object(u.a)(["\n  &:not(:first-child) {\n    margin-left: 8rem;\n  }\n"]);return p=function(){return e},e}function h(){var e=Object(u.a)(["\n  margin-top: 2rem;\n"]);return h=function(){return e},e}function b(){var e=Object(u.a)(["\n  white-space: pre-line;\n"]);return b=function(){return e},e}function g(){var e=Object(u.a)(["\n  padding-top: 7.5rem;\n  padding-bottom: 7.5rem;\n"]);return g=function(){return e},e}var v=Object(l.d)(o.b)(g()),k=Object(l.d)(m.b)(b()),E=l.d.aside(h()),y=Object(l.d)(d.a)(p()),O=Object(l.d)(d.a)(f()),x=d.a,j=function(e){var t=e.title,n=e.tags,r=e.publishedDate,u=e.author,l=u.fullName,m=(u.email,e.className),d=e.width,f=void 0===d?o.a.Smaller:d;return a.a.createElement(v,{width:f,className:m},a.a.createElement(k,null,t),a.a.createElement(E,null,a.a.createElement(y,{as:"span",fontWeight:c.e.Black,fontSize:c.d.Small},Object(i.a)(n).join(" - ")),a.a.createElement(y,{as:"span"},a.a.createElement(O,{as:"time",dateTime:r,fontWeight:c.e.Bold,fontSize:c.d.Small},a.a.createElement(s.a,null,r)),a.a.createElement(x,{as:"span",fontWeight:c.e.Bold,fontSize:c.d.Small},l))))};n.d(t,"a",(function(){return j}))},439:function(e,t,n){"use strict";t.a=function(e,t){return e.replace(/:[a-z]+/gi,(function(e){return t[e.substr(1)]}))}},441:function(e,t,n){"use strict";var r,a=n(20);n.d(t,"a",(function(){return o}));var c={Announcement:1,CaseStudy:2},i=(r={},Object(a.a)(r,c.Announcement,"Aankondiging"),Object(a.a)(r,c.CaseStudy,"Case Study"),r),o=function(e){return(t=e,n=c,Object.values(n).reduce((function(e,n){return(t&n)===n&&e.push(n),e}),[])).map((function(e){return i[e]}));var t,n}},444:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(458),i=n(467),o=n(466),u=n(6),l=n(5),m=n(73);function d(){var e=Object(u.a)(["\n  margin-bottom: 2rem;\n\n  &:last-child {\n    margin-bottom: 10rem;\n  }\n"]);return d=function(){return e},e}var s=Object(l.d)(m.a)(d()),f=function(e){var t=e.children,n=e.attributes;return a.a.createElement(s,n,t)},p={paragraph:f},h=f,b=function(e){var t=p[e.element.type]||h;return console.log(e),a.a.createElement(t,e)},g=function(e){var t=e.attributes,n=e.children;switch(e.mark.type){case"bold":return a.a.createElement("strong",t,n);case"code":return a.a.createElement("code",t,n);case"italic":return a.a.createElement("em",t,n);case"underlined":return a.a.createElement("u",t,n)}return a.a.createElement("span",t,n)},v=[{type:"paragraph",children:[{text:"This is editable ",marks:[]},{text:"rich",marks:[{type:"bold"}]},{text:" text, ",marks:[]},{text:"much",marks:[{type:"italic"}]},{text:" better than a ",marks:[]},{text:"<textarea>",marks:[{type:"code"}]},{text:"!",marks:[]}]},{type:"paragraph",children:[{text:"Since it's rich text, you can do things like turn a selection of text ",marks:[]},{text:"bold",marks:[{type:"bold"}]},{text:", or add a semantically rendered block quote in the middle of the page, like this:",marks:[]}]},{type:"block-quote",children:[{text:"A wise quote.",marks:[]}]},{type:"paragraph",children:[{text:"Try it out for yourself!",marks:[]}]}],k=function(e){var t=e.value,n=e.readOnly,u=(e.onChange,Object(r.useMemo)((function(){return n?Object(o.c)(Object(c.i)()):Object(i.a)(Object(o.c)(Object(c.i)()))}),[n]));return a.a.createElement(o.b,{editor:u,defaultValue:t||v,onChange:function(e){return console.log(JSON.stringify(e))}},a.a.createElement(o.a,{readOnly:n,renderElement:b,renderMark:g}))};n.d(t,"a",(function(){return k}))},451:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(92),i=n(444),o=function(e){var t=e.nodes;return a.a.createElement(c.b,{width:c.a.Smaller},a.a.createElement(i.a,{value:t,readOnly:!0}))};n.d(t,"default",(function(){return o}))},456:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(6),i=n(5),o=n(8),u=n(47),l=n(92);function m(){var e=Object(c.a)(["\n  color: ",";\n  background: url('","') center center / cover;\n  background-color: ",';\n  min-height: 50vh;\n  max-height: 60rem;\n  padding-top: 6rem;\n  padding-bottom: 6rem;\n  position: relative;\n\n  &:before {\n    content: "";\n    display: block;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.5);\n  }\n\n  @media (max-width: ',") {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n  }\n"]);return m=function(){return e},e}var d=i.d.div(m(),(function(e){return e.inverted?e.theme.copy.primaryInverted:e.theme.copy.primary}),(function(e){return e.image.src}),(function(e){return e.image.fallbackColor}),o.a.H750),s=function(e){var t=e.image,n=e.inverted;return a.a.createElement(d,{image:t,inverted:n},a.a.createElement(l.b,null,a.a.createElement(u.b,{showName:!0})))};n.d(t,"a",(function(){return s}))},457:function(e,t,n){"use strict";var r=n(66),a=n(0),c=n.n(a),i=n(92),o=n(439),u=n(30),l=n(6),m=n(5),d=n(8),s=n(150),f=n(47),p=n(438);function h(){var e=Object(l.a)(["\n  margin-top: auto;\n"]);return h=function(){return e},e}function b(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  color: ",";\n  background: url('","') center center / cover;\n  background-color: ",';\n  min-height: 70vh;\n  max-height: 80rem;\n  padding-top: 6rem;\n  position: relative;\n\n  &:before {\n    content: "";\n    display: block;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.5);\n  }\n\n  @media (max-width: ',") {\n    padding-top: 3rem;\n  }\n"]);return b=function(){return e},e}var g=m.d.div(b(),(function(e){return e.inverted?e.theme.copy.primaryInverted:e.theme.copy.primary}),(function(e){return e.image.src}),(function(e){return e.image.fallbackColor}),d.a.H750),v=Object(m.d)(s.d)(h()),k=function(e){var t=e.image,n=e.slug,a=e.inverted,l=Object(r.a)(e,["image","slug","inverted"]);return c.a.createElement(g,{image:t,inverted:a},c.a.createElement(i.b,null,c.a.createElement(f.b,{showName:!0})),c.a.createElement(v,{href:Object(o.a)(u.a.ArticleDetail,{slug:n})},c.a.createElement(p.a,Object.assign({},l,{width:i.a.Normal}))))};n.d(t,"a",(function(){return k}))},475:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(456),i=n(451),o=n(438),u=n(457),l=n(444);t.default=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(c.a,{image:{alt:"Background",fallbackColor:"#4282EA",src:"https://source.unsplash.com/1920x1080/?dark"},inverted:!0}),a.a.createElement(c.a,{image:{alt:"Background",fallbackColor:"#FD4444",src:"https://source.unsplash.com/1920x1080/?white"}}),a.a.createElement(u.a,{slug:"test-article",image:{alt:"Background",fallbackColor:"#FD4444",src:"https://source.unsplash.com/1920x1080/?dark"},author:{fullName:"Leroy Korterink",email:"leroy@test.com"},tags:3,publishedDate:"2019-12-03T23:54:13.887Z",title:"The Expertise of\nConcise Environment",inverted:!0}),a.a.createElement(o.a,{author:{fullName:"Leroy Korterink",email:"leroy@test.com"},tags:2,publishedDate:"2019-12-03T23:54:13.887Z",title:"The Expertise of\nConcise Environment"}),a.a.createElement(i.default,{nodes:[{type:"paragraph",children:[{text:"A line of text in a paragraph.",marks:[]}]}]}),a.a.createElement(l.a,{value:[{type:"paragraph",children:[{text:"A line of text in a paragraph.",marks:[]}]}]}))}}}]);
//# sourceMappingURL=8.5d297577.chunk.js.map