(this.webpackJsonpk_music=this.webpackJsonpk_music||[]).push([[7],{249:function(e,a,t){e.exports={album:"_2hzivxDtZ7Lpvgv_X6pVe_",head:"_2G7dEGYEINlmoML5hs1NhP",logo:"_1XpWqywhwbUYPRNTj_2SwZ",img:"SjhxsrVLLEEskJ03LfpEl",main:"_1-lryxsU1rMvVjdxnaLMSB",name:"_1TgPIWbSRfEXB5K_PytIj-",nickname:"_1jILlatWTSWRHiqXAiGlp6",buttonGroup:"_2oNF_eCmWK3wXiMEX8ipq8",tags:"_2NXyU-l3NDvjYBWcqg7rAo",listBox:"_380ztTIKx73V2U9a6z6OTk",title:"_2R7Lx1geUI8ZuUW1MaR26i",item:"_1UK-h9FidD_9NTxhMCLDzD",index:"_3FrKiNJzzQaolrCA5-D_lD",songName:"_2b0O4qR1U949NuqZHG0rDW",songCreator:"_2Ekk2V7bfLi-WIEHRrawnv",second:"_3HGrHnDeHpZumNXgIB0ahX",canPlaying:"_3B08xlREDZ2TTBjaHLS8na"}},263:function(e,a,t){"use strict";t.r(a);var n=t(108),c=t(47),r=t.n(c),i=t(66),l=t(10),s=t(0),m=t.n(s),o=t(264),u=t(178),d=t(260),f=t(261),b=t(265),p=t(266),g=t(21),v=t(92),E=t(68);var j=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,t=e.length,n=[];if(t<=a)return[e];for(var c=0;c<t;c+=a)n.push(e.slice(c,c+a));return n},O=t(54),N=t(29),h=t(249),k=t.n(h);a.default=function(e){var a=Object(g.b)(),t=Object(s.useState)(e.match.params.id),c=Object(l.a)(t,1)[0],h=Object(s.useState)([]),x=Object(l.a)(h,2),_=x[0],y=x[1],I=Object(s.useState)(!0),S=Object(l.a)(I,2),C=S[0],w=S[1],U=Object(g.c)((function(e){return e.album})),z=Object(s.useCallback)(function(){var e=Object(i.a)(r.a.mark((function e(t){var n,c,i,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)(t);case 2:n=e.sent,c=n.data,i=c.playlist,l={albumId:i.id,name:i.name,nickname:i.creator.nickname,coverImgUrl:i.coverImgUrl,description:i.description,tags:i.tags},a(Object(v.b)({data:l})),L(i.trackIds);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),[]),L=Object(s.useCallback)(function(){var e=Object(i.a)(r.a.mark((function e(a){var t,n,c,i,l,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j(a.map((function(e){return e.id}))).map((function(e){return e.join(",")})),n=t.map((function(e){return Object(E.e)(e)})),e.next=4,Promise.all(n);case 4:c=e.sent,i=[],l=[],c.forEach((function(e){i=i.concat(e.data.songs),l=l.concat(e.data.privileges)})),s=i.map((function(e,a){return{id:e.id,name:e.name,seconds:e.dt/1e3,authors:e.ar.map((function(e){return e.name})).join("\uff0c"),coverImgUrl:e.al.picUrl,canPlaying:(t=l[a],-1!==t.st&&-200!==t.st&&1!==t.fee&&4!==t.fee&&16!==t.fee),url:null};var t})),D(s);case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),[]),D=Object(s.useCallback)(function(){var e=Object(i.a)(r.a.mark((function e(t){var i,l,s,m,o,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=[],!(l=localStorage.getItem(c)||null)){e.next=6;break}i=JSON.parse(l),e.next=12;break;case 6:return s=t.map((function(e){return Object(E.g)(e.id)})),e.next=9,Promise.all(s);case 9:m=e.sent,i=t.map((function(e,a){return Object(n.a)(Object(n.a)({},e),{},{url:m[a].data.data[0].url})})),localStorage.setItem(c,JSON.stringify(i));case 12:y(i),a(Object(v.c)({data:i})),(o=localStorage.getItem("cache-song-list")||null)?a(Object(N.e)({data:JSON.parse(o)})):(u=i.filter((function(e){return e.url})),localStorage.setItem("cache-song-list",JSON.stringify(u)),a(Object(N.e)({data:u}))),w(!1);case 17:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),[]),P=Object(s.useCallback)((function(){var e=_.filter((function(e){return e.canPlaying}));localStorage.setItem("cache-song-list",JSON.stringify(e)),a(Object(N.e)({data:e})),a(Object(N.d)({playing:!1}))}),[_]),J=Object(s.useCallback)((function(){P(),a(Object(N.d)({playing:!0}))}),[_]),W=Object(s.useCallback)((function(e){P();var t=_.findIndex((function(a){return a.id===e}));a(Object(N.b)({id:e,index:t}))}),[_]);return Object(s.useEffect)((function(){z(c)}),[c]),m.a.createElement("div",{className:k.a.album},m.a.createElement("div",{className:k.a.head},m.a.createElement("div",{className:k.a.logo},m.a.createElement("img",{className:k.a.img,src:U.info.coverImgUrl,alt:""})),m.a.createElement("div",{className:k.a.main},m.a.createElement("div",{className:k.a.name},m.a.createElement(o.a,{color:"magenta"},"\u6b4c\u5355"),U.info.name),m.a.createElement("div",{className:k.a.nickname},"\u521b\u5efa\u8005\uff1a",U.info.nickname),m.a.createElement("div",{className:k.a.buttonGroup},m.a.createElement(u.a,{size:"small",icon:m.a.createElement(b.a,null),onClick:J},"\u64ad\u653e"),m.a.createElement(u.a,{size:"small",onClick:P},m.a.createElement(p.a,null))),m.a.createElement("div",{className:k.a.tags},"\u6807\u7b7e\uff1a",U.info.tags.map((function(e){return m.a.createElement(o.a,{key:e},e)}))),m.a.createElement("div",{className:k.a.descript},"\u4ecb\u7ecd\uff1a",U.info.description))),m.a.createElement("div",{className:k.a.listBox},m.a.createElement("div",{className:k.a.title},"\u6b4c\u66f2\u5217\u8868"),m.a.createElement(d.b,{size:"small",loading:C,dataSource:U.list,renderItem:function(e,a){return m.a.createElement(d.b.Item,{key:e.id},m.a.createElement("div",{className:k.a.item},m.a.createElement("div",{className:k.a.index},a+1),m.a.createElement("div",{className:k.a.main},m.a.createElement("div",{className:k.a.songName},e.name),m.a.createElement("div",{className:k.a.songCreator},e.authors)),m.a.createElement("div",{className:k.a.second},m.a.createElement(O.a,{seconds:e.seconds})),m.a.createElement("div",{className:k.a.canPlaying},e.url?m.a.createElement(u.a,{onClick:function(){return W(e.id)},type:"text",size:"small"},"\u64ad\u653e"):m.a.createElement(u.a,{type:"text",size:"small",disabled:!0},"\u65e0\u7248\u6743"))))}})),m.a.createElement(f.a,{visibilityHeight:600}))}}}]);
//# sourceMappingURL=7.4683c438.chunk.js.map