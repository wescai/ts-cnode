(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05e6"],{"1de2":function(e,t,n){"use strict";n.r(t);var s,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.userInfo.loginname?n("div",{class:e.$style.user},[n("nav-bar",{on:{leftClick:function(t){return e.$router.go(-1)},rightClick:e.logout}},[e.my?e._e():n("icon",{attrs:{slot:"left",type:"back"},slot:"left"}),e.my?n("span",{class:e.$style.userLogout,attrs:{slot:"right"},slot:"right"},[e._v("注销")]):e._e(),e._v("\n    "+e._s(e.userInfo.loginname)+"\n  ")],1),n("div",{class:e.$style.userContainer},[n("div",{class:e.$style.userContainerHeader},[n("image-lazy",{class:e.$style.userAvatar,attrs:{src:e.userInfo.avatar_url}}),n("div",{class:e.$style.userContainerHeaderInfo},[n("div",{class:e.$style.userContainerHeaderNickname},[e._v(e._s(e.userInfo.loginname))]),n("div",{class:e.$style.userContainerHeaderScore},[e._v(e._s(e.userInfo.score)+"积分")])]),n("span",{class:e.$style.userContainerHeaderTime},[e._v("注册时间"+e._s(e.ago(e.userInfo.create_at)))])],1),n("tabs",{class:e.$style.tabs,model:{value:e.userTab,callback:function(t){e.userTab=t},expression:"userTab"}},[n("tabs-item",{attrs:{id:"replies"}},[e._v("参与的话题")]),n("tabs-item",{attrs:{id:"topics"}},[e._v("发布的话题")]),n("tabs-item",{attrs:{id:"collect"}},[e._v("收藏")])],1),n("tab-container",{ref:"content",on:{scroll:e.handerScroll},model:{value:e.userTab,callback:function(t){e.userTab=t},expression:"userTab"}},[n("tab-container-item",{class:e.$style.userReplies,attrs:{id:"replies"}},[e._l(e.userInfo.recent_replies,function(e,t){return n("topics-item",{key:t,attrs:{topics:e}})}),e.userInfo.recent_replies.length?e._e():n("div",{class:e.$style.userNoData},[n("icon",{attrs:{type:"no-data"}})],1)],2),n("tab-container-item",{class:e.$style.userTopics,attrs:{id:"topics"}},[e._l(e.userInfo.recent_topics,function(e,t){return n("topics-item",{key:t,attrs:{topics:e}})}),e.userInfo.recent_topics.length?e._e():n("div",{class:e.$style.userNoData},[n("icon",{attrs:{type:"no-data"}})],1)],2),"collect"===e.userTab?n("tab-container-item",{attrs:{id:"collect"}},[e.userInfo.collect.length?e._e():n("div",{class:e.$style.userNoData},[n("icon",{attrs:{type:"no-data"}})],1),e.userInfo.collect.length?n("div",{class:e.$style.userCollect},e._l(e.userInfo.collect,function(t,s){return n("router-link",{key:s,attrs:{to:e.path.details(t.id)}},[n("topics-card",{attrs:{topics:t}})],1)}),1):e._e()]):e._e()],1)],1)],1):e._e()},r=[],i=(n("96cf"),n("3040")),o=n("c665"),c=n("dc0a"),l=n("aa9a"),u=n("d328"),d=n("11d9"),p=n("9ab4"),f=n("60a3"),b=n("4bb5"),y=n("421b"),_=n("bde8"),v=n("ac62"),h=n("f2b4"),m=n("cf8c"),g=n("aca7"),C=n("17ac"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{attrs:{to:e.path.details(e.topics.id)}},[n("div",{class:e.$style.topicsItem},[n("div",{class:e.$style.topicsItemContainer},[n("image-lazy",{class:e.$style.userAvatar,attrs:{src:e.topics.author.avatar_url}}),n("div",{class:e.$style.topicsItemContainerBody},[n("div",{class:e.$style.topicsItemContainerBodyTitle},[e._v(e._s(e.topics.title))]),n("div",{class:e.$style.topicsItemContainerBodyAuthor},[e._v("\n          "+e._s(e.topics.author.loginname)+"\n          "),n("span",{class:e.$style.topicsItemContainerBodyTime},[e._v(e._s(e.ago(e.topics.last_reply_at)))])])])],1)])])},x=[],j=n("6f07"),$=function(e){function t(){return Object(o["a"])(this,t),Object(u["a"])(this,Object(d["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),t}(f["c"]);p["a"]([Object(f["b"])(),p["b"]("design:type","function"===typeof(s="undefined"!==typeof j["RecentInfo"]&&j["RecentInfo"])?s:Object)],$.prototype,"topics",void 0),$=p["a"]([Object(f["a"])({mixins:[y["a"]],inject:["path"]})],$);var O=$,T=O,k=n("a2f8"),H=n("2877");function S(e){this["$style"]=k["default"].locals||k["default"]}var w=Object(H["a"])(T,I,x,!1,S,null,null);w.options.__file="index.vue";var B,A,N=w.exports,U=n("234e"),F=n("a38f"),R=n("d257"),D=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(u["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.currentScrollTop=0,e}return Object(l["a"])(t,[{key:"mounted",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.t0=!this.userInfo.loginname,!e.t0){e.next=4;break}return e.next=4,this.getUserInfo(this.loginname);case 4:this.init(),this.$refs.content.$el.scrollTop=this.user.scroll;case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"init",value:function(){this.$refs.content.$el.style.height="".concat(this.userContainerHeight(),"px")}},{key:"userContainerHeight",value:function(){var e=[".wu-navbar","".concat(this.getStyle("userContainerHeader")),"".concat(this.getStyle("tabs"))];return R["b"]-Object(R["a"])(e)}},{key:"handerScroll",value:function(e){var t=e.srcElement,n=(t.clientHeight,t.scrollTop);t.scrollHeight;this.currentScrollTop=n}},{key:"destroyed",value:function(){this.updateUserScroll(this.currentScrollTop)}},{key:"getStyle",value:function(e){return".".concat(this.$style[e])}},{key:"userInfo",get:function(){var e=this;return this.users.filter(function(t){return t.loginname===e.loginname})[0]||{}}},{key:"userTab",get:function(){return this.user.tab},set:function(e){this.userTab!==e&&("collect"===e&&!this.userInfo.collect.length&&this.getUserCollect(this.loginname),this.changeUserTab(e))}}]),Object(c["a"])(t,e),t}(f["c"]);p["a"]([Object(f["b"])(),p["b"]("design:type",String)],D.prototype,"loginname",void 0),p["a"]([Object(f["b"])(),p["b"]("design:type",String)],D.prototype,"my",void 0),p["a"]([Object(b["a"])(F["d"]),p["b"]("design:type",Function)],D.prototype,"getUserInfo",void 0),p["a"]([Object(b["a"])(F["a"]),p["b"]("design:type",Function)],D.prototype,"changeUserTab",void 0),p["a"]([Object(b["a"])(F["e"]),p["b"]("design:type",Function)],D.prototype,"updateUserScroll",void 0),p["a"]([Object(b["a"])(F["g"]),p["b"]("design:type",Function)],D.prototype,"logout",void 0),p["a"]([Object(b["a"])(F["c"]),p["b"]("design:type",Function)],D.prototype,"getUserCollect",void 0),p["a"]([Object(b["b"])(function(e){return e.user.users}),p["b"]("design:type","function"===typeof(B="undefined"!==typeof Array&&Array)?B:Object)],D.prototype,"users",void 0),p["a"]([Object(b["b"])(function(e){return e.user}),p["b"]("design:type","function"===typeof(A="undefined"!==typeof j["UserState"]&&j["UserState"])?A:Object)],D.prototype,"user",void 0),D=p["a"]([Object(f["a"])({components:{NavBar:_["a"],Icon:v["a"],Tabs:h["a"],TabsItem:C["a"],TabContainer:m["a"],TabContainerItem:g["a"],TopicsItem:N,TopicsCard:U["a"]},mixins:[y["a"]],inject:["path"]})],D);var E=D,z=E,V=n("e176");function X(e){this["$style"]=V["default"].locals||V["default"]}var J=Object(H["a"])(z,a,r,!1,X,null,null);J.options.__file="index.vue";t["default"]=J.exports},"3b1c":function(e,t,n){e.exports={topicsItem:"index_topicsItem_1MfVi",topicsItemContainer:"index_topicsItemContainer_2_6EI",userAvatar:"index_userAvatar_sQg16",topicsItemContainerBody:"index_topicsItemContainerBody_3EHZX",topicsItemContainerBodyTitle:"index_topicsItemContainerBodyTitle_144f7",topicsItemContainerBodyAuthor:"index_topicsItemContainerBodyAuthor_10FPy",topicsItemContainerBodyTime:"index_topicsItemContainerBodyTime_3mQdV"}},"4dc5":function(e,t,n){"use strict";var s=n("af12"),a=n.n(s);a.a},a2f8:function(e,t,n){"use strict";var s=n("3b1c"),a=n.n(s);t["default"]=a.a},af12:function(e,t,n){},bde8:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wu-navbar"},[n("div",{staticClass:"wu-navbar-left",on:{click:function(t){return e.$emit("leftClick")}}},[e._t("left")],2),n("div",{staticClass:"wu-navbar-content"},[e._t("default")],2),n("div",{staticClass:"wu-navbar-right",on:{click:function(t){return e.$emit("rightClick")}}},[e._t("right")],2)])},a=[],r=n("c665"),i=n("dc0a"),o=n("d328"),c=n("11d9"),l=n("9ab4"),u=n("60a3"),d=function(e){function t(){return Object(r["a"])(this,t),Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(i["a"])(t,e),t}(u["c"]);d=l["a"]([u["a"]],d);var p=d,f=p,b=(n("4dc5"),n("2877")),y=Object(b["a"])(f,s,a,!1,null,null,null);y.options.__file="index.vue";t["a"]=y.exports},e176:function(e,t,n){"use strict";var s=n("ec1a"),a=n.n(s);t["default"]=a.a},ec1a:function(e,t,n){e.exports={user:"index_user_2st4m",userReplies:"index_userReplies_YEPi8",userTopics:"index_userTopics_13Q1I",userContainer:"index_userContainer_1c7uX",userContainerHeader:"index_userContainerHeader_1rqXv",userAvatar:"index_userAvatar_1XFxj",userContainerHeaderNickname:"index_userContainerHeaderNickname_Y8Hpr",userContainerHeaderTime:"index_userContainerHeaderTime_1ORtm",userContainerHeaderInfo:"index_userContainerHeaderInfo_2DJVr",userContainerHeaderScore:"index_userContainerHeaderScore_F9DVz",userCollect:"index_userCollect_2BNez",userNoData:"index_userNoData_2ohuB",tabs:"index_tabs_i9wex"}}}]);
//# sourceMappingURL=chunk-05e6.7df54546.js.map