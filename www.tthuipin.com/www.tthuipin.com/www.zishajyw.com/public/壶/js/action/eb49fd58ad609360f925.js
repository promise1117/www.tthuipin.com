(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{232:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},234:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",(function(){return r}))},235:function(t,e,n){"use strict";var r="".concat("/api","/SiteCustomer/GetProjectSelectionAllList"),c="".concat("/api","/ShaXuaHome/GetProjectSelectionAllList"),o="".concat("/api","/ShaXuanPotAndPug/GetAllPugAndPotType"),l="".concat("/api","/ShaXuanPotAndPug/GetAllProperties"),d="".concat("/api","/ShaXuaHome/GetClassTypeFiltrate"),_="".concat("/api","/ShaXuaHome/GetClassTypes"),h="".concat("/api","/ShaXuanPotAndPug/GetPugAndPotExplainInDetail"),m="".concat("/api","/ShaXuaArtist/GetArtistsList"),v="".concat("/api","/ShaXuaHome/GetClassTypesDetail"),f="".concat("/api","/ShaXuanGoods/GetRepresentativeWorks"),S="".concat("/api","/ShaXuaArtist/GetArtistsParentIDList"),T="".concat("/api","/ShaXuaArtist/GetArtistsRepresentativeWorksList"),A="".concat("/api","/ShaXuaHome/GetPrivateTopClass"),E="".concat("/api","/ShaXuanSiteArticle/GetArticlesNews"),C="".concat("/api","/ShaXuanSiteArticle/GetArticlesParticulars"),y="".concat("/api","/ShaXuaHome/GetShaXuaKeyword"),I="".concat("/api","/ShaXuaHome/GetSearchKeywordTop10"),x="".concat("/api","/ShaXuanSiteExhibition/GetSiteExhibitionPicture");e.a={TEST_API:r,HOME_PAGE:c,GOODS_PROPERTY_BY_TYPE:o,GOODS_PROPERTY_BY_ID:l,GET_CLASS_TYPE_FILTERATE:d,GET_PROPERTY_DETAIL:h,ARTIST_HOME:m,GET_GOODS_LIST:v,GET_GOODS_DETAIL:f,GET_ARTIST_LIST:S,GET_ARTIST_DETAIL:T,GET_CLASS_TYPE:_,GET_CLASSIFY:A,GET_ARTICLE_LIST:E,GET_ARTICLE_DETAIL:C,SEARCH:y,SEARCH_TOP10:I,GET_BANNER:x}},236:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return l}));var r={ZISHA:1,TEA:2,ZB:3,TH:4,YH:5,ZP:6,CQ:7},c={ZISHA:1,CQ:2,TH:3,YH:4},o={goods:1,artist:2,article:3},l={HOMEPAGE:1,ARTIST:2,AMBITUS:3,TEA:4,CHINAWARE:5,TH:6,YH:7,SC:9}},238:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"g",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return _})),n.d(e,"e",(function(){return h})),n.d(e,"f",(function(){return m})),n.d(e,"a",(function(){return v}));n(100),n(101),n(239),n(36),n(30),n(80),n(99);var r=n(234),c=n(236);function o(data,t){return data?Object(r.a)(data.map((function(e){return new t(e)}))):[]}function l(t){if(!t||""===t)return 0;var e=t.split(" "),n=e[0].split("-"),time=e[1].split(":"),r=new Date(n[0],n[1]-1,n[2],time[0],time[1],time[2]),c=(new Date).getTime(),o=r.getTime();return o-c>0?o-c:0}function d(data){return data.forEach((function(t){Object.keys(t).forEach((function(e){"ImagePath"===e&&(t[e]="http://static.sxzisha.com/"+t[e]),"Data"===e&&d(t[e])}))})),data}function _(t){var e=new Date(t);return"".concat(e.getFullYear(),"-").concat((e.getMonth()+1).toString().padStart(2,"0"),"-").concat(e.getDate().toString().padStart(2,"0"),"\n  ").concat(e.getHours().toString().padStart(2,"0"),":").concat(e.getMinutes().toString().padStart(2,"0"))}function h(data){return data>9999?"".concat(data.substring(0,1),"万"):data}function m(data){return data.map((function(t){for(var e in c.c)c.c[e]===t.Type&&(t.Type=e)})),data}function v(data){return data.map((function(t){return t.Banner="http://static.sxzisha.com/"+t.Banner})),data}},239:function(t,e,n){"use strict";var r=n(16),c=n(240),o=n(145),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*l,"String",{padStart:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},240:function(t,e,n){var r=n(43),c=n(146),o=n(42);t.exports=function(t,e,n,l){var d=String(o(t)),_=d.length,h=void 0===n?" ":String(n),m=r(e);if(m<=_||""==h)return d;var v=m-_,f=c.call(h,Math.ceil(v/h.length));return f.length>v&&(f=f.slice(0,v)),l?f+d:d+f}},250:function(t,e,n){},258:function(t,e,n){"use strict";var r=n(232);e.a=function t(data){Object(r.a)(this,t),this.Id=data.Id||data.ID,this.Author=data.Author,this.Title=data.Title,this.SubTitle=data.SubTitle,this.ViewNum=data.ViewNum,this.GoodNum=data.GoodNum,this.CreateTime=data.CreateTime,this.TitleImage="http://static.sxzisha.com/"+data.TitleImage}},261:function(t,e,n){"use strict";var r=n(250);n.n(r).a},264:function(t,e,n){"use strict";var r={props:{article:{type:Object,default:{}}}},c=(n(261),n(10)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article_item"},[n("nuxt-link",{attrs:{to:{name:"article-detail-id",params:{id:t.article.Id}}}},[n("h2",{staticClass:"title"},[t._v(t._s(t.article.Title))]),t._v(" "),n("span",{staticClass:"date"},[t._v(t._s(t.article.CreateTime))]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"content_short"},[t._v("\n      "+t._s(t.article.SubTitle)+"\n    ")]),t._v(" "),n("img",{staticStyle:{width:"100%","border-radius":"10px"},attrs:{src:t.article.TitleImage,alt:""}})]),t._v(" "),n("div",{staticClass:"bottom"},[n("span",[t._v(t._s(t.article.ViewNum))]),n("span",[t._v("  阅读")])])])],1)}),[],!1,null,"61817ae3",null);e.a=component.exports},279:function(t,e,n){},310:function(t,e,n){"use strict";var r=n(279);n.n(r).a},339:function(t,e,n){"use strict";n.r(e);var r=n(234),c=(n(61),n(102)),o=n(264),l=n(235),d=n(238),_=n(258),h={layout:"default",components:{NavBar:c.a,ArticleItem:o.a},data:function(){return{articleList:[],loading:!1,isAllLoaded:!1,pageIndex:0,pageSize:6,isLoading:!1}},head:function(){return{title:"紫砂壶壶型_紫砂壶百科_砂轩紫砂",meta:[{name:"keywords",hid:"keywords",content:"紫砂壶壶型,紫砂壶泥料,紫砂壶开壶,紫砂壶工艺,紫砂壶术语,紫砂壶文献,茶文化"},{name:"description",hid:"description",content:""}]}},asyncData:function(t){var e,n,data;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:t.$axios,e=t.error,r.prev=1,r.next=12;break;case 5:if(1!==(n=r.sent).Code){r.next=11;break}return data=n.Data.Data,r.abrupt("return",{articleList:Object(d.d)(data,_.a),isAllLoaded:data.length<6,pageIndex:1});case 11:return r.abrupt("return",e({statusCode:500}));case 12:r.next=23;break;case 14:if(r.prev=14,r.t0=r.catch(1),void 0!==r.t0.response){r.next=20;break}return r.abrupt("return",e({statusCode:500}));case 20:if(404===r.t0.response.status){r.next=22;break}return r.abrupt("return",e({statusCode:500}));case 22:return r.abrupt("return",e({statusCode:404}));case 23:case"end":return r.stop()}}),null,null,[[1,14]])},methods:{loaderMore:function(){this.$store.state.is2Detail||this.isLoading||(this.pageIndex++,this.getData())},getData:function(){var t=this;try{if(this.isAllLoaded)return;this.$toast.loading({duration:0,message:"加载中...",forbidClick:!0}),this.isLoading=!0,this.$axios.$get("".concat(l.a.GET_ARTICLE_LIST,"?type=0&pageIndex=").concat(this.pageIndex,"&pageSize=").concat(this.pageSize)).then((function(e){1===e.Code?(t.isAllLoaded=e.Data.Data.length<t.pageSize,1===t.pageIndex?t.articleList=Object(d.d)(e.Data.Data,_.a):t.articleList=[].concat(Object(r.a)(t.articleList),Object(r.a)(Object(d.d)(e.Data.Data,_.a))),t.$toast.clear(),t.loading=!1,t.isLoading=!1):(t.$toast.fail(e.Message),t.loading=!1,t.isLoading=!1)}))}catch(t){this.$toast.fail("系统错误，请稍后再试..."),this.isLoading=!1}}},mounted:function(){var t=this;this.$nextTick((function(){t.$store.commit("SET_TABBAR",3),t.$store.state.isFirstBrowser&&t.$store.commit("IS_FIRST_BROWSER",!1)}))}},m=(n(310),n(10)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("nav-bar",{attrs:{title:"百科"}}),t._v(" "),n("div",{staticClass:"baike_menu_container"},[n("div",{staticClass:"baike_menu_top"}),t._v(" "),n("div",{staticClass:"baike_menu_bottom"}),t._v(" "),n("div",{staticClass:"baike_menu"},[n("h2",[t._v("百科分类")]),t._v(" "),n("div",{staticClass:"baike_menu_list"},[n("div",{staticStyle:{"white-space":"nowrap"}},[n("div",{staticClass:"baike_menu_list_item"},[n("nuxt-link",{attrs:{to:{name:"article-baike-property-type",params:{type:1}}}},[n("img",{attrs:{src:"http://static.sxzisha.com/static/壶型.png",alt:""}})]),t._v(" "),n("span",[t._v("壶型")])],1),t._v(" "),n("div",{staticClass:"baike_menu_list_item"},[n("nuxt-link",{attrs:{to:{name:"article-baike-property-type",params:{type:2}}}},[n("img",{attrs:{src:"http://static.sxzisha.com/static/泥料.png",alt:""}})]),t._v(" "),n("span",[t._v("泥料")])],1),t._v(" "),n("div",{staticClass:"baike_menu_list_item"},[n("nuxt-link",{attrs:{to:{name:"article-list-type",params:{type:1}}}},[n("img",{attrs:{src:"http://static.sxzisha.com/static/bk1.png",alt:""}})]),t._v(" "),n("span",[t._v("开壶")])],1),t._v(" "),n("div",{staticClass:"baike_menu_list_item"},[n("nuxt-link",{attrs:{to:{name:"article-list-type",params:{type:2}}}},[n("img",{attrs:{src:"http://static.sxzisha.com/static/工艺.png",alt:""}})]),t._v(" "),n("span",[t._v("工艺")])],1),t._v(" "),n("div",{staticClass:"baike_menu_list_item"},[n("nuxt-link",{attrs:{to:{name:"article-list-type",params:{type:3}}}},[n("img",{attrs:{src:"http://static.sxzisha.com/static/术语.png",alt:""}})]),t._v(" "),n("span",[t._v("术语")])],1),t._v(" "),n("div",{staticClass:"baike_menu_list_item"},[n("nuxt-link",{attrs:{to:{name:"article-list-type",params:{type:4}}}},[n("img",{attrs:{src:"http://static.sxzisha.com/static/文献.png",alt:""}})]),t._v(" "),n("span",[t._v("文献")])],1),t._v(" "),n("div",{staticClass:"baike_menu_list_item"},[n("nuxt-link",{attrs:{to:{name:"article-list-type",params:{type:5}}}},[n("img",{attrs:{src:"http://static.sxzisha.com/static/茶文化.png",alt:""}})]),t._v(" "),n("span",[t._v("茶文化")])],1)])]),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"article_list"},[n("van-list",{attrs:{finished:t.isAllLoaded,"finished-text":"没有更多了"},on:{load:t.loaderMore},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.articleList,(function(t,e){return n("article-item",{key:e,attrs:{article:t}})})),1)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tips"},[e("span",{staticStyle:{color:"#681C1F","font-weight":"bold"}},[this._v("紫砂百科   ")]),e("span",[this._v("带您领略不一样的紫砂世界")])])}],!1,null,"17e82d66",null);e.default=component.exports}}]);