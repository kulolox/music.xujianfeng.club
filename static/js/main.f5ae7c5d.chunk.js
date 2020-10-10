(this.webpackJsonpk_music=this.webpackJsonpk_music||[]).push([[1],{126:function(e,t,n){e.exports=n(172)},152:function(e,t,n){},16:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return m})),n.d(t,"f",(function(){return b})),n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return p}));var a=n(47),c=n.n(a),r=n(67),l=n(69),i=n(39),o=Object(i.b)("player/getSongUrl",function(){var e=Object(r.a)(c.a.mark((function e(t,n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.dispatch,e.next=3,Object(l.g)(t.id);case 3:return r=e.sent,a(f({url:r.data.data[0].url})),a(d({index:t.index})),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),u=Object(i.c)({name:"player",initialState:{currentIndex:-1,currentUrl:"",playing:!1,loop:!1,playedSeconds:0,list:[]},extraReducers:function(e){e.addCase(o.fulfilled,(function(e){e.playing=!0}))},reducers:{setSongList:function(e,t){e.list=t.payload.data,e.currentIndex=0},setPlayedSconds:function(e,t){e.playedSeconds=t.payload.playedSeconds},setPlaying:function(e,t){e.playing=t.payload.playing},setCurrentUrl:function(e,t){e.currentUrl=t.payload.url},setCurrentIndex:function(e,t){e.currentIndex=t.payload.index},togglePlaying:function(e,t){var n=t.payload.playing;e.playing=n}}}),s=u.actions,m=s.setSongList,d=s.setCurrentIndex,f=s.setCurrentUrl,b=s.togglePlaying,v=s.setPlaying,p=s.setPlayedSconds;t.a=u.reducer},169:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(110),l=n(8),i=n(41),o=n(11),u=n(2),s=n.n(u),m=n(61),d=n.n(m),f=n(22),b=n(181),v=n(177),p=n(7),y=n(16),g=n(55),j=n(178),E=n(85),O=n.n(E),h=function(e){var t=Object(a.useState)(e.volume),n=Object(o.a)(t,2),r=n[0],l=n[1],i=Object(a.useState)(!1),u=Object(o.a)(i,2),s=u[0],m=u[1],d=Object(a.useCallback)((function(t){l(t),e.onChange(t)}),[]),b=Object(a.useCallback)((function(e){p(!1)}),[]),p=Object(a.useCallback)((function(e){m(e)}),[]);return c.a.createElement("div",{className:O.a.volume},c.a.createElement(j.a,{onClick:function(){return p(!s)},type:"text",icon:c.a.createElement(f.a,{type:"icon-volume"})}),s&&c.a.createElement("div",{className:O.a.content},c.a.createElement(v.a,{value:r,min:0,max:100,onChange:d,onAfterChange:b})))},x=n(47),k=n.n(x),N=n(67),C=n(180),_=n(108),S=n(74),I=n.n(S),B=function(e){var t=e.className,n=e.children,r=e.getContainerDom,l=c.a.useState({}),i=Object(o.a)(l,2),u=i[0],m=i[1],d=c.a.useState(!0),f=Object(o.a)(d,2),b=f[0],v=f[1],p=Object(a.useRef)(null),y=Object(a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.current;if(e){var t=e.clientHeight,n=e.scrollHeight,a=e.scrollTop,c=Math.pow(t,2)/n,r=a*(t-c)/(n-t);r!==r?v(!1):(v(!0),m({height:c,top:r}))}}),[]),g=c.a.useCallback((function(e){y(e.target)}),[]);return Object(a.useEffect)((function(){return r&&r(p.current),p.current.addEventListener("scroll",g),function(){return p.current.removeEventListener("scroll",g)}}),[]),c.a.createElement("div",{className:s()(I.a.container,t)},c.a.createElement("div",{ref:p,className:I.a.scrollContent},n),b&&c.a.createElement("div",{className:I.a.scrollBar},c.a.createElement("span",{style:Object(_.a)({},u)})))},w=n(69),L=n(120),T=n(176),U=n(75),A=n.n(U),H=/\[(\d{2}):(\d{2}\.\d{1,3})\]/g,P=function(e,t){var n=null,a=e.scrollTop,c=t-a;window.requestAnimationFrame((function t(r){n||(n=r);var l=(r-n)/600,i=Object(T.a)(l);i>1&&(i=1);var o=c*i;e.scrollTop=o+a,i<1&&window.requestAnimationFrame(t)}))},R=function(e){var t=Object(p.c)((function(e){return e.player})).playedSeconds,n=Object(a.useMemo)((function(){return function(e){if(!e)return[];for(var t=e.split("\n"),n=[],a=0;a<t.length;a++){var c=t[a],r=H.exec(c);if(r){var l=c.replace(H,"").trim();l&&n.push({time:60*r[1]+1*r[2],txt:l})}}return n.sort((function(e,t){return e.time-t.time})),n}(e.lyric)}),[e.lyric]),r=Object(a.useMemo)((function(){return n.map((function(e){return e.time}))}),[n]),l=Object(a.useRef)(document.getElementsByClassName("lyric")),u=Object(a.useState)(0),m=Object(o.a)(u,2),d=m[0],f=m[1],b=Object(a.useState)(null),v=Object(o.a)(b,2),y=v[0],g=v[1];return Object(a.useEffect)((function(){f(function(e,t){var n=t.length;if(e<=t[0])return 0;if(e>=t[n-1])return n-1;var a,c=0,r=Object(L.a)(t);try{for(r.s();!(a=r.n()).done;){var l=a.value;if(l>e){c=t.indexOf(l)-1;break}}}catch(i){r.e(i)}finally{r.f()}return c}(t,r))}),[t]),Object(a.useEffect)((function(){var e,t;l.current.length>0&&(e=y,t=l.current[d],e&&(t.offsetTop>180?P(e,t.offsetTop-180):P(e,0)))}),[d]),c.a.createElement(B,{getContainerDom:function(e){return g(e)}},c.a.createElement("div",{className:A.a.lyrContainer},n.map((function(e,t){return c.a.createElement("div",{className:s()("lyric",A.a.line,Object(i.a)({},A.a.active,d===t)),key:e.time+e.txt},e.txt)}))))},z=n(19),F=n.n(z),J=function(){var e=Object(p.c)((function(e){return e.player})),t=e.list,n=e.playing,r=e.currentIndex,l=Object(p.b)(),i=Object(a.useState)(!1),u=Object(o.a)(i,2),s=u[0],m=u[1],d=Object(a.useState)(""),b=Object(o.a)(d,2),v=b[0],E=b[1],O=Object(a.useCallback)((function(e){m(e)}),[]),h=Object(a.useCallback)((function(e){var n=t.findIndex((function(t){return t.id===e}));l(Object(y.b)({id:e,index:n}))}),[]);return Object(a.useEffect)((function(){E(""),function(){var e=Object(N.a)(k.a.mark((function e(){var n,a,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=null===(n=t[r])||void 0===n?void 0:n.id)){e.next=6;break}return e.next=4,Object(w.f)(a);case 4:(c=e.sent).data.lrc&&E(c.data.lrc.lyric);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,t]),c.a.createElement("div",{className:F.a.list},c.a.createElement(C.a,{count:t.length,overflowCount:99,size:"small",offset:[5,0]},c.a.createElement(j.a,{onClick:function(){return O(!s)},type:"text",icon:c.a.createElement(f.a,{type:"icon-music-list"})})),s&&c.a.createElement("div",{className:F.a.container},c.a.createElement("div",{className:F.a.backImg,style:{backgroundImage:"url('".concat(t[r].coverImgUrl,"')")}}),c.a.createElement("div",{className:F.a.content},c.a.createElement("div",{className:F.a.listBox},c.a.createElement("div",{className:F.a.head},"\u64ad\u653e\u5217\u8868"),c.a.createElement(B,null,t.map((function(e,t){return c.a.createElement("div",{key:e.id,className:F.a.item},c.a.createElement("div",{className:F.a.index},t+1),c.a.createElement("div",{className:F.a.songName},e.name),c.a.createElement("div",{className:F.a.songCreator},e.authors),c.a.createElement("div",{className:F.a.second},c.a.createElement(g.a,{seconds:e.seconds})),c.a.createElement("div",{className:F.a.canPlaying},c.a.createElement(j.a,{shape:"circle",type:"ghost",size:"small",onClick:function(){return h(e.id)},icon:t===r&&n?c.a.createElement(f.a,{type:"icon-pause"}):c.a.createElement(f.a,{type:"icon-play"})})))})))),c.a.createElement("div",{className:F.a.lyricBox},c.a.createElement("div",{className:F.a.head},"\u6b4c\u8bcd"),v?c.a.createElement(R,{lyric:v}):c.a.createElement("div",{className:F.a.noLyric},"\u6682\u65e0\u6b4c\u8bcd")))))},M=function(e){var t=Object(p.c)((function(e){return e.player})),n=t.currentIndex,r=t.list,l=Object(p.b)(),i=Object(a.useMemo)((function(){return n>0}),[n]),o=Object(a.useCallback)((function(){var e=n-1;l(Object(y.b)({id:r[e].id,index:e}))}),[r,n]);return c.a.createElement("div",{className:e.className},c.a.createElement(j.a,{onClick:o,disabled:!i,shape:"circle",type:"ghost",icon:c.a.createElement(f.a,{type:"icon-prev"})}))},W=function(e){var t=Object(p.c)((function(e){return e.player})),n=t.currentIndex,r=t.list,l=Object(p.b)(),i=Object(a.useMemo)((function(){return n<r.length-1}),[n,r]),o=Object(a.useCallback)((function(){var e=n+1;l(Object(y.b)({id:r[e].id,index:e}))}),[r,n]);return c.a.createElement("div",{className:e.className},c.a.createElement(j.a,{onClick:o,disabled:!i,shape:"circle",type:"ghost",icon:c.a.createElement(f.a,{type:"icon-next"})}))},V=function(e){var t=Object(p.c)((function(e){return e.player})),n=t.list,r=t.playing,l=Object(p.b)(),i=Object(a.useMemo)((function(){return n.length>0}),[n]),o=Object(a.useCallback)((function(e){l(Object(y.f)({playing:e}))}),[]);return c.a.createElement("div",{className:e.className},c.a.createElement(j.a,{disabled:!i,onClick:function(){return o(!r)},shape:"circle",type:"ghost",size:"large",icon:r?c.a.createElement(f.a,{style:{fontSize:25},type:"icon-pause"}):c.a.createElement(f.a,{type:"icon-play"})}))},q=n(20),G=n.n(q),D=function(){var e,t,n,r,l,u=Object(p.c)((function(e){return e.player})),m=u.currentIndex,d=u.currentUrl,f=u.list,j=u.playing,E=Object(p.b)(),O=Object(a.useRef)(null),x=Object(a.useState)(0),k=Object(o.a)(x,2),N=k[0],C=k[1],_=Object(a.useState)(0),S=Object(o.a)(_,2),I=S[0],B=S[1],w=Object(a.useState)(!1),L=Object(o.a)(w,2),T=L[0],U=L[1],A=Object(a.useState)(60),H=Object(o.a)(A,2),P=H[0],R=H[1],z=Object(a.useCallback)((function(){if(m<f.length-1){var e=m+1;E(Object(y.b)({id:f[e].id,index:e}))}else E(Object(y.d)({playing:!1}))}),[f,m]),F=Object(a.useCallback)((function(){E(Object(y.c)({playedSeconds:O.current.currentTime})),T||C(O.current.currentTime)}),[]),q=Object(a.useCallback)((function(){B(O.current.duration)}),[]),D=Object(a.useCallback)((function(e){R(e)}),[]),K=Object(a.useCallback)((function(e){U(!0),C(e)}),[]),X=Object(a.useCallback)((function(e){U(!1),O.current.currentTime=e}),[]);return Object(a.useEffect)((function(){O.current.volume=P/100}),[P]),Object(a.useEffect)((function(){j?O.current.play():O.current.pause()}),[m,j]),Object(a.useEffect)((function(){return O.current.addEventListener("timeupdate",F),O.current.addEventListener("ended",z),O.current.addEventListener("durationchange",q),function(){O.current.removeEventListener("timeupdate",F),O.current.removeEventListener("ended",z),O.current.removeEventListener("durationchange",q)}}),[O.current,m]),c.a.createElement("div",{className:G.a.player},c.a.createElement("audio",{ref:O,src:d,preload:"auto"}),c.a.createElement("div",{className:G.a.audio},c.a.createElement("div",{className:G.a.controller},c.a.createElement(M,{className:G.a.button}),c.a.createElement(V,{className:G.a.button}),c.a.createElement(W,{className:G.a.button})),c.a.createElement("div",{className:G.a.main},c.a.createElement(b.a,{className:s()(G.a.coverImage,Object(i.a)({},G.a.spin,j)),src:null!==(e=null===(t=f[m])||void 0===t?void 0:t.coverImgUrl)&&void 0!==e?e:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),c.a.createElement("div",{className:G.a.content},c.a.createElement("div",{className:G.a.head},c.a.createElement("div",null,null!==(n=null===(r=f[m])||void 0===r?void 0:r.name)&&void 0!==n?n:"\u6682\u65e0"),c.a.createElement("div",null,c.a.createElement(g.a,{seconds:N}),"/",c.a.createElement(g.a,{seconds:I}))),c.a.createElement("div",{className:G.a.progress},c.a.createElement(v.a,{onAfterChange:X,onChange:K,defaultValue:0,tooltipVisible:!1,value:N,max:Math.floor(null===(l=f[m])||void 0===l?void 0:l.seconds)})))),c.a.createElement("div",{className:G.a.menu},c.a.createElement("div",{className:G.a.button},c.a.createElement(h,{volume:P,onChange:D})),c.a.createElement("div",{className:G.a.button},c.a.createElement(J,null)))))},K=function(){var e=Object(a.useState)(!0),t=Object(o.a)(e,2),n=t[0],r=t[1],l=Object(a.useCallback)((function(e){r(e)}),[]);return c.a.createElement("div",{className:s()(d.a.playerBox,Object(i.a)({},d.a.locked,n))},c.a.createElement("div",{className:d.a.lockBox,onClick:function(){return l(!n)}},c.a.createElement(f.a,{type:n?"icon-lock_fill":"icon-unlock_fill"})),c.a.createElement("div",{className:d.a.player},c.a.createElement(D,null)))},X=(n(169),c.a.lazy((function(){return Promise.all([n.e(0),n.e(5),n.e(6)]).then(n.bind(null,262))}))),Q=c.a.lazy((function(){return Promise.all([n.e(0),n.e(4),n.e(7)]).then(n.bind(null,263))}));t.default=function(){var e=Object(p.b)();return Object(a.useEffect)((function(){var t=localStorage.getItem("cache-song-list")||null;if(t){var n=JSON.parse(t);e(Object(y.e)({data:n})),e(Object(y.b)({index:0,id:n[0].id}))}}),[]),c.a.createElement(a.Fragment,null,c.a.createElement(r.a,null,c.a.createElement(c.a.Suspense,{fallback:"\u52a0\u8f7d\u4e2d..."},c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/",exact:!0,component:X}),c.a.createElement(l.a,{path:"/album/:id?",exact:!0,component:Q})))),c.a.createElement(K,null))}},172:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),l=n.n(r),i=n(7);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(121),u=n(39),s=n(116),m=n.n(s),d=n(32),f=n(92),b=n(16),v=Object(d.c)({album:f.a,player:b.a});[].concat(Object(o.a)(Object(u.d)({serializableCheck:!1})),[m.a]);var p=Object(u.a)({reducer:v,devTools:!1,middleware:[]});n(152);!function(){var e=n(171).default;l.a.render(c.a.createElement(i.a,{store:p},c.a.createElement(e,null)),document.getElementById("root"))}(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},19:function(e,t,n){e.exports={list:"a6LQ8jH5s49G351r4ry7A",container:"_2Ex41Yg_HOsOU7-4IRjHd6",backImg:"_2QytdlD314vM28E_GjkCsB",content:"_2sVBbfzRY1t02kW6eFtVUL",listBox:"_1Hhoot-IWJearnO66CCcGc",item:"_1ipFW7xxMy_LMa93DRLtAm",index:"_2ZaAShsI4txn8XRiKMSyNh",songName:"_3Rd8d84-JHQMmWw5400qST",songCreator:"_1ws7ebM5Qg-eWBGUyDKofa",second:"_16OakXNbCl67ve9HL3mlJw",canPlaying:"_3XqRWv2yA9kg7k6hWTjJR4",lyricBox:"_35EbM6I0BzHk5Qtw_KG4iq",noLyric:"_1-sA9-yTHUVggM-APKVpas",head:"_2H1WObJgHWY9rZqdPvlqBV"}},20:function(e,t,n){e.exports={hoverBox:"lxJgT-fjjXw_7rraI7bYO",player:"_3DhximAgjXprNcUZvJJBb4",audio:"_1Pe6zvjWU7bP1BxTzrxfas",controller:"_25Bhje6NAFAFpknQ8HFM4R",button:"rurHG8HbXrba9qsVi4f3_",menu:"tgQynu_4eKMbG5-UX8NkB",main:"_2LSEyGu8uCYgyGJBEVdlkJ",coverImage:"_2pf_EtHe9NDw5Z8fvato1L",spin:"_30ngn5ABA0-3TrCmuuUD_R",rotate:"VV3QjzPv7HgLzppge8uuk",content:"_2LqOGvkdyJ1x7e0HI66wJg",head:"_1RbOSRgvGKJaxeyTPBFW7m",progress:"G4ENEoFI9vPatAgt8CmgA"}},22:function(e,t,n){"use strict";var a=n(173),c=Object(a.a)({scriptUrl:"//at.alicdn.com/t/font_2060370_k34zyn39meh.js"});t.a=c},55:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=n(117),l=n.n(r);t.a=function(e){return c.a.createElement("span",{className:e.className},l()((t=e.seconds,new Date(1e3*t))).utcOffset(0).format("mm:ss"));var t}},61:function(e,t,n){e.exports={playerBox:"_1URRVA-GI-BhQrZHYVMx7q",lockBox:"_3x_32CtSBvIaSYOhs1xoFw",locked:"_1KXt7a7thzbSV41Jrlm5r3",player:"_2FmyDK_X0toHzM-xWlgwrg"}},69:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return v})),n.d(t,"e",(function(){return p})),n.d(t,"g",(function(){return y})),n.d(t,"f",(function(){return g}));var a=n(84),c=n.n(a),r={baseURL:"/",transformResponse:[function(e){return e}],timeout:3e4,responseType:"json",maxContentLength:2e3,validateStatus:function(e){return e>=200&&e<300}},l=[],i=c.a.CancelToken,o=function(e){for(var t in l){var n=t,a=l[t];a.url===e.url+"&request_type="+e.method&&(a.cancel(),l.splice(n,1))}},u=c.a.create(r);u.interceptors.request.use((function(e){return o(e),e.cancelToken=new i((function(t){l.push({url:e.url+"&request_type="+e.method,cancel:t})})),e}),(function(e){return Promise.reject(e)})),u.interceptors.response.use((function(e){return o(e.config),e}),(function(e){return Promise.reject(e)}));var s=u,m="https://api.xujianfeng.club";function d(e){return s.get("".concat(m,"/banner?type=").concat(e))}function f(){return s.get("".concat(m,"/playlist/catlist"))}function b(e){var t=e.limit,n=e.cat,a=e.offset,c=void 0===a?0:a,r=e.order,l=void 0===r?"hot":r;return s.get("".concat(m,"/top/playlist/?limit=").concat(t,"&order=").concat(l,"&offset=").concat(c,"&cat=").concat(n))}function v(e){return s.get("".concat(m,"/playlist/detail?id=").concat(e))}function p(e){return s.get("".concat(m,"/song/detail?ids=").concat(e))}function y(e){return s.get("".concat(m,"/song/url?id=").concat(e))}function g(e){return s.get("".concat(m,"/lyric?id=").concat(e))}},74:function(e,t,n){e.exports={container:"_1y9RWNpnFF9NnWRjrpfKOK",scrollContent:"_1lIo99iXuF_CW3FF83M_DZ",scrollBar:"_1_rEIrL1zBBv65zuNSJ9E7"}},75:function(e,t,n){e.exports={lyrContainer:"_1a6TKPrmA2yA-mdG0ocUF7",line:"_3xHnyZFn_a2C6Pr6h7xKOP",active:"Uiru2n3655rzFDIkKA2BE"}},85:function(e,t,n){e.exports={volume:"_14kz-6xQSn7TCbxYi2SFtB",content:"UhJJOr8LRnntL8T0glbT2"}},92:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return i}));var a=n(39),c=Object(a.c)({name:"album",initialState:{info:{albumId:"",name:"",nickname:"",coverImgUrl:"",tags:[],description:""},list:[]},reducers:{setInfo:function(e,t){e.info=t.payload.data},setList:function(e,t){e.list=t.payload.data}}}),r=c.actions,l=r.setInfo,i=r.setList;t.a=c.reducer}},[[126,2,3]]]);
//# sourceMappingURL=main.f5ae7c5d.chunk.js.map