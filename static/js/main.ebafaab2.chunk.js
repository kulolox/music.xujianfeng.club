(this.webpackJsonpk_music=this.webpackJsonpk_music||[]).push([[1],{128:function(e,t,n){e.exports=n(187)},155:function(e,t,n){},16:function(e,t,n){e.exports={list:"a6LQ8jH5s49G351r4ry7A",button:"_3K96JepUZHFKVptpAKLmjX",container:"_2Ex41Yg_HOsOU7-4IRjHd6",backImg:"_2QytdlD314vM28E_GjkCsB",content:"_2sVBbfzRY1t02kW6eFtVUL",listBox:"_1Hhoot-IWJearnO66CCcGc",item:"_1ipFW7xxMy_LMa93DRLtAm",index:"_2ZaAShsI4txn8XRiKMSyNh",songName:"_3Rd8d84-JHQMmWw5400qST",songCreator:"_1ws7ebM5Qg-eWBGUyDKofa",second:"_16OakXNbCl67ve9HL3mlJw",canPlaying:"_3XqRWv2yA9kg7k6hWTjJR4",lyricBox:"_35EbM6I0BzHk5Qtw_KG4iq",noLyric:"_1-sA9-yTHUVggM-APKVpas",head:"_2H1WObJgHWY9rZqdPvlqBV",hide:"eYsMHA9E5E1QSuKHxSRBQ"}},17:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return d})),n.d(t,"a",(function(){return m})),n.d(t,"g",(function(){return f})),n.d(t,"e",(function(){return b})),n.d(t,"d",(function(){return v}));var a=n(49),c=n.n(a),r=n(69),o=n(45),l=n(68),i=Object(o.b)("player/getSongUrl",function(){var e=Object(r.a)(c.a.mark((function e(t,n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,n.dispatch)(b(!1)),e.next=4,Object(l.g)(t.id);case 4:return a=e.sent,e.abrupt("return",{autoPlay:t.autoPlay,index:t.index,url:a.data.data[0].url});case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),u=Object(o.c)({name:"player",initialState:{currentIndex:-1,currentUrl:"",playing:!1,loop:!1,volume:60,playedSeconds:0,list:[]},extraReducers:function(e){e.addCase(i.fulfilled,(function(e,t){var n=t.payload,a=n.index,c=n.url,r=n.autoPlay;e.currentIndex=a,e.currentUrl=c,e.playing=r}))},reducers:{setSongList:function(e,t){e.list=t.payload.data,e.currentIndex=0},changeVolume:function(e,t){e.volume=t.payload.volume},setPlayedSconds:function(e,t){e.playedSeconds=t.payload.playedSeconds},setPlaying:function(e,t){e.playing=t.payload.playing},setCurrentUrl:function(e,t){e.currentUrl=t.payload.url},setCurrentIndex:function(e,t){e.currentIndex=t.payload.index},togglePlaying:function(e,t){var n=t.payload.playing;e.playing=n}}}),s=u.actions,d=s.setSongList,m=(s.setCurrentIndex,s.setCurrentUrl,s.changeVolume),f=s.togglePlaying,b=s.setPlaying,v=s.setPlayedSconds;t.b=u.reducer},185:function(e,t,n){},186:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n(0),r=n.n(c),o=n(85),l=n(7),i=n(29),u=n(1),s=n.n(u),d=n(60),m=n.n(d),f=n(25),b=n(196),v=n(192),p=n(10),y=n(17),j=n(55),O=n(193),g=n(38),E=n(76),h=n.n(E),x=function(){var e=Object(p.c)((function(e){return e.player})).volume,t=Object(p.b)(),n=Object(c.useRef)(null),o=Object(c.useState)(!1),l=Object(a.a)(o,2),u=l[0],d=l[1];Object(g.c)(n,(function(){return d(!1)}));var m=function(){d(!u)};return r.a.createElement("div",{className:h.a.volume,ref:n},r.a.createElement(O.a,{onClick:m,type:"text",icon:r.a.createElement(f.a,{type:"icon-volume"})}),r.a.createElement("div",{className:s()(h.a.content,Object(i.a)({},h.a.hide,!u))},r.a.createElement(v.a,{value:e,min:0,max:100,onChange:function(e){t(Object(y.a)({volume:e}))},onAfterChange:function(){m()}})))},_=n(195),N=n(77),k=n.n(N),C=function(e){var t=e.children,n=e.className,o=e.getContainerDom,l=Object(c.useState)(0),i=Object(a.a)(l,2),u=i[0],d=i[1],m=Object(c.useState)(0),f=Object(a.a)(m,2),b=f[0],v=f[1],p=Object(c.useState)(!1),y=Object(a.a)(p,2),j=y[0],O=y[1],E=Object(c.useRef)(null),h=Object(c.useCallback)((function(e){var t=e.target,n=t.clientHeight,a=t.scrollHeight,c=t.scrollTop;v(c*(n-u)/(a-n))}),[u]);return Object(c.useEffect)((function(){if(e.children&&E.current){var t=E.current,n=t.clientHeight,a=t.scrollHeight;if(a===n)O(!1);else{var c=Math.pow(n,2)/a;O(!0),d(c)}}}),[e.children]),Object(c.useEffect)((function(){o&&o(E.current)}),[o]),Object(g.a)("scroll",h,E),r.a.createElement("div",{className:s()(k.a.container,n)},r.a.createElement("div",{ref:E,className:k.a.scrollContent},t),j&&r.a.createElement("div",{className:k.a.scrollBar},r.a.createElement("span",{style:{height:u,top:b}})))},S=n(68),w=n(123),I=n(191),B=n(78),P=n.n(B),T=/\[(\d{2}):(\d{2}\.\d{1,3})\]/g,U=function(e,t){var n=null,a=e.scrollTop,c=t-a;window.requestAnimationFrame((function t(r){n||(n=r);var o=(r-n)/600,l=Object(I.a)(o);l>1&&(l=1);var i=c*l;e.scrollTop=i+a,l<1&&window.requestAnimationFrame(t)}))},L=function(e){var t=Object(p.c)((function(e){return e.player})).playedSeconds,n=Object(c.useMemo)((function(){return function(e){if(!e)return[];for(var t=e.split("\n"),n=[],a=0;a<t.length;a++){var c=t[a],r=T.exec(c);if(r){var o=c.replace(T,"").trim();o&&n.push({time:60*r[1]+1*r[2],txt:o})}}return n.sort((function(e,t){return e.time-t.time})),n}(e.lyric)}),[e.lyric]),o=Object(c.useMemo)((function(){return n.map((function(e){return e.time}))}),[n]),l=Object(c.useState)(0),u=Object(a.a)(l,2),d=u[0],m=u[1],f=Object(c.useState)(null),b=Object(a.a)(f,2),v=b[0],y=b[1];return Object(c.useEffect)((function(){m(function(e,t){var n=t.length;if(e<=t[0])return 0;if(e>=t[n-1])return n-1;var a,c=0,r=Object(w.a)(t);try{for(r.s();!(a=r.n()).done;){var o=a.value;if(o>e){c=t.indexOf(o)-1;break}}}catch(l){r.e(l)}finally{r.f()}return c}(t,o))}),[t,o]),Object(c.useEffect)((function(){var e,t,n=document.getElementsByClassName("lyric");n.length>0&&(e=v,t=n[d],e&&(t.offsetTop>180?U(e,t.offsetTop-180):U(e,0)))}),[d,v]),r.a.createElement(C,{getContainerDom:y},r.a.createElement("div",{className:P.a.lyrContainer},n.map((function(e,t){return r.a.createElement("div",{className:s()("lyric",P.a.line,Object(i.a)({},P.a.active,d===t)),key:e.time+e.txt},e.txt)}))))},H=n(16),R=n.n(H),A=function(){var e,t=Object(p.c)((function(e){return e.player})),n=t.list,o=t.playing,l=t.currentIndex,u=Object(p.b)(),d=Object(c.useState)(!1),m=Object(a.a)(d,2),b=m[0],v=m[1],g=Object(c.useState)(""),E=Object(a.a)(g,2),h=E[0],x=E[1],N=Object(c.useCallback)((function(e){var t=n.findIndex((function(t){return t.id===e}));u(Object(y.c)({id:e,index:t,autoPlay:!0}))}),[n,u]);return Object(c.useEffect)((function(){var e,t;x("");var a=null===(e=n[l])||void 0===e?void 0:e.id;(null===(t=n[l])||void 0===t?void 0:t.id)&&Object(S.f)(a).then((function(e){e.data.lrc&&x(e.data.lrc.lyric)}))}),[l,n]),r.a.createElement("div",{className:R.a.list},r.a.createElement(_.a,{className:R.a.button,count:n.length,overflowCount:99,size:"small",offset:[5,0]},r.a.createElement(O.a,{onClick:function(){v(!b)},type:"text",icon:r.a.createElement(f.a,{type:"icon-music-list"})})),r.a.createElement("div",{className:s()(R.a.container,Object(i.a)({},R.a.hide,!b))},r.a.createElement("div",{className:R.a.backImg,style:{backgroundImage:"url('".concat(null===(e=n[l])||void 0===e?void 0:e.coverImgUrl,"')")}}),r.a.createElement("div",{className:R.a.content},r.a.createElement("div",{className:R.a.listBox},r.a.createElement("div",{className:R.a.head},"\u64ad\u653e\u5217\u8868"),r.a.createElement(C,null,n.map((function(e,t){return r.a.createElement("div",{key:e.id,className:R.a.item},r.a.createElement("div",{className:R.a.index},t+1),r.a.createElement("div",{className:R.a.songName},e.name),r.a.createElement("div",{className:R.a.songCreator},e.authors),r.a.createElement("div",{className:R.a.second},r.a.createElement(j.a,{seconds:e.seconds})),r.a.createElement("div",{className:R.a.canPlaying},r.a.createElement(O.a,{shape:"circle",type:"ghost",size:"small",onClick:function(){return N(e.id)},icon:t===l&&o?r.a.createElement(f.a,{type:"icon-pause"}):r.a.createElement(f.a,{type:"icon-play"})})))})))),r.a.createElement("div",{className:R.a.lyricBox},r.a.createElement("div",{className:R.a.head},"\u6b4c\u8bcd"),h?r.a.createElement(L,{lyric:h}):r.a.createElement("div",{className:R.a.noLyric},"\u6682\u65e0\u6b4c\u8bcd")))))},J=n(32),M=n.n(J),z=function(e){var t=Object(c.useRef)(null),n=Object(c.useCallback)((function(){e.onTimeUpdate(t.current.currentTime)}),[e]),a=Object(c.useCallback)((function(){e.onDuration(t.current.duration)}),[e]),o=Object(c.useCallback)((function(){e.onEnded()}),[e]);return Object(c.useEffect)((function(){e.playing?t.current.play():t.current.pause()}),[e.playing]),Object(c.useEffect)((function(){t.current.volume=e.volume/100}),[e.volume]),Object(c.useEffect)((function(){t.current.currentTime=e.currentTime}),[e.currentTime]),Object(g.a)("timeupdate",n,t),Object(g.a)("ended",o,t),Object(g.a)("durationchange",a,t),r.a.createElement("audio",{ref:t,src:e.src,preload:"auto"})},F=n(62),K=n.n(F),V=function(){var e=Object(p.c)((function(e){return e.player})),t=e.currentIndex,n=e.list,a=e.playing,o=Object(p.b)(),l=Object(c.useMemo)((function(){return t>0}),[t]),i=Object(c.useMemo)((function(){return n.length>0}),[n]),u=Object(c.useMemo)((function(){return t<n.length-1}),[t,n]);return r.a.createElement("div",{className:K.a.controller},r.a.createElement("div",{className:K.a.button},r.a.createElement(O.a,{onClick:function(){var e=t-1;o(Object(y.c)({id:n[e].id,index:e,autoPlay:!0}))},disabled:!l,shape:"circle",type:"ghost",icon:r.a.createElement(f.a,{type:"icon-prev"})})),r.a.createElement("div",{className:K.a.button},r.a.createElement(O.a,{disabled:!i,onClick:function(){o(Object(y.g)({playing:!a}))},shape:"circle",type:"ghost",size:"large",icon:a?r.a.createElement(f.a,{style:{fontSize:25},type:"icon-pause"}):r.a.createElement(f.a,{type:"icon-play"})})),r.a.createElement("div",{className:K.a.button},r.a.createElement(O.a,{onClick:function(){var e=t+1;o(Object(y.c)({id:n[e].id,index:e,autoPlay:!0}))},disabled:!u,shape:"circle",type:"ghost",icon:r.a.createElement(f.a,{type:"icon-next"})})))},D=function(){var e,t,n,o,l,u=Object(p.c)((function(e){return e.player})),d=u.currentIndex,m=u.currentUrl,f=u.list,O=u.playing,g=u.volume,E=Object(p.b)(),h=Object(c.useState)(0),_=Object(a.a)(h,2),N=_[0],k=_[1],C=Object(c.useState)(0),S=Object(a.a)(C,2),w=S[0],I=S[1],B=Object(c.useState)(0),P=Object(a.a)(B,2),T=P[0],U=P[1],L=Object(c.useState)(!1),H=Object(a.a)(L,2),R=H[0],J=H[1],F=Object(c.useCallback)((function(){if(d<f.length-1){var e=d+1;E(Object(y.c)({id:f[e].id,index:e,autoPlay:!0}))}else E(Object(y.e)({playing:!1}))}),[f,d,E]),K=Object(c.useCallback)((function(e){E(Object(y.d)({playedSeconds:e})),R||k(e)}),[E,R]),D=Object(c.useCallback)((function(e){U(e)}),[]),W=Object(c.useCallback)((function(e){J(!0),k(e)}),[]);return Object(c.useEffect)((function(){k(0),I(0),J(!1)}),[d]),r.a.createElement("div",{className:M.a.player},r.a.createElement(z,{src:m,playing:O,volume:g,currentTime:w,onDuration:D,onEnded:F,onTimeUpdate:K}),r.a.createElement("div",{className:M.a.audio},r.a.createElement(V,null),r.a.createElement("div",{className:M.a.main},r.a.createElement(b.a,{className:s()(M.a.coverImage,Object(i.a)({},M.a.spin,O)),src:null!==(e=null===(t=f[d])||void 0===t?void 0:t.coverImgUrl)&&void 0!==e?e:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),r.a.createElement("div",{className:M.a.content},r.a.createElement("div",{className:M.a.head},r.a.createElement("div",null,null!==(n=null===(o=f[d])||void 0===o?void 0:o.name)&&void 0!==n?n:"\u6682\u65e0"),r.a.createElement("div",null,r.a.createElement(j.a,{seconds:N}),"/",r.a.createElement(j.a,{seconds:T}))),r.a.createElement("div",{className:M.a.progress},r.a.createElement(v.a,{onAfterChange:function(){J(!1),I(N)},onChange:W,defaultValue:0,step:.1,tooltipVisible:!1,value:N,max:Math.floor(null===(l=f[d])||void 0===l?void 0:l.seconds)})))),r.a.createElement("div",{className:M.a.menu},r.a.createElement("div",{className:M.a.button},r.a.createElement(x,null)),r.a.createElement("div",{className:M.a.button},r.a.createElement(A,null)))))},W=function(){var e=Object(c.useState)(!0),t=Object(a.a)(e,2),n=t[0],o=t[1];return r.a.createElement("div",{className:s()(m.a.playerBox,Object(i.a)({},m.a.locked,n))},r.a.createElement("div",{className:m.a.lockBox,onClick:function(){o(!n)}},r.a.createElement(f.a,{type:n?"icon-lock_fill":"icon-unlock_fill"})),r.a.createElement("div",{className:m.a.player},r.a.createElement(D,null)))},q=(n(185),r.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(5)]).then(n.bind(null,282))}))),G=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6),n.e(7)]).then(n.bind(null,283))}));t.default=function(){var e=Object(p.b)(),t=Object(g.b)("cache-song-list",null),n=Object(a.a)(t,1)[0];return Object(c.useEffect)((function(){n&&(e(Object(y.f)({data:n})),e(Object(y.c)({id:n[0].id,index:0,autoPlay:!1})))}),[n,e]),r.a.createElement(c.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(r.a.Suspense,{fallback:"\u52a0\u8f7d\u4e2d..."},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:q}),r.a.createElement(l.a,{path:"/album/:id?",exact:!0,component:G})))),r.a.createElement(W,null))}},187:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),l=n(10);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(45),u=(n(137),n(33)),s=n(17),d=Object(u.c)({player:s.b}),m=Object(i.d)({serializableCheck:!1});var f=Object(i.a)({reducer:d,devTools:!1,middleware:m});n(155);!function(){var e=n(186).default;o.a.render(c.a.createElement(l.a,{store:f},c.a.createElement(e,null)),document.getElementById("root"))}(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,n){"use strict";var a=n(188),c=Object(a.a)({scriptUrl:"//at.alicdn.com/t/font_2060370_k34zyn39meh.js"});t.a=c},32:function(e,t,n){e.exports={hoverBox:"lxJgT-fjjXw_7rraI7bYO",player:"_3DhximAgjXprNcUZvJJBb4",audio:"_1Pe6zvjWU7bP1BxTzrxfas",menu:"tgQynu_4eKMbG5-UX8NkB",button:"rurHG8HbXrba9qsVi4f3_",main:"_2LSEyGu8uCYgyGJBEVdlkJ",coverImage:"_2pf_EtHe9NDw5Z8fvato1L",spin:"_30ngn5ABA0-3TrCmuuUD_R",rotate:"VV3QjzPv7HgLzppge8uuk",content:"_2LqOGvkdyJ1x7e0HI66wJg",head:"_1RbOSRgvGKJaxeyTPBFW7m",progress:"G4ENEoFI9vPatAgt8CmgA"}},38:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return m}));var a=n(61),c=n(8),r=n(0),o=n(7),l=n(120),i=n.n(l);function u(e,t){var n=Object(r.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),a=Object(c.a)(n,2),o=a[0],l=a[1];return[o,function(t){try{var n=t instanceof Function?t(o):t;l(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]}function s(){var e=Object(o.h)(),t=Object(o.g)(),n=Object(o.f)(),c=Object(o.i)();return Object(r.useMemo)((function(){return{push:n.push,replace:n.replace,pathname:t.pathname,query:Object(a.a)(Object(a.a)({},i.a.parse(t.search)),e),match:c,location:t,history:n}}),[e,c,t,n])}function d(e,t,n){var a=Object(r.useRef)();Object(r.useEffect)((function(){var c=(null===n||void 0===n?void 0:n.current)||window;if(c&&c.addEventListener){a.current!==t&&(a.current=t);var r=function(e){(null===a||void 0===a?void 0:a.current)&&a.current(e)};return c.addEventListener(e,r),function(){c.removeEventListener(e,r)}}}),[e,n,t])}function m(e,t){Object(r.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])}},55:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=n(106),o=n.n(r);t.a=function(e){return c.a.createElement("span",{className:e.className},o()(new Date(1e3*e.seconds)).utcOffset(0).format("mm:ss"))}},60:function(e,t,n){e.exports={playerBox:"_1URRVA-GI-BhQrZHYVMx7q",lockBox:"_3x_32CtSBvIaSYOhs1xoFw",locked:"_1KXt7a7thzbSV41Jrlm5r3",player:"_2FmyDK_X0toHzM-xWlgwrg"}},62:function(e,t,n){e.exports={controller:"_1RgTyUoFi48_Me9I8Z8yKp",button:"_2UyycXxm3cD0KQAIO731MN"}},68:function(e,t,n){"use strict";n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return y})),n.d(t,"a",(function(){return j})),n.d(t,"e",(function(){return O})),n.d(t,"g",(function(){return g})),n.d(t,"f",(function(){return E}));var a=n(49),c=n.n(a),r=n(69),o=n(90),l=n.n(o),i={baseURL:"/",transformResponse:[function(e){return e}],timeout:3e4,responseType:"json",maxContentLength:2e3,validateStatus:function(e){return e>=200&&e<300}},u=[],s=l.a.CancelToken,d=function(e){for(var t in u){var n=t,a=u[t];a.url===e.url+"&request_type="+e.method&&(a.cancel(),u.splice(n,1))}},m=l.a.create(i);m.interceptors.request.use(function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(t),e.next=3,new s((function(e){u.push({url:t.url+"&request_type="+t.method,cancel:e})}));case 3:return t.cancelToken=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),m.interceptors.response.use((function(e){return d(e.config),e}),(function(e){return Promise.reject(e)}));var f=m,b="https://api.xujianfeng.club";function v(e){return f.get("".concat(b,"/banner?type=").concat(e))}function p(){return f.get("".concat(b,"/playlist/catlist"))}function y(e){var t=e.limit,n=e.cat,a=e.offset,c=void 0===a?0:a,r=e.order,o=void 0===r?"hot":r;return f.get("".concat(b,"/top/playlist/?limit=").concat(t,"&order=").concat(o,"&offset=").concat(c,"&cat=").concat(n))}function j(e){return f.get("".concat(b,"/playlist/detail?id=").concat(e))}function O(e){return f.get("".concat(b,"/song/detail?ids=").concat(e))}function g(e){return f.get("".concat(b,"/song/url?id=").concat(e))}function E(e){return f.get("".concat(b,"/lyric?id=").concat(e))}},76:function(e,t,n){e.exports={volume:"_14kz-6xQSn7TCbxYi2SFtB",content:"UhJJOr8LRnntL8T0glbT2",hide:"_3Pl9RIznKJR_Dad-3lltyo"}},77:function(e,t,n){e.exports={container:"_1y9RWNpnFF9NnWRjrpfKOK",scrollContent:"_1lIo99iXuF_CW3FF83M_DZ",scrollBar:"_1_rEIrL1zBBv65zuNSJ9E7"}},78:function(e,t,n){e.exports={lyrContainer:"_1a6TKPrmA2yA-mdG0ocUF7",line:"_3xHnyZFn_a2C6Pr6h7xKOP",active:"Uiru2n3655rzFDIkKA2BE"}}},[[128,2,3]]]);
//# sourceMappingURL=main.ebafaab2.chunk.js.map