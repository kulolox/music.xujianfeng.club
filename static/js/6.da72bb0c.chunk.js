(this.webpackJsonpk_music=this.webpackJsonpk_music||[]).push([[6],{204:function(e,a,t){},215:function(e,a,t){e.exports=t.p+"static/media/default_image.3590e8c0.svg"},216:function(e,a,t){e.exports={category:"_3mAHRFcYGDiGQD5NjIXGPy",cat:"_2fL91aoxtpB750p_bV8Grf"}},217:function(e,a,t){e.exports={catList:"mEruZ2ckuwrGDZ2MSXJCo",catItem:"_2O84mjn8D8wOpxfnqEOtXv",catType:"_3oAYWiiJH6phwibICqvAt3",catContent:"gTqd4UnIQvBWXOCowsaEq",tag:"_3DVQ_vSuNEcYjSVWusAXTj"}},220:function(e,a,t){e.exports={home:"_1rW0pNaf1fNsEyxJ1Mfjzu",banner:"G4VUxEqZqIoioLbBhHmct",albumBox:"DSzUk1jApFhiIiiziwiiJ",list:"_1LyBgoCtD8vu00-fH7p4bX",album:"_25TOVTjWvPZEpDlZ4Ctxbi",cover:"_12_QnF4bHP0O3Cx_-GWY_i",playCount:"tcVtdPf6Ib8JCZMb4hjSI",creatorName:"CRwK1pNC0vrWnK4-lgwX5",name:"_2M4N4JW1q7OQBBF9dnfQqx",pagination:"_1QrPHZIz1OLO5wAAzxjVHI"}},279:function(e,a,t){"use strict";t.r(a);var n=t(40),c=t.n(n),r=t(49),i=t(8),o=t(0),l=t.n(o),s=t(85),u=t(276),m=t(273),p=t(214),f=t(69),d=t(25),E=t(215),b=t.n(E),v=function(e){var a=Object(o.useState)(!1),t=Object(i.a)(a,2),n=t[0],c=t[1];return Object(o.useEffect)((function(){var a=new Image;a.src=e.src,a.onload=function(){c(!0)}}),[e.src]),l.a.createElement("img",{src:n?e.src:b.a,style:{width:e.width,height:e.height},alt:""})},y=t(124),C=t(193),g=t(216),N=t.n(g),h=(t(204),t(281)),O=t(217),_=t.n(O),j=h.a.CheckableTag,k=function(e){return l.a.createElement("div",{className:_.a.catList},e.catList.map((function(a){return l.a.createElement("div",{key:a.type,className:_.a.catItem},l.a.createElement("div",{className:_.a.catType},a.typeName),l.a.createElement("div",{className:_.a.catContent},a.list.map((function(a){return l.a.createElement(j,{key:a.name,className:_.a.tag,checked:e.selectedCat===a.name,onClick:function(){return e.onSelect(a.name)}},a.name)}))))})))},w=function(e){var a=Object(o.useState)(!1),t=Object(i.a)(a,2),n=t[0],s=t[1],u=Object(o.useState)([]),m=Object(i.a)(u,2),p=m[0],E=m[1],b=Object(o.useCallback)(Object(r.a)(c.a.mark((function e(){var a,t,n,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)();case 2:a=e.sent,t=a.data,n=t.categories,r=t.sub,i=[],Object.keys(n).forEach((function(e){i.push({type:parseInt(e),typeName:n[e],list:r.filter((function(a){return a.category===parseInt(e)}))})})),E(i);case 8:case"end":return e.stop()}}),e)}))),[]),v=Object(o.useCallback)((function(a){e.catSelect(a),s(!1)}),[e]);return Object(o.useEffect)((function(){function e(){return(e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[b]),l.a.createElement("div",{className:N.a.category},l.a.createElement(y.a,{placement:"topLeft",visible:n,title:l.a.createElement(C.a,{size:"small",onClick:function(){return v("\u5168\u90e8")}},"\u5168\u90e8\u98ce\u683c"),content:l.a.createElement(k,{catList:p,selectedCat:e.currentCat,onSelect:v}),trigger:"click"},l.a.createElement(C.a,{onClick:function(){return s(!n)}},"\u9009\u62e9\u98ce\u683c",l.a.createElement(d.a,{type:"icon-up"}))),l.a.createElement("div",{className:N.a.cat},"\u5f53\u524d\u98ce\u683c\uff1a",e.currentCat))},A=t(220),L=t.n(A);function x(e,a){switch(a.type){case"GET_BANNER":return void(e.banners=a.payload);case"GET_ALBUM_LIST":var t=a.payload,n=t.albumList,c=t.totalCount;return e.albumList=n,void(e.totalCount=c);case"CAT_SELECT":return e.pageNo=1,void(e.cat=a.payload);case"PAGE_CHANGE":return void(e.pageNo=a.payload);case"SET_PAGE_LOADING":return void(e.loading=a.payload);default:return}}var I={banners:[],pageNo:1,loading:!1,totalCount:0,cat:"\u5168\u90e8",albumList:[]};a.default=function(){var e=Object(p.a)(x,I),a=Object(i.a)(e,2),t=a[0],n=a[1],E=t.banners,b=t.pageNo,y=t.loading,C=t.totalCount,g=t.cat,N=t.albumList,h=Object(o.useCallback)(Object(r.a)(c.a.mark((function e(){var a,t,r,i=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>0&&void 0!==i[0]?i[0]:{cat:g,limit:35,offset:0},n({type:"SET_PAGE_LOADING",payload:!0}),e.next=4,Object(f.b)(a);case 4:t=e.sent,r=t.data,n({type:"GET_ALBUM_LIST",payload:{albumList:r.playlists.map((function(e){return{id:e.id,coverImgUrl:e.coverImgUrl,playCount:e.playCount,name:e.name,creator:e.creator}})),totalCount:r.total}}),n({type:"SET_PAGE_LOADING",payload:!1});case 8:case"end":return e.stop()}}),e)}))),[g,n]),O=Object(o.useCallback)((function(e){n({type:"PAGE_CHANGE",payload:e}),h({cat:g,limit:35,offset:35*e})}),[g,n,h]),_=Object(o.useCallback)((function(e){n({type:"CAT_SELECT",payload:e}),h({cat:e,limit:35,offset:0})}),[n,h]);return Object(o.useEffect)((function(){function e(){return(e=Object(r.a)(c.a.mark((function e(){var a,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.c)(0);case 2:a=e.sent,t=a.data,n({type:"GET_BANNER",payload:t.banners.map((function(e){return{scm:e.scm,imageUrl:e.imageUrl}}))}),h();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,h]),console.log("loading:",y),l.a.createElement("div",{className:L.a.home},l.a.createElement("div",{className:L.a.banner},l.a.createElement(u.a,{autoplay:!0},E.map((function(e){return l.a.createElement("div",{key:e.scm,className:L.a.item},l.a.createElement("img",{src:e.imageUrl,alt:""}))})))),l.a.createElement("div",{className:L.a.albumBox},l.a.createElement(w,{currentCat:g,catSelect:_}),l.a.createElement("div",{className:L.a.list},N.map((function(e){return l.a.createElement(s.b,{key:e.id,className:L.a.album,to:"/album/".concat(e.id)},l.a.createElement("div",{className:"hoverBox"},l.a.createElement("div",{className:L.a.cover},l.a.createElement(v,{src:e.coverImgUrl,width:"100%",height:"auto"}),l.a.createElement("div",{className:L.a.playCount},l.a.createElement(d.a,{type:"icon-play-count",style:{fontSize:16,marginRight:2}}),l.a.createElement("span",null,e.playCount)),l.a.createElement("div",{className:L.a.creatorName},e.creator.nickname)),l.a.createElement("div",{className:L.a.name},e.name)))}))),l.a.createElement(m.a,{className:L.a.pagination,defaultCurrent:1,current:b,total:C,onChange:O,defaultPageSize:35,showSizeChanger:!1})))}}}]);
//# sourceMappingURL=6.da72bb0c.chunk.js.map