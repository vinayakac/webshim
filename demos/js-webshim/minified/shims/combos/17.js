jQuery.webshims.register("dom-extend",function(a,f,g,i,r){var u=f.modules,o=/\s*,\s*/,s={},l={},n={},k={},t={},h=a.fn.val,z=function(e,d,b,c,j){return j?h.call(a(e)):h.call(a(e),b)};a.fn.val=function(e){var d=this[0];arguments.length&&null==e&&(e="");if(!arguments.length)return!d||1!==d.nodeType?h.call(this):a.prop(d,"value",e,"val",!0);if(a.isArray(e))return h.apply(this,arguments);var b=a.isFunction(e);return this.each(function(c){d=this;1===d.nodeType&&(b?(c=e.call(d,c,a.prop(d,"value",r,"val",
!0)),null==c&&(c=""),a.prop(d,"value",c,"val")):a.prop(d,"value",e,"val"))})};var x="_webshimsLib"+Math.round(1E3*Math.random()),A=function(e,d,b){e=e.jquery?e[0]:e;if(!e)return b||{};var c=a.data(e,x);b!==r&&(c||(c=a.data(e,x,{})),d&&(c[d]=b));return d?c&&c[d]:c};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(e){a.fn[e.name]=function(){return this.map(function(){var a=A(this,
"shadowData");return a&&a[e.prop]||this})}});["removeAttr","prop","attr"].forEach(function(e){s[e]=a[e];a[e]=function(d,b,c,j,v){var B="val"==j,q=!B?s[e]:z;if(!d||!l[b]||1!==d.nodeType||!B&&j&&"attr"==e&&a.attrFn[b])return q(d,b,c,j,v);var m=(d.nodeName||"").toLowerCase(),C=n[m],D="attr"==e&&(!1===c||null===c)?"removeAttr":e,h,f,g;C||(C=n["*"]);C&&(C=C[b]);C&&(h=C[D]);if(h){if("value"==b)f=h.isVal,h.isVal=B;if("removeAttr"===D)return h.value.call(d);if(c===r)return h.get?h.get.call(d):h.value;h.set&&
("attr"==e&&!0===c&&(c=b),g=h.set.call(d,c));if("value"==b)h.isVal=f}else g=q(d,b,c,j,v);if((c!==r||"removeAttr"===D)&&t[m]&&t[m][b]){var k;k="removeAttr"==D?!1:"prop"==D?!!c:!0;t[m][b].forEach(function(b){if(!b.only||(b.only="prop"==e)||"attr"==b.only&&"prop"!=e)b.call(d,c,k,B?"val":D,e)})}return g};k[e]=function(d,b,c){n[d]||(n[d]={});n[d][b]||(n[d][b]={});var j=n[d][b][e],v=function(a,q,m){return q&&q[a]?q[a]:m&&m[a]?m[a]:"prop"==e&&"value"==b?function(a){return c.isVal?z(this,b,a,!1,0===arguments.length):
s[e](this,b,a)}:"prop"==e&&"value"==a&&c.value.apply?function(a){var c=s[e](this,b);c&&c.apply&&(c=c.apply(this,arguments));return c}:function(a){return s[e](this,b,a)}};n[d][b][e]=c;if(c.value===r){if(!c.set)c.set=c.writeable?v("set",c,j):f.cfg.useStrict&&"prop"==b?function(){throw b+" is readonly on "+d;}:a.noop;if(!c.get)c.get=v("get",c,j)}["value","get","set"].forEach(function(b){c[b]&&(c["_sup"+b]=v(b,j))})}});var E=!a.browser.msie||8<parseInt(a.browser.version,10),p=function(){var a=f.getPrototypeOf(i.createElement("foobar")),
d=Object.prototype.hasOwnProperty;return function(b,c,j){var v=i.createElement(b),h=f.getPrototypeOf(v);if(E&&h&&a!==h&&(!v[c]||!d.call(v,c))){var q=v[c];j._supvalue=function(){return q&&q.apply?q.apply(this,arguments):q};h[c]=j.value}else j._supvalue=function(){var b=A(this,"propValue");return b&&b[c]&&b[c].apply?b[c].apply(this,arguments):b&&b[c]},w.extendValue(b,c,j.value);j.value._supvalue=j._supvalue}}(),w=function(){var e={};f.addReady(function(b,c){var d={},q=function(m){d[m]||(d[m]=a(b.getElementsByTagName(m)),
c[0]&&a.nodeName(c[0],m)&&(d[m]=d[m].add(c)))};a.each(e,function(b,a){q(b);!a||!a.forEach?f.warn("Error: with "+b+"-property. methods: "+a):a.forEach(function(a){d[b].each(a)})});d=null});var d,b=a([]),c=function(b,c){e[b]?e[b].push(c):e[b]=[c];a.isDOMReady&&(d||a(i.getElementsByTagName(b))).each(c)};return{createTmpCache:function(c){a.isDOMReady&&(d=d||a(i.getElementsByTagName(c)));return d||b},flushTmpCache:function(){d=null},content:function(b,d){c(b,function(){var b=a.attr(this,d);null!=b&&a.attr(this,
d,b)})},createElement:function(b,a){c(b,a)},extendValue:function(b,d,e){c(b,function(){a(this).each(function(){A(this,"propValue",{})[d]=this[d];this[d]=e})})}}}(),y=function(a,d){if(a.defaultValue===r)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[d||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}};if(!a.attr)a.attr={}};a.extend(f,{getID:function(){var e=(new Date).getTime();return function(d){var d=a(d),b=d.attr("id");b||(e++,b="ID-"+e,d.attr("id",b));
return b}}(),extendUNDEFProp:function(e,d){a.each(d,function(b,a){b in e||(e[b]=a)})},createPropDefault:y,data:A,moveToFirstEvent:function(){var e=a._data?"_data":"data";return function(d,b,c){if((d=(a[e](d,"events")||{})[b])&&1<d.length)b=d.pop(),c||(c="bind"),"bind"==c&&d.delegateCount?d.splice(d.delegateCount,0,b):d.unshift(b)}}(),addShadowDom:function(){var e,d,b,c={init:!1,runs:0,test:function(){var b=c.getHeight(),a=c.getWidth();b!=c.height||a!=c.width?(c.height=b,c.width=a,c.handler({type:"docresize"}),
c.runs++,30>c.runs&&setTimeout(c.test,30)):c.runs=0},handler:function(j){clearTimeout(e);e=setTimeout(function(){if("resize"==j.type){var e=a(g).width(),h=a(g).width();if(h==d&&e==b)return;d=h;b=e;c.height=c.getHeight();c.width=c.getWidth()}a.event.trigger("updateshadowdom")},"resize"==j.type?50:9)},_create:function(){a.each({Height:"getHeight",Width:"getWidth"},function(b,a){var d=i.body,q=i.documentElement;c[a]=function(){return Math.max(d["scroll"+b],q["scroll"+b],d["offset"+b],q["offset"+b],q["client"+
b])}})},start:function(){if(!this.init&&i.body)this.init=!0,this._create(),this.height=c.getHeight(),this.width=c.getWidth(),setInterval(this.test,400),a(this.test),a(g).bind("load",this.test),a(g).bind("resize",this.handler),function(){var b=a.fn.animate,d;a.fn.animate=function(){clearTimeout(d);d=setTimeout(function(){c.test();c.handler({type:"animationstart"})},19);return b.apply(this,arguments)}}()}};a.event.customEvent.updateshadowdom=!0;f.docObserve=function(){f.ready("DOM",function(){c.start()})};
return function(b,c,d){d=d||{};b.jquery&&(b=b[0]);c.jquery&&(c=c[0]);var q=a.data(b,x)||a.data(b,x,{}),m=a.data(c,x)||a.data(c,x,{}),e={};if(d.shadowFocusElement){if(d.shadowFocusElement){if(d.shadowFocusElement.jquery)d.shadowFocusElement=d.shadowFocusElement[0];e=a.data(d.shadowFocusElement,x)||a.data(d.shadowFocusElement,x,e)}}else d.shadowFocusElement=c;q.hasShadow=c;e.nativeElement=m.nativeElement=b;e.shadowData=m.shadowData=q.shadowData={nativeElement:b,shadowElement:c,shadowFocusElement:d.shadowFocusElement};
d.shadowChilds&&d.shadowChilds.each(function(){A(this,"shadowData",m.shadowData)});if(d.data)e.shadowData.data=m.shadowData.data=q.shadowData.data=d.data;d=null;f.docObserve()}}(),propTypes:{standard:function(a){y(a);if(!a.prop)a.prop={set:function(d){a.attr.set.call(this,""+d)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){y(a);if(!a.prop)a.prop={set:function(d){d?a.attr.set.call(this,""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}},
src:function(){var e=i.createElement("a");e.style.display="none";return function(d,b){y(d);if(!d.prop)d.prop={set:function(b){d.attr.set.call(this,b)},get:function(){var c=this.getAttribute(b),d;if(null==c)return"";e.setAttribute("href",c+"");if(!a.support.hrefNormalized){try{a(e).insertAfter(this),d=e.getAttribute("href",4)}catch(h){d=e.getAttribute("href",4)}a(e).detach()}return d||e.href}}}}(),enumarated:function(a){y(a);if(!a.prop)a.prop={set:function(d){a.attr.set.call(this,d)},get:function(){var d=
(a.attr.get.call(this)||"").toLowerCase();if(!d||-1==a.limitedTo.indexOf(d))d=a.defaultValue;return d}}}},reflectProperties:function(e,d){"string"==typeof d&&(d=d.split(o));d.forEach(function(b){f.defineNodeNamesProperty(e,b,{prop:{set:function(c){a.attr(this,b,c)},get:function(){return a.attr(this,b)||""}}})})},defineNodeNameProperty:function(e,d,b){l[d]=!0;if(b.reflect)f.propTypes[b.propType||"standard"](b,d);["prop","attr","removeAttr"].forEach(function(c){var j=b[c];j&&(j="prop"===c?a.extend({writeable:!0},
j):a.extend({},j,{writeable:!0}),k[c](e,d,j),"*"!=e&&f.cfg.extendNative&&"prop"==c&&j.value&&a.isFunction(j.value)&&p(e,d,j),b[c]=j)});b.initAttr&&w.content(e,d);return b},defineNodeNameProperties:function(a,d,b,c){for(var j in d)!c&&d[j].initAttr&&w.createTmpCache(a),b&&!d[j][b]&&(d[j][b]={},["value","set","get"].forEach(function(a){a in d[j]&&(d[j][b][a]=d[j][a],delete d[j][a])})),d[j]=f.defineNodeNameProperty(a,j,d[j]);c||w.flushTmpCache();return d},createElement:function(e,d,b){var c;a.isFunction(d)&&
(d={after:d});w.createTmpCache(e);d.before&&w.createElement(e,d.before);b&&(c=f.defineNodeNameProperties(e,b,!1,!0));d.after&&w.createElement(e,d.after);w.flushTmpCache();return c},onNodeNamesPropertyModify:function(e,d,b,c){"string"==typeof e&&(e=e.split(o));a.isFunction(b)&&(b={set:b});e.forEach(function(a){t[a]||(t[a]={});"string"==typeof d&&(d=d.split(o));b.initAttr&&w.createTmpCache(a);d.forEach(function(d){t[a][d]||(t[a][d]=[],l[d]=!0);if(b.set){if(c)b.set.only=c;t[a][d].push(b.set)}b.initAttr&&
w.content(a,d)});w.flushTmpCache()})},defineNodeNamesBooleanProperty:function(e,d,b){b||(b={});if(a.isFunction(b))b.set=b;f.defineNodeNamesProperty(e,d,{attr:{set:function(a){this.setAttribute(d,a);b.set&&b.set.call(this,!0)},get:function(){return null==this.getAttribute(d)?r:d}},removeAttr:{value:function(){this.removeAttribute(d);b.set&&b.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:b.initAttr||!1})},contentAttr:function(a,d,b){if(a.nodeName){if(b===r)return a=a.attributes[d]||{},
b=a.specified?a.value:null,null==b?r:b;"boolean"==typeof b?b?a.setAttribute(d,d):a.removeAttribute(d):a.setAttribute(d,b)}},activeLang:function(){var e=[],d={},b,c,h=/:\/\/|^\.*\//,v=function(b,c,d){return c&&d&&-1!==a.inArray(c,d.availabeLangs||[])?(b.loading=!0,d=d.langSrc,h.test(d)||(d=f.cfg.basePath+d),f.loader.loadScript(d+c+".js",function(){b.langObj[c]?(b.loading=!1,q(b,!0)):a(function(){b.langObj[c]&&q(b,!0);b.loading=!1})}),!0):!1},l=function(a){d[a]&&d[a].forEach(function(a){a.callback()})},
q=function(a,d){if(a.activeLang!=b&&a.activeLang!==c){var q=u[a.module].options;if(a.langObj[b]||c&&a.langObj[c])a.activeLang=b,a.callback(a.langObj[b]||a.langObj[c],b),l(a.module);else if(!d&&!v(a,b,q)&&!v(a,c,q)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],b),l(a.module)}};return function(m){if("string"==typeof m&&m!==b)b=m,c=b.split("-")[0],b==c&&(c=!1),a.each(e,function(a,b){q(b)});else if("object"==typeof m)if(m.register)d[m.register]||(d[m.register]=[]),d[m.register].push(m),
m.callback();else{if(!m.activeLang)m.activeLang="";e.push(m);q(m)}return b}}()});a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,d){f[a]=function(a,c,e,h){"string"==typeof a&&(a=a.split(o));var l={};a.forEach(function(a){l[a]=f[d](a,c,e,h)});return l}});f.isReady("webshimLocalization",!0)});
(function(a,f){var g=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<g)&&(!a.browser.msie||12>g&&7<g)){var i={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},r=function(a,f){a.getAttribute("role")||a.setAttribute("role",f)};a.webshims.addReady(function(g,o){a.each(i,function(f,l){for(var h=a(f,g).add(o.filter(f)),z=0,n=h.length;z<n;z++)r(h[z],l)});if(g===f){var s=f.getElementsByTagName("header")[0],l=f.getElementsByTagName("footer"),n=l.length;
s&&!a(s).closest("section, article")[0]&&r(s,"banner");n&&(s=l[n-1],a(s).closest("section, article")[0]||r(s,"contentinfo"))}})}})(jQuery,document);
(function(a,f,g){var i=f.audio&&f.video,r=!1,u=g.cfg.mediaelement,o=g.bugs,s="jwplayer"==u.player?"mediaelement-swf":"mediaelement-jaris",l=function(){g.ready(s,function(){if(!g.mediaelement.createSWF)g.mediaelement.loadSwf=!0,g.reTest([s],i)})},n;if(i){var k=document.createElement("video");f.videoBuffered="buffered"in k;r="loop"in k;g.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));f.videoBuffered||(g.addPolyfill("mediaelement-native-fix",
{f:"mediaelement",test:f.videoBuffered,d:["dom-support"]}),g.reTest("mediaelement-native-fix"))}if(i&&!u.preferFlash){var t=function(h){var f=h.target.parentNode;!u.preferFlash&&(a(h.target).is("audio, video")||f&&a("source:last",f)[0]==h.target)&&g.ready("DOM mediaelement",function(){n&&l();g.ready("WINDOWLOAD "+s,function(){setTimeout(function(){n&&!u.preferFlash&&g.mediaelement.createSWF&&!a(h.target).closest("audio, video").is(".nonnative-api-active")?(u.preferFlash=!0,document.removeEventListener("error",
t,!0),a("audio, video").mediaLoad(),g.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+h.target.src)):n||document.removeEventListener("error",t,!0)},20)})})};document.addEventListener("error",t,!0);a("audio, video").each(function(){this.error&&t({target:this})})}o.track=!1;f.track&&function(){if(!o.track)o.track="number"!=typeof a("<track />")[0].readyState;if(!o.track)try{new TextTrackCue(2,3,"")}catch(h){o.track=!0}var f=g.cfg.track,l=function(h){a(h.target).filter("track").each(n)},
n=function(){if(o.track||!f.override&&3==a.prop(this,"readyState"))f.override=!0,g.reTest("track"),document.removeEventListener("error",l,!0),this&&a.nodeName(this,"track")?g.error("track support was overwritten. Please check your vtt including your vtt mime-type"):g.info("track support was overwritten. due to bad browser support")},k=function(){document.addEventListener("error",l,!0);o.track?n():a("track").each(n)};f.override||(g.isReady("track")?k():a(k))}();g.register("mediaelement-core",function(a,
g,k,t,E){n=swfobject.hasFlashPlayerVersion("9.0.115");var p=g.mediaelement,w=function(b,c){var b=a(b),d={src:b.attr("src")||"",elem:b,srcProp:b.prop("src")};if(!d.src)return d;var e=b.attr("type");if(e)d.type=e,d.container=a.trim(e.split(";")[0]);else if(c||(c=b[0].nodeName.toLowerCase(),"source"==c&&(c=(b.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),e=p.getTypeForSrc(d.src,c))d.type=e,d.container=e;if(e=b.attr("media"))d.media=e;return d},y=!n&&"postMessage"in k&&i,e=
function(){var b;return function(){!b&&y&&(b=!0,g.loader.loadScript("https://www.youtube.com/player_api"),a(function(){g.polyfill("mediaelement-yt")}))}}(),d=function(){n?l():e();a(function(){g.loader.loadList(["track-ui"])})};g.addPolyfill("mediaelement-yt",{test:!y,d:["dom-support"]});p.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp",
"3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};p.mimeTypes.source=a.extend({},p.mimeTypes.audio,p.mimeTypes.video);
p.getTypeForSrc=function(b,c){if(-1!=b.indexOf("youtube.com/watch?")||-1!=b.indexOf("youtube.com/v/"))return"video/youtube";var b=b.split("?")[0].split("."),b=b[b.length-1],d;a.each(p.mimeTypes[c],function(a,c){if(-1!==c.indexOf(b))return d=a,!1});return d};p.srces=function(b,c){b=a(b);if(c)b.removeAttr("src").removeAttr("type").find("source").remove(),a.isArray(c)||(c=[c]),c.forEach(function(a){var c=t.createElement("source");"string"==typeof a&&(a={src:a});c.setAttribute("src",a.src);a.type&&c.setAttribute("type",
a.type);a.media&&c.setAttribute("media",a.media);b.append(c)});else{var c=[],d=b[0].nodeName.toLowerCase(),e=w(b,d);e.src?c.push(e):a("source",b).each(function(){e=w(this,d);e.src&&c.push(e)});return c}};a.fn.loadMediaSrc=function(b,c){return this.each(function(){c!==E&&(a(this).removeAttr("poster"),c&&a.attr(this,"poster",c));p.srces(this,b);a(this).mediaLoad()})};p.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
p.canThirdPlaySrces=function(b,c){var d="";if(n||y)b=a(b),c=c||p.srces(b),a.each(c,function(a,b){if(b.container&&b.src&&(n&&-1!=p.swfMimeTypes.indexOf(b.container)||y&&"video/youtube"==b.container))return d=b,!1});return d};var b={};p.canNativePlaySrces=function(c,d){var e="";if(i){var c=a(c),g=(c[0].nodeName||"").toLowerCase();if(!b[g])return e;d=d||p.srces(c);a.each(d,function(a,d){if(d.type&&b[g].prop._supvalue.call(c[0],d.type))return e=d,!1})}return e};p.setError=function(b,c){c||(c="can't play sources");
a(b).pause().data("mediaerror",c);g.warn("mediaelementError: "+c);setTimeout(function(){a(b).data("mediaerror")&&a(b).trigger("mediaerror")},1)};var c=function(){var b;return function(m,f,j){g.ready(n?s:"mediaelement-yt",function(){p.createSWF?p.createSWF(m,f,j):b||(b=!0,d(),c(m,f,j))});!b&&y&&!p.createSWF&&e();a(function(){g.loader.loadList(["track-ui"])})}}(),j=function(a,b,d,e,g){d||!1!==d&&b&&"third"==b.isActive?(d=p.canThirdPlaySrces(a,e))?c(a,d,b):g?p.setError(a,!1):j(a,b,!1,e,!0):(d=p.canNativePlaySrces(a,
e))?b&&"third"==b.isActive&&p.setActive(a,"html5",b):g?(p.setError(a,!1),b&&"third"==b.isActive&&p.setActive(a,"html5",b)):j(a,b,!0,e,!0)},v=/^(?:embed|object|datalist)$/i,B=function(b,c){var d=g.data(b,"mediaelementBase")||g.data(b,"mediaelementBase",{}),e=p.srces(b),f=b.parentNode;clearTimeout(d.loadTimer);a.data(b,"mediaerror",!1);if(e.length&&f&&!(1!=f.nodeType||v.test(f.nodeName||"")))c=c||g.data(b,"mediaelement"),j(b,c,u.preferFlash||E,e)};a(t).bind("ended",function(b){var c=g.data(b.target,
"mediaelement");(!r||c&&"html5"!=c.isActive||a.prop(b.target,"loop"))&&setTimeout(function(){!a.prop(b.target,"paused")&&a.prop(b.target,"loop")&&a(b.target).prop("currentTime",0).play()},1)});r||g.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(c){var d=g.defineNodeNameProperty(c,"load",{prop:{value:function(){var a=g.data(this,"mediaelement");B(this,a);i&&(!a||"html5"==a.isActive)&&d.prop._supvalue&&d.prop._supvalue.apply(this,arguments)}}});b[c]=g.defineNodeNameProperty(c,
"canPlayType",{prop:{value:function(d){var e="";i&&b[c].prop._supvalue&&(e=b[c].prop._supvalue.call(this,d),"no"==e&&(e=""));!e&&n&&(d=a.trim((d||"").split(";")[0]),-1!=p.swfMimeTypes.indexOf(d)&&(e="maybe"));return e}}})});g.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=g.data(a,"mediaelementBase")||g.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){B(a);a=null},9)}});k=function(){g.addReady(function(b,c){a("video, audio",
b).add(c.filter("video, audio")).each(function(){a.browser.msie&&8<g.browserVersion&&a.prop(this,"paused")&&!a.prop(this,"readyState")&&a(this).is('audio[preload="none"][controls]:not([autoplay])')?a(this).prop("preload","metadata").mediaLoad():B(this);if(i){var b,c,d=this,e=function(){var b=a.prop(d,"buffered");if(b){for(var c="",e=0,f=b.length;e<f;e++)c+=b.end(e);return c}},f=function(){var b=e();b!=c&&(c=b,a(d).triggerHandler("progress"))};a(this).bind("play loadstart progress",function(a){"progress"==
a.type&&(c=e());clearTimeout(b);b=setTimeout(f,999)}).bind("emptied stalled mediaerror abort suspend",function(a){"emptied"==a.type&&(c=!1);clearTimeout(b)})}})})};f.track&&!o.track&&g.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}});i?(g.isReady("mediaelement-core",!0),k(),g.ready("WINDOWLOAD mediaelement",d)):g.ready(s,k);a(function(){t.getElementsByTagName("track")[0]&&g.loader.loadList(["track-ui"])})})})(jQuery,Modernizr,jQuery.webshims);
(function(a){var f=window.Modernizr,g=a.webshims,i=g.bugs,r=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input required="" name="a" /></form>'),u=function(){if(r[0].querySelector)try{i.findRequired=!r[0].querySelector("select:required")}catch(a){i.findRequired=!1}},o=a("input",r).eq(0),s=function(a){g.loader.loadList(["dom-extend"]);g.ready("dom-extend",a)};i.findRequired=!1;i.validationMessage=!1;g.capturingEventPrevented=function(f){if(!f._isPolyfilled){var g=
f.isDefaultPrevented,k=f.preventDefault;f.preventDefault=function(){clearTimeout(a.data(f.target,f.type+"DefaultPrevented"));a.data(f.target,f.type+"DefaultPrevented",setTimeout(function(){a.removeData(f.target,f.type+"DefaultPrevented")},30));return k.apply(this,arguments)};f.isDefaultPrevented=function(){return!(!g.apply(this,arguments)&&!a.data(f.target,f.type+"DefaultPrevented"))};f._isPolyfilled=!0}};if(!f.formvalidation||i.bustedValidity)u();else{g.capturingEvents(["input"]);g.capturingEvents(["invalid"],
!0);if(window.opera||window.testGoodWithFix)r.appendTo("head"),u(),i.validationMessage=!o.prop("validationMessage"),g.reTest(["form-extend","form-message"]),r.remove(),a(function(){s(function(){var f=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(n){var k=g.defineNodeNameProperty(n,"checkValidity",{prop:{value:function(){g.fromSubmit||a(this).bind("invalid.checkvalidity",f);g.fromCheckValidity=!0;var n=k.prop._supvalue.apply(this,arguments);g.fromSubmit||a(this).unbind("invalid.checkvalidity",
f);g.fromCheckValidity=!1;return n}}})})})});a.browser.webkit&&!g.bugs.bustedValidity&&function(){var f=/^(?:textarea|input)$/i,g=!1;document.addEventListener("contextmenu",function(a){f.test(a.target.nodeName||"")&&(g=a.target.form)&&setTimeout(function(){g=!1},1)},!1);a(window).bind("invalid",function(a){if(a.originalEvent&&g&&g==a.target.form)a.wrongWebkitInvalid=!0,a.stopImmediatePropagation()})}()}})(jQuery);
jQuery.webshims.register("form-core",function(a,f,g,i,r,u){var o={radio:1},s={checkbox:1,radio:1},l=a([]),n=f.bugs,k=function(b){var b=a(b),c,d;c=l;if(o[b[0].type])d=b.prop("form"),c=(c=b[0].name)?d?a(d[c]):a(i.getElementsByName(c)).filter(function(){return!a.prop(this,"form")}):b,c=c.filter('[type="radio"]');return c},t=f.getContentValidationMessage=function(b,c,d){var e=a(b).data("errormessage")||b.getAttribute("x-moz-errormessage")||"";d&&e[d]&&(e=e[d]);"object"==typeof e&&(c=c||a.prop(b,"validity")||
{valid:1},c.valid||a.each(c,function(a,b){if(b&&"valid"!=a&&e[a])return e=e[a],!1}));if("object"==typeof e)e=e.defaultMessage;return e||""},h={number:1,range:1,date:1},z=function(b){var c=!1;a(a.prop(b,"elements")).each(function(){if(c=a(this).is(":invalid"))return!1});return c};a.extend(a.expr[":"],{"valid-element":function(b){return a.nodeName(b,"form")?!z(b):!(!a.prop(b,"willValidate")||!A(b))},"invalid-element":function(b){return a.nodeName(b,"form")?z(b):!(!a.prop(b,"willValidate")||A(b))},"required-element":function(b){return!(!a.prop(b,
"willValidate")||!a.prop(b,"required"))},"user-error":function(b){return a.prop(b,"willValidate")&&a(b).hasClass("user-error")},"optional-element":function(b){return!!(a.prop(b,"willValidate")&&!1===a.prop(b,"required"))},"in-range":function(b){if(!h[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||b.rangeOverflow||b.rangeUnderflow)},"out-of-range":function(b){if(!h[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||!b.rangeOverflow&&
!b.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(b){a.expr[":"][b]=a.expr.filters[b+"-element"]});a.expr[":"].focus=function(a){try{var c=a.ownerDocument;return a===c.activeElement&&(!c.hasFocus||c.hasFocus())}catch(d){}return!1};var x=a.event.customEvent||{},A=function(b){return(a.prop(b,"validity")||{valid:1}).valid};(n.bustedValidity||n.findRequired)&&function(){var b=a.find,c=a.find.matchesSelector,d=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,
e=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,c=function(c){var f=arguments,f=a.call(f,1,f.length);f.unshift(c.replace(d,e));return b.apply(this,f)},f;for(f in b)b.hasOwnProperty(f)&&(c[f]=b[f]);return c}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",i.documentElement))a.find.matchesSelector=function(a,b){b=b.replace(d,e);return c.call(this,a,b)}}();var E=a.prop,p={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(b,c,f){var g=
E.apply(this,arguments);b&&"form"in b&&p[c]&&f!==r&&a(b).hasClass(e)&&A(b)&&(a(b).getShadowElement().removeClass(d),"checked"==c&&f&&k(b).not(b).removeClass(d).removeAttr("aria-invalid"));return g};var w=function(b,c){var d;a.each(b,function(b,e){if(e)return d="customError"==b?a.prop(c,"validationMessage"):b,!1});return d},y=function(a){var c;try{c=i.activeElement.name===a}catch(d){}return c},e="user-error",d="user-error form-ui-invalid";a(i).bind(u.validityUIEvents||"focusout change refreshvalidityui",
function(b){var c,f;if(b.target&&(c=a(b.target).getNativeElement()[0],"submit"!=c.type&&a.prop(c,"willValidate"))){f=a.data(c,"webshimsswitchvalidityclass");var g=function(){if(!("focusout"==b.type&&"radio"==c.type&&y(c.name))){var f=a.prop(c,"validity"),g=a(c).getShadowElement(),m,j,h,l;a(c).trigger("refreshCustomValidityRules");f.valid?g.hasClass("user-success")||(m="user-success form-ui-valid",j=d,l="changedvaliditystate",h="changedvalid",s[c.type]&&c.checked&&k(c).not(c).removeClass(j).addClass(m).removeAttr("aria-invalid"),
a.removeData(c,"webshimsinvalidcause")):(f=w(f,c),a.data(c,"webshimsinvalidcause")!=f&&(a.data(c,"webshimsinvalidcause",f),l="changedvaliditystate"),g.hasClass(e)||(m=d,j="user-success form-ui-valid",s[c.type]&&!c.checked&&k(c).not(c).removeClass(j).addClass(m),h="changedinvalid"));m&&(g.addClass(m).removeClass(j),setTimeout(function(){a(c).trigger(h)},0));l&&setTimeout(function(){a(c).trigger(l)},0);a.removeData(b.target,"webshimsswitchvalidityclass")}};f&&clearTimeout(f);"refreshvalidityui"==b.type?
g():a.data(c,"webshimsswitchvalidityclass",setTimeout(g,9))}});x.changedvaliditystate=!0;x.refreshCustomValidityRules=!0;x.changedvalid=!0;x.changedinvalid=!0;x.refreshvalidityui=!0;f.triggerInlineForm=function(b,c){a(b).trigger(c)};f.modules["form-core"].getGroupElements=k;n=function(){f.scrollRoot=a.browser.webkit||"BackCompat"==i.compatMode?a(i.body):a(i.documentElement)};n();f.ready("DOM",n);f.getRelOffset=function(b,c){var b=a(b),d=a(c).offset(),e;a.swap(a(b)[0],{visibility:"hidden",display:"inline-block",
left:0,top:0},function(){e=b.offset()});d.top-=e.top;d.left-=e.left;return d};f.validityAlert=function(){var b=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",c,d=!1,e=!1,h,l={hideDelay:5E3,showFor:function(b,c,f,n){l._create();var b=a(b),k=a(b).getShadowElement(),i=l.getOffsetFromBody(k);l.clear();n?this.hide():(this.getMessage(b,c),this.position(k,i),this.show(),this.hideDelay&&(d=setTimeout(h,this.hideDelay)),a(g).bind("resize.validityalert",function(){clearTimeout(e);e=setTimeout(function(){l.position(k)},
9)}));f||this.setFocus(k,i)},getOffsetFromBody:function(a){return f.getRelOffset(c,a)},setFocus:function(d,e){var g=a(d).getShadowFocusElement(),l=f.scrollRoot.scrollTop(),j=(e||g.offset()).top-30,k;f.getID&&"label"==b&&c.attr("for",f.getID(g));l>j&&(f.scrollRoot.animate({scrollTop:j-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(l-j)),80)}),k=!0);try{g[0].focus()}catch(n){}k&&(f.scrollRoot.scrollTop(l),setTimeout(function(){f.scrollRoot.scrollTop(l)},0));setTimeout(function(){a(i).bind("focusout.validityalert",
h)},10)},getMessage:function(b,d){d||(d=t(b[0])||b.prop("validationMessage"));d?a("span.va-box",c).text(d):this.hide()},position:function(b,d){d=d?a.extend({},d):l.getOffsetFromBody(b);d.top+=b.outerHeight();c.css(d)},show:function(){"none"===c.css("display")&&c.css({opacity:0}).show();c.addClass("va-visible").fadeTo(400,1)},hide:function(){c.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(d);a(i).unbind(".validityalert");a(g).unbind(".validityalert");c.stop().removeAttr("for")},
_create:function(){if(!c)c=l.errorBubble=a("<"+b+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+b+">").css({position:"absolute",display:"none"}),f.ready("DOM",function(){c.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&c.bgIframe()})}};h=a.proxy(l,"hide");return l}();(function(){var b,c=[],f;a(i).bind("invalid",function(g){if(!g.wrongWebkitInvalid){var l=
a(g.target),h=l.getShadowElement();h.hasClass(e)||(h.addClass(d).removeClass("user-success form-ui-valid"),setTimeout(function(){a(g.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=g.isDefaultPrevented,h=a.Event("firstinvalidsystem"),a(i).triggerHandler(h,{element:g.target,form:g.target.form,isInvalidUIPrevented:g.isDefaultPrevented}),l.trigger(b);b&&b.isDefaultPrevented()&&g.preventDefault();c.push(g.target);g.extraData=
"fix";clearTimeout(f);f=setTimeout(function(){var d={type:"lastinvalid",cancelable:!1,invalidlist:a(c)};b=!1;c=[];a(g.target).trigger(d,d)},9);h=l=null}})})();a.fn.getErrorMessage=function(){var b="",c=this[0];c&&(b=t(c)||a.prop(c,"customValidationMessage")||a.prop(c,"validationMessage"));return b};u.replaceValidationUI&&f.ready("DOM forms",function(){a(i).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,f,g,i,r,u){var o=f.validityMessages,g=u.overrideMessages||u.customMessages?["customValidationMessage"]:[];o.en=a.extend(!0,{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},o.en||o["en-US"]||{});["select","radio"].forEach(function(a){o.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){o.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date",
"time","datetime-local"].forEach(function(a){o.en.rangeOverflow[a]="Value must be at or before {%max}."});o["en-US"]=o["en-US"]||o.en;o[""]=o[""]||o["en-US"];o.de=a.extend(!0,{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}},o.de||{});["select","radio"].forEach(function(a){o.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){o.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){o.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});
var s=o[""];f.createValidationMessage=function(g,n){var k=s[n];k&&"string"!==typeof k&&(k=k[a.prop(g,"type")]||k[(g.nodeName||"").toLowerCase()]||k.defaultMessage);k&&"value,min,max,title,maxlength,label".split(",").forEach(function(i){if(-1!==k.indexOf("{%"+i)){var h=("label"==i?a.trim(a('label[for="'+g.id+'"]',g.form).text()).replace(/\*$|:$/,""):a.attr(g,i))||"";"patternMismatch"==n&&"title"==i&&!h&&f.error("no title for patternMismatch provided. Always add a title attribute.");k=k.replace("{%"+
i+"}",h);"value"==i&&(k=k.replace("{%valueLen}",h.length))}});return k||""};(f.bugs.validationMessage||!Modernizr.formvalidation||f.bugs.bustedValidity)&&g.push("validationMessage");f.activeLang({langObj:o,module:"form-core",callback:function(a){s=a}});g.forEach(function(g){f.defineNodeNamesProperty(["fieldset","output","button"],g,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(i){var k=f.defineNodeNameProperty(i,g,{prop:{get:function(){var g=this,h="";if(!a.prop(g,
"willValidate"))return h;var i=a.prop(g,"validity")||{valid:1};if(i.valid||(h=f.getContentValidationMessage(g,i)))return h;if(i.customError&&g.nodeName&&(h=Modernizr.formvalidation&&!f.bugs.bustedValidity&&k.prop._supget?k.prop._supget.call(g):f.data(g,"customvalidationMessage")))return h;a.each(i,function(a,i){if("valid"!=a&&i&&(h=f.createValidationMessage(g,a)))return!1});return h||""},writeable:!1}})})})});
