(this.webpackJsonpk_music=this.webpackJsonpk_music||[]).push([[1],{129:function(e,t,n){e.exports=n(187)},155:function(e,t,n){},16:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return m})),n.d(t,"f",(function(){return b})),n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return p}));var a=n(38),c=n.n(a),r=n(48),o=n(71),l=n(43),u=Object(l.b)("player/getSongUrl",function(){var e=Object(r.a)(c.a.mark((function e(t,n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.dispatch,e.next=3,Object(o.g)(t.id);case 3:return r=e.sent,a(f({url:r.data.data[0].url})),a(d({index:t.index})),e.abrupt("return",{autoPlay:t.autoPlay});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),i=Object(l.c)({name:"player",initialState:{currentIndex:-1,currentUrl:"",playing:!1,loop:!1,playedSeconds:0,list:[]},extraReducers:function(e){e.addCase(u.fulfilled,(function(e,t){e.playing=t.payload.autoPlay}))},reducers:{setSongList:function(e,t){e.list=t.payload.data,e.currentIndex=0},setPlayedSconds:function(e,t){e.playedSeconds=t.payload.playedSeconds},setPlaying:function(e,t){e.playing=t.payload.playing},setCurrentUrl:function(e,t){e.currentUrl=t.payload.url},setCurrentIndex:function(e,t){e.currentIndex=t.payload.index},togglePlaying:function(e,t){var n=t.payload.playing;e.playing=n}}}),s=i.actions,m=s.setSongList,d=s.setCurrentIndex,f=s.setCurrentUrl,b=s.togglePlaying,v=s.setPlaying,p=s.setPlayedSconds;t.a=i.reducer},185:function(e,t,n){},186:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n(0),r=n.n(c),o=n(83),l=n(7),u=n(41),i=n(2),s=n.n(i),m=n(64),d=n.n(m),f=n(22),b=n(196),v=n(192),p=n(9),j=n(16),O=n(58),y=n(193),g=n(89),E=n.n(g),h=n(42),x=function(e){var t=Object(c.useState)(e.volume),n=Object(a.a)(t,2),o=n[0],l=n[1],u=Object(c.useState)(!1),i=Object(a.a)(u,2),s=i[0],m=i[1],d=Object(c.useRef)(null);Object(h.c)(d,(function(){return m(!1)}));var b=Object(c.useCallback)((function(t){l(t),e.onChange(t)}),[e]),p=Object(c.useCallback)((function(e){m(e)}),[]),j=Object(c.useCallback)((function(e){p(!1)}),[p]);return r.a.createElement("div",{className:E.a.volume,ref:d},r.a.createElement(y.a,{onClick:function(){return p(!s)},type:"text",icon:r.a.createElement(f.a,{type:"icon-volume"})}),s&&r.a.createElement("div",{className:E.a.content},r.a.createElement(v.a,{value:o,min:0,max:100,onChange:b,onAfterChange:j})))},k=n(38),N=n.n(k),C=n(48),_=n(195),S=n(46),w=n(76),B=n.n(w),I=function(e){var t=e.className,n=e.children,o=e.getContainerDom,l=r.a.useState({}),u=Object(a.a)(l,2),i=u[0],m=u[1],d=r.a.useState(!0),f=Object(a.a)(d,2),b=f[0],v=f[1],p=Object(c.useRef)(null),j=Object(c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.current;if(e){var t=e.clientHeight,n=e.scrollHeight,a=e.scrollTop,c=Math.pow(t,2)/n,r=a*(t-c)/(n-t);r!==r?v(!1):(v(!0),m({height:c,top:r}))}}),[]),O=r.a.useCallback((function(e){j(e.target)}),[j]);return Object(c.useEffect)((function(){var e=p.current;return o&&o(e),e.addEventListener("scroll",O),function(){return e.removeEventListener("scroll",O)}}),[o,O]),r.a.createElement("div",{className:s()(B.a.container,t)},r.a.createElement("div",{ref:p,className:B.a.scrollContent},n),b&&r.a.createElement("div",{className:B.a.scrollBar},r.a.createElement("span",{style:Object(S.a)({},i)})))},P=n(71),L=n(123),R=n(191),T=n(77),A=n.n(T),F=/\[(\d{2}):(\d{2}\.\d{1,3})\]/g,H=function(e,t){var n=null,a=e.scrollTop,c=t-a;window.requestAnimationFrame((function t(r){n||(n=r);var o=(r-n)/600,l=Object(R.a)(o);l>1&&(l=1);var u=c*l;e.scrollTop=u+a,l<1&&window.requestAnimationFrame(t)}))},U=function(e){var t=Object(p.c)((function(e){return e.player})).playedSeconds,n=Object(c.useMemo)((function(){return function(e){if(!e)return[];for(var t=e.split("\n"),n=[],a=0;a<t.length;a++){var c=t[a],r=F.exec(c);if(r){var o=c.replace(F,"").trim();o&&n.push({time:60*r[1]+1*r[2],txt:o})}}return n.sort((function(e,t){return e.time-t.time})),n}(e.lyric)}),[e.lyric]),o=Object(c.useMemo)((function(){return n.map((function(e){return e.time}))}),[n]),l=Object(c.useRef)(document.getElementsByClassName("lyric")),i=Object(c.useState)(0),m=Object(a.a)(i,2),d=m[0],f=m[1],b=Object(c.useState)(null),v=Object(a.a)(b,2),j=v[0],O=v[1];return Object(c.useEffect)((function(){f(function(e,t){var n=t.length;if(e<=t[0])return 0;if(e>=t[n-1])return n-1;var a,c=0,r=Object(L.a)(t);try{for(r.s();!(a=r.n()).done;){var o=a.value;if(o>e){c=t.indexOf(o)-1;break}}}catch(l){r.e(l)}finally{r.f()}return c}(t,o))}),[t,o]),Object(c.useEffect)((function(){var e,t;l.current.length>0&&(e=j,t=l.current[d],e&&(t.offsetTop>180?H(e,t.offsetTop-180):H(e,0)))}),[d,j]),r.a.createElement(I,{getContainerDom:function(e){return O(e)}},r.a.createElement("div",{className:A.a.lyrContainer},n.map((function(e,t){return r.a.createElement("div",{className:s()("lyric",A.a.line,Object(u.a)({},A.a.active,d===t)),key:e.time+e.txt},e.txt)}))))},z=n(19),J=n.n(z),M=function(){var e,t=Object(p.c)((function(e){return e.player})),n=t.list,o=t.playing,l=t.currentIndex,u=Object(p.b)(),i=Object(c.useState)(!1),s=Object(a.a)(i,2),m=s[0],d=s[1],b=Object(c.useState)(""),v=Object(a.a)(b,2),g=v[0],E=v[1],h=Object(c.useCallback)((function(e){d(e)}),[]),x=Object(c.useCallback)((function(e){var t=n.findIndex((function(t){return t.id===e}));u(Object(j.b)({id:e,index:t,autoPlay:!0}))}),[n,u]);return Object(c.useEffect)((function(){E(""),function(){var e=Object(C.a)(N.a.mark((function e(){var t,a,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=null===(t=n[l])||void 0===t?void 0:t.id)){e.next=6;break}return e.next=4,Object(P.f)(a);case 4:(c=e.sent).data.lrc&&E(c.data.lrc.lyric);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[l,n]),r.a.createElement("div",{className:J.a.list},r.a.createElement(_.a,{count:n.length,overflowCount:99,size:"small",offset:[5,0]},r.a.createElement(y.a,{onClick:function(){return h(!m)},type:"text",icon:r.a.createElement(f.a,{type:"icon-music-list"})})),m&&r.a.createElement("div",{className:J.a.container},r.a.createElement("div",{className:J.a.backImg,style:{backgroundImage:"url('".concat(null===(e=n[l])||void 0===e?void 0:e.coverImgUrl,"')")}}),r.a.createElement("div",{className:J.a.content},r.a.createElement("div",{className:J.a.listBox},r.a.createElement("div",{className:J.a.head},"\u64ad\u653e\u5217\u8868"),r.a.createElement(I,null,n.map((function(e,t){return r.a.createElement("div",{key:e.id,className:J.a.item},r.a.createElement("div",{className:J.a.index},t+1),r.a.createElement("div",{className:J.a.songName},e.name),r.a.createElement("div",{className:J.a.songCreator},e.authors),r.a.createElement("div",{className:J.a.second},r.a.createElement(O.a,{seconds:e.seconds})),r.a.createElement("div",{className:J.a.canPlaying},r.a.createElement(y.a,{shape:"circle",type:"ghost",size:"small",onClick:function(){return x(e.id)},icon:t===l&&o?r.a.createElement(f.a,{type:"icon-pause"}):r.a.createElement(f.a,{type:"icon-play"})})))})))),r.a.createElement("div",{className:J.a.lyricBox},r.a.createElement("div",{className:J.a.head},"\u6b4c\u8bcd"),g?r.a.createElement(U,{lyric:g}):r.a.createElement("div",{className:J.a.noLyric},"\u6682\u65e0\u6b4c\u8bcd")))))},W=function(e){var t=Object(p.c)((function(e){return e.player})),n=t.currentIndex,a=t.list,o=Object(p.b)(),l=Object(c.useMemo)((function(){return n>0}),[n]),u=Object(c.useCallback)((function(){var e=n-1;o(Object(j.b)({id:a[e].id,index:e,autoPlay:!0}))}),[a,n,o]);return r.a.createElement("div",{className:e.className},r.a.createElement(y.a,{onClick:u,disabled:!l,shape:"circle",type:"ghost",icon:r.a.createElement(f.a,{type:"icon-prev"})}))},q=function(e){var t=Object(p.c)((function(e){return e.player})),n=t.currentIndex,a=t.list,o=Object(p.b)(),l=Object(c.useMemo)((function(){return n<a.length-1}),[n,a]),u=Object(c.useCallback)((function(){var e=n+1;o(Object(j.b)({id:a[e].id,index:e,autoPlay:!0}))}),[a,n,o]);return r.a.createElement("div",{className:e.className},r.a.createElement(y.a,{onClick:u,disabled:!l,shape:"circle",type:"ghost",icon:r.a.createElement(f.a,{type:"icon-next"})}))},V=function(e){var t=Object(p.c)((function(e){return e.player})),n=t.list,a=t.playing,o=Object(p.b)(),l=Object(c.useMemo)((function(){return n.length>0}),[n]),u=Object(c.useCallback)((function(e){o(Object(j.f)({playing:e}))}),[o]);return r.a.createElement("div",{className:e.className},r.a.createElement(y.a,{disabled:!l,onClick:function(){return u(!a)},shape:"circle",type:"ghost",size:"large",icon:a?r.a.createElement(f.a,{style:{fontSize:25},type:"icon-pause"}):r.a.createElement(f.a,{type:"icon-play"})}))},G=n(20),D=n.n(G),K=function(){var e,t,n,o,l,i=Object(p.c)((function(e){return e.player})),m=i.currentIndex,d=i.currentUrl,f=i.list,y=i.playing,g=Object(p.b)(),E=Object(c.useRef)(null),k=Object(c.useState)(0),N=Object(a.a)(k,2),C=N[0],_=N[1],S=Object(c.useState)(0),w=Object(a.a)(S,2),B=w[0],I=w[1],P=Object(c.useState)(!1),L=Object(a.a)(P,2),R=L[0],T=L[1],A=Object(c.useState)(60),F=Object(a.a)(A,2),H=F[0],U=F[1],z=Object(c.useCallback)((function(){if(m<f.length-1){var e=m+1;g(Object(j.b)({id:f[e].id,index:e,autoPlay:!0}))}else g(Object(j.d)({playing:!1}))}),[f,m,g]),J=Object(c.useCallback)((function(){g(Object(j.c)({playedSeconds:E.current.currentTime})),R||_(E.current.currentTime)}),[R,g]),G=Object(c.useCallback)((function(){I(E.current.duration)}),[]),K=Object(c.useCallback)((function(e){U(e)}),[]),X=Object(c.useCallback)((function(e){T(!0),_(e)}),[]),Q=Object(c.useCallback)((function(e){T(!1),E.current.currentTime=e}),[]);return Object(c.useEffect)((function(){E.current.volume=H/100}),[H]),Object(c.useEffect)((function(){y?E.current.play():E.current.pause()}),[m,y]),Object(c.useEffect)((function(){_(0)}),[m]),Object(h.a)("timeupdate",J,E),Object(h.a)("ended",z,E),Object(h.a)("durationchange",G,E),r.a.createElement("div",{className:D.a.player},r.a.createElement("audio",{ref:E,src:d,preload:"auto"}),r.a.createElement("div",{className:D.a.audio},r.a.createElement("div",{className:D.a.controller},r.a.createElement(W,{className:D.a.button}),r.a.createElement(V,{className:D.a.button}),r.a.createElement(q,{className:D.a.button})),r.a.createElement("div",{className:D.a.main},r.a.createElement(b.a,{className:s()(D.a.coverImage,Object(u.a)({},D.a.spin,y)),src:null!==(e=null===(t=f[m])||void 0===t?void 0:t.coverImgUrl)&&void 0!==e?e:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),r.a.createElement("div",{className:D.a.content},r.a.createElement("div",{className:D.a.head},r.a.createElement("div",null,null!==(n=null===(o=f[m])||void 0===o?void 0:o.name)&&void 0!==n?n:"\u6682\u65e0"),r.a.createElement("div",null,r.a.createElement(O.a,{seconds:C}),"/",r.a.createElement(O.a,{seconds:B}))),r.a.createElement("div",{className:D.a.progress},r.a.createElement(v.a,{onAfterChange:Q,onChange:X,defaultValue:0,tooltipVisible:!1,value:C,max:Math.floor(null===(l=f[m])||void 0===l?void 0:l.seconds)})))),r.a.createElement("div",{className:D.a.menu},r.a.createElement("div",{className:D.a.button},r.a.createElement(x,{volume:H,onChange:K})),r.a.createElement("div",{className:D.a.button},r.a.createElement(M,null)))))},X=function(){var e=Object(c.useState)(!0),t=Object(a.a)(e,2),n=t[0],o=t[1],l=Object(c.useCallback)((function(e){o(e)}),[]);return r.a.createElement("div",{className:s()(d.a.playerBox,Object(u.a)({},d.a.locked,n))},r.a.createElement("div",{className:d.a.lockBox,onClick:function(){return l(!n)}},r.a.createElement(f.a,{type:n?"icon-lock_fill":"icon-unlock_fill"})),r.a.createElement("div",{className:d.a.player},r.a.createElement(K,null)))},Q=(n(185),r.a.lazy((function(){return Promise.all([n.e(0),n.e(5),n.e(6)]).then(n.bind(null,277))}))),Y=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(7)]).then(n.bind(null,278))}));t.default=function(){var e=Object(p.b)(),t=Object(h.b)("cache-song-list",null),n=Object(a.a)(t,1)[0];return Object(c.useEffect)((function(){n&&(e(Object(j.e)({data:n})),e(Object(j.b)({id:n[0].id,index:0,autoPlay:!1})))}),[n,e]),r.a.createElement(c.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(r.a.Suspense,{fallback:"\u52a0\u8f7d\u4e2d..."},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:Q}),r.a.createElement(l.a,{path:"/album/:id?",exact:!0,component:Y})))),r.a.createElement(X,null))}},187:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),l=n(9);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(124),i=n(43),s=n(118),m=n.n(s),d=n(32),f=n(16),b=Object(d.c)({player:f.a});[].concat(Object(u.a)(Object(i.d)({serializableCheck:!1})),[m.a]);var v=Object(i.a)({reducer:b,devTools:!1,middleware:Object(i.d)()});n(155);!function(){var e=n(186).default;o.a.render(c.a.createElement(l.a,{store:v},c.a.createElement(e,null)),document.getElementById("root"))}(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},19:function(e,t,n){e.exports={list:"a6LQ8jH5s49G351r4ry7A",container:"_2Ex41Yg_HOsOU7-4IRjHd6",backImg:"_2QytdlD314vM28E_GjkCsB",content:"_2sVBbfzRY1t02kW6eFtVUL",listBox:"_1Hhoot-IWJearnO66CCcGc",item:"_1ipFW7xxMy_LMa93DRLtAm",index:"_2ZaAShsI4txn8XRiKMSyNh",songName:"_3Rd8d84-JHQMmWw5400qST",songCreator:"_1ws7ebM5Qg-eWBGUyDKofa",second:"_16OakXNbCl67ve9HL3mlJw",canPlaying:"_3XqRWv2yA9kg7k6hWTjJR4",lyricBox:"_35EbM6I0BzHk5Qtw_KG4iq",noLyric:"_1-sA9-yTHUVggM-APKVpas",head:"_2H1WObJgHWY9rZqdPvlqBV"}},20:function(e,t,n){e.exports={hoverBox:"lxJgT-fjjXw_7rraI7bYO",player:"_3DhximAgjXprNcUZvJJBb4",audio:"_1Pe6zvjWU7bP1BxTzrxfas",controller:"_25Bhje6NAFAFpknQ8HFM4R",button:"rurHG8HbXrba9qsVi4f3_",menu:"tgQynu_4eKMbG5-UX8NkB",main:"_2LSEyGu8uCYgyGJBEVdlkJ",coverImage:"_2pf_EtHe9NDw5Z8fvato1L",spin:"_30ngn5ABA0-3TrCmuuUD_R",rotate:"VV3QjzPv7HgLzppge8uuk",content:"_2LqOGvkdyJ1x7e0HI66wJg",head:"_1RbOSRgvGKJaxeyTPBFW7m",progress:"G4ENEoFI9vPatAgt8CmgA"}},22:function(e,t,n){"use strict";var a=n(188),c=Object(a.a)({scriptUrl:"//at.alicdn.com/t/font_2060370_k34zyn39meh.js"});t.a=c},42:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return d}));var a=n(46),c=n(8),r=n(0),o=n(7),l=n(120),u=n.n(l);function i(e,t){var n=Object(r.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),a=Object(c.a)(n,2),o=a[0],l=a[1];return[o,function(t){try{var n=t instanceof Function?t(o):t;l(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]}function s(){var e=Object(o.h)(),t=Object(o.g)(),n=Object(o.f)(),c=Object(o.i)();return Object(r.useMemo)((function(){return{push:n.push,replace:n.replace,pathname:t.pathname,query:Object(a.a)(Object(a.a)({},u.a.parse(t.search)),e),match:c,location:t,history:n}}),[e,c,t,n])}function m(e,t,n){var a=Object(r.useRef)();Object(r.useEffect)((function(){var c=(null===n||void 0===n?void 0:n.current)||window;if(c&&c.addEventListener){a.current!==t&&(a.current=t);var r=function(e){(null===a||void 0===a?void 0:a.current)&&a.current(e)};return c.addEventListener(e,r),function(){c.removeEventListener(e,r)}}}),[e,n,t])}function d(e,t){Object(r.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])}},58:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=n(119),o=n.n(r);t.a=function(e){return c.a.createElement("span",{className:e.className},o()((t=e.seconds,new Date(1e3*t))).utcOffset(0).format("mm:ss"));var t}},64:function(e,t,n){e.exports={playerBox:"_1URRVA-GI-BhQrZHYVMx7q",lockBox:"_3x_32CtSBvIaSYOhs1xoFw",locked:"_1KXt7a7thzbSV41Jrlm5r3",player:"_2FmyDK_X0toHzM-xWlgwrg"}},71:function(e,t,n){"use strict";n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return O})),n.d(t,"e",(function(){return y})),n.d(t,"g",(function(){return g})),n.d(t,"f",(function(){return E}));var a=n(38),c=n.n(a),r=n(48),o=n(88),l=n.n(o),u={baseURL:"/",transformResponse:[function(e){return e}],timeout:3e4,responseType:"json",maxContentLength:2e3,validateStatus:function(e){return e>=200&&e<300}},i=[],s=l.a.CancelToken,m=function(e){for(var t in i){var n=t,a=i[t];a.url===e.url+"&request_type="+e.method&&(a.cancel(),i.splice(n,1))}},d=l.a.create(u);d.interceptors.request.use(function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(t),e.next=3,new s((function(e){i.push({url:t.url+"&request_type="+t.method,cancel:e})}));case 3:return t.cancelToken=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),d.interceptors.response.use((function(e){return m(e.config),e}),(function(e){return Promise.reject(e)}));var f=d,b="https://api.xujianfeng.club";function v(e){return f.get("".concat(b,"/banner?type=").concat(e))}function p(){return f.get("".concat(b,"/playlist/catlist"))}function j(e){var t=e.limit,n=e.cat,a=e.offset,c=void 0===a?0:a,r=e.order,o=void 0===r?"hot":r;return f.get("".concat(b,"/top/playlist/?limit=").concat(t,"&order=").concat(o,"&offset=").concat(c,"&cat=").concat(n))}function O(e){return f.get("".concat(b,"/playlist/detail?id=").concat(e))}function y(e){return f.get("".concat(b,"/song/detail?ids=").concat(e))}function g(e){return f.get("".concat(b,"/song/url?id=").concat(e))}function E(e){return f.get("".concat(b,"/lyric?id=").concat(e))}},76:function(e,t,n){e.exports={container:"_1y9RWNpnFF9NnWRjrpfKOK",scrollContent:"_1lIo99iXuF_CW3FF83M_DZ",scrollBar:"_1_rEIrL1zBBv65zuNSJ9E7"}},77:function(e,t,n){e.exports={lyrContainer:"_1a6TKPrmA2yA-mdG0ocUF7",line:"_3xHnyZFn_a2C6Pr6h7xKOP",active:"Uiru2n3655rzFDIkKA2BE"}},89:function(e,t,n){e.exports={volume:"_14kz-6xQSn7TCbxYi2SFtB",content:"UhJJOr8LRnntL8T0glbT2"}}},[[129,2,3]]]);
//# sourceMappingURL=main.5ad52201.chunk.js.map