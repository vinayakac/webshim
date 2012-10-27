jQuery.webshims.register("dom-extend",function(a,f,k,j,m){var s=f.modules,t=/\s*,\s*/,o={},v={},q={},w={},u={},x=a.fn.val,c=function(h,d,b,e,p){return p?x.call(a(h)):x.call(a(h),b)};a.fn.val=function(h){var d=this[0];arguments.length&&null==h&&(h="");if(!arguments.length)return!d||1!==d.nodeType?x.call(this):a.prop(d,"value",h,"val",!0);if(a.isArray(h))return x.apply(this,arguments);var b=a.isFunction(h);return this.each(function(e){d=this;1===d.nodeType&&(b?(e=h.call(d,e,a.prop(d,"value",m,"val",
!0)),null==e&&(e=""),a.prop(d,"value",e,"val")):a.prop(d,"value",h,"val"))})};var g="_webshimsLib"+Math.round(1E3*Math.random()),n=function(h,d,b){h=h.jquery?h[0]:h;if(!h)return b||{};var e=a.data(h,g);b!==m&&(e||(e=a.data(h,g,{})),d&&(e[d]=b));return d?e&&e[d]:e};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(h){a.fn[h.name]=function(){return this.map(function(){var a=n(this,
"shadowData");return a&&a[h.prop]||this})}});["removeAttr","prop","attr"].forEach(function(h){o[h]=a[h];a[h]=function(d,b,e,p,z){var g="val"==p,n=!g?o[h]:c;if(!d||!v[b]||1!==d.nodeType||!g&&p&&"attr"==h&&a.attrFn[b])return n(d,b,e,p,z);var A=(d.nodeName||"").toLowerCase(),f=q[A],i="attr"==h&&(!1===e||null===e)?"removeAttr":h,l,r,j;f||(f=q["*"]);f&&(f=f[b]);f&&(l=f[i]);if(l){if("value"==b)r=l.isVal,l.isVal=g;if("removeAttr"===i)return l.value.call(d);if(e===m)return l.get?l.get.call(d):l.value;l.set&&
("attr"==h&&!0===e&&(e=b),j=l.set.call(d,e));if("value"==b)l.isVal=r}else j=n(d,b,e,p,z);if((e!==m||"removeAttr"===i)&&u[A]&&u[A][b]){var k;k="removeAttr"==i?!1:"prop"==i?!!e:!0;u[A][b].forEach(function(a){if(!a.only||(a.only="prop"==h)||"attr"==a.only&&"prop"!=h)a.call(d,e,k,g?"val":i,h)})}return j};w[h]=function(d,b,e){q[d]||(q[d]={});q[d][b]||(q[d][b]={});var p=q[d][b][h],z=function(a,d,p){return d&&d[a]?d[a]:p&&p[a]?p[a]:"prop"==h&&"value"==b?function(a){return e.isVal?c(this,b,a,!1,0===arguments.length):
o[h](this,b,a)}:"prop"==h&&"value"==a&&e.value.apply?function(a){var e=o[h](this,b);e&&e.apply&&(e=e.apply(this,arguments));return e}:function(a){return o[h](this,b,a)}};q[d][b][h]=e;if(e.value===m){if(!e.set)e.set=e.writeable?z("set",e,p):f.cfg.useStrict&&"prop"==b?function(){throw b+" is readonly on "+d;}:a.noop;if(!e.get)e.get=z("get",e,p)}["value","get","set"].forEach(function(a){e[a]&&(e["_sup"+a]=z(a,p))})}});var i=!a.browser.msie||8<parseInt(a.browser.version,10),l=function(){var a=f.getPrototypeOf(j.createElement("foobar")),
d=Object.prototype.hasOwnProperty;return function(b,e,p){var c=j.createElement(b),g=f.getPrototypeOf(c);if(i&&g&&a!==g&&(!c[e]||!d.call(c,e))){var l=c[e];p._supvalue=function(){return l&&l.apply?l.apply(this,arguments):l};g[e]=p.value}else p._supvalue=function(){var a=n(this,"propValue");return a&&a[e]&&a[e].apply?a[e].apply(this,arguments):a&&a[e]},r.extendValue(b,e,p.value);p.value._supvalue=p._supvalue}}(),r=function(){var h={};f.addReady(function(b,e){var d={},c=function(h){d[h]||(d[h]=a(b.getElementsByTagName(h)),
e[0]&&a.nodeName(e[0],h)&&(d[h]=d[h].add(e)))};a.each(h,function(a,b){c(a);!b||!b.forEach?f.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){d[a].each(b)})});d=null});var d,b=a([]),e=function(b,e){h[b]?h[b].push(e):h[b]=[e];a.isDOMReady&&(d||a(j.getElementsByTagName(b))).each(e)};return{createTmpCache:function(e){a.isDOMReady&&(d=d||a(j.getElementsByTagName(e)));return d||b},flushTmpCache:function(){d=null},content:function(b,d){e(b,function(){var b=a.attr(this,d);null!=b&&a.attr(this,
d,b)})},createElement:function(a,b){e(a,b)},extendValue:function(b,d,h){e(b,function(){a(this).each(function(){n(this,"propValue",{})[d]=this[d];this[d]=h})})}}}(),y=function(a,d){if(a.defaultValue===m)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[d||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}};if(!a.attr)a.attr={}};a.extend(f,{getID:function(){var h=(new Date).getTime();return function(d){var d=a(d),b=d.attr("id");b||(h++,b="ID-"+h,d.attr("id",b));
return b}}(),extendUNDEFProp:function(h,d){a.each(d,function(a,e){a in h||(h[a]=e)})},createPropDefault:y,data:n,moveToFirstEvent:function(){var h=a._data?"_data":"data";return function(d,b,e){if((d=(a[h](d,"events")||{})[b])&&1<d.length)b=d.pop(),e||(e="bind"),"bind"==e&&d.delegateCount?d.splice(d.delegateCount,0,b):d.unshift(b)}}(),addShadowDom:function(){var h,d,b,e={init:!1,runs:0,test:function(){var a=e.getHeight(),b=e.getWidth();a!=e.height||b!=e.width?(e.height=a,e.width=b,e.handler({type:"docresize"}),
e.runs++,30>e.runs&&setTimeout(e.test,30)):e.runs=0},handler:function(c){clearTimeout(h);h=setTimeout(function(){if("resize"==c.type){var h=a(k).width(),g=a(k).width();if(g==d&&h==b)return;d=g;b=h;e.height=e.getHeight();e.width=e.getWidth()}a.event.trigger("updateshadowdom")},"resize"==c.type?50:9)},_create:function(){a.each({Height:"getHeight",Width:"getWidth"},function(a,b){var d=j.body,h=j.documentElement;e[b]=function(){return Math.max(d["scroll"+a],h["scroll"+a],d["offset"+a],h["offset"+a],h["client"+
a])}})},start:function(){if(!this.init&&j.body)this.init=!0,this._create(),this.height=e.getHeight(),this.width=e.getWidth(),setInterval(this.test,400),a(this.test),a(k).bind("load",this.test),a(k).bind("resize",this.handler),function(){var b=a.fn.animate,d;a.fn.animate=function(){clearTimeout(d);d=setTimeout(function(){e.test();e.handler({type:"animationstart"})},19);return b.apply(this,arguments)}}()}};a.event.customEvent.updateshadowdom=!0;f.docObserve=function(){f.ready("DOM",function(){e.start()})};
return function(b,e,d){d=d||{};b.jquery&&(b=b[0]);e.jquery&&(e=e[0]);var h=a.data(b,g)||a.data(b,g,{}),c=a.data(e,g)||a.data(e,g,{}),l={};if(d.shadowFocusElement){if(d.shadowFocusElement){if(d.shadowFocusElement.jquery)d.shadowFocusElement=d.shadowFocusElement[0];l=a.data(d.shadowFocusElement,g)||a.data(d.shadowFocusElement,g,l)}}else d.shadowFocusElement=e;h.hasShadow=e;l.nativeElement=c.nativeElement=b;l.shadowData=c.shadowData=h.shadowData={nativeElement:b,shadowElement:e,shadowFocusElement:d.shadowFocusElement};
d.shadowChilds&&d.shadowChilds.each(function(){n(this,"shadowData",c.shadowData)});if(d.data)l.shadowData.data=c.shadowData.data=h.shadowData.data=d.data;d=null;f.docObserve()}}(),propTypes:{standard:function(a){y(a);if(!a.prop)a.prop={set:function(d){a.attr.set.call(this,""+d)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){y(a);if(!a.prop)a.prop={set:function(d){d?a.attr.set.call(this,""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}},
src:function(){var h=j.createElement("a");h.style.display="none";return function(d,b){y(d);if(!d.prop)d.prop={set:function(a){d.attr.set.call(this,a)},get:function(){var e=this.getAttribute(b),d;if(null==e)return"";h.setAttribute("href",e+"");if(!a.support.hrefNormalized){try{a(h).insertAfter(this),d=h.getAttribute("href",4)}catch(c){d=h.getAttribute("href",4)}a(h).detach()}return d||h.href}}}}(),enumarated:function(a){y(a);if(!a.prop)a.prop={set:function(d){a.attr.set.call(this,d)},get:function(){var d=
(a.attr.get.call(this)||"").toLowerCase();if(!d||-1==a.limitedTo.indexOf(d))d=a.defaultValue;return d}}}},reflectProperties:function(h,d){"string"==typeof d&&(d=d.split(t));d.forEach(function(b){f.defineNodeNamesProperty(h,b,{prop:{set:function(e){a.attr(this,b,e)},get:function(){return a.attr(this,b)||""}}})})},defineNodeNameProperty:function(h,d,b){v[d]=!0;if(b.reflect)f.propTypes[b.propType||"standard"](b,d);["prop","attr","removeAttr"].forEach(function(e){var c=b[e];c&&(c="prop"===e?a.extend({writeable:!0},
c):a.extend({},c,{writeable:!0}),w[e](h,d,c),"*"!=h&&f.cfg.extendNative&&"prop"==e&&c.value&&a.isFunction(c.value)&&l(h,d,c),b[e]=c)});b.initAttr&&r.content(h,d);return b},defineNodeNameProperties:function(a,d,b,e){for(var c in d)!e&&d[c].initAttr&&r.createTmpCache(a),b&&!d[c][b]&&(d[c][b]={},["value","set","get"].forEach(function(a){a in d[c]&&(d[c][b][a]=d[c][a],delete d[c][a])})),d[c]=f.defineNodeNameProperty(a,c,d[c]);e||r.flushTmpCache();return d},createElement:function(c,d,b){var e;a.isFunction(d)&&
(d={after:d});r.createTmpCache(c);d.before&&r.createElement(c,d.before);b&&(e=f.defineNodeNameProperties(c,b,!1,!0));d.after&&r.createElement(c,d.after);r.flushTmpCache();return e},onNodeNamesPropertyModify:function(c,d,b,e){"string"==typeof c&&(c=c.split(t));a.isFunction(b)&&(b={set:b});c.forEach(function(a){u[a]||(u[a]={});"string"==typeof d&&(d=d.split(t));b.initAttr&&r.createTmpCache(a);d.forEach(function(d){u[a][d]||(u[a][d]=[],v[d]=!0);if(b.set){if(e)b.set.only=e;u[a][d].push(b.set)}b.initAttr&&
r.content(a,d)});r.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,d,b){b||(b={});if(a.isFunction(b))b.set=b;f.defineNodeNamesProperty(c,d,{attr:{set:function(a){this.setAttribute(d,a);b.set&&b.set.call(this,!0)},get:function(){return null==this.getAttribute(d)?m:d}},removeAttr:{value:function(){this.removeAttribute(d);b.set&&b.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:b.initAttr||!1})},contentAttr:function(a,d,b){if(a.nodeName){if(b===m)return a=a.attributes[d]||{},
b=a.specified?a.value:null,null==b?m:b;"boolean"==typeof b?b?a.setAttribute(d,d):a.removeAttribute(d):a.setAttribute(d,b)}},activeLang:function(){var c=[],d={},b,e,g=/:\/\/|^\.*\//,l=function(b,e,d){return e&&d&&-1!==a.inArray(e,d.availabeLangs||[])?(b.loading=!0,d=d.langSrc,g.test(d)||(d=f.cfg.basePath+d),f.loader.loadScript(d+e+".js",function(){b.langObj[e]?(b.loading=!1,i(b,!0)):a(function(){b.langObj[e]&&i(b,!0);b.loading=!1})}),!0):!1},n=function(a){d[a]&&d[a].forEach(function(a){a.callback()})},
i=function(a,d){if(a.activeLang!=b&&a.activeLang!==e){var c=s[a.module].options;if(a.langObj[b]||e&&a.langObj[e])a.activeLang=b,a.callback(a.langObj[b]||a.langObj[e],b),n(a.module);else if(!d&&!l(a,b,c)&&!l(a,e,c)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],b),n(a.module)}};return function(g){if("string"==typeof g&&g!==b)b=g,e=b.split("-")[0],b==e&&(e=!1),a.each(c,function(a,b){i(b)});else if("object"==typeof g)if(g.register)d[g.register]||(d[g.register]=[]),d[g.register].push(g),
g.callback();else{if(!g.activeLang)g.activeLang="";c.push(g);i(g)}return b}}()});a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,d){f[a]=function(a,e,c,g){"string"==typeof a&&(a=a.split(t));var h={};a.forEach(function(a){h[a]=f[d](a,e,c,g)});return h}});f.isReady("webshimLocalization",!0)});
(function(a,f){var k=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<k)&&(!a.browser.msie||12>k&&7<k)){var j={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},m=function(a,f){a.getAttribute("role")||a.setAttribute("role",f)};a.webshims.addReady(function(k,t){a.each(j,function(f,j){for(var v=a(f,k).add(t.filter(f)),c=0,g=v.length;c<g;c++)m(v[c],j)});if(k===f){var o=f.getElementsByTagName("header")[0],v=f.getElementsByTagName("footer"),q=v.length;
o&&!a(o).closest("section, article")[0]&&m(o,"banner");q&&(o=v[q-1],a(o).closest("section, article")[0]||m(o,"contentinfo"))}})}})(jQuery,document);
jQuery.webshims.register("form-datalist",function(a,f,k,j,m){f.propTypes.element=function(k){f.createPropDefault(k,"attr");if(!k.prop)k.prop={get:function(){var f=k.attr.get.call(this);f&&(f=j.getElementById(f))&&k.propNodeName&&!a.nodeName(f,k.propNodeName)&&(f=null);return f||null},writeable:!1}};(function(){var s=a.webshims.cfg.forms,t=Modernizr.input.list;if(!t||s.customDatalist){var o=0,v={submit:1,button:1,reset:1,hidden:1,range:1,date:1},q=a.browser.msie&&7>parseInt(a.browser.version,10),w=
{},u=function(a){if(!a)return[];if(w[a])return w[a];var g;try{g=JSON.parse(localStorage.getItem("storedDatalistOptions"+a))}catch(f){}w[a]=g||[];return g||[]},x={_create:function(c){if(!v[a.prop(c.input,"type")]){var g=c.datalist,f=a.data(c.input,"datalistWidget");if(g&&f&&f.datalist!==g)f.datalist=g,f.id=c.id,f.shadowList.prop("className","datalist-polyfill "+(f.datalist.className||"")+" "+f.datalist.id+"-shadowdom"),s.positionDatalist?f.shadowList.insertAfter(c.input):f.shadowList.appendTo("body"),
a(f.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",a.proxy(f,"_resetListCached")),f._resetListCached();else if(g){if(!(f&&f.datalist===g)){o++;var i=this;this.hideList=a.proxy(i,"hideList");this.timedHide=function(){clearTimeout(i.hideTimer);i.hideTimer=setTimeout(i.hideList,9)};this.datalist=g;this.id=c.id;this.hasViewableData=!0;this._autocomplete=a.attr(c.input,"autocomplete");a.data(c.input,"datalistWidget",this);this.shadowList=a('<div class="datalist-polyfill '+
(this.datalist.className||"")+" "+this.datalist.id+'-shadowdom" />');s.positionDatalist||a(c.input).hasClass("position-datalist")?this.shadowList.insertAfter(c.input):this.shadowList.appendTo("body");this.index=-1;this.input=c.input;this.arrayOptions=[];this.shadowList.delegate("li","mouseenter.datalistWidget mousedown.datalistWidget click.datalistWidget",function(g){var f=a("li:not(.hidden-item)",i.shadowList),n="mousedown"==g.type||"click"==g.type;i.markItem(f.index(g.currentTarget),n,f);"click"==
g.type&&(i.hideList(),s.customDatalist&&a(c.input).trigger("datalistselect"));return"mousedown"!=g.type}).bind("focusout",this.timedHide);c.input.setAttribute("autocomplete","off");a(c.input).attr({"aria-haspopup":"true"}).bind("input.datalistWidget",function(){if(!i.triggeredByDatalist)i.changedValue=!1,i.showHideOptions()}).bind("keydown.datalistWidget",function(g){var f=g.keyCode,n;if(40==f&&!i.showList())return i.markItem(i.index+1,!0),!1;if(i.isListVisible){if(38==f)return i.markItem(i.index-
1,!0),!1;if(!g.shiftKey&&(33==f||36==f))return i.markItem(0,!0),!1;if(!g.shiftKey&&(34==f||35==f))return g=a("li:not(.hidden-item)",i.shadowList),i.markItem(g.length-1,!0,g),!1;if(13==f||27==f)return 13==f&&(n=a("li.active-item:not(.hidden-item)",i.shadowList),i.changeValue(a("li.active-item:not(.hidden-item)",i.shadowList))),i.hideList(),s.customDatalist&&n&&n[0]&&a(c.input).trigger("datalistselect"),!1}}).bind("focus.datalistWidget",function(){a(this).hasClass("list-focus")&&i.showList()}).bind("mousedown.datalistWidget",
function(){a(this).is(":focus")&&i.showList()}).bind("blur.datalistWidget",this.timedHide);a(this.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",a.proxy(this,"_resetListCached"));this._resetListCached();c.input.form&&(c.input.name||c.input.id)&&a(c.input.form).bind("submit.datalistWidget"+c.input.id,function(){if(!a(c.input).hasClass("no-datalist-cache")&&"off"!=i._autocomplete){var g=a.prop(c.input,"value"),f=(c.input.name||c.input.id)+a.prop(c.input,"type");
if(!i.storedOptions)i.storedOptions=u(f);if(g&&-1==i.storedOptions.indexOf(g)&&(i.storedOptions.push(g),g=i.storedOptions,f)){g=g||[];try{localStorage.setItem("storedDatalistOptions"+f,JSON.stringify(g))}catch(n){}}}});a(k).bind("unload.datalist"+this.id+" beforeunload.datalist"+this.id,function(){i.destroy()})}}else f&&f.destroy()}},destroy:function(){var c=a.attr(this.input,"autocomplete");a(this.input).unbind(".datalistWidget").removeData("datalistWidget");this.shadowList.remove();a(j).unbind(".datalist"+
this.id);a(k).unbind(".datalist"+this.id);this.input.form&&this.input.id&&a(this.input.form).unbind("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");c===m?this.input.removeAttribute("autocomplete"):a(this.input).attr("autocomplete",c)},_resetListCached:function(a){var g=this,n;this.needsUpdate=!0;this.lastUpdatedValue=!1;this.lastUnfoundValue="";this.updateTimer||(k.QUnit||(n=a&&j.activeElement==g.input)?g.updateListOptions(n):f.ready("WINDOWLOAD",function(){g.updateTimer=
setTimeout(function(){g.updateListOptions();g=null;o=1},200+100*o)}))},maskHTML:function(a){return a.replace(/</g,"&lt;").replace(/>/g,"&gt;")},updateListOptions:function(c){this.needsUpdate=!1;clearTimeout(this.updateTimer);this.updateTimer=!1;this.shadowList.css({fontSize:a.css(this.input,"fontSize"),fontFamily:a.css(this.input,"fontFamily")});this.searchStart=s.customDatalist&&a(this.input).hasClass("search-start");var g=[],f=[],i=[],l,k,j,h;for(k=a.prop(this.datalist,"options"),j=0,h=k.length;j<
h;j++){l=k[j];if(l.disabled)return;l={value:a(l).val()||"",text:a.trim(a.attr(l,"label")||l.textContent||l.innerText||a.text([l])||""),className:l.className||"",style:a.attr(l,"style")||""};l.text?l.text!=l.value&&(l.className+=" different-label-value"):l.text=l.value;f[j]=l.value;i[j]=l}if(!this.storedOptions)this.storedOptions=a(this.input).hasClass("no-datalist-cache")||"off"==this._autocomplete?[]:u((this.input.name||this.input.id)+a.prop(this.input,"type"));this.storedOptions.forEach(function(a){-1==
f.indexOf(a)&&i.push({value:a,text:a,className:"stored-suggest",style:""})});for(j=0,h=i.length;j<h;j++)k=i[j],g[j]='<li class="'+k.className+'" style="'+k.style+'" tabindex="-1" role="listitem"><span class="option-label">'+this.maskHTML(k.text)+'</span> <span class="option-value">'+this.maskHTML(k.value)+"</span></li>";this.arrayOptions=i;this.shadowList.html('<div class="datalist-outer-box"><div class="datalist-box"><ul role="list">'+g.join("\n")+"</ul></div></div>");a.fn.bgIframe&&q&&this.shadowList.bgIframe();
(c||this.isListVisible)&&this.showHideOptions()},showHideOptions:function(c){var g=a.prop(this.input,"value").toLowerCase();if(!(g===this.lastUpdatedValue||this.lastUnfoundValue&&0===g.indexOf(this.lastUnfoundValue))){this.lastUpdatedValue=g;var f=!1,i=this.searchStart,j=a("li",this.shadowList);g?this.arrayOptions.forEach(function(c,k){var h;if(!("lowerText"in c))c.lowerText=c.text!=c.value?c.value.toLowerCase()+c.text.toLowerCase():c.text.toLowerCase();h=c.lowerText.indexOf(g);(h=i?!h:-1!==h)?(a(j[k]).removeClass("hidden-item"),
f=!0):a(j[k]).addClass("hidden-item")}):j.length&&(j.removeClass("hidden-item"),f=!0);this.hasViewableData=f;!c&&f&&this.showList();if(!f)this.lastUnfoundValue=g,this.hideList()}},setPos:function(){this.shadowList.css({marginTop:0,marginLeft:0,marginRight:0,marginBottom:0});var c=s.positionDatalist?a(this.input).position():f.getRelOffset(this.shadowList,this.input);c.top+=a(this.input).outerHeight();c.width=a(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),
10)||0);this.shadowList.css({marginTop:"",marginLeft:"",marginRight:"",marginBottom:""}).css(c);return c},showList:function(){if(this.isListVisible)return!1;this.needsUpdate&&this.updateListOptions();this.showHideOptions(!0);if(!this.hasViewableData)return!1;this.isListVisible=!0;var c=this;c.setPos();c.shadowList.addClass("datalist-visible").find("li.active-item").removeClass("active-item");a(k).unbind(".datalist"+c.id);a(j).unbind(".datalist"+c.id).bind("mousedown.datalist"+c.id+" focusin.datalist"+
c.id,function(g){g.target===c.input||c.shadowList[0]===g.target||a.contains(c.shadowList[0],g.target)?(clearTimeout(c.hideTimer),setTimeout(function(){clearTimeout(c.hideTimer)},9)):c.timedHide()}).bind("updateshadowdom.datalist"+c.id,function(){c.setPos()});return!0},hideList:function(){if(!this.isListVisible)return!1;var c=this,g=function(){c.changedValue&&a(c.input).trigger("change");c.changedValue=!1};c.shadowList.removeClass("datalist-visible list-item-active");c.index=-1;c.isListVisible=!1;
if(c.changedValue){c.triggeredByDatalist=!0;f.triggerInlineForm&&f.triggerInlineForm(c.input,"input");if(a(c.input).is(":focus"))a(c.input).one("blur",g);else g();c.triggeredByDatalist=!1}a(j).unbind(".datalist"+c.id);a(k).unbind(".datalist"+c.id).one("resize.datalist"+c.id,function(){c.shadowList.css({top:0,left:0})});return!0},scrollIntoView:function(c){var g=a("ul",this.shadowList),f=a("div.datalist-box",this.shadowList),i=c.position();i.top-=(parseInt(g.css("paddingTop"),10)||0)+(parseInt(g.css("marginTop"),
10)||0)+(parseInt(g.css("borderTopWidth"),10)||0);0>i.top?f.scrollTop(f.scrollTop()+i.top-2):(i.top+=c.outerHeight(),c=f.height(),i.top>c&&f.scrollTop(f.scrollTop()+(i.top-c)+2))},changeValue:function(c){if(c[0]){var c=a("span.option-value",c).text(),g=a.prop(this.input,"value");if(c!=g)a(this.input).prop("value",c).triggerHandler("updateInput"),this.changedValue=!0}},markItem:function(c,g,f){f=f||a("li:not(.hidden-item)",this.shadowList);if(f.length)0>c?c=f.length-1:c>=f.length&&(c=0),f.removeClass("active-item"),
this.shadowList.addClass("list-item-active"),f=f.filter(":eq("+c+")").addClass("active-item"),g&&(this.changeValue(f),this.scrollIntoView(f)),this.index=c}};(function(){t||f.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var c=a("select",this);c[0]?c=c[0].options:(c=a("option",this).get(),c.length&&f.warn("you should wrap your option-elements for a datalist in a select element to support IE and other old browsers."));return c}}});var c={autocomplete:{attr:{get:function(){var c=
a.data(this,"datalistWidget");return c?c._autocomplete:"autocomplete"in this?this.autocomplete:this.getAttribute("autocomplete")},set:function(c){var f=a.data(this,"datalistWidget");f?(f._autocomplete=c,"off"==c&&f.hideList()):"autocomplete"in this?this.autocomplete=c:this.setAttribute("autocomplete",c)}}}};t?((a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||f.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var c=this.options||
[];if(!c.length){var f=a("select",this);if(f[0]&&f[0].options&&f[0].options.length)c=f[0].options}return c}}}),c.list={attr:{get:function(){var c=f.contentAttr(this,"list");null!=c?this.removeAttribute("list"):c=a.data(this,"datalistListAttr");return null==c?m:c},set:function(c){a.data(this,"datalistListAttr",c);f.objectCreate(x,m,{input:this,id:c,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}):c.list={attr:{get:function(){var a=f.contentAttr(this,
"list");return null==a?m:a},set:function(c){f.contentAttr(this,"list",c);f.objectCreate(x,m,{input:this,id:c,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"};f.defineNodeNameProperties("input",c);if(a.event.customEvent)a.event.customEvent.updateDatalist=!0,a.event.customEvent.updateInput=!0,a.event.customEvent.datalistselect=!0;f.addReady(function(a,c){c.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").triggerHandler("updateDatalist")})})()}})()});
(function(a){var f=window.Modernizr,k=a.webshims,j=k.bugs,m=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input required="" name="a" /></form>'),s=function(){if(m[0].querySelector)try{j.findRequired=!m[0].querySelector("select:required")}catch(a){j.findRequired=!1}},t=a("input",m).eq(0),o=function(a){k.loader.loadList(["dom-extend"]);k.ready("dom-extend",a)};j.findRequired=!1;j.validationMessage=!1;k.capturingEventPrevented=function(f){if(!f._isPolyfilled){var j=
f.isDefaultPrevented,k=f.preventDefault;f.preventDefault=function(){clearTimeout(a.data(f.target,f.type+"DefaultPrevented"));a.data(f.target,f.type+"DefaultPrevented",setTimeout(function(){a.removeData(f.target,f.type+"DefaultPrevented")},30));return k.apply(this,arguments)};f.isDefaultPrevented=function(){return!(!j.apply(this,arguments)&&!a.data(f.target,f.type+"DefaultPrevented"))};f._isPolyfilled=!0}};if(!f.formvalidation||j.bustedValidity)s();else{k.capturingEvents(["input"]);k.capturingEvents(["invalid"],
!0);if(window.opera||window.testGoodWithFix)m.appendTo("head"),s(),j.validationMessage=!t.prop("validationMessage"),k.reTest(["form-extend","form-message"]),m.remove(),a(function(){o(function(){var f=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(j){var m=k.defineNodeNameProperty(j,"checkValidity",{prop:{value:function(){k.fromSubmit||a(this).bind("invalid.checkvalidity",f);k.fromCheckValidity=!0;var j=m.prop._supvalue.apply(this,arguments);k.fromSubmit||a(this).unbind("invalid.checkvalidity",
f);k.fromCheckValidity=!1;return j}}})})})});a.browser.webkit&&!k.bugs.bustedValidity&&function(){var f=/^(?:textarea|input)$/i,j=!1;document.addEventListener("contextmenu",function(a){f.test(a.target.nodeName||"")&&(j=a.target.form)&&setTimeout(function(){j=!1},1)},!1);a(window).bind("invalid",function(a){if(a.originalEvent&&j&&j==a.target.form)a.wrongWebkitInvalid=!0,a.stopImmediatePropagation()})}()}})(jQuery);
jQuery.webshims.register("form-core",function(a,f,k,j,m,s){var t={radio:1},o={checkbox:1,radio:1},v=a([]),q=f.bugs,w=function(b){var b=a(b),e,d;e=v;if(t[b[0].type])d=b.prop("form"),e=(e=b[0].name)?d?a(d[e]):a(j.getElementsByName(e)).filter(function(){return!a.prop(this,"form")}):b,e=e.filter('[type="radio"]');return e},u=f.getContentValidationMessage=function(b,e,d){var c=a(b).data("errormessage")||b.getAttribute("x-moz-errormessage")||"";d&&c[d]&&(c=c[d]);"object"==typeof c&&(e=e||a.prop(b,"validity")||
{valid:1},e.valid||a.each(e,function(a,b){if(b&&"valid"!=a&&c[a])return c=c[a],!1}));if("object"==typeof c)c=c.defaultMessage;return c||""},x={number:1,range:1,date:1},c=function(b){var e=!1;a(a.prop(b,"elements")).each(function(){if(e=a(this).is(":invalid"))return!1});return e};a.extend(a.expr[":"],{"valid-element":function(b){return a.nodeName(b,"form")?!c(b):!(!a.prop(b,"willValidate")||!n(b))},"invalid-element":function(b){return a.nodeName(b,"form")?c(b):!(!a.prop(b,"willValidate")||n(b))},"required-element":function(b){return!(!a.prop(b,
"willValidate")||!a.prop(b,"required"))},"user-error":function(b){return a.prop(b,"willValidate")&&a(b).hasClass("user-error")},"optional-element":function(b){return!!(a.prop(b,"willValidate")&&!1===a.prop(b,"required"))},"in-range":function(b){if(!x[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||b.rangeOverflow||b.rangeUnderflow)},"out-of-range":function(b){if(!x[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||!b.rangeOverflow&&
!b.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(b){a.expr[":"][b]=a.expr.filters[b+"-element"]});a.expr[":"].focus=function(a){try{var e=a.ownerDocument;return a===e.activeElement&&(!e.hasFocus||e.hasFocus())}catch(c){}return!1};var g=a.event.customEvent||{},n=function(b){return(a.prop(b,"validity")||{valid:1}).valid};(q.bustedValidity||q.findRequired)&&function(){var b=a.find,e=a.find.matchesSelector,c=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,
d=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,e=function(e){var f=arguments,f=a.call(f,1,f.length);f.unshift(e.replace(c,d));return b.apply(this,f)},f;for(f in b)b.hasOwnProperty(f)&&(e[f]=b[f]);return e}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",j.documentElement))a.find.matchesSelector=function(a,b){b=b.replace(c,d);return e.call(this,a,b)}}();var i=a.prop,l={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(b,e,c){var f=
i.apply(this,arguments);b&&"form"in b&&l[e]&&c!==m&&a(b).hasClass(h)&&n(b)&&(a(b).getShadowElement().removeClass(d),"checked"==e&&c&&w(b).not(b).removeClass(d).removeAttr("aria-invalid"));return f};var r=function(b,e){var c;a.each(b,function(b,d){if(d)return c="customError"==b?a.prop(e,"validationMessage"):b,!1});return c},y=function(a){var e;try{e=j.activeElement.name===a}catch(c){}return e},h="user-error",d="user-error form-ui-invalid";a(j).bind(s.validityUIEvents||"focusout change refreshvalidityui",
function(b){var e,c;if(b.target&&(e=a(b.target).getNativeElement()[0],"submit"!=e.type&&a.prop(e,"willValidate"))){c=a.data(e,"webshimsswitchvalidityclass");var f=function(){if(!("focusout"==b.type&&"radio"==e.type&&y(e.name))){var c=a.prop(e,"validity"),f=a(e).getShadowElement(),g,j,i,k;a(e).trigger("refreshCustomValidityRules");c.valid?f.hasClass("user-success")||(g="user-success form-ui-valid",j=d,k="changedvaliditystate",i="changedvalid",o[e.type]&&e.checked&&w(e).not(e).removeClass(j).addClass(g).removeAttr("aria-invalid"),
a.removeData(e,"webshimsinvalidcause")):(c=r(c,e),a.data(e,"webshimsinvalidcause")!=c&&(a.data(e,"webshimsinvalidcause",c),k="changedvaliditystate"),f.hasClass(h)||(g=d,j="user-success form-ui-valid",o[e.type]&&!e.checked&&w(e).not(e).removeClass(j).addClass(g),i="changedinvalid"));g&&(f.addClass(g).removeClass(j),setTimeout(function(){a(e).trigger(i)},0));k&&setTimeout(function(){a(e).trigger(k)},0);a.removeData(b.target,"webshimsswitchvalidityclass")}};c&&clearTimeout(c);"refreshvalidityui"==b.type?
f():a.data(e,"webshimsswitchvalidityclass",setTimeout(f,9))}});g.changedvaliditystate=!0;g.refreshCustomValidityRules=!0;g.changedvalid=!0;g.changedinvalid=!0;g.refreshvalidityui=!0;f.triggerInlineForm=function(b,c){a(b).trigger(c)};f.modules["form-core"].getGroupElements=w;q=function(){f.scrollRoot=a.browser.webkit||"BackCompat"==j.compatMode?a(j.body):a(j.documentElement)};q();f.ready("DOM",q);f.getRelOffset=function(b,c){var b=a(b),d=a(c).offset(),f;a.swap(a(b)[0],{visibility:"hidden",display:"inline-block",
left:0,top:0},function(){f=b.offset()});d.top-=f.top;d.left-=f.left;return d};f.validityAlert=function(){var b=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",c,d=!1,g=!1,h,i={hideDelay:5E3,showFor:function(b,c,e,f){i._create();var b=a(b),j=a(b).getShadowElement(),l=i.getOffsetFromBody(j);i.clear();f?this.hide():(this.getMessage(b,c),this.position(j,l),this.show(),this.hideDelay&&(d=setTimeout(h,this.hideDelay)),a(k).bind("resize.validityalert",function(){clearTimeout(g);g=setTimeout(function(){i.position(j)},
9)}));e||this.setFocus(j,l)},getOffsetFromBody:function(a){return f.getRelOffset(c,a)},setFocus:function(d,g){var i=a(d).getShadowFocusElement(),k=f.scrollRoot.scrollTop(),l=(g||i.offset()).top-30,m;f.getID&&"label"==b&&c.attr("for",f.getID(i));k>l&&(f.scrollRoot.animate({scrollTop:l-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(k-l)),80)}),m=!0);try{i[0].focus()}catch(n){}m&&(f.scrollRoot.scrollTop(k),setTimeout(function(){f.scrollRoot.scrollTop(k)},0));setTimeout(function(){a(j).bind("focusout.validityalert",
h)},10)},getMessage:function(b,d){d||(d=u(b[0])||b.prop("validationMessage"));d?a("span.va-box",c).text(d):this.hide()},position:function(b,d){d=d?a.extend({},d):i.getOffsetFromBody(b);d.top+=b.outerHeight();c.css(d)},show:function(){"none"===c.css("display")&&c.css({opacity:0}).show();c.addClass("va-visible").fadeTo(400,1)},hide:function(){c.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(d);a(j).unbind(".validityalert");a(k).unbind(".validityalert");c.stop().removeAttr("for")},
_create:function(){if(!c)c=i.errorBubble=a("<"+b+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+b+">").css({position:"absolute",display:"none"}),f.ready("DOM",function(){c.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&c.bgIframe()})}};h=a.proxy(i,"hide");return i}();(function(){var b,c=[],f;a(j).bind("invalid",function(g){if(!g.wrongWebkitInvalid){var i=
a(g.target),k=i.getShadowElement();k.hasClass(h)||(k.addClass(d).removeClass("user-success form-ui-valid"),setTimeout(function(){a(g.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=g.isDefaultPrevented,k=a.Event("firstinvalidsystem"),a(j).triggerHandler(k,{element:g.target,form:g.target.form,isInvalidUIPrevented:g.isDefaultPrevented}),i.trigger(b);b&&b.isDefaultPrevented()&&g.preventDefault();c.push(g.target);g.extraData=
"fix";clearTimeout(f);f=setTimeout(function(){var d={type:"lastinvalid",cancelable:!1,invalidlist:a(c)};b=!1;c=[];a(g.target).trigger(d,d)},9);k=i=null}})})();a.fn.getErrorMessage=function(){var b="",c=this[0];c&&(b=u(c)||a.prop(c,"customValidationMessage")||a.prop(c,"validationMessage"));return b};s.replaceValidationUI&&f.ready("DOM forms",function(){a(j).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});
