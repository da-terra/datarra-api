(window["webpackJsonpdata-science-platform"]=window["webpackJsonpdata-science-platform"]||[]).push([[30],{492:function(e,n,a){"use strict";a.r(n);var i=a(20),t=a(94),r=a(0),u=a.n(r),l=a(429),c=a(75),d=a(443),o=a(151);function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,i)}return a}var m={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"createQuickScanResult"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"target"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"company"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"QuickScanResultCompanyInput"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"person"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"QuickScanResultPersonInput"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"answers"}},type:{kind:"NonNullType",type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"QuickScanResultAnswerInput"}}}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"comment"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createQuickScanResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"target"},value:{kind:"Variable",name:{kind:"Name",value:"target"}}},{kind:"Argument",name:{kind:"Name",value:"company"},value:{kind:"Variable",name:{kind:"Name",value:"company"}}},{kind:"Argument",name:{kind:"Name",value:"person"},value:{kind:"Variable",name:{kind:"Name",value:"person"}}},{kind:"Argument",name:{kind:"Name",value:"answers"},value:{kind:"Variable",name:{kind:"Name",value:"answers"}}},{kind:"Argument",name:{kind:"Name",value:"comment"},value:{kind:"Variable",name:{kind:"Name",value:"comment"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uuid"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:363,source:{body:"mutation createQuickScanResult(\r\n  $target: Int!\r\n  $company: QuickScanResultCompanyInput!\r\n  $person: QuickScanResultPersonInput!\r\n  $answers: [QuickScanResultAnswerInput!]!\r\n  $comment: String\r\n) {\r\n  createQuickScanResult(\r\n    target: $target\r\n    company: $company\r\n    person: $person\r\n    answers: $answers\r\n    comment: $comment\r\n  ) {\r\n    uuid\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},k=function(){var e=Object(r.useContext)(d.a),n=Object(r.useContext)(c.a),a=Object(l.a)(m),k=Object(t.a)(a,2),p=k[0],v=k[1],b=v.data,y=v.error;if(Object(r.useEffect)((function(){var a=Object.keys(e.result.answers).map((function(n){return{questionId:n,value:e.result.answers[n]}})),t=function(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(a,!0).forEach((function(n){Object(i.a)(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(a).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}({},e.result,{target:n.getValue(c.b.TargetGroup),answers:a});p({variables:t})}),[n,e,p]),b&&n.setValue(c.b.QuickScanResultUuid,b.createQuickScanResult.uuid,!0),y)throw y;return u.a.createElement(o.a,null)};a.d(n,"default",(function(){return k}))}}]);
//# sourceMappingURL=30.7e9e693e.chunk.js.map