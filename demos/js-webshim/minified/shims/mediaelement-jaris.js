webshims.register("mediaelement-jaris",function(e,t,i,n,a,r){"use strict";var o=t.mediaelement,s=i.swfmini,l=Modernizr.audio&&Modernizr.video,u=s.hasFlashPlayerVersion("9.0.115"),c=0,d="ActiveXObject"in i&&l,p={paused:!0,ended:!1,currentSrc:"",duration:i.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,seeking:!1,error:null,buffered:{start:function(e){return e?(t.error("buffered index size error"),a):0},end:function(e){return e?(t.error("buffered index size error"),a):0},length:0}},m=Object.keys(p),f={currentTime:0,volume:1,muted:!1};Object.keys(f);var h=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,currentTime:0,_ppFlag:a,_calledMeta:!1,lastDuration:0},p,f),v=function(e){try{e.nodeName}catch(i){return null}var n=t.data(e,"mediaelement");return n&&"third"==n.isActive?n:null},g=function(t,i){i=e.Event(i),i.preventDefault(),e.event.trigger(i,a,t)},y=r.playerPath||t.cfg.basePath+"swf/"+(r.playerName||"JarisFLVPlayer.swf");t.extendUNDEFProp(r.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent",allowNetworking:"all"}),t.extendUNDEFProp(r.vars,{controltype:"1",jsapi:"1"}),t.extendUNDEFProp(r.attrs,{bgcolor:"#000000"});var b=function(e,t){3>e&&clearTimeout(t._canplaythroughTimer),e>=3&&3>t.readyState&&(t.readyState=e,g(t._elem,"canplay"),t.paused||g(t._elem,"playing"),clearTimeout(t._canplaythroughTimer),t._canplaythroughTimer=setTimeout(function(){b(4,t)},4e3)),e>=4&&4>t.readyState&&(t.readyState=e,g(t._elem,"canplaythrough")),t.readyState=e},w=function(t){t.seeking&&2>Math.abs(t.currentTime-t._lastSeektime)&&(t.seeking=!1,e(t._elem).triggerHandler("seeked"))};o.jarisEvent={};var T,x={onPlayPause:function(e,t,i){var n,a;if(null==i)try{n=t.api.api_get("isPlaying")}catch(r){}else n=i;n==t.paused&&(t.paused=!n,a=t.paused?"pause":"play",t._ppFlag=!0,g(t._elem,a),3>t.readyState&&b(3,t),t.paused||g(t._elem,"playing"))},onSeek:function(t,i){i._lastSeektime=t.seekTime,i.seeking=!0,e(i._elem).triggerHandler("seeking"),clearTimeout(i._seekedTimer),i._seekedTimer=setTimeout(function(){w(i),i.seeking=!1},300)},onConnectionFailed:function(){t.error("media error")},onNotBuffering:function(e,t){b(3,t)},onDataInitialized:function(e,t){var i,n=t.duration;t.duration=e.duration,n==t.duration||isNaN(t.duration)||t._calledMeta&&2>(i=Math.abs(t.lastDuration-t.duration))||(t.videoHeight=e.height,t.videoWidth=e.width,t.networkState||(t.networkState=2),1>t.readyState&&b(1,t),clearTimeout(t._durationChangeTimer),t._calledMeta&&t.duration?t._durationChangeTimer=setTimeout(function(){t.lastDuration=t.duration,g(t._elem,"durationchange")},i>50?0:i>9?9:99):(t.lastDuration=t.duration,t.duration&&g(t._elem,"durationchange"),t._calledMeta||g(t._elem,"loadedmetadata")),t._calledMeta=!0)},onBuffering:function(e,t){t.ended&&(t.ended=!1),b(1,t),g(t._elem,"waiting")},onTimeUpdate:function(e,t){t.ended&&(t.ended=!1),3>t.readyState&&(b(3,t),g(t._elem,"playing")),t.seeking&&w(t),g(t._elem,"timeupdate")},onProgress:function(t,i){if(i.ended&&(i.ended=!1),i.duration&&!isNaN(i.duration)){var n=t.loaded/t.total;n>.02&&.2>n?b(3,i):n>.2&&(n>.99&&(i.networkState=1),b(4,i)),i._bufferedEnd&&i._bufferedEnd>n&&(i._bufferedStart=i.currentTime||0),i._bufferedEnd=n,i.buffered.length=1,e.event.trigger("progress",a,i._elem,!0)}},onPlaybackFinished:function(e,t){4>t.readyState&&b(4,t),t.ended=!0,g(t._elem,"ended")},onVolumeChange:function(e,t){(t.volume!=e.volume||t.muted!=e.mute)&&(t.volume=e.volume,t.muted=e.mute,g(t._elem,"volumechange"))},ready:function(){var i=function(e){var t=!0;try{e.api.api_get("volume")}catch(i){t=!1}return t};return function(n,r){var o=0,s=function(){return o>9?(r.tryedReframeing=0,a):(o++,r.tryedReframeing++,i(r)?(r.wasSwfReady=!0,r.tryedReframeing=0,E(r),N(r)):6>r.tryedReframeing?3>r.tryedReframeing?(r.reframeTimer=setTimeout(s,9),r.shadowElem.css({overflow:"visible"}),setTimeout(function(){r.shadowElem.css({overflow:"hidden"})},1)):(r.shadowElem.css({overflow:"hidden"}),e(r._elem).mediaLoad()):(clearTimeout(r.reframeTimer),t.error("reframing error")),a)};r&&r.api&&(r.tryedReframeing||(r.tryedReframeing=0),clearTimeout(T),clearTimeout(r.reframeTimer),r.shadowElem.removeClass("flashblocker-assumed"),o?r.reframeTimer=setTimeout(s,9):s())}}()};x.onMute=x.onVolumeChange;var N=function(e){var i,n=e.actionQueue.length,a=0;if(n&&"third"==e.isActive)for(;e.actionQueue.length&&n>a;){a++,i=e.actionQueue.shift();try{e.api[i.fn].apply(e.api,i.args)}catch(r){t.warn(r)}}e.actionQueue.length&&(e.actionQueue=[])},E=function(t){t&&((t._ppFlag===a&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if("third"==t.isActive&&(t._ppFlag===a||!t.paused))try{e(t._elem).play(),t._ppFlag=!0}catch(i){}},1),t.muted&&e.prop(t._elem,"muted",!0),1!=t.volume&&e.prop(t._elem,"volume",t.volume))},A=e.noop;if(l){var k={play:1,playing:1},S=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],M=S.map(function(e){return e+".webshimspolyfill"}).join(" "),_=function(i){var n=t.data(i.target,"mediaelement");if(n){var a=i.originalEvent&&i.originalEvent.type===i.type;a==("third"==n.activating)&&(i.stopImmediatePropagation(),k[i.type]&&(n.isActive!=n.activating?e(i.target).pause():a&&(e.prop(i.target,"pause")._supvalue||e.noop).apply(i.target)))}};A=function(i){e(i).off(M).on(M,_),S.forEach(function(e){t.moveToFirstEvent(i,e)})},A(n)}o.setActive=function(i,n,a){if(a||(a=t.data(i,"mediaelement")),a&&a.isActive!=n){"html5"!=n&&"third"!=n&&t.warn("wrong type for mediaelement activating: "+n);var r=t.data(i,"shadowData");a.activating=n,e(i).pause(),a.isActive=n,"third"==n?(r.shadowElement=r.shadowFocusElement=a.shadowElem[0],e(i).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(e(i).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),r.shadowElement=r.shadowFocusElement=!1),e(i).trigger("mediaelementapichange")}};var C=function(){var e=["_calledMeta","lastDuration","_bufferedEnd","_bufferedStart","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","seeking","videoHeight","videoWidth"],t=e.length;return function(i){if(i){clearTimeout(i._seekedTimer);var n=t,a=i.networkState;for(b(0,i),clearTimeout(i._durationChangeTimer);--n>-1;)delete i[e[n]];i.actionQueue=[],i.buffered.length=0,a&&g(i._elem,"emptied")}}}(),D=function(){var t={},i=function(i){var a,r,o;return t[i.currentSrc]?a=t[i.currentSrc]:i.videoHeight&&i.videoWidth?(t[i.currentSrc]={width:i.videoWidth,height:i.videoHeight},a=t[i.currentSrc]):(r=e.attr(i._elem,"poster"))&&(a=t[r],a||(o=n.createElement("img"),o.onload=function(){t[r]={width:this.width,height:this.height},t[r].height&&t[r].width?P(i,e.prop(i._elem,"controls")):delete t[r]},o.src=r,o.complete&&o.onload())),a||{width:300,height:"video"==i._elemNodeName?150:50}};return function(t){var n,a,r=t.elemDimensions;return("auto"==r.width||"auto"==r.height)&&(r=e.extend({},t.elemDimensions),n=i(t),a=n.width/n.height,"auto"==r.width&&"auto"==r.height?r=n:"auto"==r.width?(t.shadowElem.css({height:r.height}),r.width=t.shadowElem.height()*a):(t.shadowElem.css({width:r.width}),r.height=t.shadowElem.width()/a)),r}}(),P=function(t,i){var n,a=t._elem,r=t.shadowElem;e(a)[i?"addClass":"removeClass"]("webshims-controls"),"third"==t.isActive&&("audio"!=t._elemNodeName||i?(t.elemDimensions={width:a.style.width||e.attr(a,"width")||e(a).width(),height:a.style.height||e.attr(a,"height")||e(a).height()},n=D(t),n.minWidth=a.style.minWidth,n.minHeight=a.style.minHeight,r.css(n)):r.css({width:0,height:0}))},F=function(){var t={"":1,auto:1};return function(i){var n=e.attr(i,"preload");return null==n||"none"==n||e.prop(i,"autoplay")?!1:(n=e.prop(i,"preload"),!!(t[n]||"metadata"==n&&e(i).is(".preload-in-doubt, video:not([poster])")))}}(),O={A:/&amp;/g,a:/&/g,e:/\=/g,q:/\?/g},I=function(e){return e.replace?e.replace(O.A,"%26").replace(O.a,"%26").replace(O.e,"%3D").replace(O.q,"%3F"):e};if("matchMedia"in i){var j=!1;try{j=i.matchMedia("only all").matches}catch(L){}j&&(o.sortMedia=function(e,t){try{e=!e.media||matchMedia(e.media).matches,t=!t.media||matchMedia(t.media).matches}catch(i){return 0}return e==t?0:e?-1:1})}o.createSWF=function(i,d,p){if(!u)return setTimeout(function(){e(i).mediaLoad()},1),a;1>c?c=1:c++,p||(p=t.data(i,"mediaelement")),(e.attr(i,"height")||e.attr(i,"width"))&&t.warn("width or height content attributes used. Webshims prefers the usage of CSS (computed styles or inline styles) to detect size of a video/audio. It's really more powerfull.");var m,f="audio/rtmp"==d.type||"video/rtmp"==d.type,v=e.extend({},r.vars,{poster:I(e.attr(i,"poster")&&e.prop(i,"poster")||""),source:I(d.streamId||d.srcProp),server:I(d.server||"")}),g=e(i).data("vars")||{},b=e.prop(i,"controls"),w="jarisplayer-"+t.getID(i),N=e.extend({},r.params,e(i).data("params")),E=i.nodeName.toLowerCase(),k=e.extend({},r.attrs,{name:w,id:w},e(i).data("attrs")),S=function(){"third"==p.isActive&&P(p,e.prop(i,"controls"))};return p&&p.swfCreated?(o.setActive(i,"third",p),p.currentSrc=d.srcProp,p.shadowElem.html('<div id="'+w+'">'),p.api=!1,p.actionQueue=[],m=p.shadowElem,C(p)):(e(n.getElementById("wrapper-"+w)).remove(),m=e('<div class="polyfill-'+E+' polyfill-mediaelement" id="wrapper-'+w+'"><div id="'+w+'"></div>').css({position:"relative",overflow:"hidden"}),p=t.data(i,"mediaelement",t.objectCreate(h,{actionQueue:{value:[]},shadowElem:{value:m},_elemNodeName:{value:E},_elem:{value:i},currentSrc:{value:d.srcProp},swfCreated:{value:!0},id:{value:w.replace(/-/g,"")},buffered:{value:{start:function(e){return e>=p.buffered.length?(t.error("buffered index size error"),a):0},end:function(e){return e>=p.buffered.length?(t.error("buffered index size error"),a):(p.duration-p._bufferedStart)*p._bufferedEnd+p._bufferedStart},length:0}}})),m.insertBefore(i),l&&e.extend(p,{volume:e.prop(i,"volume"),muted:e.prop(i,"muted"),paused:e.prop(i,"paused")}),t.addShadowDom(i,m),t.data(i,"mediaelement")||t.data(i,"mediaelement",p),A(i),o.setActive(i,"third",p),P(p,b),e(i).on({"updatemediaelementdimensions loadedmetadata emptied":S,remove:function(e){!e.originalEvent&&o.jarisEvent[p.id]&&o.jarisEvent[p.id].elem==i&&(delete o.jarisEvent[p.id],clearTimeout(T),clearTimeout(p.flashBlock))}}).onWSOff("updateshadowdom",S)),o.jarisEvent[p.id]&&o.jarisEvent[p.id].elem!=i?(t.error("something went wrong"),a):(o.jarisEvent[p.id]||(o.jarisEvent[p.id]=function(e){if("ready"==e.type){var t=function(){p.api&&(F(i)&&p.api.api_preload(),x.ready(e,p))};p.api?t():setTimeout(t,9)}else p.currentTime=e.position,p.api&&(!p._calledMeta&&isNaN(e.duration)&&p.duration!=e.duration&&isNaN(p.duration)&&x.onDataInitialized(e,p),p._ppFlag||"onPlayPause"==e.type||x.onPlayPause(e,p),x[e.type]&&x[e.type](e,p)),p.duration=e.duration},o.jarisEvent[p.id].elem=i),e.extend(v,{id:w,evtId:p.id,controls:""+b,autostart:"false",nodename:E},g),f?v.streamtype="rtmp":"audio/mpeg"==d.type||"audio/mp3"==d.type?(v.type="audio",v.streamtype="file"):"video/youtube"==d.type&&(v.streamtype="youtube"),r.changeSWF(v,i,d,p,"embed"),clearTimeout(p.flashBlock),s.embedSWF(y,w,"100%","100%","9.0.115",!1,v,N,k,function(n){if(n.success){var a=function(){(!n.ref.parentNode&&m[0].parentNode||"none"==n.ref.style.display)&&(m.addClass("flashblocker-assumed"),e(i).trigger("flashblocker"),t.warn("flashblocker assumed")),e(n.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})};p.api=n.ref,b||e(n.ref).attr("tabindex","-1").css("outline","none"),p.flashBlock=setTimeout(a,99),T||(clearTimeout(T),T=setTimeout(function(){a();var i=e(n.ref);i[0].offsetWidth>1&&i[0].offsetHeight>1&&0===location.protocol.indexOf("file:")?t.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(2>i[0].offsetWidth||2>i[0].offsetHeight)&&t.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),i=null},8e3))}}),a)};var V=function(e,t,i,n){return n=n||v(e),n?(n.api&&n.api[t]?n.api[t].apply(n.api,i||[]):(n.actionQueue.push({fn:t,args:i}),n.actionQueue.length>10&&setTimeout(function(){n.actionQueue.length>5&&n.actionQueue.shift()},99)),n):!1};if(["audio","video"].forEach(function(i){var n,a={},r=function(e){("audio"!=i||"videoHeight"!=e&&"videoWidth"!=e)&&(a[e]={get:function(){var t=v(this);return t?t[e]:l&&n[e].prop._supget?n[e].prop._supget.apply(this):h[e]},writeable:!1})},o=function(e,t){r(e),delete a[e].writeable,a[e].set=t};o("seeking"),o("volume",function(e){var i=v(this);if(i)e*=1,isNaN(e)||((0>e||e>1)&&t.error("volume greater or less than allowed "+e/100),V(this,"api_volume",[e],i),i.volume!=e&&(i.volume=e,g(i._elem,"volumechange")),i=null);else if(n.volume.prop._supset)return n.volume.prop._supset.apply(this,arguments)}),o("muted",function(e){var t=v(this);if(t)e=!!e,V(this,"api_muted",[e],t),t.muted!=e&&(t.muted=e,g(t._elem,"volumechange")),t=null;else if(n.muted.prop._supset)return n.muted.prop._supset.apply(this,arguments)}),o("currentTime",function(e){var t=v(this);if(t)e*=1,isNaN(e)||V(this,"api_seek",[e],t);else if(n.currentTime.prop._supset)return n.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(e){a[e]={value:function(){var t=v(this);if(t)t.stopPlayPause&&clearTimeout(t.stopPlayPause),V(this,"play"==e?"api_play":"api_pause",[],t),t._ppFlag=!0,t.paused!=("play"!=e)&&(t.paused="play"!=e,g(t._elem,e));else if(n[e].prop._supvalue)return n[e].prop._supvalue.apply(this,arguments)}}}),m.forEach(r),t.onNodeNamesPropertyModify(i,"controls",function(t,n){var a=v(this);e(this)[n?"addClass":"removeClass"]("webshims-controls"),a&&("audio"==i&&P(a,n),V(this,"api_controls",[n],a))}),t.onNodeNamesPropertyModify(i,"preload",function(){var i,n,a;F(this)&&(i=v(this),i?V(this,"api_preload",[],i):!d||!this.paused||this.error||e.data(this,"mediaerror")||this.readyState||this.networkState||this.autoplay||!e(this).is(":not(.nonnative-api-active)")||(a=this,n=t.data(a,"mediaelementBase")||t.data(a,"mediaelementBase",{}),clearTimeout(n.loadTimer),n.loadTimer=setTimeout(function(){e(a).mediaLoad()},9)))}),n=t.defineNodeNameProperties(i,a,"prop"),Modernizr.mediaDefaultMuted||t.defineNodeNameProperties(i,{defaultMuted:{get:function(){return null!=e.attr(this,"muted")},set:function(t){t?e.attr(this,"muted",""):e(this).removeAttr("muted")}}},"prop")}),u&&e.cleanData){var W=e.cleanData,z={object:1,OBJECT:1};e.cleanData=function(e){var t,i;if(e&&(i=e.length)&&c)for(t=0;i>t;t++)if(z[e[t].nodeName]&&"api_pause"in e[t]){c--;try{e[t].api_pause()}catch(n){}}return W.apply(this,arguments)}}l?"media"in n.createElement("source")||t.reflectProperties("source",["media"]):(["poster","src"].forEach(function(e){t.defineNodeNamesProperty("src"==e?["audio","video","source"]:["video"],e,{reflect:!0,propType:"src"})}),t.defineNodeNamesProperty(["audio","video"],"preload",{reflect:!0,propType:"enumarated",defaultValue:"",limitedTo:["","auto","metadata","none"]}),t.reflectProperties("source",["type","media"]),["autoplay","controls"].forEach(function(e){t.defineNodeNamesBooleanProperty(["audio","video"],e)}),t.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))});