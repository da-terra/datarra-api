(window["webpackJsonpdata-science-platform"]=window["webpackJsonpdata-science-platform"]||[]).push([[0],{431:function(e,t,a){"use strict";function n(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}a.d(t,"a",(function(){return n}))},437:function(e,t,a){"use strict";function n(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}a.d(t,"a",(function(){return n}))},446:function(e,t,a){"use strict";function n(e){return function(t){var a=t||{},n=a.width?String(a.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}a.d(t,"a",(function(){return n}))},447:function(e,t,a){"use strict";function n(e){return function(t,a){var n,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;n=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,d=r.width?String(r.width):e.defaultWidth;n=e.values[d]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(t):t]}}a.d(t,"a",(function(){return n}))},448:function(e,t,a){"use strict";function n(e){return function(t,a){var n=String(t),r=a||{},i=n.match(e.matchPattern);if(!i)return null;var o=i[0],u=n.match(e.parsePattern);if(!u)return null;var d=e.valueCallback?e.valueCallback(u[0]):u[0];return{value:d=r.valueCallback?r.valueCallback(d):d,rest:n.slice(o.length)}}}a.d(t,"a",(function(){return n}))},449:function(e,t,a){"use strict";function n(e){return function(t,a){var n=String(t),r=a||{},i=r.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=n.match(o);if(!u)return null;var d,s=u[0],m=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(m)?m.findIndex((function(e){return e.test(n)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(m,(function(e){return e.test(n)})),d=e.valueCallback?e.valueCallback(d):d,{value:d=r.valueCallback?r.valueCallback(d):d,rest:n.slice(s.length)}}}a.d(t,"a",(function(){return n}))},455:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=6e4;function r(e){var t=new Date(e.getTime()),a=t.getTimezoneOffset();t.setSeconds(0,0);var r=t.getTime()%n;return a*n+r}},461:function(e,t,a){"use strict";var n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};var r=a(446),i={date:Object(r.a)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Object(r.a)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Object(r.a)({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};var u=a(447);var d={ordinalNumber:function(e,t){var a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},era:Object(u.a)({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Object(u.a)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(u.a)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Object(u.a)({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Object(u.a)({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},s=a(448),m=a(449),c={formatDistance:function(e,t,a){var r;return a=a||{},r="string"===typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"in "+r:r+" ago":r},formatLong:i,formatRelative:function(e,t,a,n){return o[e]},localize:d,match:{ordinalNumber:Object(s.a)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(m.a)({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Object(m.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(m.a)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(m.a)({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Object(m.a)({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};t.a=c},474:function(e,t,a){"use strict";var n={lessThanXSeconds:{one:"minder dan een seconde",other:"minder dan {{count}} seconden"},xSeconds:{one:"1 seconde",other:"{{count}} seconden"},halfAMinute:"een halve minuut",lessThanXMinutes:{one:"minder dan een minuut",other:"minder dan {{count}} minuten"},xMinutes:{one:"een minuut",other:"{{count}} minuten"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} uur"},xHours:{one:"1 uur",other:"{{count}} uur"},xDays:{one:"1 dag",other:"{{count}} dagen"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maanden"},xMonths:{one:"1 maand",other:"{{count}} maanden"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer dan 1 jaar",other:"meer dan {{count}} jaar"},almostXYears:{one:"bijna 1 jaar",other:"bijna {{count}} jaar"}};var r=a(446),i={date:Object(r.a)({formats:{full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd-MM-y"},defaultWidth:"full"}),time:Object(r.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(r.a)({formats:{full:"{{date}} 'om' {{time}}",long:"{{date}} 'om' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'afgelopen' eeee 'om' p",yesterday:"'gisteren om' p",today:"'vandaag om' p",tomorrow:"'morgen om' p",nextWeek:"eeee 'om' p",other:"P"};var u=a(447);var d={ordinalNumber:function(e){return Number(e)+"e"},era:Object(u.a)({values:{narrow:["v.C.","n.C."],abbreviated:["v.Chr.","n.Chr."],wide:["voor Christus","na Christus"]},defaultWidth:"wide"}),quarter:Object(u.a)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1e kwartaal","2e kwartaal","3e kwartaal","4e kwartaal"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(u.a)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mrt.","apr.","mei.","jun.","jul.","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]},defaultWidth:"wide"}),day:Object(u.a)({values:{narrow:["Z","M","D","W","D","V","Z"],short:["zo","ma","di","wo","do","vr","za"],abbreviated:["zon","maa","din","woe","don","vri","zat"],wide:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},defaultWidth:"wide"}),dayPeriod:Object(u.a)({values:{narrow:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middaguur",morning:"'s ochtends",afternoon:"'s middags",evening:"'s avonds",night:"'s nachts"},abbreviated:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middaguur",morning:"'s ochtends",afternoon:"'s middags",evening:"'s avonds",night:"'s nachts"},wide:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middaguur",morning:"'s ochtends",afternoon:"'s middags",evening:"'s avonds",night:"'s nachts"}},defaultWidth:"wide"})},s=a(448),m=a(449),c={formatDistance:function(e,t,a){var r;return a=a||{},r="string"===typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?"over "+r:r+" geleden":r},formatLong:i,formatRelative:function(e,t,a,n){return o[e]},localize:d,match:{ordinalNumber:Object(s.a)({matchPattern:/^(\d+)e?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(m.a)({matchPatterns:{narrow:/^([vn]\.? ?C\.?)/,abbreviated:/^([vn]\. ?Chr\.?)/,wide:/^((voor|na) Christus)/},defaultMatchWidth:"wide",parsePatterns:{any:[/^v/,/^n/]},defaultParseWidth:"any"}),quarter:Object(m.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234]e kwartaal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(m.a)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mrt|apr|mei|jun|jul|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^jan/i,/^feb/i,/^m(r|a)/i,/^apr/i,/^mei/i,/^jun/i,/^jul/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i]},defaultParseWidth:"any"}),day:Object(m.a)({matchPatterns:{narrow:/^[zmdwv]/i,short:/^(zo|ma|di|wo|do|vr|za)/i,abbreviated:/^(zon|maa|din|woe|don|vri|zat)/i,wide:/^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^z/i,/^m/i,/^d/i,/^w/i,/^d/i,/^v/i,/^z/i],any:[/^zo/i,/^ma/i,/^di/i,/^wo/i,/^do/i,/^vr/i,/^za/i]},defaultParseWidth:"any"}),dayPeriod:Object(m.a)({matchPatterns:{any:/^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^am/i,pm:/^pm/i,midnight:/^middernacht/i,noon:/^het middaguur/i,morning:/ochtend/i,afternoon:/middag/i,evening:/avond/i,night:/nacht/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};t.a=c},476:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(431),r=a(437);function i(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object(r.a)(e);return Object(n.a)(1e3*t)}},482:function(e,t,a){"use strict";var n=a(431);function r(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var a=Object(n.a)(e),r=Object(n.a)(t),i=a.getTime()-r.getTime();return i<0?-1:i>0?1:i}function i(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var a=Object(n.a)(e),i=Object(n.a)(t),o=r(a,i),u=Math.abs(function(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var a=Object(n.a)(e),r=Object(n.a)(t);return 12*(a.getFullYear()-r.getFullYear())+(a.getMonth()-r.getMonth())}(a,i));a.setMonth(a.getMonth()-o*u);var d=o*(u-(r(a,i)===-o));return 0===d?0:d}function o(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var a=function(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var a=Object(n.a)(e),r=Object(n.a)(t);return a.getTime()-r.getTime()}(e,t)/1e3;return a>0?Math.floor(a):Math.ceil(a)}var u=a(461);function d(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var a in t=t||{})t.hasOwnProperty(a)&&(e[a]=t[a]);return e}({},e)}var s=a(455),m=1440,c=2520,h=43200,l=86400;function f(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");return function(e,t,a){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var f=a||{},g=f.locale||u.a;if(!g.formatDistance)throw new RangeError("locale must contain formatDistance property");var b=r(e,t);if(isNaN(b))throw new RangeError("Invalid time value");var v,w,y=d(f);y.addSuffix=Boolean(f.addSuffix),y.comparison=b,b>0?(v=Object(n.a)(t),w=Object(n.a)(e)):(v=Object(n.a)(e),w=Object(n.a)(t));var p,j=o(w,v),M=(Object(s.a)(w)-Object(s.a)(v))/1e3,O=Math.round((j-M)/60);if(O<2)return f.includeSeconds?j<5?g.formatDistance("lessThanXSeconds",5,y):j<10?g.formatDistance("lessThanXSeconds",10,y):j<20?g.formatDistance("lessThanXSeconds",20,y):j<40?g.formatDistance("halfAMinute",null,y):j<60?g.formatDistance("lessThanXMinutes",1,y):g.formatDistance("xMinutes",1,y):0===O?g.formatDistance("lessThanXMinutes",1,y):g.formatDistance("xMinutes",O,y);if(O<45)return g.formatDistance("xMinutes",O,y);if(O<90)return g.formatDistance("aboutXHours",1,y);if(O<m){var W=Math.round(O/60);return g.formatDistance("aboutXHours",W,y)}if(O<c)return g.formatDistance("xDays",1,y);if(O<h){var P=Math.round(O/m);return g.formatDistance("xDays",P,y)}if(O<l)return p=Math.round(O/h),g.formatDistance("aboutXMonths",p,y);if((p=i(w,v))<12){var D=Math.round(O/h);return g.formatDistance("xMonths",D,y)}var S=p%12,k=Math.floor(p/12);return S<3?g.formatDistance("aboutXYears",k,y):S<9?g.formatDistance("overXYears",k,y):g.formatDistance("almostXYears",k+1,y)}(e,Date.now(),t)}a.d(t,"a",(function(){return f}))}}]);
//# sourceMappingURL=0.656cfb76.chunk.js.map