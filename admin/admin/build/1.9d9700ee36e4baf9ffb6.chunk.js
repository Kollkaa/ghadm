webpackJsonp([1],{"./admin/src/assets/images/bg_hp_tee_shirt.png":function(e,n,t){e.exports=t.p+"6ac7ec11a5fa963b2b64f047371f0b5e.png"},"./admin/src/assets/images/dashboard/active.png":function(e,n,t){e.exports=t.p+"29ce4f8e2deb040baacd2261b2ecc1e9.png"},"./admin/src/assets/images/dashboard/calendar.png":function(e,n,t){e.exports=t.p+"98e8de7199f89c6d17f7806abe876d6e.png"},"./admin/src/assets/images/dashboard/chart.png":function(e,n,t){e.exports=t.p+"678ccbe94e1e1649260bec40492d6f83.png"},"./admin/src/assets/images/dashboard/hackers.png":function(e,n,t){e.exports=t.p+"0e450ee2ee610374c8394293d40f7bac.png"},"./admin/src/assets/images/dashboard/pages.png":function(e,n,t){e.exports=t.p+"5db3848a168d6d03ba03c8da4b30c993.png"},"./admin/src/assets/images/dashboard/visits.png":function(e,n,t){e.exports=t.p+"d2ded3f7b3768c1ff970040af7df6a8e.png"},"./admin/src/assets/images/dashboard/world-report.png":function(e,n,t){e.exports=t.p+"21406d013e3d7f04901465fe680d0c5e.png"},"./admin/src/containers/HomePage/actions.js":function(e,n,t){"use strict";function o(){return{type:l.GET_ARTICLES}}function s(e){return{type:l.GET_ARTICLES_SUCCEEDED,articles:e}}function r(e){var n=e.target;return{type:l.ON_CHANGE,value:n.value}}function a(){return{type:l.SUBMIT}}function i(){return{type:l.SUBMIT_SUCCEEDED}}Object.defineProperty(n,"__esModule",{value:!0}),n.getArticles=o,n.getArticlesSucceeded=s,n.onChange=r,n.submit=a,n.submitSucceeded=i;var l=t("./admin/src/containers/HomePage/constants.js")},"./admin/src/containers/HomePage/constants.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.GET_ARTICLES="app/HomePage/GET_ARTICLES",n.GET_ARTICLES_SUCCEEDED="app/HomePage/GET_ARTICLES_SUCCEEDED",n.ON_CHANGE="app/HomePage/ON_CHANGE",n.SUBMIT="app/HomePage/SUBMIT",n.SUBMIT_SUCCEEDED="app/HomePage/SUBMIT_SUCCEEDED"},"./admin/src/containers/HomePage/index.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function i(e){return(0,_.bindActionCreators)({getArticles:E.getArticles,onChange:E.onChange,submit:E.submit},e)}Object.defineProperty(n,"__esModule",{value:!0}),n.HomePage=void 0;var l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,s){var r=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&r)for(var i in r)void 0===t[i]&&(t[i]=r[i]);else t||(t=r||{});if(1===a)t.children=s;else if(a>1){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),d=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),c=t("./node_modules/strapi-helper-plugin/node_modules/react/index.js"),p=o(c),m=t("./node_modules/strapi-helper-plugin/node_modules/react-redux/lib/index.js"),u=t("./node_modules/strapi-helper-plugin/node_modules/react-helmet/lib/Helmet.js"),g=o(u),_=(t("./node_modules/strapi-helper-plugin/node_modules/react-intl/lib/index.es.js"),t("./node_modules/strapi-helper-plugin/node_modules/redux/lib/redux.js")),f=t("./node_modules/strapi-helper-plugin/node_modules/reselect/es/index.js"),h=t("./node_modules/strapi-helper-plugin/node_modules/prop-types/index.js"),b=(o(h),t("./node_modules/strapi-helper-plugin/node_modules/lodash/lodash.js"),t("./node_modules/strapi-helper-plugin/node_modules/classnames/index.js")),x=o(b),y=t("./node_modules/strapi-helper-plugin/lib/src/components/Button/index.js"),P=(o(y),t("./node_modules/strapi-helper-plugin/lib/src/components/InputText/index.js")),v=(o(P),t("./node_modules/strapi-helper-plugin/lib/src/utils/auth.js")),H=(o(v),t("./node_modules/strapi-helper-plugin/lib/src/utils/inputsValidations.js")),j=(o(H),t("./admin/src/containers/App/selectors.js")),k=t("./admin/src/utils/injectReducer.js"),w=o(k),S=t("./admin/src/utils/injectSaga.js"),C=o(S),E=t("./admin/src/containers/HomePage/actions.js"),L=t("./admin/src/containers/HomePage/selectors.js"),I=o(L),O=t("./admin/src/containers/HomePage/reducer.js"),T=o(O),A=t("./admin/src/containers/HomePage/saga.js"),F=o(A),B=t("./admin/src/containers/HomePage/styles.scss"),R=o(B),M=(t("./node_modules/strapi-helper-plugin/node_modules/vm-browserify/index.js"),t("./admin/src/assets/images/dashboard/pages.png")),U=o(M),N=t("./admin/src/assets/images/dashboard/hackers.png"),z=o(N),D=t("./admin/src/assets/images/dashboard/visits.png"),W=o(D),$=t("./admin/src/assets/images/dashboard/active.png"),G=o($),J=t("./admin/src/assets/images/dashboard/calendar.png"),q=o(J),V=t("./admin/src/assets/images/dashboard/chart.png"),K=o(V),Y=t("./admin/src/assets/images/dashboard/world-report.png"),Q=o(Y),X=l(g.default,{title:"Головна"}),Z=l("span",{},void 0,l("img",{src:U.default}),l("img",{src:z.default}),l("img",{src:W.default})),ee=l("img",{src:K.default}),ne=l("img",{src:q.default}),te=l("img",{src:G.default}),oe=l("img",{src:Q.default}),se=n.HomePage=function(e){function n(){var e,t,o,a;s(this,n);for(var i=arguments.length,l=Array(i),d=0;d<i;d++)l[d]=arguments[d];return t=o=r(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(l))),o.state={errors:[]},a=t,r(o,a)}return a(n,e),d(n,[{key:"render",value:function(){return l("div",{className:(0,x.default)("container-fluid",R.default.containerFluid)},void 0,X,l("div",{className:"row"},void 0,Z,ee,ne,te,oe))}}]),n}(p.default.PureComponent),re=(0,f.createStructuredSelector)({homePage:(0,I.default)(),plugins:(0,j.selectPlugins)()}),ae=(0,m.connect)(re,i),ie=(0,w.default)({key:"homePage",reducer:T.default}),le=(0,C.default)({key:"homePage",saga:F.default});n.default=(0,_.compose)(ie,le,ae)(se)},"./admin/src/containers/HomePage/reducer.js":function(e,n,t){"use strict";function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=arguments[1];switch(n.type){case r.GET_ARTICLES_SUCCEEDED:return e.update("articles",function(){return(0,s.List)(n.articles)});case r.ON_CHANGE:return e.updateIn(["body","email"],function(){return n.value});case r.SUBMIT_SUCCEEDED:return e.updateIn(["body","email"],function(){return""});default:return e}}Object.defineProperty(n,"__esModule",{value:!0});var s=t("./node_modules/strapi-helper-plugin/node_modules/immutable/dist/immutable.js"),r=t("./admin/src/containers/HomePage/constants.js"),a=(0,s.fromJS)({articles:(0,s.List)([{content:"",title:"",link:""},{content:"",title:"",link:""}]),body:(0,s.Map)({email:""})});n.default=o},"./admin/src/containers/HomePage/saga.js":function(e,n,t){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}function s(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.call)(i);case 3:return e=t.sent,n=e.posts.reduce(function(e,n){var t=(0,l.dropRight)((0,l.take)((0,c.default)(n.markdown),250).join("").split(" ")).join(" ");return e.push({title:n.title,link:n.slug,content:t+" [...]"}),e},[]),t.next=7,(0,p.put)((0,g.getArticlesSucceeded)(n));case 7:t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}},h,this,[[0,9]])}function r(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.select)((0,f.makeSelectBody)());case 3:return e=n.sent,n.next=6,(0,p.call)(u.default,"https://analytics.strapi.io/register",{method:"POST",body:e});case 6:n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:return n.prev=10,strapi.notification.success("HomePage.notification.newsLetter.success"),n.next=14,(0,p.put)((0,g.submitSucceeded)());case 14:return n.finish(10);case 15:case"end":return n.stop()}},b,this,[[0,8,10,15]])}function a(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.all)([(0,p.fork)(p.takeLatest,_.SUBMIT,r),(0,p.fork)(p.takeLatest,_.GET_ARTICLES,s)]);case 2:case"end":return e.stop()}},x,this)}function i(){return e("https://blog.strapi.io/ghost/api/v0.1/posts/?client_id=ghost-frontend&client_secret=1f260788b4ec&limit=2",{}).then(function(e){return e.json?e.json():e})}Object.defineProperty(n,"__esModule",{value:!0}),t("./node_modules/strapi-helper-plugin/node_modules/whatwg-fetch/fetch.js");var l=t("./node_modules/strapi-helper-plugin/node_modules/lodash/lodash.js"),d=t("./node_modules/remove-markdown/index.js"),c=o(d),p=t("./node_modules/strapi-helper-plugin/node_modules/redux-saga/es/effects.js"),m=t("./node_modules/strapi-helper-plugin/lib/src/utils/request.js"),u=o(m),g=t("./admin/src/containers/HomePage/actions.js"),_=t("./admin/src/containers/HomePage/constants.js"),f=t("./admin/src/containers/HomePage/selectors.js"),h=regeneratorRuntime.mark(s),b=regeneratorRuntime.mark(r),x=regeneratorRuntime.mark(a);n.default=a}).call(n,t("./node_modules/strapi-helper-plugin/node_modules/exports-loader/index.js?self.fetch!./node_modules/strapi-helper-plugin/node_modules/whatwg-fetch/fetch.js"))},"./admin/src/containers/HomePage/selectors.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.selectHomePageDomain=n.makeSelectBody=void 0;var o=t("./node_modules/strapi-helper-plugin/node_modules/reselect/es/index.js"),s=function(){return function(e){return e.get("homePage")}},r=function(){return(0,o.createSelector)(s(),function(e){return e.toJS()})},a=function(){return(0,o.createSelector)(s(),function(e){return e.get("body").toJS()})};n.default=r,n.makeSelectBody=a,n.selectHomePageDomain=s},"./admin/src/containers/HomePage/styles.scss":function(e,n,t){var o=t("./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./admin/src/containers/HomePage/styles.scss");"string"==typeof o&&(o=[[e.i,o,""]]);var s={};s.transform=void 0,t("./node_modules/strapi-helper-plugin/node_modules/style-loader/lib/addStyles.js")(o,s),o.locals&&(e.exports=o.locals)},"./node_modules/remove-markdown/index.js":function(e,n){e.exports=function(e,n){n=n||{},n.listUnicodeChar=!!n.hasOwnProperty("listUnicodeChar")&&n.listUnicodeChar,n.stripListLeaders=!n.hasOwnProperty("stripListLeaders")||n.stripListLeaders,n.gfm=!n.hasOwnProperty("gfm")||n.gfm;var t=e||"";t=t.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm,"");try{n.stripListLeaders&&(t=n.listUnicodeChar?t.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,n.listUnicodeChar+" $1"):t.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,"$1")),n.gfm&&(t=t.replace(/\n={2,}/g,"\n").replace(/~~/g,"").replace(/`{3}.*\n/g,"")),t=t.replace(/<[^>]*>/g,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[.*?\][\[\(].*?[\]\)]/g,"").replace(/\[(.*?)\][\[\(].*?[\]\)]/g,"$1").replace(/^\s{0,3}>\s?/g,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/\n{2,}/g,"\n\n")}catch(n){return console.error(n),e}return t}},"./node_modules/strapi-helper-plugin/lib/src/components/InputText/index.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e){var n=(0,d.isEmpty)(e.placeholder)?"app.utils.placeholder.defaultMessage":e.placeholder;return r(c.FormattedMessage,{id:n,defaultMessage:n},void 0,function(n){return i.default.createElement("input",{autoFocus:e.autoFocus,className:(0,m.default)(g.default.textInput,"form-control",!e.deactivateErrorHighlight&&e.error&&"is-invalid",!(0,d.isEmpty)(e.className)&&e.className),disabled:e.disabled,id:e.name,name:e.name,onBlur:e.onBlur,onChange:e.onChange,onFocus:e.onFocus,placeholder:n,ref:e.inputRef,style:e.style,tabIndex:e.tabIndex,type:"text",value:e.value})})}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,s){var r=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&r)for(var i in r)void 0===t[i]&&(t[i]=r[i]);else t||(t=r||{});if(1===a)t.children=s;else if(a>1){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),a=t("./node_modules/strapi-helper-plugin/node_modules/react/index.js"),i=o(a),l=t("./node_modules/strapi-helper-plugin/node_modules/prop-types/index.js"),d=(o(l),t("./node_modules/strapi-helper-plugin/node_modules/lodash/lodash.js")),c=t("./node_modules/strapi-helper-plugin/node_modules/react-intl/lib/index.es.js"),p=t("./node_modules/strapi-helper-plugin/node_modules/classnames/index.js"),m=o(p),u=t("./node_modules/strapi-helper-plugin/lib/src/components/InputText/styles.scss"),g=o(u);s.defaultProps={autoFocus:!1,className:"",deactivateErrorHighlight:!1,disabled:!1,error:!1,inputRef:function(){},onBlur:function(){},onFocus:function(){},placeholder:"app.utils.placeholder.defaultMessage",style:{},tabIndex:"0"},n.default=s},"./node_modules/strapi-helper-plugin/lib/src/components/InputText/styles.scss":function(e,n,t){var o=t("./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./node_modules/strapi-helper-plugin/lib/src/components/InputText/styles.scss");"string"==typeof o&&(o=[[e.i,o,""]]);var s={};s.transform=void 0,t("./node_modules/strapi-helper-plugin/node_modules/style-loader/lib/addStyles.js")(o,s),o.locals&&(e.exports=o.locals)},"./node_modules/strapi-helper-plugin/lib/src/utils/inputsValidations.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("./node_modules/strapi-helper-plugin/node_modules/lodash/lodash.js"),s=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",s=[],r=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),a={id:"components.Input.error.validation.required"};return(0,o.mapKeys)(n,function(n,t){switch(t){case"max":parseInt(e,10)>n&&s.push({id:"components.Input.error.validation.max"});break;case"maxLength":e&&e.length>n&&s.push({id:"components.Input.error.validation.maxLength"});break;case"min":parseInt(e,10)<n&&s.push({id:"components.Input.error.validation.min"});break;case"minLength":(!e||e.length<n)&&s.push({id:"components.Input.error.validation.minLength"});break;case"required":null!=e&&0!==e.length||s.push({id:"components.Input.error.validation.required"});break;case"regex":new RegExp(n).test(e)||s.push({id:"components.Input.error.validation.regex"});break;case"type":if("json"===n)try{e=JSON.parse(e)}catch(e){s.push({id:"components.Input.error.validation.json"})}break;default:s=[]}}),"email"!==t||r.test(e)||s.push({id:"components.Input.error.validation.email"}),(0,o.includes)(s,a)&&(s=(0,o.reject)(s,function(e){return e!==a})),s};n.default=s},"./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./admin/src/containers/HomePage/styles.scss":function(e,n,t){var o=t("./node_modules/strapi-helper-plugin/node_modules/css-loader/lib/url/escape.js");n=e.exports=t("./node_modules/strapi-helper-plugin/node_modules/css-loader/lib/css-base.js")(!1),n.push([e.i,'.adminblockLink__admin-src-containers-HomePage-styles__2LOPH{position:relative;width:calc(50% - 6px);height:auto;margin-top:41px;padding:22px 25px 19px 96px;background:#f7f8f8;border-radius:3px;line-height:18px;text-decoration:none}.adminblockLink__admin-src-containers-HomePage-styles__2LOPH>span{font-family:Lato-Bold;font-size:16px;color:#333740;letter-spacing:0}.adminblockLink__admin-src-containers-HomePage-styles__2LOPH>p{font-family:Lato-Regular;font-size:13px;color:#919bae;letter-spacing:0;line-height:18px;margin:0}.adminblockLink__admin-src-containers-HomePage-styles__2LOPH:hover{text-decoration:none}.adminblockLinkDocumentation__admin-src-containers-HomePage-styles__2WEf3:before{content:"\\F02D";position:absolute;left:3rem;top:4rem;color:#42b88e;font-family:FontAwesome;font-size:38px}.adminblockLinkCode__admin-src-containers-HomePage-styles__2eG8W:before{content:"\\F121";position:absolute;left:3rem;top:4rem;color:#f0811e;font-family:FontAwesome;font-size:38px}.adminblockShirt__admin-src-containers-HomePage-styles__1--L7{position:relative;min-height:34rem;margin-bottom:20px;background-image:linear-gradient(45deg,#1a67da,#0097f6)!important;line-height:18px}.adminblockShirt__admin-src-containers-HomePage-styles__1--L7>div{position:absolute;padding:38px 0 62px 25px;top:0;bottom:0;left:0;right:0;color:#fff}.adminblockShirt__admin-src-containers-HomePage-styles__1--L7>div>p{max-width:400px;margin-top:18px;margin-bottom:125px;padding-right:35px;font-size:13px;font-weight:400}.adminblockShirt__admin-src-containers-HomePage-styles__1--L7:before{opacity:.7;content:"";background-image:url('+o(t("./admin/src/assets/images/bg_hp_tee_shirt.png"))+')!important;background-size:contain;background-repeat:no-repeat;position:absolute;top:0;bottom:0;left:0;right:0}.admincommunityContentP__admin-src-containers-HomePage-styles__3NJVC{display:block;max-width:49rem!important;margin-top:0!important;margin-bottom:51px;color:#919bae!important}.admincontainerFluid__admin-src-containers-HomePage-styles__3Wh1J{padding:47px 13px 0}.admincontainerFluid__admin-src-containers-HomePage-styles__3Wh1J>div{margin:0}.adminhomePageFlex__admin-src-containers-HomePage-styles__pAXwQ{display:-ms-flexbox;display:flex;width:100%;-ms-flex-pack:justify;justify-content:space-between}.adminhomePageForm__admin-src-containers-HomePage-styles__1zC-l{padding-top:19px;padding-left:15px}.adminhomePageForm__admin-src-containers-HomePage-styles__1zC-l div{padding:0}.adminhomePageForm__admin-src-containers-HomePage-styles__1zC-l input{float:left;width:calc(100% - 120px);border-top-right-radius:0;border-bottom-right-radius:0}.adminhomePageForm__admin-src-containers-HomePage-styles__1zC-l input:focus{border-color:#e3e9f3}.adminhomePageForm__admin-src-containers-HomePage-styles__1zC-l input::-webkit-input-placeholder{font-style:italic}.adminhomePageForm__admin-src-containers-HomePage-styles__1zC-l button{float:left;min-width:100px;height:3.4rem;margin-top:.9rem;padding-left:20px;padding-right:20px;text-align:center;background:#333740;color:#fff;border-top-right-radius:3px;border-bottom-right-radius:3px;font-size:12px;font-weight:800;letter-spacing:.5px}.adminhomePageTutorialButton__admin-src-containers-HomePage-styles__25oyq{position:relative;height:34px;margin-top:17px;margin-bottom:1px;padding-left:40px;padding-right:20px;font-size:13px;font-weight:800;line-height:33px;letter-spacing:.46px;text-align:left}.adminhomePageTutorialButton__admin-src-containers-HomePage-styles__25oyq:before{content:"\\F105";position:absolute;top:0;bottom:0;left:20px;font-size:22px;margin-right:10px;font-family:FontAwesome}.adminhomePageBlogButton__admin-src-containers-HomePage-styles__1R3-M{position:relative;height:34px;margin-top:17px;margin-bottom:1px;padding-left:40px;padding-right:20px;background:#333740;color:#fff;font-size:13px;font-weight:800;line-height:33px;letter-spacing:.46px;text-align:left}.adminhomePageBlogButton__admin-src-containers-HomePage-styles__1R3-M:before{content:"\\F105";position:absolute;top:0;bottom:0;left:20px;font-size:22px;margin-right:10px;font-family:FontAwesome}.adminiconWave__admin-src-containers-HomePage-styles__2aBqo{position:absolute;top:24px;right:0;font-size:50px}.adminnewsLetterWrapper__admin-src-containers-HomePage-styles__3ga-I{height:auto;min-width:50%;padding:20px;background:#f7f8f8;border-radius:3px;line-height:18px}.adminnewsLetterWrapper__admin-src-containers-HomePage-styles__3ga-I>div{padding-right:50px}.adminnewsLetterWrapper__admin-src-containers-HomePage-styles__3ga-I>div>span{font-weight:500;font-size:14px}.adminsocialLink__admin-src-containers-HomePage-styles__wnH6S{height:54px;font-size:14px;font-weight:500;position:relative}.adminsocialLink__admin-src-containers-HomePage-styles__wnH6S a{color:#333740!important;text-decoration:none;line-height:18px}.adminsocialLink__admin-src-containers-HomePage-styles__wnH6S a div{display:inline-block;height:25px;width:25px;text-align:center;vertical-align:top}.adminsocialLink__admin-src-containers-HomePage-styles__wnH6S a img{max-height:25px;max-width:25px}.adminsocialLink__admin-src-containers-HomePage-styles__wnH6S a span{margin-left:11px}.adminsocialLink__admin-src-containers-HomePage-styles__wnH6S a:hover{text-decoration:none}.adminwelcomeContentA__admin-src-containers-HomePage-styles__YrHMU{color:#005fea;text-decoration:none}.adminwelcomeContentA__admin-src-containers-HomePage-styles__YrHMU:hover{text-decoration:none}.adminwelcomeContentP__admin-src-containers-HomePage-styles__3--BW{display:block;max-width:55rem!important;margin-bottom:31px}.adminspinner__admin-src-containers-HomePage-styles__1dge0{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;width:100%;margin:auto}.adminspinner__admin-src-containers-HomePage-styles__1dge0>div{border:2px solid #f3f3f3;border-top:2px solid #3498db;border-radius:50%;width:10px;height:10px;animation:adminspin__admin-src-containers-HomePage-styles__1lWhN 2s linear infinite}@keyframes adminspin__admin-src-containers-HomePage-styles__1lWhN{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""]),n.locals={blockLink:"adminblockLink__admin-src-containers-HomePage-styles__2LOPH",blockLinkDocumentation:"adminblockLinkDocumentation__admin-src-containers-HomePage-styles__2WEf3",blockLinkCode:"adminblockLinkCode__admin-src-containers-HomePage-styles__2eG8W",blockShirt:"adminblockShirt__admin-src-containers-HomePage-styles__1--L7",communityContentP:"admincommunityContentP__admin-src-containers-HomePage-styles__3NJVC",containerFluid:"admincontainerFluid__admin-src-containers-HomePage-styles__3Wh1J",homePageFlex:"adminhomePageFlex__admin-src-containers-HomePage-styles__pAXwQ",homePageForm:"adminhomePageForm__admin-src-containers-HomePage-styles__1zC-l",homePageTutorialButton:"adminhomePageTutorialButton__admin-src-containers-HomePage-styles__25oyq",homePageBlogButton:"adminhomePageBlogButton__admin-src-containers-HomePage-styles__1R3-M",iconWave:"adminiconWave__admin-src-containers-HomePage-styles__2aBqo",newsLetterWrapper:"adminnewsLetterWrapper__admin-src-containers-HomePage-styles__3ga-I",socialLink:"adminsocialLink__admin-src-containers-HomePage-styles__wnH6S",welcomeContentA:"adminwelcomeContentA__admin-src-containers-HomePage-styles__YrHMU",welcomeContentP:"adminwelcomeContentP__admin-src-containers-HomePage-styles__3--BW",spinner:"adminspinner__admin-src-containers-HomePage-styles__1dge0",spin:"adminspin__admin-src-containers-HomePage-styles__1lWhN"}},"./node_modules/strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!./node_modules/strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!./node_modules/strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!./node_modules/strapi-helper-plugin/lib/src/components/InputText/styles.scss":function(e,n,t){n=e.exports=t("./node_modules/strapi-helper-plugin/node_modules/css-loader/lib/css-base.js")(!1),n.push([e.i,".admintextInput__node_modules-strapi-helper-plugin-lib-src-components-InputText-styles__1OgKc{height:3.4rem;margin-top:.9rem;padding-left:1rem;background-size:0!important;border:1px solid #e3e9f3;border-radius:.25rem;line-height:3.4rem;font-size:1.3rem;font-family:Lato!important;box-shadow:0 1px 1px rgba(104,118,142,.05)}",""]),n.locals={textInput:"admintextInput__node_modules-strapi-helper-plugin-lib-src-components-InputText-styles__1OgKc"}},"./node_modules/strapi-helper-plugin/node_modules/vm-browserify/index.js":function(module,exports){function Context(){}var indexOf=function(e,n){if(e.indexOf)return e.indexOf(n);for(var t=0;t<e.length;t++)if(e[t]===n)return t;return-1},Object_keys=function(e){if(Object.keys)return Object.keys(e);var n=[];for(var t in e)n.push(t);return n},forEach=function(e,n){if(e.forEach)return e.forEach(n);for(var t=0;t<e.length;t++)n(e[t],t,e)},defineProp=function(){try{return Object.defineProperty({},"_",{}),function(e,n,t){Object.defineProperty(e,n,{writable:!0,enumerable:!1,configurable:!0,value:t})}}catch(e){return function(e,n,t){e[n]=t}}}(),globals=["Array","Boolean","Date","Error","EvalError","Function","Infinity","JSON","Math","NaN","Number","Object","RangeError","ReferenceError","RegExp","String","SyntaxError","TypeError","URIError","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","eval","isFinite","isNaN","parseFloat","parseInt","undefined","unescape"];Context.prototype={};var Script=exports.Script=function(e){if(!(this instanceof Script))return new Script(e);this.code=e};Script.prototype.runInContext=function(e){if(!(e instanceof Context))throw new TypeError("needs a 'context' argument.");var n=document.createElement("iframe");n.style||(n.style={}),n.style.display="none",document.body.appendChild(n);var t=n.contentWindow,o=t.eval,s=t.execScript;!o&&s&&(s.call(t,"null"),o=t.eval),forEach(Object_keys(e),function(n){t[n]=e[n]}),forEach(globals,function(n){e[n]&&(t[n]=e[n])});var r=Object_keys(t),a=o.call(t,this.code);return forEach(Object_keys(t),function(n){(n in e||-1===indexOf(r,n))&&(e[n]=t[n])}),forEach(globals,function(n){n in e||defineProp(e,n,t[n])}),document.body.removeChild(n),a},Script.prototype.runInThisContext=function(){return eval(this.code)},Script.prototype.runInNewContext=function(e){var n=Script.createContext(e),t=this.runInContext(n);return e&&forEach(Object_keys(n),function(t){e[t]=n[t]}),t},forEach(Object_keys(Script.prototype),function(e){exports[e]=Script[e]=function(n){var t=Script(n);return t[e].apply(t,[].slice.call(arguments,1))}}),exports.isContext=function(e){return e instanceof Context},exports.createScript=function(e){return exports.Script(e)},exports.createContext=Script.createContext=function(e){var n=new Context;return"object"==typeof e&&forEach(Object_keys(e),function(t){n[t]=e[t]}),n}}});
//# sourceMappingURL=1.9d9700ee36e4baf9ffb6.chunk.js.map