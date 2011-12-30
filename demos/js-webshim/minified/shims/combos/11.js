(function(b){if(!Modernizr.genericDOM){var f=document,q,i,k=/<([\w:]+)/,t={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};b.webshims.fixHTML5=function(b){if("string"!=typeof b||t[(k.exec(b)||["",""])[1].toLowerCase()])return b;if(!i){q=f.body;if(!q)return b;i=f.createElement("div");i.style.display="none"}var m=i.cloneNode(!1);q.appendChild(m);m.innerHTML=b;q.removeChild(m);return m.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(b,f,q,i,k){var t=f.modules,u=/\s*,\s*/,m={},v={},r={},x={},a={},j=b.fn.val,g=function(l,e,c,a,o){return o?j.call(b(l)):j.call(b(l),c)};b.fn.val=function(l){var e=this[0];arguments.length&&null==l&&(l="");if(!arguments.length)return!e||1!==e.nodeType?j.call(this):b.prop(e,"value",l,"val",!0);if(b.isArray(l))return j.apply(this,arguments);var c=b.isFunction(l);return this.each(function(a){e=this;1===e.nodeType&&(c?(a=l.call(e,a,b.prop(e,"value",k,"val",
!0)),null==a&&(a=""),b.prop(e,"value",a,"val")):b.prop(e,"value",l,"val"))})};var d="_webshimsLib"+Math.round(1E3*Math.random()),s=function(a,e,c){a=a.jquery?a[0]:a;if(!a)return c||{};var h=b.data(a,d);c!==k&&(h||(h=b.data(a,d,{})),e&&(h[e]=c));return e?h&&h[e]:h};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(a){b.fn[a.name]=function(){return this.map(function(){var b=s(this,
"shadowData");return b&&b[a.prop]||this})}});["removeAttr","prop","attr"].forEach(function(l){m[l]=b[l];b[l]=function(e,c,h,o,j){var d="val"==o,s=!d?m[l]:g;if(!e||!v[c]||1!==e.nodeType||!d&&o&&"attr"==l&&b.attrFn[c])return s(e,c,h,o,j);var y=(e.nodeName||"").toLowerCase(),f=r[y],w="attr"==l&&(!1===h||null===h)?"removeAttr":l,n,t,i;f||(f=r["*"]);f&&(f=f[c]);f&&(n=f[w]);if(n){if("value"==c)t=n.isVal,n.isVal=d;if("removeAttr"===w)return n.value.call(e);if(h===k)return n.get?n.get.call(e):n.value;n.set&&
("attr"==l&&!0===h&&(h=c),i=n.set.call(e,h));if("value"==c)n.isVal=t}else i=s(e,c,h,o,j);if((h!==k||"removeAttr"===w)&&a[y]&&a[y][c]){var u;u="removeAttr"==w?!1:"prop"==w?!!h:!0;a[y][c].forEach(function(b){if(!b.only||(b.only="prop"==l)||"attr"==b.only&&"prop"!=l)b.call(e,h,u,d?"val":w,l)})}return i};x[l]=function(a,c,h){r[a]||(r[a]={});r[a][c]||(r[a][c]={});var o=r[a][c][l],d=function(b,a,e){return a&&a[b]?a[b]:e&&e[b]?e[b]:"prop"==l&&"value"==c?function(b){return h.isVal?g(this,c,b,!1,0===arguments.length):
m[l](this,c,b)}:"prop"==l&&"value"==b&&h.value.apply?function(b){var a=m[l](this,c);a&&a.apply&&(a=a.apply(this,arguments));return a}:function(b){return m[l](this,c,b)}};r[a][c][l]=h;if(h.value===k){if(!h.set)h.set=h.writeable?d("set",h,o):f.cfg.useStrict&&"prop"==c?function(){throw c+" is readonly on "+a;}:b.noop;if(!h.get)h.get=d("get",h,o)}["value","get","set"].forEach(function(b){h[b]&&(h["_sup"+b]=d(b,o))})}});var n=!b.browser.msie||8<parseInt(b.browser.version,10),A=function(){var b=f.getPrototypeOf(i.createElement("foobar")),
a=Object.prototype.hasOwnProperty;return function(c,h,o){var d=i.createElement(c),g=f.getPrototypeOf(d);if(n&&g&&b!==g&&(!d[h]||!a.call(d,h))){var j=d[h];o._supvalue=function(){return j&&j.apply?j.apply(this,arguments):j};g[h]=o.value}else o._supvalue=function(){var b=s(this,"propValue");return b&&b[h]&&b[h].apply?b[h].apply(this,arguments):b&&b[h]},p.extendValue(c,h,o.value);o.value._supvalue=o._supvalue}}(),p=function(){var a={};f.addReady(function(c,e){var h={},d=function(a){h[a]||(h[a]=b(c.getElementsByTagName(a)),
e[0]&&b.nodeName(e[0],a)&&(h[a]=h[a].add(e)))};b.each(a,function(b,a){d(b);!a||!a.forEach?f.warn("Error: with "+b+"-property. methods: "+a):a.forEach(function(a){h[b].each(a)})});h=null});var e,c=b([]),h=function(c,h){a[c]?a[c].push(h):a[c]=[h];b.isDOMReady&&(e||b(i.getElementsByTagName(c))).each(h)};return{createTmpCache:function(a){b.isDOMReady&&(e=e||b(i.getElementsByTagName(a)));return e||c},flushTmpCache:function(){e=null},content:function(a,c){h(a,function(){var a=b.attr(this,c);null!=a&&b.attr(this,
c,a)})},createElement:function(a,b){h(a,b)},extendValue:function(a,c,e){h(a,function(){b(this).each(function(){s(this,"propValue",{})[c]=this[c];this[c]=e})})}}}(),z=function(a,b){if(a.defaultValue===k)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}}};b.extend(f,{getID:function(){var a=(new Date).getTime();return function(e){var e=b(e),c=e.attr("id");c||(a++,c="ID-"+a,e.attr("id",c));return c}}(),extendUNDEFProp:function(a,
e){b.each(e,function(b,e){b in a||(a[b]=e)})},createPropDefault:z,data:s,moveToFirstEvent:function(){var a=b._data?"_data":"data";return function(e,c,h){if((e=(b[a](e,"events")||{})[c])&&1<e.length)c=e.pop(),h||(h="bind"),"bind"==h&&e.delegateCount?e.splice(e.delegateCount,0,c):e.unshift(c)}}(),addShadowDom:function(a,e,c){c=c||{};a.jquery&&(a=a[0]);e.jquery&&(e=e[0]);if(!c.shadowFocusElement)c.shadowFocusElement=e;var h=b.data(a,d)||b.data(a,d,{}),g=b.data(e,d)||b.data(e,d,{});h.hasShadow=e;g.nativeElement=
a;g.shadowData=h.shadowData={nativeElement:a,shadowElement:e,shadowFocusElement:c.shadowFocusElement};c.shadowChilds&&c.shadowChilds.each(function(){s(this,"shadowData",g.shadowData)});if(c.data)h.shadowData.data=c.data,g.shadowData.data=c.data;c=null},propTypes:{standard:function(a){z(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){z(a);if(!a.prop)a.prop={set:function(b){b?a.attr.set.call(this,
""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}}},reflectProperties:function(a,e){"string"==typeof e&&(e=e.split(u));e.forEach(function(c){f.defineNodeNamesProperty(a,c,{prop:{set:function(a){b.attr(this,c,a)},get:function(){return b.attr(this,c)||""}}})})},defineNodeNameProperty:function(a,e,c){v[e]=!0;if(c.reflect)f.propTypes[c.propType||"standard"](c);["prop","attr","removeAttr"].forEach(function(h){var d=c[h];d&&(d="prop"===h?b.extend({writeable:!0},d):b.extend({},
d,{writeable:!0}),x[h](a,e,d),"*"!=a&&f.cfg.extendNative&&"prop"==h&&d.value&&b.isFunction(d.value)&&A(a,e,d),c[h]=d)});c.initAttr&&p.content(a,e);return c},defineNodeNameProperties:function(a,b,c,h){for(var d in b)!h&&b[d].initAttr&&p.createTmpCache(a),c&&(b[d][c]?f.log("override: "+a+"["+d+"] for "+c):(b[d][c]={},["value","set","get"].forEach(function(a){a in b[d]&&(b[d][c][a]=b[d][a],delete b[d][a])}))),b[d]=f.defineNodeNameProperty(a,d,b[d]);h||p.flushTmpCache();return b},createElement:function(a,
e,c){var d;b.isFunction(e)&&(e={after:e});p.createTmpCache(a);e.before&&p.createElement(a,e.before);c&&(d=f.defineNodeNameProperties(a,c,!1,!0));e.after&&p.createElement(a,e.after);p.flushTmpCache();return d},onNodeNamesPropertyModify:function(d,e,c,h){"string"==typeof d&&(d=d.split(u));b.isFunction(c)&&(c={set:c});d.forEach(function(b){a[b]||(a[b]={});"string"==typeof e&&(e=e.split(u));c.initAttr&&p.createTmpCache(b);e.forEach(function(e){a[b][e]||(a[b][e]=[],v[e]=!0);if(c.set){if(h)c.set.only=h;
a[b][e].push(c.set)}c.initAttr&&p.content(b,e)});p.flushTmpCache()})},defineNodeNamesBooleanProperty:function(a,e,c){c||(c={});if(b.isFunction(c))c.set=c;f.defineNodeNamesProperty(a,e,{attr:{set:function(a){this.setAttribute(e,a);c.set&&c.set.call(this,!0)},get:function(){return null==this.getAttribute(e)?k:e}},removeAttr:{value:function(){this.removeAttribute(e);c.set&&c.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:c.initAttr||!1})},contentAttr:function(a,b,c){if(a.nodeName){if(c===
k)return c=(a.attributes[b]||{}).value,null==c?k:c;"boolean"==typeof c?c?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,c)}},activeLang:function(){var a=[],e={},c,d,g=/:\/\/|^\.*\//,j=function(a,c,d){return c&&d&&-1!==b.inArray(c,d.availabeLangs||[])?(a.loading=!0,d=d.langSrc,g.test(d)||(d=f.cfg.basePath+d),f.loader.loadScript(d+c+".js",function(){a.langObj[c]?(a.loading=!1,n(a,!0)):b(function(){a.langObj[c]&&n(a,!0);a.loading=!1})}),!0):!1},s=function(a){e[a]&&e[a].forEach(function(a){a.callback()})},
n=function(a,b){if(a.activeLang!=c&&a.activeLang!==d){var e=t[a.module].options;if(a.langObj[c]||d&&a.langObj[d])a.activeLang=c,a.callback(a.langObj[c]||a.langObj[d],c),s(a.module);else if(!b&&!j(a,c,e)&&!j(a,d,e)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],c),s(a.module)}};return function(g){if("string"==typeof g&&g!==c)c=g,d=c.split("-")[0],c==d&&(d=!1),b.each(a,function(a,b){n(b)});else if("object"==typeof g)if(g.register)e[g.register]||(e[g.register]=[]),e[g.register].push(g),
g.callback();else{if(!g.activeLang)g.activeLang="";a.push(g);n(g)}return c}}()});b.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,b){f[a]=function(a,d,g,j){"string"==typeof a&&(a=a.split(u));var s={};a.forEach(function(a){s[a]=f[b](a,d,g,j)});return s}});f.isReady("webshimLocalization",!0)});
(function(b,f){var q=b.webshims.browserVersion;if(!(b.browser.mozilla&&5<q)&&(!b.browser.msie||12>q&&7<q)){var i={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},k=function(b,f){b.getAttribute("role")||b.setAttribute("role",f)};b.webshims.addReady(function(t,u){b.each(i,function(f,a){for(var j=b(f,t).add(u.filter(f)),g=0,d=j.length;g<d;g++)k(j[g],a)});if(t===f){var m=f.getElementsByTagName("header")[0],q=f.getElementsByTagName("footer"),r=q.length;
m&&!b(m).closest("section, article")[0]&&k(m,"banner");r&&(m=q[r-1],b(m).closest("section, article")[0]||k(m,"contentinfo"))}})}})(jQuery,document);
jQuery.webshims.register("form-datalist",function(b,f,q,i,k){f.propTypes.element=function(i){f.createPropDefault(i,"attr");if(!i.prop)i.prop={get:function(){var f=i.attr.get.call(this);f&&(f=b("#"+f)[0])&&i.propNodeName&&!b.nodeName(f,i.propNodeName)&&(f=null);return f||null},writeable:!1}};(function(){if(!Modernizr.input.list){var t=0,u={submit:1,button:1,reset:1,hidden:1,range:1,date:1},m=b.browser.msie&&7>parseInt(b.browser.version,10),v={},r=function(a){if(!a)return[];if(v[a])return v[a];var b;
f.ready("json-storage",function(){try{b=JSON.parse(localStorage.getItem("storedDatalistOptions"+a))}catch(g){}v[a]=b||[]});return b||[]},x={_create:function(a){if(!u[b.prop(a.input,"type")]){var j=a.datalist,g=b.data(a.input,"datalistWidget");if(j&&g&&g.datalist!==j)g.datalist=j,g.id=a.id,g._resetListCached();else if(j){if(!(g&&g.datalist===j)){t++;var d=this;this.hideList=b.proxy(d,"hideList");this.timedHide=function(){clearTimeout(d.hideTimer);d.hideTimer=setTimeout(d.hideList,9)};this.datalist=
j;this.id=a.id;this.hasViewableData=!0;this._autocomplete=b.attr(a.input,"autocomplete");b.data(a.input,"datalistWidget",this);this.shadowList=b('<div class="datalist-polyfill" />').appendTo("body");this.index=-1;this.input=a.input;this.arrayOptions=[];this.shadowList.delegate("li","mouseenter.datalistWidget mousedown.datalistWidget click.datalistWidget",function(a){var g=b("li:not(.hidden-item)",d.shadowList),j="mousedown"==a.type||"click"==a.type;d.markItem(g.index(a.currentTarget),j,g);"click"==
a.type&&d.hideList();return"mousedown"!=a.type}).bind("focusout",this.timedHide);a.input.setAttribute("autocomplete","off");b(a.input).attr({"aria-haspopup":"true"}).bind("input.datalistWidget",function(){if(!d.triggeredByDatalist)d.changedValue=!1,d.showHideOptions()}).bind("keydown.datalistWidget",function(a){var g=a.keyCode;if(40==g&&!d.showList())return d.markItem(d.index+1,!0),!1;if(d.isListVisible){if(38==g)return d.markItem(d.index-1,!0),!1;if(!a.shiftKey&&(33==g||36==g))return d.markItem(0,
!0),!1;if(!a.shiftKey&&(34==g||35==g))return a=b("li:not(.hidden-item)",d.shadowList),d.markItem(a.length-1,!0,a),!1;if(13==g||27==g)return 13==g&&d.changeValue(b("li.active-item:not(.hidden-item)",d.shadowList)),d.hideList(),!1}}).bind("focus.datalistWidget",function(){b(this).hasClass("list-focus")&&d.showList()}).bind("blur.datalistWidget",this.timedHide);b(this.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",b.proxy(this,"_resetListCached"));this._resetListCached();
a.input.form&&a.input.id&&b(a.input.form).bind("submit.datalistWidget"+a.input.id,function(){var g=b.prop(a.input,"value"),j=(a.input.name||a.input.id)+b.prop(a.input,"type");if(!d.storedOptions)d.storedOptions=r(j);if(g&&-1==d.storedOptions.indexOf(g)&&(d.storedOptions.push(g),g=d.storedOptions,j)){g=g||[];try{localStorage.setItem("storedDatalistOptions"+j,JSON.stringify(g))}catch(f){}}});b(q).bind("unload",function(){d.destroy()})}}else g&&g.destroy()}},destroy:function(){var a=b.attr(this.input,
"autocomplete");b(this.input).unbind(".datalistWidget").removeData("datalistWidget");this.shadowList.remove();b(i).unbind(".datalist"+this.id);this.input.form&&this.input.id&&b(this.input.form).unbind("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");a===k?this.input.removeAttribute("autocomplete"):b(this.input).attr("autocomplete",a)},_resetListCached:function(a){var b=this,g;this.needsUpdate=!0;this.lastUpdatedValue=!1;this.lastUnfoundValue="";this.updateTimer||
(q.QUnit||(g=a&&i.activeElement==b.input)?b.updateListOptions(g):f.ready("WINDOWLOAD",function(){b.updateTimer=setTimeout(function(){b.updateListOptions();b=null;t=1},200+100*t)}))},updateListOptions:function(a){this.needsUpdate=!1;clearTimeout(this.updateTimer);this.updateTimer=!1;this.shadowList.css({fontSize:b.curCSS(this.input,"fontSize"),fontFamily:b.curCSS(this.input,"fontFamily")});var j=[],g=[],d=[],f,i,k,p;for(i=b.prop(this.datalist,"options"),k=0,p=i.length;k<p;k++){f=i[k];if(f.disabled)return;
f={value:b(f).val()||"",text:b.trim(b.attr(f,"label")||f.textContent||f.innerText||b.text([f])||""),className:f.className||"",style:b.attr(f,"style")||""};f.text?f.text!=f.value&&(f.className+=" different-label-value"):f.text=f.value;g[k]=f.value;d[k]=f}if(!this.storedOptions)this.storedOptions=r((this.input.name||this.input.id)+b.prop(this.input,"type"));this.storedOptions.forEach(function(a){-1==g.indexOf(a)&&d.push({value:a,text:a,className:"stored-suggest",style:""})});for(k=0,p=d.length;k<p;k++)i=
d[k],j[k]='<li class="'+i.className+'" style="'+i.style+'" tabindex="-1" role="listitem"><span class="option-label">'+i.text+'</span> <span class="option-value">'+i.value+"</span></li>";this.arrayOptions=d;this.shadowList.html('<ul role="list" class="'+(this.datalist.className||"")+" "+this.datalist.id+'-shadowdom">'+j.join("\n")+"</ul>");b.fn.bgIframe&&m&&this.shadowList.bgIframe();(a||this.isListVisible)&&this.showHideOptions()},showHideOptions:function(){var a=b.prop(this.input,"value").toLowerCase();
if(!(a===this.lastUpdatedValue||this.lastUnfoundValue&&0===a.indexOf(this.lastUnfoundValue))){this.lastUpdatedValue=a;var f=!1,g=b("li",this.shadowList);a?this.arrayOptions.forEach(function(d,i){if(!("lowerText"in d))d.lowerText=d.text!=d.value?d.text.toLowerCase()+d.value.toLowerCase():d.text.toLowerCase();-1!==d.lowerText.indexOf(a)?(b(g[i]).removeClass("hidden-item"),f=!0):b(g[i]).addClass("hidden-item")}):g.length&&(g.removeClass("hidden-item"),f=!0);(this.hasViewableData=f)?this.showList():(this.lastUnfoundValue=
a,this.hideList())}},showList:function(){if(this.isListVisible)return!1;this.needsUpdate&&this.updateListOptions();this.showHideOptions();if(!this.hasViewableData)return!1;var a=this,f=b(this.input).offset();f.top+=b(this.input).outerHeight();f.width=b(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0);m&&(this.shadowList.css("height","auto"),250<this.shadowList.height()&&this.shadowList.css("height",220));this.shadowList.css(f).addClass("datalist-visible");
this.isListVisible=!0;b(i).unbind(".datalist"+this.id).bind("mousedown.datalist"+this.id+" focusin.datalist"+this.id,function(g){g.target===a.input||a.shadowList[0]===g.target||b.contains(a.shadowList[0],g.target)?(clearTimeout(a.hideTimer),setTimeout(function(){clearTimeout(a.hideTimer)},0)):a.timedHide()});return!0},hideList:function(){if(!this.isListVisible)return!1;var a=this,j=function(){a.changedValue&&b(a.input).trigger("change");a.changedValue=!1};a.shadowList.removeClass("datalist-visible list-item-active").scrollTop(0).find("li.active-item").removeClass("active-item");
a.index=-1;a.isListVisible=!1;if(a.changedValue){a.triggeredByDatalist=!0;f.triggerInlineForm&&f.triggerInlineForm(this.input,"input");if(a.input==i.activeElement||b(a.input).is(":focus"))b(a.input).one("blur",j);else j();a.triggeredByDatalist=!1}b(i).unbind(".datalist"+a.id);return!0},scrollIntoView:function(a){var f=b("> ul",this.shadowList),g=a.position();g.top-=(parseInt(f.css("paddingTop"),10)||0)+(parseInt(f.css("marginTop"),10)||0)+(parseInt(f.css("borderTopWidth"),10)||0);0>g.top?this.shadowList.scrollTop(this.shadowList.scrollTop()+
g.top-2):(g.top+=a.outerHeight(),a=this.shadowList.height(),g.top>a&&this.shadowList.scrollTop(this.shadowList.scrollTop()+(g.top-a)+2))},changeValue:function(a){if(a[0]){var a=b("span.option-value",a).text(),f=b.prop(this.input,"value");if(a!=f)b(this.input).prop("value",a).triggerHandler("updateInput"),this.changedValue=!0}},markItem:function(a,f,g){g=g||b("li:not(.hidden-item)",this.shadowList);if(g.length)0>a?a=g.length-1:a>=g.length&&(a=0),g.removeClass("active-item"),this.shadowList.addClass("list-item-active"),
g=g.filter(":eq("+a+")").addClass("active-item"),f&&(this.changeValue(g),this.scrollIntoView(g)),this.index=a}};(function(){f.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var a=b("select",this);return a[0]?a[0].options:[]}}});f.defineNodeNameProperties("input",{selectedOption:{prop:{writeable:!1,get:function(){var a=b.prop(this,"list"),f=null,g;if(!a)return f;g=b.attr(this,"value");if(!g)return f;a=b.prop(a,"options");if(!a.length)return f;b.each(a,function(a,i){if(g==
b.prop(i,"value"))return f=i,!1});return f}}},autocomplete:{attr:{get:function(){var a=b.data(this,"datalistWidget");return a?a._autocomplete:"autocomplete"in this?this.autocomplete:this.getAttribute("autocomplete")},set:function(a){var f=b.data(this,"datalistWidget");f?(f._autocomplete=a,"off"==a&&f.hideList()):"autocomplete"in this?this.autocomplete=a:this.setAttribute("autocomplete",a)}}},list:{attr:{get:function(){var a=f.contentAttr(this,"list");return null==a?k:a},set:function(a){f.contentAttr(this,
"list",a);f.objectCreate(x,k,{input:this,id:a,datalist:b.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}});if(b.event.customEvent)b.event.customEvent.updateDatalist=!0,b.event.customEvent.updateInput=!0;f.addReady(function(a,f){f.filter("select, option").each(function(){var a=this.parentNode,d=b.nodeName(a,"datalist");if(a&&!d)a=a.parentNode,d=b.nodeName(a,"datalist");a&&d&&b(a).triggerHandler("updateDatalist")})})})()}})()});
