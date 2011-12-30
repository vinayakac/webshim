(function(a){if(!Modernizr.genericDOM){var d=document,i,k,p=/<([\w:]+)/,t={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};a.webshims.fixHTML5=function(a){if("string"!=typeof a||t[(p.exec(a)||["",""])[1].toLowerCase()])return a;if(!k){i=d.body;if(!i)return a;k=d.createElement("div");k.style.display="none"}var o=k.cloneNode(!1);i.appendChild(o);o.innerHTML=a;i.removeChild(o);return o.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(a,d,i,k,p){var t=d.modules,s=/\s*,\s*/,o={},u={},r={},w={},b={},m=a.fn.val,f=function(c,l,e,b,v){return v?m.call(a(c)):m.call(a(c),e)};a.fn.val=function(c){var l=this[0];arguments.length&&null==c&&(c="");if(!arguments.length)return!l||1!==l.nodeType?m.call(this):a.prop(l,"value",c,"val",!0);if(a.isArray(c))return m.apply(this,arguments);var e=a.isFunction(c);return this.each(function(b){l=this;1===l.nodeType&&(e?(b=c.call(l,b,a.prop(l,"value",p,"val",
!0)),null==b&&(b=""),a.prop(l,"value",b,"val")):a.prop(l,"value",c,"val"))})};var h="_webshimsLib"+Math.round(1E3*Math.random()),c=function(c,l,e){c=c.jquery?c[0]:c;if(!c)return e||{};var b=a.data(c,h);e!==p&&(b||(b=a.data(c,h,{})),l&&(b[l]=e));return l?b&&b[l]:b};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(b){a.fn[b.name]=function(){return this.map(function(){var a=c(this,
"shadowData");return a&&a[b.prop]||this})}});["removeAttr","prop","attr"].forEach(function(c){o[c]=a[c];a[c]=function(l,e,j,v,d){var g="val"==v,m=!g?o[c]:f;if(!l||!u[e]||1!==l.nodeType||!g&&v&&"attr"==c&&a.attrFn[e])return m(l,e,j,v,d);var y=(l.nodeName||"").toLowerCase(),q=r[y],h="attr"==c&&(!1===j||null===j)?"removeAttr":c,n,i,k;q||(q=r["*"]);q&&(q=q[e]);q&&(n=q[h]);if(n){if("value"==e)i=n.isVal,n.isVal=g;if("removeAttr"===h)return n.value.call(l);if(j===p)return n.get?n.get.call(l):n.value;n.set&&
("attr"==c&&!0===j&&(j=e),k=n.set.call(l,j));if("value"==e)n.isVal=i}else k=m(l,e,j,v,d);if((j!==p||"removeAttr"===h)&&b[y]&&b[y][e]){var x;x="removeAttr"==h?!1:"prop"==h?!!j:!0;b[y][e].forEach(function(a){if(!a.only||(a.only="prop"==c)||"attr"==a.only&&"prop"!=c)a.call(l,j,x,g?"val":h,c)})}return k};w[c]=function(b,e,j){r[b]||(r[b]={});r[b][e]||(r[b][e]={});var v=r[b][e][c],g=function(a,b,l){return b&&b[a]?b[a]:l&&l[a]?l[a]:"prop"==c&&"value"==e?function(a){return j.isVal?f(this,e,a,!1,0===arguments.length):
o[c](this,e,a)}:"prop"==c&&"value"==a&&j.value.apply?function(a){var b=o[c](this,e);b&&b.apply&&(b=b.apply(this,arguments));return b}:function(a){return o[c](this,e,a)}};r[b][e][c]=j;if(j.value===p){if(!j.set)j.set=j.writeable?g("set",j,v):d.cfg.useStrict&&"prop"==e?function(){throw e+" is readonly on "+b;}:a.noop;if(!j.get)j.get=g("get",j,v)}["value","get","set"].forEach(function(a){j[a]&&(j["_sup"+a]=g(a,v))})}});var n=!a.browser.msie||8<parseInt(a.browser.version,10),g=function(){var a=d.getPrototypeOf(k.createElement("foobar")),
b=Object.prototype.hasOwnProperty;return function(e,j,g){var f=k.createElement(e),h=d.getPrototypeOf(f);if(n&&h&&a!==h&&(!f[j]||!b.call(f,j))){var m=f[j];g._supvalue=function(){return m&&m.apply?m.apply(this,arguments):m};h[j]=g.value}else g._supvalue=function(){var a=c(this,"propValue");return a&&a[j]&&a[j].apply?a[j].apply(this,arguments):a&&a[j]},q.extendValue(e,j,g.value);g.value._supvalue=g._supvalue}}(),q=function(){var b={};d.addReady(function(c,e){var l={},j=function(b){l[b]||(l[b]=a(c.getElementsByTagName(b)),
e[0]&&a.nodeName(e[0],b)&&(l[b]=l[b].add(e)))};a.each(b,function(a,c){j(a);!c||!c.forEach?d.warn("Error: with "+a+"-property. methods: "+c):c.forEach(function(c){l[a].each(c)})});l=null});var l,e=a([]),j=function(c,e){b[c]?b[c].push(e):b[c]=[e];a.isDOMReady&&(l||a(k.getElementsByTagName(c))).each(e)};return{createTmpCache:function(c){a.isDOMReady&&(l=l||a(k.getElementsByTagName(c)));return l||e},flushTmpCache:function(){l=null},content:function(c,b){j(c,function(){var c=a.attr(this,b);null!=c&&a.attr(this,
b,c)})},createElement:function(a,c){j(a,c)},extendValue:function(b,e,l){j(b,function(){a(this).each(function(){c(this,"propValue",{})[e]=this[e];this[e]=l})})}}}(),x=function(a,c){if(a.defaultValue===p)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[c||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}}};a.extend(d,{getID:function(){var c=(new Date).getTime();return function(b){var b=a(b),e=b.attr("id");e||(c++,e="ID-"+c,b.attr("id",e));return e}}(),extendUNDEFProp:function(c,
b){a.each(b,function(a,b){a in c||(c[a]=b)})},createPropDefault:x,data:c,moveToFirstEvent:function(){var c=a._data?"_data":"data";return function(b,e,j){if((b=(a[c](b,"events")||{})[e])&&1<b.length)e=b.pop(),j||(j="bind"),"bind"==j&&b.delegateCount?b.splice(b.delegateCount,0,e):b.unshift(e)}}(),addShadowDom:function(b,l,e){e=e||{};b.jquery&&(b=b[0]);l.jquery&&(l=l[0]);if(!e.shadowFocusElement)e.shadowFocusElement=l;var j=a.data(b,h)||a.data(b,h,{}),g=a.data(l,h)||a.data(l,h,{});j.hasShadow=l;g.nativeElement=
b;g.shadowData=j.shadowData={nativeElement:b,shadowElement:l,shadowFocusElement:e.shadowFocusElement};e.shadowChilds&&e.shadowChilds.each(function(){c(this,"shadowData",g.shadowData)});if(e.data)j.shadowData.data=e.data,g.shadowData.data=e.data;e=null},propTypes:{standard:function(a){x(a);if(!a.prop)a.prop={set:function(c){a.attr.set.call(this,""+c)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){x(a);if(!a.prop)a.prop={set:function(c){c?a.attr.set.call(this,
""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}}},reflectProperties:function(c,b){"string"==typeof b&&(b=b.split(s));b.forEach(function(b){d.defineNodeNamesProperty(c,b,{prop:{set:function(c){a.attr(this,b,c)},get:function(){return a.attr(this,b)||""}}})})},defineNodeNameProperty:function(c,b,e){u[b]=!0;if(e.reflect)d.propTypes[e.propType||"standard"](e);["prop","attr","removeAttr"].forEach(function(j){var f=e[j];f&&(f="prop"===j?a.extend({writeable:!0},f):a.extend({},
f,{writeable:!0}),w[j](c,b,f),"*"!=c&&d.cfg.extendNative&&"prop"==j&&f.value&&a.isFunction(f.value)&&g(c,b,f),e[j]=f)});e.initAttr&&q.content(c,b);return e},defineNodeNameProperties:function(a,c,b,j){for(var g in c)!j&&c[g].initAttr&&q.createTmpCache(a),b&&(c[g][b]?d.log("override: "+a+"["+g+"] for "+b):(c[g][b]={},["value","set","get"].forEach(function(a){a in c[g]&&(c[g][b][a]=c[g][a],delete c[g][a])}))),c[g]=d.defineNodeNameProperty(a,g,c[g]);j||q.flushTmpCache();return c},createElement:function(c,
b,e){var g;a.isFunction(b)&&(b={after:b});q.createTmpCache(c);b.before&&q.createElement(c,b.before);e&&(g=d.defineNodeNameProperties(c,e,!1,!0));b.after&&q.createElement(c,b.after);q.flushTmpCache();return g},onNodeNamesPropertyModify:function(c,g,e,j){"string"==typeof c&&(c=c.split(s));a.isFunction(e)&&(e={set:e});c.forEach(function(a){b[a]||(b[a]={});"string"==typeof g&&(g=g.split(s));e.initAttr&&q.createTmpCache(a);g.forEach(function(c){b[a][c]||(b[a][c]=[],u[c]=!0);if(e.set){if(j)e.set.only=j;
b[a][c].push(e.set)}e.initAttr&&q.content(a,c)});q.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,b,e){e||(e={});if(a.isFunction(e))e.set=e;d.defineNodeNamesProperty(c,b,{attr:{set:function(a){this.setAttribute(b,a);e.set&&e.set.call(this,!0)},get:function(){return null==this.getAttribute(b)?p:b}},removeAttr:{value:function(){this.removeAttribute(b);e.set&&e.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:e.initAttr||!1})},contentAttr:function(a,c,b){if(a.nodeName){if(b===
p)return b=(a.attributes[c]||{}).value,null==b?p:b;"boolean"==typeof b?b?a.setAttribute(c,c):a.removeAttribute(c):a.setAttribute(c,b)}},activeLang:function(){var c=[],b={},e,g,f=/:\/\/|^\.*\//,m=function(c,b,e){return b&&e&&-1!==a.inArray(b,e.availabeLangs||[])?(c.loading=!0,e=e.langSrc,f.test(e)||(e=d.cfg.basePath+e),d.loader.loadScript(e+b+".js",function(){c.langObj[b]?(c.loading=!1,n(c,!0)):a(function(){c.langObj[b]&&n(c,!0);c.loading=!1})}),!0):!1},h=function(a){b[a]&&b[a].forEach(function(a){a.callback()})},
n=function(a,c){if(a.activeLang!=e&&a.activeLang!==g){var b=t[a.module].options;if(a.langObj[e]||g&&a.langObj[g])a.activeLang=e,a.callback(a.langObj[e]||a.langObj[g],e),h(a.module);else if(!c&&!m(a,e,b)&&!m(a,g,b)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],e),h(a.module)}};return function(f){if("string"==typeof f&&f!==e)e=f,g=e.split("-")[0],e==g&&(g=!1),a.each(c,function(a,c){n(c)});else if("object"==typeof f)if(f.register)b[f.register]||(b[f.register]=[]),b[f.register].push(f),
f.callback();else{if(!f.activeLang)f.activeLang="";c.push(f);n(f)}return e}}()});a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,c){d[a]=function(a,b,g,f){"string"==typeof a&&(a=a.split(s));var n={};a.forEach(function(a){n[a]=d[c](a,b,g,f)});return n}});d.isReady("webshimLocalization",!0)});
(function(a,d){var i=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<i)&&(!a.browser.msie||12>i&&7<i)){var k={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},p=function(a,d){a.getAttribute("role")||a.setAttribute("role",d)};a.webshims.addReady(function(i,s){a.each(k,function(d,b){for(var m=a(d,i).add(s.filter(d)),f=0,h=m.length;f<h;f++)p(m[f],b)});if(i===d){var o=d.getElementsByTagName("header")[0],u=d.getElementsByTagName("footer"),r=u.length;
o&&!a(o).closest("section, article")[0]&&p(o,"banner");r&&(o=u[r-1],a(o).closest("section, article")[0]||p(o,"contentinfo"))}})}})(jQuery,document);
jQuery.webshims.register("form-datalist",function(a,d,i,k,p){d.propTypes.element=function(i){d.createPropDefault(i,"attr");if(!i.prop)i.prop={get:function(){var d=i.attr.get.call(this);d&&(d=a("#"+d)[0])&&i.propNodeName&&!a.nodeName(d,i.propNodeName)&&(d=null);return d||null},writeable:!1}};(function(){if(!Modernizr.input.list){var t=0,s={submit:1,button:1,reset:1,hidden:1,range:1,date:1},o=a.browser.msie&&7>parseInt(a.browser.version,10),u={},r=function(a){if(!a)return[];if(u[a])return u[a];var m;
d.ready("json-storage",function(){try{m=JSON.parse(localStorage.getItem("storedDatalistOptions"+a))}catch(f){}u[a]=m||[]});return m||[]},w={_create:function(b){if(!s[a.prop(b.input,"type")]){var d=b.datalist,f=a.data(b.input,"datalistWidget");if(d&&f&&f.datalist!==d)f.datalist=d,f.id=b.id,f._resetListCached();else if(d){if(!(f&&f.datalist===d)){t++;var h=this;this.hideList=a.proxy(h,"hideList");this.timedHide=function(){clearTimeout(h.hideTimer);h.hideTimer=setTimeout(h.hideList,9)};this.datalist=
d;this.id=b.id;this.hasViewableData=!0;this._autocomplete=a.attr(b.input,"autocomplete");a.data(b.input,"datalistWidget",this);this.shadowList=a('<div class="datalist-polyfill" />').appendTo("body");this.index=-1;this.input=b.input;this.arrayOptions=[];this.shadowList.delegate("li","mouseenter.datalistWidget mousedown.datalistWidget click.datalistWidget",function(c){var b=a("li:not(.hidden-item)",h.shadowList),g="mousedown"==c.type||"click"==c.type;h.markItem(b.index(c.currentTarget),g,b);"click"==
c.type&&h.hideList();return"mousedown"!=c.type}).bind("focusout",this.timedHide);b.input.setAttribute("autocomplete","off");a(b.input).attr({"aria-haspopup":"true"}).bind("input.datalistWidget",function(){if(!h.triggeredByDatalist)h.changedValue=!1,h.showHideOptions()}).bind("keydown.datalistWidget",function(c){var b=c.keyCode;if(40==b&&!h.showList())return h.markItem(h.index+1,!0),!1;if(h.isListVisible){if(38==b)return h.markItem(h.index-1,!0),!1;if(!c.shiftKey&&(33==b||36==b))return h.markItem(0,
!0),!1;if(!c.shiftKey&&(34==b||35==b))return c=a("li:not(.hidden-item)",h.shadowList),h.markItem(c.length-1,!0,c),!1;if(13==b||27==b)return 13==b&&h.changeValue(a("li.active-item:not(.hidden-item)",h.shadowList)),h.hideList(),!1}}).bind("focus.datalistWidget",function(){a(this).hasClass("list-focus")&&h.showList()}).bind("blur.datalistWidget",this.timedHide);a(this.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",a.proxy(this,"_resetListCached"));this._resetListCached();
b.input.form&&b.input.id&&a(b.input.form).bind("submit.datalistWidget"+b.input.id,function(){var c=a.prop(b.input,"value"),f=(b.input.name||b.input.id)+a.prop(b.input,"type");if(!h.storedOptions)h.storedOptions=r(f);if(c&&-1==h.storedOptions.indexOf(c)&&(h.storedOptions.push(c),c=h.storedOptions,f)){c=c||[];try{localStorage.setItem("storedDatalistOptions"+f,JSON.stringify(c))}catch(g){}}});a(i).bind("unload",function(){h.destroy()})}}else f&&f.destroy()}},destroy:function(){var b=a.attr(this.input,
"autocomplete");a(this.input).unbind(".datalistWidget").removeData("datalistWidget");this.shadowList.remove();a(k).unbind(".datalist"+this.id);this.input.form&&this.input.id&&a(this.input.form).unbind("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");b===p?this.input.removeAttribute("autocomplete"):a(this.input).attr("autocomplete",b)},_resetListCached:function(a){var m=this,f;this.needsUpdate=!0;this.lastUpdatedValue=!1;this.lastUnfoundValue="";this.updateTimer||
(i.QUnit||(f=a&&k.activeElement==m.input)?m.updateListOptions(f):d.ready("WINDOWLOAD",function(){m.updateTimer=setTimeout(function(){m.updateListOptions();m=null;t=1},200+100*t)}))},updateListOptions:function(b){this.needsUpdate=!1;clearTimeout(this.updateTimer);this.updateTimer=!1;this.shadowList.css({fontSize:a.curCSS(this.input,"fontSize"),fontFamily:a.curCSS(this.input,"fontFamily")});var d=[],f=[],h=[],c,n,g,q;for(n=a.prop(this.datalist,"options"),g=0,q=n.length;g<q;g++){c=n[g];if(c.disabled)return;
c={value:a(c).val()||"",text:a.trim(a.attr(c,"label")||c.textContent||c.innerText||a.text([c])||""),className:c.className||"",style:a.attr(c,"style")||""};c.text?c.text!=c.value&&(c.className+=" different-label-value"):c.text=c.value;f[g]=c.value;h[g]=c}if(!this.storedOptions)this.storedOptions=r((this.input.name||this.input.id)+a.prop(this.input,"type"));this.storedOptions.forEach(function(a){-1==f.indexOf(a)&&h.push({value:a,text:a,className:"stored-suggest",style:""})});for(g=0,q=h.length;g<q;g++)n=
h[g],d[g]='<li class="'+n.className+'" style="'+n.style+'" tabindex="-1" role="listitem"><span class="option-label">'+n.text+'</span> <span class="option-value">'+n.value+"</span></li>";this.arrayOptions=h;this.shadowList.html('<ul role="list" class="'+(this.datalist.className||"")+" "+this.datalist.id+'-shadowdom">'+d.join("\n")+"</ul>");a.fn.bgIframe&&o&&this.shadowList.bgIframe();(b||this.isListVisible)&&this.showHideOptions()},showHideOptions:function(){var b=a.prop(this.input,"value").toLowerCase();
if(!(b===this.lastUpdatedValue||this.lastUnfoundValue&&0===b.indexOf(this.lastUnfoundValue))){this.lastUpdatedValue=b;var d=!1,f=a("li",this.shadowList);b?this.arrayOptions.forEach(function(h,c){if(!("lowerText"in h))h.lowerText=h.text!=h.value?h.text.toLowerCase()+h.value.toLowerCase():h.text.toLowerCase();-1!==h.lowerText.indexOf(b)?(a(f[c]).removeClass("hidden-item"),d=!0):a(f[c]).addClass("hidden-item")}):f.length&&(f.removeClass("hidden-item"),d=!0);(this.hasViewableData=d)?this.showList():(this.lastUnfoundValue=
b,this.hideList())}},showList:function(){if(this.isListVisible)return!1;this.needsUpdate&&this.updateListOptions();this.showHideOptions();if(!this.hasViewableData)return!1;var b=this,d=a(this.input).offset();d.top+=a(this.input).outerHeight();d.width=a(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0);o&&(this.shadowList.css("height","auto"),250<this.shadowList.height()&&this.shadowList.css("height",220));this.shadowList.css(d).addClass("datalist-visible");
this.isListVisible=!0;a(k).unbind(".datalist"+this.id).bind("mousedown.datalist"+this.id+" focusin.datalist"+this.id,function(f){f.target===b.input||b.shadowList[0]===f.target||a.contains(b.shadowList[0],f.target)?(clearTimeout(b.hideTimer),setTimeout(function(){clearTimeout(b.hideTimer)},0)):b.timedHide()});return!0},hideList:function(){if(!this.isListVisible)return!1;var b=this,i=function(){b.changedValue&&a(b.input).trigger("change");b.changedValue=!1};b.shadowList.removeClass("datalist-visible list-item-active").scrollTop(0).find("li.active-item").removeClass("active-item");
b.index=-1;b.isListVisible=!1;if(b.changedValue){b.triggeredByDatalist=!0;d.triggerInlineForm&&d.triggerInlineForm(this.input,"input");if(b.input==k.activeElement||a(b.input).is(":focus"))a(b.input).one("blur",i);else i();b.triggeredByDatalist=!1}a(k).unbind(".datalist"+b.id);return!0},scrollIntoView:function(b){var d=a("> ul",this.shadowList),f=b.position();f.top-=(parseInt(d.css("paddingTop"),10)||0)+(parseInt(d.css("marginTop"),10)||0)+(parseInt(d.css("borderTopWidth"),10)||0);0>f.top?this.shadowList.scrollTop(this.shadowList.scrollTop()+
f.top-2):(f.top+=b.outerHeight(),b=this.shadowList.height(),f.top>b&&this.shadowList.scrollTop(this.shadowList.scrollTop()+(f.top-b)+2))},changeValue:function(b){if(b[0]){var b=a("span.option-value",b).text(),d=a.prop(this.input,"value");if(b!=d)a(this.input).prop("value",b).triggerHandler("updateInput"),this.changedValue=!0}},markItem:function(b,d,f){f=f||a("li:not(.hidden-item)",this.shadowList);if(f.length)0>b?b=f.length-1:b>=f.length&&(b=0),f.removeClass("active-item"),this.shadowList.addClass("list-item-active"),
f=f.filter(":eq("+b+")").addClass("active-item"),d&&(this.changeValue(f),this.scrollIntoView(f)),this.index=b}};(function(){d.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=a("select",this);return b[0]?b[0].options:[]}}});d.defineNodeNameProperties("input",{selectedOption:{prop:{writeable:!1,get:function(){var b=a.prop(this,"list"),d=null,f;if(!b)return d;f=a.attr(this,"value");if(!f)return d;b=a.prop(b,"options");if(!b.length)return d;a.each(b,function(b,c){if(f==
a.prop(c,"value"))return d=c,!1});return d}}},autocomplete:{attr:{get:function(){var b=a.data(this,"datalistWidget");return b?b._autocomplete:"autocomplete"in this?this.autocomplete:this.getAttribute("autocomplete")},set:function(b){var d=a.data(this,"datalistWidget");d?(d._autocomplete=b,"off"==b&&d.hideList()):"autocomplete"in this?this.autocomplete=b:this.setAttribute("autocomplete",b)}}},list:{attr:{get:function(){var a=d.contentAttr(this,"list");return null==a?p:a},set:function(b){d.contentAttr(this,
"list",b);d.objectCreate(w,p,{input:this,id:b,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}});if(a.event.customEvent)a.event.customEvent.updateDatalist=!0,a.event.customEvent.updateInput=!0;d.addReady(function(b,d){d.filter("select, option").each(function(){var b=this.parentNode,d=a.nodeName(b,"datalist");if(b&&!d)b=b.parentNode,d=a.nodeName(b,"datalist");b&&d&&a(b).triggerHandler("updateDatalist")})})})()}})()});
jQuery.webshims.gcEval=function(a,d){with(d&&d.form||window)with(d||window)return function(a){eval(a)}.call(d||window,a)};
(function(a){var d=window.Modernizr,i=a.webshims;i.capturingEventPrevented=function(d){var i=d.isDefaultPrevented,k=d.preventDefault;d.preventDefault=function(){clearTimeout(a.data(d.target,d.type+"DefaultPrevented"));a.data(d.target,d.type+"DefaultPrevented",setTimeout(function(){a.removeData(d.target,d.type+"DefaultPrevented")},30));return k.apply(this,arguments)};d.isDefaultPrevented=function(){return!(!i.apply(this,arguments)&&!a.data(d.target,d.type+"DefaultPrevented"))};d._isPolyfilled=!0};
if(d.formvalidation){var k=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select /><input type="date" required name="a" /><input type="submit" /></form>');d.bugfreeformvalidation=d.requiredSelect=!!("required"in a("select",k)[0]);if(window.opera||a.browser.webkit||window.testGoodWithFix){var p=a("input",k),t,s=function(o){var r=["form-extend","form-native-fix"];o&&(o.preventDefault(),o.stopImmediatePropagation());clearTimeout(t);setTimeout(function(){k&&(k.remove(),k=p=null)},
9);if(!d.bugfreeformvalidation||!d.requiredSelect)i.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),i.modules["form-extend"].test=a.noop;i.isReady("form-number-date-api")&&r.push("form-number-date-api");i.bugs.validationMessage&&r.push("form-message");i.reTest(r);if(a.browser.opera||window.testGoodWithFix)i.loader.loadList(["dom-extend"]),i.ready("dom-extend",function(){var d=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(b){var k=i.defineNodeNameProperty(b,
"checkValidity",{prop:{value:function(){i.fromSubmit||a(this).bind("invalid.checkvalidity",d);i.fromCheckValidity=!0;var b=k.prop._supvalue.apply(this,arguments);i.fromSubmit||a(this).unbind("invalid.checkvalidity",d);i.fromCheckValidity=!1;return b}}})})}),d.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&i.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var d=this.options||[];if(!d.length){var b=a("select",this);
if(b[0]&&b[0].options&&b[0].options.length)d=b[0].options}return d}}})};k.appendTo("head");if(window.opera||window.testGoodWithFix){i.bugs.validationMessage=!p.prop("validationMessage");if((d.inputtypes||{}).date){try{p.prop("valueAsNumber",0)}catch(o){}i.bugs.valueAsNumberSet="1970-01-01"!=p.prop("value")}p.prop("value","")}k.bind("submit",function(a){d.bugfreeformvalidation=!1;s(a)});t=setTimeout(function(){k&&k.triggerHandler("submit")},9);i.capturingEvents(["input"]);i.capturingEvents(["invalid"],
!0);a("input, select",k).bind("invalid",s).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click")}else i.capturingEvents(["input"]),i.capturingEvents(["invalid"],!0)}})(jQuery);
jQuery.webshims.register("form-core",function(a,d,i,k,p,t){var s={radio:1},o={checkbox:1,radio:1},u=a([]),r=function(c){var c=a(c),b=c[0].name;return s[c[0].type]&&b?a(c[0].form&&c[0].form[b]||k.getElementsByName(b)).not(c[0]):u},w=d.getContentValidationMessage=function(c,b){var g=c.getAttribute("x-moz-errormessage")||c.getAttribute("data-errormessage")||"";if(g&&-1!=g.indexOf("{")){try{g=jQuery.parseJSON(g)}catch(f){return g}"object"==typeof g&&(b=b||a.prop(c,"validity")||{valid:1},b.valid||a.each(b,
function(a,b){if(b&&"valid"!=a&&g[a])return g=g[a],!1}));d.data(c,"contentErrorMessage",g);if("object"==typeof g)g=g.defaultMessage}return g||""},b={number:1,range:1,date:1,time:1,"datetime-local":1,datetime:1,month:1,week:1};a.extend(a.expr.filters,{"valid-element":function(b){return!(!a.prop(b,"willValidate")||!(a.prop(b,"validity")||{valid:1}).valid)},"invalid-element":function(b){return!(!a.prop(b,"willValidate")||(a.prop(b,"validity")||{valid:1}).valid)},"required-element":function(b){return!(!a.prop(b,
"willValidate")||!a.prop(b,"required"))},"optional-element":function(b){return!!(a.prop(b,"willValidate")&&!1===a.prop(b,"required"))},"in-range":function(c){if(!b[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||c.rangeOverflow||c.rangeUnderflow)},"out-of-range":function(c){if(!b[a.prop(c,"type")]||!a.prop(c,"willValidate"))return!1;c=a.prop(c,"validity");return!(!c||!c.rangeOverflow&&!c.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(b){a.expr.filters[b]=
a.expr.filters[b+"-element"]});var i=a.event.customEvent||{},m=a.prop,f={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(b,d,g){var h=m.apply(this,arguments);if(b&&"form"in b&&f[d]&&g!==p&&a(b).hasClass("form-ui-invalid")&&(a.prop(b,"validity")||{valid:1}).valid)a(b).getShadowElement().removeClass("form-ui-invalid"),"checked"==d&&g&&r(b).removeClass("form-ui-invalid").removeAttr("aria-invalid");return h};var h=function(b,d){var g;a.each(b,function(b,c){if(c)return g="customError"==
b?a.prop(d,"validationMessage"):b,!1});return g};a(k).bind("focusout change refreshvalidityui",function(b){if(b.target&&"submit"!=b.target.type&&a.prop(b.target,"willValidate")){var d=a.data(b.target,"webshimsswitchvalidityclass");d&&clearTimeout(d);a.data(b.target,"webshimsswitchvalidityclass",setTimeout(function(){var d=a(b.target).getNativeElement()[0],f=a.prop(d,"validity"),i=a(d).getShadowElement(),k,l,e,j;f.valid?i.hasClass("form-ui-valid")||(k="form-ui-valid",l="form-ui-invalid",j="changedvaliditystate",
e="changedvalid",o[d.type]&&d.checked&&r(d).removeClass(l).addClass(k).removeAttr("aria-invalid"),a.removeData(d,"webshimsinvalidcause")):(f=h(f,d),a.data(d,"webshimsinvalidcause")!=f&&(a.data(d,"webshimsinvalidcause",f),j="changedvaliditystate"),i.hasClass("form-ui-invalid")||(k="form-ui-invalid",l="form-ui-valid",o[d.type]&&!d.checked&&r(d).removeClass(l).addClass(k),e="changedinvalid"));k&&(i.addClass(k).removeClass(l),setTimeout(function(){a(d).trigger(e)},0));j&&setTimeout(function(){a(d).trigger(j)},
0);a.removeData(b.target,"webshimsswitchvalidityclass")},9))}});i.changedvaliditystate=!0;i.changedvalid=!0;i.changedinvalid=!0;i.refreshvalidityui=!0;d.triggerInlineForm=function(b,f){b.jquery&&(b=b[0]);var g="on"+f,h=b[g]||b.getAttribute(g)||"",i,k,f=a.Event({type:f,target:b,currentTarget:b});h&&(d.warn("we will drop inline event handler support, with next release. use event binding: $.bind instead"),"string"==typeof h&&(k=d.gcEval(h,b),b[g]&&(i=!0,b[g]=!1)));!1===k&&(f.stopPropagation(),f.preventDefault());
a(b).trigger(f);i&&(b[g]=h);return k};i=function(){d.scrollRoot=a.browser.webkit||"BackCompat"==k.compatMode?a(k.body):a(k.documentElement)};i();d.ready("DOM",i);d.validityAlert=function(){var b=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",f={top:0,left:0},g={hideDelay:5E3,getBodyOffset:function(){f=h.offset()},showFor:function(b,c,d,f){g._create();var b=a(b),k=a(b).getShadowElement(),n=g.getOffsetFromBody(k);g.clear();f?this.hide():(this.getMessage(b,c),this.position(k,n),h.css({fontSize:b.css("fontSize"),
fontFamily:b.css("fontFamily")}),this.show(),this.hideDelay&&(i=setTimeout(l,this.hideDelay)));d||this.setFocus(k,n)},getOffsetFromBody:function(b){b=a(b).offset();a.swap(h[0],{visibility:"hidden",display:"inline-block",left:0,top:0},g.getBodyOffset);b.top-=f.top;b.left-=f.left;return b},setFocus:function(e,f){var g=a(e).getShadowFocusElement(),i=d.scrollRoot.scrollTop(),n=(f||g.offset()).top-30,m;d.getID&&"label"==b&&h.attr("for",d.getID(g));i>n&&(d.scrollRoot.animate({scrollTop:n-5},{queue:!1,duration:Math.max(Math.min(600,
1.5*(i-n)),80)}),m=!0);try{g[0].focus()}catch(o){}m&&(d.scrollRoot.scrollTop(i),setTimeout(function(){d.scrollRoot.scrollTop(i)},0));setTimeout(function(){a(k).bind("focusout.validityalert",l)},10)},getMessage:function(b,c){a("span.va-box",h).text(c||w(b[0])||b.prop("validationMessage"))},position:function(b,c){c=c?a.extend({},c):g.getOffsetFromBody(b);c.top+=b.outerHeight();h.css(c)},show:function(){"none"===h.css("display")&&h.css({opacity:0}).show();h.addClass("va-visible").fadeTo(400,1)},hide:function(){h.removeClass("va-visible").fadeOut()},
clear:function(){clearTimeout(m);clearTimeout(i);a(k).unbind("focusout.validityalert");h.stop().removeAttr("for")},_create:function(){if(!h)h=g.errorBubble=a("<"+b+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+b+">").css({position:"absolute",display:"none"}),d.ready("DOM",function(){h.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&
h.bgIframe()})}},h,i=!1,m=!1,l=a.proxy(g,"hide");return g}();(function(){var b,d=[],f;a(k).bind("invalid",function(h){if(!h.wrongWebkitInvalid){var i=a(h.target),m=i.getShadowElement();m.hasClass("form-ui-invalid")||(m.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(h.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=h.isDefaultPrevented,m=a.Event("firstinvalidsystem"),a(k).triggerHandler(m,
{element:h.target,form:h.target.form,isInvalidUIPrevented:h.isDefaultPrevented}),i.trigger(b);b&&b.isDefaultPrevented()&&h.preventDefault();d.push(h.target);h.extraData="fix";clearTimeout(f);f=setTimeout(function(){var f={type:"lastinvalid",cancelable:!1,invalidlist:a(d)};b=!1;d=[];a(h.target).trigger(f,f)},9);m=i=null}})})();t.replaceValidationUI&&d.ready("DOM",function(){a(k).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,
a(b.target).prop("customValidationMessage")))})})});
