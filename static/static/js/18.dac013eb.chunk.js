(window["webpackJsonpdata-science-platform"]=window["webpackJsonpdata-science-platform"]||[]).push([[18],{429:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return b}));var i=r(428),n=r(2),s=r(0),o=r(95),u=r(49),a=r(4),c=function(){function t(t,e){this.isMounted=!1,this.previousOptions={},this.context={},this.options={},this.options=t||{},this.context=e||{}}return t.prototype.getOptions=function(){return this.options},t.prototype.setOptions=function(t,e){void 0===e&&(e=!1),e&&!Object(u.a)(this.options,t)&&(this.previousOptions=this.options),this.options=t},t.prototype.unmount=function(){this.isMounted=!1},t.prototype.refreshClient=function(){var t=this.options&&this.options.client||this.context&&this.context.client;Object(a.b)(!!t,2);var e=!1;return t!==this.client&&(e=!0,this.client=t,this.cleanup()),{client:this.client,isNew:e}},t.prototype.verifyDocumentType=function(t,e){var r=Object(i.e)(t);Object(i.d)(e),Object(i.d)(r.type);Object(a.b)(r.type===e,3)},t}(),l=function(t){function e(e){var r=e.options,i=e.context,n=e.forceUpdate,s=t.call(this,r,i)||this;return s.previousData={},s.currentObservable={},s.runLazy=!1,s.runLazyQuery=function(t){s.cleanup(),s.runLazy=!0,s.lazyOptions=t,s.forceUpdate()},s.getExecuteResult=function(){var t=s.getQueryResult();return s.startQuerySubscription(),t},s.obsRefetch=function(t){return s.currentObservable.query.refetch(t)},s.obsFetchMore=function(t){return s.currentObservable.query.fetchMore(t)},s.obsUpdateQuery=function(t){return s.currentObservable.query.updateQuery(t)},s.obsStartPolling=function(t){s.currentObservable&&s.currentObservable.query&&s.currentObservable.query.startPolling(t)},s.obsStopPolling=function(){s.currentObservable&&s.currentObservable.query&&s.currentObservable.query.stopPolling()},s.obsSubscribeToMore=function(t){return s.currentObservable.query.subscribeToMore(t)},s.forceUpdate=n,s}return Object(n.c)(e,t),e.prototype.execute=function(){this.refreshClient();var t=this.getOptions(),e=t.skip,r=t.query;return(e||r!==this.previousData.query)&&(this.removeQuerySubscription(),this.previousData.query=r),this.updateObservableQuery(),this.isMounted&&this.startQuerySubscription(),this.getExecuteSsrResult()||this.getExecuteResult()},e.prototype.executeLazy=function(){return this.runLazy?[this.runLazyQuery,this.execute()]:[this.runLazyQuery,{loading:!1,networkStatus:o.b.ready,called:!1,data:void 0}]},e.prototype.fetchData=function(){var t=this.getOptions();if(t.skip||!1===t.ssr)return!1;var e=this.currentObservable.query;return!!e.getCurrentResult().loading&&e.result()},e.prototype.afterExecute=function(t){var e=this,r=(void 0===t?{}:t).lazy,i=void 0!==r&&r;return this.isMounted=!0,i&&!this.runLazy||(this.handleErrorOrCompleted(),setTimeout((function(){e.currentObservable.query&&e.currentObservable.query.resetQueryStoreErrors()}))),this.previousOptions=this.getOptions(),this.unmount.bind(this)},e.prototype.cleanup=function(){this.removeQuerySubscription(),delete this.currentObservable.query,delete this.previousData.result},e.prototype.getOptions=function(){var e=t.prototype.getOptions.call(this);return this.lazyOptions&&(e.variables=Object(n.a)(Object(n.a)({},e.variables),this.lazyOptions.variables),e.context=Object(n.a)(Object(n.a)({},e.context),this.lazyOptions.context)),this.runLazy&&delete e.skip,e},e.prototype.getExecuteSsrResult=function(){var t,e=this.context&&this.context.renderPromises,r=!1===this.getOptions().ssr,i=this.refreshClient().client.disableNetworkFetches,n={loading:!0,networkStatus:o.b.loading,called:!0,data:void 0};return r&&(e||i)?n:(e&&(t=this.context.renderPromises.addQueryPromise(this,this.getExecuteResult)||n),t)},e.prototype.prepareObservableQueryOptions=function(){var t=this.getOptions();this.verifyDocumentType(t.query,i.b.Query);var e=t.displayName||"Query";return this.context&&this.context.renderPromises&&("network-only"===t.fetchPolicy||"cache-and-network"===t.fetchPolicy)&&(t.fetchPolicy="cache-first"),Object(n.a)(Object(n.a)({},t),{displayName:e,context:t.context,metadata:{reactComponent:{displayName:e}}})},e.prototype.initializeObservableQuery=function(){if(this.context&&this.context.renderPromises&&(this.currentObservable.query=this.context.renderPromises.getSSRObservable(this.getOptions())),!this.currentObservable.query){var t=this.prepareObservableQueryOptions();this.previousData.observableQueryOptions=Object(n.a)(Object(n.a)({},t),{children:null}),this.currentObservable.query=this.refreshClient().client.watchQuery(Object(n.a)({},t)),this.context&&this.context.renderPromises&&this.context.renderPromises.registerSSRObservable(this.currentObservable.query,t)}},e.prototype.updateObservableQuery=function(){if(this.currentObservable.query){var t=Object(n.a)(Object(n.a)({},this.prepareObservableQueryOptions()),{children:null});Object(u.a)(t,this.previousData.observableQueryOptions)||(this.previousData.observableQueryOptions=t,this.currentObservable.query.setOptions(t).catch((function(){})))}else this.initializeObservableQuery()},e.prototype.startQuerySubscription=function(){var t=this;if(!this.currentObservable.subscription&&!this.getOptions().skip){var e=this.currentObservable.query;this.currentObservable.subscription=e.subscribe({next:function(e){var r=e.loading,i=e.networkStatus,n=e.data,s=t.previousData.result;s&&s.loading===r&&s.networkStatus===i&&Object(u.a)(s.data,n)||t.forceUpdate()},error:function(e){if(t.resubscribeToQuery(),!e.hasOwnProperty("graphQLErrors"))throw e;var r=t.previousData.result;(r&&r.loading||!Object(u.a)(e,t.previousData.error))&&(t.previousData.error=e,t.forceUpdate())}})}},e.prototype.resubscribeToQuery=function(){this.removeQuerySubscription();var t=this.currentObservable.query.getLastError(),e=this.currentObservable.query.getLastResult();this.currentObservable.query.resetLastResults(),this.startQuerySubscription(),Object.assign(this.currentObservable.query,{lastError:t,lastResult:e})},e.prototype.getQueryResult=function(){var t=this.observableQueryFields(),e=this.getOptions();if(e.skip)t=Object(n.a)(Object(n.a)({},t),{data:void 0,error:void 0,loading:!1,called:!0});else{var r=this.currentObservable.query.getCurrentResult(),i=r.loading,s=r.partial,u=r.networkStatus,a=r.errors,c=r.error,l=r.data;if(a&&a.length>0&&(c=new o.a({graphQLErrors:a})),t=Object(n.a)(Object(n.a)({},t),{loading:i,networkStatus:u,error:c,called:!0}),i){var p=this.previousData.result&&this.previousData.result.data;t.data=p&&l?Object(n.a)(Object(n.a)({},p),l):p||l}else if(c)Object.assign(t,{data:(this.currentObservable.query.getLastResult()||{}).data});else{var b=this.currentObservable.query.options.fetchPolicy;if(e.partialRefetch&&!l&&s&&"cache-only"!==b)return Object.assign(t,{loading:!0,networkStatus:o.b.loading}),t.refetch(),t;t.data=l}}return t.client=this.client,this.previousData.loading=this.previousData.result&&this.previousData.result.loading||!1,this.previousData.result=t,t},e.prototype.handleErrorOrCompleted=function(){var t=this.currentObservable.query;if(t){var e=t.getCurrentResult(),r=e.data,i=e.loading,n=e.error;if(!i){var s=this.getOptions(),o=s.query,a=s.variables,c=s.onCompleted,l=s.onError;if(this.previousOptions&&!this.previousData.loading&&Object(u.a)(this.previousOptions.query,o)&&Object(u.a)(this.previousOptions.variables,a))return;c&&!n?c(r):l&&n&&l(n)}}},e.prototype.removeQuerySubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)},e.prototype.observableQueryFields=function(){return{variables:this.currentObservable.query.variables,refetch:this.obsRefetch,fetchMore:this.obsFetchMore,updateQuery:this.obsUpdateQuery,startPolling:this.obsStartPolling,stopPolling:this.obsStopPolling,subscribeToMore:this.obsSubscribeToMore}},e}(c);function p(t,e,r){void 0===r&&(r=!1);var o=Object(s.useContext)(Object(i.c)()),a=Object(s.useReducer)((function(t){return t+1}),0),c=a[0],p=a[1],b=e?Object(n.a)(Object(n.a)({},e),{query:t}):{query:t},h=Object(s.useRef)();h.current||(h.current=new l({options:b,context:o,forceUpdate:p}));var d=h.current;d.setOptions(b),d.context=o;var v=function(t,e){var r=Object(s.useRef)();return r.current&&Object(u.a)(e,r.current.key)||(r.current={key:e,value:t()}),r.current.value}((function(){return r?d.executeLazy():d.execute()}),{options:Object(n.a)(Object(n.a)({},b),{onError:void 0,onCompleted:void 0}),context:o,tick:c}),y=r?v[1]:v;return Object(s.useEffect)((function(){return d.afterExecute({lazy:r})}),[y.loading,y.networkStatus,y.error,y.data]),Object(s.useEffect)((function(){return function(){return d.cleanup()}}),[]),v}function b(t,e){return p(t,e,!1)}var h=function(t){function e(e){var r=e.options,n=e.context,s=e.result,o=e.setResult,u=t.call(this,r,n)||this;return u.runMutation=function(t){void 0===t&&(t={}),u.onMutationStart();var e=u.generateNewMutationId();return u.mutate(t).then((function(t){return u.onMutationCompleted(t,e),t})).catch((function(t){if(u.onMutationError(t,e),!u.getOptions().onError)throw t}))},u.verifyDocumentType(r.mutation,i.b.Mutation),u.result=s,u.setResult=o,u.mostRecentMutationId=0,u}return Object(n.c)(e,t),e.prototype.execute=function(t){return this.isMounted=!0,this.verifyDocumentType(this.getOptions().mutation,i.b.Mutation),t.client=this.refreshClient().client,[this.runMutation,t]},e.prototype.afterExecute=function(){return this.isMounted=!0,this.unmount.bind(this)},e.prototype.cleanup=function(){},e.prototype.mutate=function(t){var e=this.getOptions(),r=e.mutation,i=e.variables,s=e.optimisticResponse,o=e.update,u=e.context,a=void 0===u?{}:u,c=e.awaitRefetchQueries,l=void 0!==c&&c,p=e.fetchPolicy,b=Object(n.a)({},t),h=Object.assign({},i,b.variables);return delete b.variables,this.refreshClient().client.mutate(Object(n.a)({mutation:r,optimisticResponse:s,refetchQueries:b.refetchQueries||this.getOptions().refetchQueries,awaitRefetchQueries:l,update:o,context:a,fetchPolicy:p,variables:h},b))},e.prototype.onMutationStart=function(){this.result.loading||this.getOptions().ignoreResults||this.updateResult({loading:!0,error:void 0,data:void 0,called:!0})},e.prototype.onMutationCompleted=function(t,e){var r=this.getOptions(),i=r.onCompleted,n=r.ignoreResults,s=t.data,u=t.errors,a=u&&u.length>0?new o.a({graphQLErrors:u}):void 0;this.isMostRecentMutation(e)&&!n&&this.updateResult({called:!0,loading:!1,data:s,error:a}),i&&i(s)},e.prototype.onMutationError=function(t,e){var r=this.getOptions().onError;this.isMostRecentMutation(e)&&this.updateResult({loading:!1,error:t,data:void 0,called:!0}),r&&r(t)},e.prototype.generateNewMutationId=function(){return++this.mostRecentMutationId},e.prototype.isMostRecentMutation=function(t){return this.mostRecentMutationId===t},e.prototype.updateResult=function(t){!this.isMounted||this.previousResult&&Object(u.a)(this.previousResult,t)||(this.setResult(t),this.previousResult=t)},e}(c);function d(t,e){var r=Object(s.useContext)(Object(i.c)()),o=Object(s.useState)({called:!1,loading:!1}),u=o[0],a=o[1],c=e?Object(n.a)(Object(n.a)({},e),{mutation:t}):{mutation:t},l=Object(s.useRef)();var p=(l.current||(l.current=new h({options:c,context:r,result:u,setResult:a})),l.current);return p.setOptions(c),p.context=r,Object(s.useEffect)((function(){return p.afterExecute()})),p.execute(u)}!function(t){function e(e){var r=e.options,i=e.context,n=e.setResult,s=t.call(this,r,i)||this;return s.currentObservable={},s.setResult=n,s.initialize(r),s}Object(n.c)(e,t),e.prototype.execute=function(t){if(!0===this.getOptions().skip)return this.cleanup(),{loading:!1,error:void 0,data:void 0,variables:this.getOptions().variables};var e=t;this.refreshClient().isNew&&(e=this.getLoadingResult());var r=this.getOptions().shouldResubscribe;return"function"===typeof r&&(r=!!r(this.getOptions())),!1!==r&&this.previousOptions&&Object.keys(this.previousOptions).length>0&&(this.previousOptions.subscription!==this.getOptions().subscription||!Object(u.a)(this.previousOptions.variables,this.getOptions().variables)||this.previousOptions.skip!==this.getOptions().skip)&&(this.cleanup(),e=this.getLoadingResult()),this.initialize(this.getOptions()),this.startSubscription(),this.previousOptions=this.getOptions(),Object(n.a)(Object(n.a)({},e),{variables:this.getOptions().variables})},e.prototype.afterExecute=function(){this.isMounted=!0},e.prototype.cleanup=function(){this.endSubscription(),delete this.currentObservable.query},e.prototype.initialize=function(t){this.currentObservable.query||!0===this.getOptions().skip||(this.currentObservable.query=this.refreshClient().client.subscribe({query:t.subscription,variables:t.variables,fetchPolicy:t.fetchPolicy}))},e.prototype.startSubscription=function(){this.currentObservable.subscription||(this.currentObservable.subscription=this.currentObservable.query.subscribe({next:this.updateCurrentData.bind(this),error:this.updateError.bind(this),complete:this.completeSubscription.bind(this)}))},e.prototype.getLoadingResult=function(){return{loading:!0,error:void 0,data:void 0}},e.prototype.updateResult=function(t){this.isMounted&&this.setResult(t)},e.prototype.updateCurrentData=function(t){var e=this.getOptions().onSubscriptionData;this.updateResult({data:t.data,loading:!1,error:void 0}),e&&e({client:this.refreshClient().client,subscriptionData:t})},e.prototype.updateError=function(t){this.updateResult({error:t,loading:!1})},e.prototype.completeSubscription=function(){var t=this.getOptions().onSubscriptionComplete;t&&t(),this.endSubscription()},e.prototype.endSubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)}}(c);!function(){function t(){this.queryPromises=new Map,this.queryInfoTrie=new Map}t.prototype.registerSSRObservable=function(t,e){this.lookupQueryInfo(e).observable=t},t.prototype.getSSRObservable=function(t){return this.lookupQueryInfo(t).observable},t.prototype.addQueryPromise=function(t,e){return this.lookupQueryInfo(t.getOptions()).seen?e():(this.queryPromises.set(t.getOptions(),new Promise((function(e){e(t.fetchData())}))),null)},t.prototype.hasPromises=function(){return this.queryPromises.size>0},t.prototype.consumeAndAwaitPromises=function(){var t=this,e=[];return this.queryPromises.forEach((function(r,i){t.lookupQueryInfo(i).seen=!0,e.push(r)})),this.queryPromises.clear(),Promise.all(e)},t.prototype.lookupQueryInfo=function(t){var e=this.queryInfoTrie,r=t.query,i=t.variables,n=e.get(r)||new Map;e.has(r)||e.set(r,n);var s=JSON.stringify(i),o=n.get(s)||{seen:!1,observable:null};return n.has(s)||n.set(s,o),o}}()},440:function(t,e,r){"use strict";var i=r(0),n=r.n(i),s={"c1-footer":n.a.lazy((function(){return r.e(24).then(r.bind(null,453))})),"c2-hero":n.a.lazy((function(){return r.e(26).then(r.bind(null,463))})),"c3-articles-list":n.a.lazy((function(){return Promise.all([r.e(0),r.e(13)]).then(r.bind(null,450))})),"c4-call-to-action":n.a.lazy((function(){return r.e(23).then(r.bind(null,452))})),"c5-featured-events":n.a.lazy((function(){return Promise.all([r.e(2),r.e(7),r.e(20)]).then(r.bind(null,459))})),"c6-partners":n.a.lazy((function(){return r.e(21).then(r.bind(null,460))})),"c7-header":n.a.lazy((function(){return r.e(25).then(r.bind(null,430))})),"c8-quickscan-profile-hero":n.a.lazy((function(){return r.e(28).then(r.bind(null,464))})),"c9-quickscan-profile-sidebar":n.a.lazy((function(){return r.e(29).then(r.bind(null,465))})),"c10-quickscan-profile-body":n.a.lazy((function(){return r.e(27).then(r.bind(null,462))})),"c11-rich-text":n.a.lazy((function(){return Promise.all([r.e(1),r.e(22)]).then(r.bind(null,451))}))};e.a=function(t){var e=t.blocks,r=t.context;return n.a.createElement(i.Fragment,null,e.map((function(t){var e=s[t.type];if(!e)throw new Error("Block ".concat(t.type," does not exist"));return n.a.createElement(e,Object.assign({},r,t.data,{key:t.type}))})))}},487:function(t,e,r){"use strict";r.r(e);var i=r(0),n=r.n(i),s=r(41),o=r(429),u=r(75),a=r(440),c=r(151),l={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"content"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"page"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"blocks"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:85,source:{body:"query content($slug: String) {\r\n  page(slug: $slug) {\r\n    slug\r\n    blocks\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},p=n.a.lazy((function(){return Promise.resolve().then(r.bind(null,213))})),b=function(){var t=Object(s.h)().slug,e=void 0===t?"homepage":t,r=Object(i.useContext)(u.a).getValue(u.b.TargetGroup),b=Object(i.useMemo)((function(){return{slug:e,target:r}}),[e,r]),h=Object(o.b)(l,{variables:b}),d=h.loading,v=h.data,y=h.error;if(y)return n.a.createElement(p,{apolloError:y});if(d)return n.a.createElement(c.a,null);var f=v.page.blocks.map(JSON.parse);return n.a.createElement(a.a,{blocks:f})};r.d(e,"default",(function(){return b}))}}]);
//# sourceMappingURL=18.dac013eb.chunk.js.map