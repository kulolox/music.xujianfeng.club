(this.webpackJsonpk_music=this.webpackJsonpk_music||[]).push([[7],{199:function(e,a,t){"use strict";var n=t(8),r=t(0),c=t.n(r),i=t(200),l=t.n(i);a.a=function(e){var a=Object(r.useState)(!1),t=Object(n.a)(a,2),i=t[0],s=t[1];return Object(r.useEffect)((function(){var a=new Image;a.src=e.src,a.onload=function(){s(!0)}}),[e.src]),c.a.createElement("img",{src:i?e.src:l.a,style:{width:e.width,height:e.height,border:e.border?"1px solid #f1f1f1":"none"},alt:""})}},200:function(e,a,t){e.exports=t.p+"static/media/default_image.3590e8c0.svg"},201:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(223),i=t(285);a.a=function(e){var a;return r.a.createElement("div",{style:{width:"100%",minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(c.a,{tip:null!==(a=e.text)&&void 0!==a?a:"",indicator:r.a.createElement(i.a,{style:{fontSize:24}})}))}},269:function(e,a,t){e.exports={album:"_2hzivxDtZ7Lpvgv_X6pVe_",head:"_2G7dEGYEINlmoML5hs1NhP",logo:"_1XpWqywhwbUYPRNTj_2SwZ",img:"SjhxsrVLLEEskJ03LfpEl",main:"_1-lryxsU1rMvVjdxnaLMSB",name:"_1TgPIWbSRfEXB5K_PytIj-",creater:"_3ybRWFtnK1mBmZh1uYR2gJ",nickname:"_1jILlatWTSWRHiqXAiGlp6",createTime:"_1i2DNrQyAagf55L_oxgMSm",buttonGroup:"_2oNF_eCmWK3wXiMEX8ipq8",tags:"_2NXyU-l3NDvjYBWcqg7rAo",listBox:"_380ztTIKx73V2U9a6z6OTk",title:"_2R7Lx1geUI8ZuUW1MaR26i",list:"i7c1ccAuZx-PWGrwXZvan",item:"_1UK-h9FidD_9NTxhMCLDzD",index:"_3FrKiNJzzQaolrCA5-D_lD",song:"_1Mdfhs18QHPInAh85OfR1W",songTitle:"_1rnywDc9LrRnBvWylgyLzE",songName:"_2b0O4qR1U949NuqZHG0rDW",songCreator:"_2Ekk2V7bfLi-WIEHRrawnv",second:"_3HGrHnDeHpZumNXgIB0ahX",canPlaying:"_3B08xlREDZ2TTBjaHLS8na",backTop:"_2N80j-B5i-D0JuOeH9zKy8"}},283:function(e,a,t){"use strict";t.r(a);var n=t(40),r=t.n(n),c=t(49),i=t(8),l=t(0),s=t.n(l),m=t(284),o=t(193),u=t(280),d=t(281),f=t(286),v=t(287),g=t(10),E=t(106),b=t.n(E),p=t(69),h=t(43);var N=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,t=e.length,n=[];if(t<=a)return[e];for(var r=0;r<t;r+=a)n.push(e.slice(r,r+a));return n},j=t(57),x=t(17),_=t(269),y=t.n(_),O=t(199),k=t(201);a.default=function(){var e=Object(g.b)(),a=Object(h.d)(),t=Object(l.useState)(!1),n=Object(i.a)(t,2),E=n[0],_=n[1],I=Object(h.b)("cache-song-list",null)[1],U=Object(h.b)(a.query.id,{info:{albumId:"",name:"",nickname:"",coverImgUrl:"",createTime:0,avatarUrl:"",tags:[],description:""},list:[]}),T=Object(i.a)(U,2),w=T[0],L=T[1],D=Object(l.useMemo)((function(){return w.list.filter((function(e){return e.url}))}),[w.list]),z=Object(l.useCallback)(Object(c.a)(r.a.mark((function e(){var t,n,c,i,l,s,m,o,u,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.next=3,Object(p.a)(a.query.id);case 3:return t=e.sent,n=t.data.playlist,c={info:{albumId:a.query.id,name:n.name,nickname:n.creator.nickname,avatarUrl:n.creator.avatarUrl,createTime:n.createTime,coverImgUrl:n.coverImgUrl,description:n.description,tags:n.tags},list:[]},i=N(n.trackIds.map((function(e){return e.id}))).map((function(e){return e.join(",")})),e.prev=7,l=i.map((function(e){return Object(p.e)(e)})),e.next=11,Promise.all(l);case 11:return s=e.sent,m=[],o=[],s.forEach((function(e){m=m.concat(e.data.songs),o=o.concat(e.data.privileges)})),c.list=m.map((function(e,a){return{id:e.id,name:e.name,seconds:e.dt/1e3,authors:e.ar.map((function(e){return e.name})).join("\uff0c"),coverImgUrl:e.al.picUrl,canPlaying:(t=o[a],-1!==t.st&&-200!==t.st&&1!==t.fee&&4!==t.fee&&16!==t.fee),url:null};var t})),u=c.list.map((function(e){return Object(p.g)(e.id)})),e.next=19,Promise.all(u);case 19:d=e.sent,c.list.map((function(e,a){return e.url=d[a].data.data[0].url})),L(c);case 22:return e.prev=22,_(!1),e.finish(22);case 25:case"end":return e.stop()}}),e,null,[[7,,22,25]])}))),[a.query.id,L]);Object(l.useEffect)((function(){w&&w.list.length>0||z()}),[w,z]);var P=Object(l.useCallback)((function(){I(D),e(Object(x.f)({data:D})),e(Object(x.c)({id:D[0].id,index:0,autoPlay:!1}))}),[D,e,I]),C=Object(l.useCallback)((function(){P(),e(Object(x.c)({id:D[0].id,index:0,autoPlay:!0}))}),[P,e,D]),W=Object(l.useCallback)((function(a){P();var t=D.findIndex((function(e){return e.id===a}));e(Object(x.c)({id:a,index:t,autoPlay:!0}))}),[P,D,e]);return s.a.createElement("div",{className:y.a.album},s.a.createElement("div",{className:y.a.head},s.a.createElement("div",{className:y.a.logo},s.a.createElement("img",{className:y.a.img,src:w.info.coverImgUrl,alt:""})),s.a.createElement("div",{className:y.a.main},s.a.createElement("div",{className:y.a.name},s.a.createElement(m.a,{color:"magenta"},"\u6b4c\u5355"),w.info.name),s.a.createElement("div",{className:y.a.creater},s.a.createElement(O.a,{width:"36px",height:"36px",src:w.info.avatarUrl,border:!0}),s.a.createElement("div",{className:y.a.nickname},w.info.nickname),s.a.createElement("div",{className:y.a.createTime},"\u521b\u5efa\u65f6\u95f4\uff1a",w.info.createTime?b()().format("YYYY-MM-DD"):"NULL")),s.a.createElement("div",{className:y.a.buttonGroup},s.a.createElement(o.a,{size:"small",icon:s.a.createElement(f.a,null),onClick:C},"\u64ad\u653e"),s.a.createElement(o.a,{size:"small",onClick:P},s.a.createElement(v.a,null))),s.a.createElement("div",{className:y.a.tags},"\u6807\u7b7e\uff1a",w.info.tags.map((function(e){return s.a.createElement(m.a,{key:e},e)}))),s.a.createElement("div",{className:y.a.descript},"\u4ecb\u7ecd\uff1a",w.info.description))),s.a.createElement("div",{className:y.a.listBox},s.a.createElement("div",{className:y.a.title},"\u6b4c\u66f2\u5217\u8868"),s.a.createElement("div",{className:y.a.list},E?s.a.createElement(k.a,{text:"Loading..."}):s.a.createElement(u.b,{bordered:!0,size:"small",dataSource:w.list,renderItem:function(e,a){return s.a.createElement(u.b.Item,{key:e.id},s.a.createElement("div",{className:y.a.item},s.a.createElement("div",{className:y.a.index},a+1),s.a.createElement("div",{className:y.a.song},s.a.createElement("div",{className:y.a.songTitle},s.a.createElement(O.a,{border:!0,src:e.coverImgUrl,width:"36px",height:"36px"}),s.a.createElement("div",{className:y.a.songName},e.name)),s.a.createElement("div",{className:y.a.songCreator},e.authors)),s.a.createElement("div",{className:y.a.second},s.a.createElement(j.a,{seconds:e.seconds})),s.a.createElement("div",{className:y.a.canPlaying},e.url?s.a.createElement(o.a,{onClick:function(){return W(e.id)},type:"text",size:"small"},"\u64ad\u653e"):s.a.createElement(o.a,{type:"text",size:"small",disabled:!0},"\u65e0\u7248\u6743"))))}}))),s.a.createElement(d.a,{className:y.a.backTop,visibilityHeight:600}))}}}]);
//# sourceMappingURL=7.daee5007.chunk.js.map