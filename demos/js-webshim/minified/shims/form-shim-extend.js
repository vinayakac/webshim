(!Modernizr.formvalidation||jQuery.webshims.bugs.bustedValidity)&&jQuery.webshims.register("form-shim-extend",function(e,t,i,n){"use strict";t.inputTypes=t.inputTypes||{};var a,r=t.cfg.forms,o=function(e){return"number"==typeof e||e&&e==1*e},s=t.inputTypes,u={radio:1,checkbox:1},l=function(e){return(e.getAttribute("type")||e.type||"").toLowerCase()};t.addInputType=function(e,t){s[e]=t};var p={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},c=function(t){if("select-one"==t.type&&2>t.size){var i=e("> option:first-child",t);return!!i.prop("selected")}return!1},d={valueMissing:function(e,i,n){if(!e.prop("required"))return!1;var a=!1;return"type"in n||(n.type=l(e[0])),a="select"==n.nodeName?!i&&(0>e[0].selectedIndex||c(e[0])):u[n.type]?"checkbox"==n.type?!e.is(":checked"):!t.modules["form-core"].getGroupElements(e).filter(":checked")[0]:!i},tooLong:function(){return!1},typeMismatch:function(e,t,i){if(""===t||"select"==i.nodeName)return!1;var n=!1;return"type"in i||(i.type=l(e[0])),s[i.type]&&s[i.type].mismatch?n=s[i.type].mismatch(t,e):"validity"in e[0]&&(n=e[0].validity.typeMismatch),n},patternMismatch:function(e,i,n){if(""===i||"select"==n.nodeName)return!1;var a=e.attr("pattern");if(!a)return!1;try{a=RegExp("^(?:"+a+")$")}catch(r){t.error('invalid pattern value: "'+a+'" | '+r),a=!1}return a?!a.test(i):!1}};t.addValidityRule=function(e,t){d[e]=t},e.event.special.invalid={add:function(){e.event.special.invalid.setup.call(this.form||this)},setup:function(){var i=this.form||this;return e.data(i,"invalidEventShim")?(i=null,void 0):(e(i).data("invalidEventShim",!0).on("submit",e.event.special.invalid.handler),t.moveToFirstEvent(i,"submit"),t.bugs.bustedValidity&&e.nodeName(i,"form")&&function(){var e=i.getAttribute("novalidate");i.setAttribute("novalidate","novalidate"),t.data(i,"bustedNoValidate",null==e?null:e)}(),i=null,void 0)},teardown:e.noop,handler:function(t){if("submit"==t.type&&!t.testedValidity&&t.originalEvent&&e.nodeName(t.target,"form")&&!e.prop(t.target,"noValidate")){a=!0,t.testedValidity=!0;var i=!e(t.target).checkValidity();return i?(t.stopImmediatePropagation(),a=!1,!1):(a=!1,void 0)}}};var h=function(t){e.support.submitBubbles||!t||"object"!=typeof t||t._submit_attached||(e.event.add(t,"submit._submit",function(e){e._submit_bubble=!0}),t._submit_attached=!0)};!e.support.submitBubbles&&e.event.special.submit&&(e.event.special.submit.setup=function(){return e.nodeName(this,"form")?!1:(e.event.add(this,"click._submit keypress._submit",function(t){var i=t.target,n=e.nodeName(i,"input")||e.nodeName(i,"button")?e.prop(i,"form"):void 0;h(n)}),void 0)}),e.event.special.submit=e.event.special.submit||{setup:function(){return!1}};var f=e.event.special.submit.setup;e.extend(e.event.special.submit,{setup:function(){return e.nodeName(this,"form")?e(this).on("invalid",e.noop):e("form",this).on("invalid",e.noop),f.apply(this,arguments)}}),e(i).on("invalid",e.noop),t.addInputType("email",{mismatch:function(){var e=r.emailReg||/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return function(t){return!e.test(t)}}()}),t.addInputType("url",{mismatch:function(){var e=r.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;return function(t){return!e.test(t)}}()}),t.defineNodeNameProperty("input","type",{prop:{get:function(){var e=this,i=(e.getAttribute("type")||"").toLowerCase();return t.inputTypes[i]?i:e.type}}}),t.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:e.noop},validity:{writeable:!1,get:function(){return e.extend({},p)}}},"prop");var m=function(i){var n,r=e.prop(i,"validity");if(!r)return!0;if(e.data(i,"cachedValidity",r),!r.valid){n=e.Event("invalid");var o=e(i).trigger(n);!a||m.unhandledInvalids||n.isDefaultPrevented()||(t.validityAlert.showFor(o),m.unhandledInvalids=!0)}return e.removeData(i,"cachedValidity"),r.valid},v=/^(?:select|textarea|input)/i;if(t.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var i=!0,n=e(e.prop(this,"elements")).filter(function(){if(!v.test(this.nodeName))return!1;var e=t.data(this,"shadowData");return!e||!e.nativeElement||e.nativeElement===this});m.unhandledInvalids=!1;for(var a=0,r=n.length;r>a;a++)m(n[a])||(i=!1);return i}}}),t.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){return m.unhandledInvalids=!1,m(e(this).getNativeElement()[0])}},setCustomValidity:{value:function(i){e.removeData(this,"cachedValidity"),t.data(this,"customvalidationMessage",""+i)}},willValidate:{writeable:!1,get:function(){var t={button:1,reset:1,hidden:1,image:1};return function(){var i=e(this).getNativeElement()[0];return!(i.disabled||i.readOnly||t[i.type])}}()},validity:{writeable:!1,get:function(){var i=e(this).getNativeElement(),n=i[0],a=e.data(n,"cachedValidity");if(a)return a;if(a=e.extend({},p),!e.prop(n,"willValidate")||"submit"==n.type)return a;var r=i.val(),o={nodeName:n.nodeName.toLowerCase()};return a.customError=!!t.data(n,"customvalidationMessage"),a.customError&&(a.valid=!1),e.each(d,function(e,t){t(i,r,o)&&(a[e]=!0,a.valid=!1)}),e(this).getShadowFocusElement().attr("aria-invalid",a.valid?"false":"true"),i=null,n=null,a}}},"prop"),t.defineNodeNamesBooleanProperty(["input","textarea","select"],"required",{set:function(t){e(this).getShadowFocusElement().attr("aria-required",!!t+"")},initAttr:Modernizr.localstorage}),t.reflectProperties(["input"],["pattern"]),!("maxLength"in n.createElement("textarea"))){var g=function(){var t,i=0,n=e([]),a=1e9,r=function(){var e=n.prop("value"),t=e.length;t>i&&t>a&&(t=Math.max(i,a),n.prop("value",e.substr(0,t))),i=t},o=function(){clearTimeout(t),n.unbind(".maxlengthconstraint")};return function(s,u){o(),u>-1&&(a=u,i=e.prop(s,"value").length,n=e(s),n.on({"keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint":function(){setTimeout(r,0)},"keyup.maxlengthconstraint":r,"blur.maxlengthconstraint":o}),t=setInterval(r,200))}}();g.update=function(t,i){e(t).is(":focus")&&(i||(i=e.prop(t,"maxlength")),g(t,i))},e(n).on("focusin",function(t){var i;"TEXTAREA"==t.target.nodeName&&(i=e.prop(t.target,"maxlength"))>-1&&g(t.target,i)}),t.defineNodeNameProperty("textarea","maxlength",{attr:{set:function(e){this.setAttribute("maxlength",""+e),g.update(this)},get:function(){var e=this.getAttribute("maxlength");return null==e?void 0:e}},prop:{set:function(e){if(o(e)){if(0>e)throw"INDEX_SIZE_ERR";return e=parseInt(e,10),this.setAttribute("maxlength",e),g.update(this,e),void 0}this.setAttribute("maxlength","0"),g.update(this,0)},get:function(){var e=this.getAttribute("maxlength");return o(e)&&e>=0?parseInt(e,10):-1}}}),t.defineNodeNameProperty("textarea","maxLength",{prop:{set:function(t){e.prop(this,"maxlength",t)},get:function(){return e.prop(this,"maxlength")}}})}var y={submit:1,button:1,image:1},b={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(t){var i="form"+(t.propName||t.name).replace(/^[a-z]/,function(e){return e.toUpperCase()}),a="form"+t.name,r=t.name,o="click.webshimssubmittermutate"+r,s=function(){var n=this;if("form"in n&&y[n.type]){var o=e.prop(n,"form");if(o){var s=e.attr(n,a);if(null!=s&&(!t.limitedTo||s.toLowerCase()===e.prop(n,i))){var u=e.attr(o,r);e.attr(o,r,s),setTimeout(function(){if(null!=u)e.attr(o,r,u);else try{e(o).removeAttr(r)}catch(t){o.removeAttribute(r)}},9)}}}};switch(t.proptype){case"url":var u=n.createElement("form");b[i]={prop:{set:function(t){e.attr(this,a,t)},get:function(){var t=e.attr(this,a);return null==t?"":(u.setAttribute("action",t),u.action)}}};break;case"boolean":b[i]={prop:{set:function(t){t=!!t,t?e.attr(this,"formnovalidate","formnovalidate"):e(this).removeAttr("formnovalidate")},get:function(){return null!=e.attr(this,"formnovalidate")}}};break;case"enum":b[i]={prop:{set:function(t){e.attr(this,a,t)},get:function(){var i=e.attr(this,a);return!i||(i=i.toLowerCase())&&!t.limitedTo[i]?t.defaultProp:i}}};break;default:b[i]={prop:{set:function(t){e.attr(this,a,t)},get:function(){var t=e.attr(this,a);return null!=t?t:""}}}}b[a]||(b[a]={}),b[a].attr={set:function(t){b[a].attr._supset.call(this,t),e(this).unbind(o).on(o,s)},get:function(){return b[a].attr._supget.call(this)}},b[a].initAttr=!0,b[a].removeAttr={value:function(){e(this).unbind(o),b[a].removeAttr._supvalue.call(this)}}}),t.defineNodeNamesProperties(["input","button"],b),e.support.getSetAttribute||null!=e("<form novalidate></form>").attr("novalidate")?t.bugs.bustedValidity&&(t.defineNodeNameProperty("form","novalidate",{attr:{set:function(e){t.data(this,"bustedNoValidate",""+e)},get:function(){var e=t.data(this,"bustedNoValidate");return null==e?void 0:e}},removeAttr:{value:function(){t.data(this,"bustedNoValidate",null)}}}),e.each(["rangeUnderflow","rangeOverflow","stepMismatch"],function(e,t){d[t]=function(e){return(e[0].validity||{})[t]||!1}})):t.defineNodeNameProperty("form","novalidate",{attr:{set:function(e){this.setAttribute("novalidate",""+e)},get:function(){var e=this.getAttribute("novalidate");return null==e?void 0:e}}}),t.defineNodeNameProperty("form","noValidate",{prop:{set:function(t){t=!!t,t?e.attr(this,"novalidate","novalidate"):e(this).removeAttr("novalidate")},get:function(){return null!=e.attr(this,"novalidate")}}}),Modernizr.inputtypes.date&&/webkit/i.test(navigator.userAgent)&&function(){var i={updateInput:1,input:1},r={date:1,time:1,"datetime-local":1},o={focusout:1,blur:1},s={updateInput:1,change:1},u=function(e){var t,n,a=!0,r=e.prop("value"),u=r,l=function(t){if(e){var n=e.prop("value");n!==r&&(r=n,t&&i[t.type]||e.trigger("input")),t&&s[t.type]&&(u=n),a||n===u||e.trigger("change")}},p=function(){clearTimeout(n),n=setTimeout(l,9)},c=function(i){clearInterval(t),setTimeout(function(){i&&o[i.type]&&(a=!1),e&&(e.unbind("focusout blur",c).unbind("input change updateInput",l),l()),e=null},1)};clearInterval(t),t=setInterval(l,160),p(),e.off({"focusout blur":c,"input change updateInput":l}).on({"focusout blur":c,"input updateInput change":l})};e.event.customEvent&&(e.event.customEvent.updateInput=!0),function(){var i,r,o,s,u=function(t){var i,n,r=1,o=3;if("date"==t.type&&(a||!e(t).is(":focus"))&&(n=t.value,n&&10>n.length&&(n=n.split("-"))&&n.length==o)){for(;o>r;r++)if(1==n[r].length)n[r]="0"+n[r];else if(2!=n[r].length){i=!0;break}if(!i)return n=n.join("-"),e.prop(t,"value",n),n}};i=t.defineNodeNameProperty("input","checkValidity",{prop:{value:function(){return u(this),i.prop._supvalue.apply(this,arguments)}}}),r=t.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){return e("input",this).each(function(){u(this)}),r.prop._supvalue.apply(this,arguments)}}}),o=t.defineNodeNameProperty("input","value",{prop:{set:function(){return o.prop._supset.apply(this,arguments)},get:function(){return u(this)||o.prop._supget.apply(this,arguments)}}}),s=t.defineNodeNameProperty("input","validity",{prop:{writeable:!1,get:function(){return u(this),s.prop._supget.apply(this,arguments)}}}),e(n).on("change",function(e){u(e.target)})}(),e(n).on("focusin",function(t){t.target&&r[t.target.type]&&!t.target.readOnly&&!t.target.disabled&&u(e(t.target))})}(),t.addReady(function(t,i){var a;e("form",t).add(i.filter("form")).bind("invalid",e.noop);try{t!=n||"form"in(n.activeElement||{})||(a=e("input[autofocus], select[autofocus], textarea[autofocus]",t).eq(0).getShadowFocusElement()[0],a&&a.offsetHeight&&a.offsetWidth&&a.focus())}catch(r){}}),Modernizr.formattribute&&Modernizr.fieldsetdisabled||function(){(function(t,i){e.prop=function(a,r,o){var s;return a&&1==a.nodeType&&o===i&&e.nodeName(a,"form")&&a.id&&(s=n.getElementsByName(r),s&&s.length||(s=n.getElementById(r)),s&&(s=e(s).filter(function(){return e.prop(this,"form")==a}).get(),s.length))?1==s.length?s[0]:s:t.apply(this,arguments)}})(e.prop,void 0);var i=function(t){var i=e.data(t,"webshimsAddedElements");i&&(i.remove(),e.removeData(t,"webshimsAddedElements"))};if(Modernizr.formattribute||(t.defineNodeNamesProperty(["input","textarea","select","button","fieldset"],"form",{prop:{get:function(){var i=t.contentAttr(this,"form");return i&&(i=n.getElementById(i),i&&!e.nodeName(i,"form")&&(i=null)),i||this.form},writeable:!1}}),t.defineNodeNamesProperty(["form"],"elements",{prop:{get:function(){var t=this.id,i=e.makeArray(this.elements);return t&&(i=e(i).add('input[form="'+t+'"], select[form="'+t+'"], textarea[form="'+t+'"], button[form="'+t+'"], fieldset[form="'+t+'"]').not(".webshims-visual-hide > *").get()),i},writeable:!1}}),e(function(){var t=function(e){e.stopPropagation()};e(n).on("submit",function(t){if(!t.isDefaultPrevented()){var n,a=t.target,r=a.id;r&&(i(a),n=e('input[form="'+r+'"], select[form="'+r+'"], textarea[form="'+r+'"]').filter(function(){return!this.disabled&&this.name&&this.form!=a}).clone(),n.length&&(e.data(a,"webshimsAddedElements",e('<div class="webshims-visual-hide" />').append(n).appendTo(a)),setTimeout(function(){i(a)},9)),n=null)}}),e(n).on("click",function(i){if(!i.isDefaultPrevented()&&e(i.target).is('input[type="submit"][form], button[form], input[type="button"][form], input[type="image"][form], input[type="reset"][form]')){var n,a=e.prop(i.target,"form"),r=i.target.form;a&&a!=r&&(n=e(i.target).clone().removeAttr("form").addClass("webshims-visual-hide").on("click",t).appendTo(a),r&&i.preventDefault(),h(a),n.trigger("click"),setTimeout(function(){n.remove(),n=null},9))}})})),Modernizr.fieldsetdisabled||t.defineNodeNamesProperty(["fieldset"],"elements",{prop:{get:function(){return e("input, select, textarea, button, fieldset",this).get()||[]},writeable:!1}}),!e.fn.finish&&1.9>parseFloat(e.fn.jquery,10)){var a=/\r?\n/g,r=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,o=/^(?:select|textarea)/i;e.fn.serializeArray=function(){return this.map(function(){var t=e.prop(this,"elements");return t?e.makeArray(t):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||o.test(this.nodeName)||r.test(this.type))}).map(function(t,i){var n=e(this).val();return null==n?null:e.isArray(n)?e.map(n,function(e){return{name:i.name,value:e.replace(a,"\r\n")}}):{name:i.name,value:n.replace(a,"\r\n")}}).get()}}}(),null==e("<input />").prop("labels")&&t.defineNodeNamesProperty("button, input, keygen, meter, output, progress, select, textarea","labels",{prop:{get:function(){if("hidden"==this.type)return null;var t=this.id,i=e(this).closest("label").filter(function(){var e=this.attributes["for"]||{};return!e.specified||e.value==t});return t&&(i=i.add('label[for="'+t+'"]')),i.get()},writeable:!1}}),"value"in n.createElement("progress")||function(){var i=parseInt("NaN",10),n=function(t){var i;i=e.prop(t,"position"),e.attr(t,"data-position",i),e("> span",t).css({width:(0>i?100:100*i)+"%"})},a={position:{prop:{get:function(){var t,a=this.getAttribute("value"),r=-1;return a=a?1*a:i,isNaN(a)?n.isInChange&&e(this).removeAttr("aria-valuenow"):(t=e.prop(this,"max"),r=Math.max(Math.min(a/t,1),0),n.isInChange&&(e.attr(this,"aria-valuenow",100*r),"max"==n.isInChange&&e.attr(this,"aria-valuemax",t))),r},writeable:!1}}};e.each({value:0,max:1},function(t,i){var r="value"==t&&!e.fn.finish;a[t]={attr:{set:function(e){var i=a[t].attr._supset.call(this,e);return n.isInChange=t,n(this),n.isInChange=!1,i}},removeAttr:{value:function(){this.removeAttribute(t),r&&delete this.value,n.isInChange=t,n(this),n.isInChange=!1}},prop:{get:function(){var n=1*a[t].attr.get.call(this);return 0>n||isNaN(n)?n=i:"value"==t?n=Math.min(n,e.prop(this,"max")):0===n&&(n=i),n},set:function(e){return a[t].attr.set.call(this,1*e)}}}}),t.createElement("progress",function(){var i=e(this).attr({role:"progressbar","aria-valuemin":"0"}).html('<span class="progress-value" />').jProp("labels").map(function(){return t.getID(this)}).get();i.length?e.attr(this,"aria-labelledby",i.join(" ")):t.info("you should use label elements for your prgogress elements"),n.isInChange="max",n(this),n.isInChange=!1},a)}();try{n.querySelector(":checked")}catch(w){(function(){e("html").addClass("no-csschecked");var i={radio:1,checkbox:1},a=function(){var t,i,n,a=this.options||[];for(t=0,i=a.length;i>t;t++)n=e(a[t]),n[e.prop(a[t],"selected")?"addClass":"removeClass"]("prop-checked")},r=function(){var t,i=e.prop(this,"checked")?"addClass":"removeClass",n=this.className||"";-1==n.indexOf("prop-checked")==("addClass"==i)&&(e(this)[i]("prop-checked"),(t=this.parentNode)&&(t.className=t.className))};t.onNodeNamesPropertyModify("select","value",a),t.onNodeNamesPropertyModify("select","selectedIndex",a),t.onNodeNamesPropertyModify("option","selected",function(){e(this).closest("select").each(a)}),t.onNodeNamesPropertyModify("input","checked",function(n,a){var o=this.type;"radio"==o&&a?t.modules["form-core"].getGroupElements(this).each(r):i[o]&&e(this).each(r)}),e(n).on("change",function(n){i[n.target.type]?"radio"==n.target.type?t.modules["form-core"].getGroupElements(n.target).each(r):e(n.target)[e.prop(n.target,"checked")?"addClass":"removeClass"]("prop-checked"):"select"==n.target.nodeName.toLowerCase()&&e(n.target).each(a)}),t.addReady(function(t,n){e("option, input",t).add(n.filter("option, input")).each(function(){var t;i[this.type]?t="checked":"option"==this.nodeName.toLowerCase()&&(t="selected"),t&&e(this)[e.prop(this,t)?"addClass":"removeClass"]("prop-checked")})})})()}(function(){if(Modernizr.textareaPlaceholder=!!("placeholder"in e("<textarea />")[0]),!Modernizr.input.placeholder||!Modernizr.textareaPlaceholder){var a="over"==t.cfg.forms.placeholderType,r=t.cfg.forms.responsivePlaceholder,o=["textarea"];Modernizr.input.placeholder||o.push("input");var s=function(e){try{if(e.setSelectionRange)return e.setSelectionRange(0,0),!0;if(e.createTextRange){var t=e.createTextRange();return t.collapse(!0),t.moveEnd("character",0),t.moveStart("character",0),t.select(),!0}}catch(i){}},u=function(t,i,n,r){if(n===!1&&(n=e.prop(t,"value")),a||"password"==t.type){if(!n&&r)return e(t).off(".placeholderremove").on({"keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove":function(n){(!n||17!=n.keyCode&&16!=n.keyCode)&&(i.box.removeClass("placeholder-visible"),e(t).unbind(".placeholderremove"))},"blur.placeholderremove":function(){e(t).unbind(".placeholderremove")}}),void 0}else{if(!n&&r&&s(t)){var o=setTimeout(function(){s(t)},9);return e(t).off(".placeholderremove").on({"keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove":function(n){(!n||17!=n.keyCode&&16!=n.keyCode)&&(t.value=e.prop(t,"value"),i.box.removeClass("placeholder-visible"),clearTimeout(o),e(t).unbind(".placeholderremove"))},"mousedown.placeholderremove drag.placeholderremove select.placeholderremove":function(){s(t),clearTimeout(o),o=setTimeout(function(){s(t)},9)},"blur.placeholderremove":function(){clearTimeout(o),e(t).unbind(".placeholderremove")}}),void 0}r||n||!t.value||(t.value=n)}i.box.removeClass("placeholder-visible")},l=function(t,i,n){n===!1&&(n=e.prop(t,"placeholder")),a||"password"==t.type||(t.value=n),i.box.addClass("placeholder-visible")},p=function(t,i,n,r,o){if(r||(r=e.data(t,"placeHolder"))){if(e(t).unbind(".placeholderremove"),i===!1&&(i=e.prop(t,"value")),!i&&("focus"==o||!o&&e(t).is(":focus")))return("password"==t.type||a||e(t).hasClass("placeholder-visible"))&&u(t,r,"",!0),void 0;if(i)return u(t,r,i),void 0;n===!1&&(n=e.attr(t,"placeholder")||""),n&&!i?l(t,r,n):u(t,r,i)}},c=function(t){return t=e(t),!!(t.prop("title")||t.attr("aria-labelledby")||t.attr("aria-label")||t.jProp("labels").length)},d=function(t){return t=e(t),e(c(t)?'<span class="placeholder-text"></span>':'<label for="'+t.prop("id")+'" class="placeholder-text"></label>')},h=function(){var o={text:1,search:1,url:1,email:1,password:1,tel:1,number:1};return t.modules["form-number-date-ui"].loaded&&delete o.number,{create:function(t){var o,s,l=e.data(t,"placeHolder");if(l)return l;if(l=e.data(t,"placeHolder",{}),e(t).on("focus.placeholder blur.placeholder",function(e){p(this,!1,!1,l,e.type),l.box["focus"==e.type?"addClass":"removeClass"]("placeholder-focused")}),(o=e.prop(t,"form"))&&e(o).on("reset.placeholder",function(e){setTimeout(function(){p(t,!1,!1,l,e.type)},0)}),"password"==t.type||a)l.text=d(t),r||e(t).is(".responsive-width")||-1!=(t.currentStyle||{width:""}).width.indexOf("%")?(s=!0,l.box=l.text):l.box=e(t).wrap('<span class="placeholder-box placeholder-box-'+(t.nodeName||"").toLowerCase()+" placeholder-box-"+e.css(t,"float")+'" />').parent(),l.text.insertAfter(t).on("mousedown.placeholder",function(){p(this,!1,!1,l,"focus");try{setTimeout(function(){t.focus()},0)}catch(e){}return!1}),e.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(i,n){var a=e.css(t,n);l.text.css(n)!=a&&l.text.css(n,a)}),e.each(["Left","Top"],function(i,n){var a=(parseInt(e.css(t,"padding"+n),10)||0)+Math.max(parseInt(e.css(t,"margin"+n),10)||0,0)+(parseInt(e.css(t,"border"+n+"Width"),10)||0);l.text.css("padding"+n,a)}),e(n).onTrigger("updateshadowdom",function(){var i,n;((n=t.offsetWidth)||(i=t.offsetHeight))&&l.text.css({width:n,height:i}).css(e(t).position())});else{var c=function(i){e(t).hasClass("placeholder-visible")&&(u(t,l,""),i&&"submit"==i.type&&setTimeout(function(){i.isDefaultPrevented()&&p(t,!1,!1,l)},9))};e(i).on("beforeunload",c),l.box=e(t),o&&e(o).submit(c)}return l},update:function(i,n){var a=(e.attr(i,"type")||e.prop(i,"type")||"").toLowerCase();if(!o[a]&&!e.nodeName(i,"textarea"))return t.warn('placeholder not allowed on input[type="'+a+'"], but it is a good fallback :-)'),void 0;var r=h.create(i);r.text&&r.text.text(n),p(i,!1,n,r)}}}();e.webshims.publicMethods={pHolder:h},o.forEach(function(e){t.defineNodeNameProperty(e,"placeholder",{attr:{set:function(e){var i=this;t.contentAttr(i,"placeholder",e),h.update(i,e)},get:function(){return t.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})}),o.forEach(function(i){var n,a={};["attr","prop"].forEach(function(i){a[i]={set:function(a){var r,o=this;r||(r=t.contentAttr(o,"placeholder")),e.removeData(o,"cachedValidity");var s=n[i]._supset.call(o,a);return r&&"value"in o&&p(o,a,r),s},get:function(){var t=this;return e(t).hasClass("placeholder-visible")?"":n[i]._supget.call(t)}}}),n=t.defineNodeNameProperty(i,"value",a)})}})(),function(){var i=n;if(!("value"in n.createElement("output"))){t.defineNodeNameProperty("output","value",{prop:{set:function(t){var i=e.data(this,"outputShim");i||(i=a(this)),i(t)},get:function(){return t.contentAttr(this,"value")||e(this).text()||""}}}),t.onNodeNamesPropertyModify("input","value",function(t,i,n){if("removeAttr"!=n){var a=e.data(this,"outputShim");a&&a(t)}});var a=function(a){if(!a.getAttribute("aria-live")){a=e(a);var r=(a.text()||"").trim(),o=a.prop("id"),s=a.attr("for"),u=e('<input class="output-shim" type="text" disabled name="'+(a.attr("name")||"")+'" value="'+r+'" style="display: none !important;" />').insertAfter(a);u[0].form||i;var l=function(e){u[0].value=e,e=u[0].value,a.text(e),t.contentAttr(a[0],"value",e)};return a[0].defaultValue=r,t.contentAttr(a[0],"value",r),a.attr({"aria-live":"polite"}),o&&(u.attr("id",o),a.attr("aria-labelledby",a.jProp("labels").map(function(){return t.getID(this)}).get().join(" "))),s&&(o=t.getID(a),s.split(" ").forEach(function(e){e=n.getElementById(e),e&&e.setAttribute("aria-controls",o)})),a.data("outputShim",l),u.data("outputShim",l),l}};t.addReady(function(t,i){e("output",t).add(i.filter("output")).each(function(){a(this)})}),function(){var n={updateInput:1,input:1},a={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},r=function(e){var i,a,r=e.prop("value"),o=function(i){if(e){var a=e.prop("value");a!==r&&(r=a,i&&n[i.type]||t.triggerInlineForm&&t.triggerInlineForm(e[0],"input"))}},s=function(){clearTimeout(a),a=setTimeout(o,9)},u=function(){e.unbind("focusout",u).unbind("keyup keypress keydown paste cut",s).unbind("input change updateInput",o),clearInterval(i),setTimeout(function(){o(),e=null},1)};clearInterval(i),i=setInterval(o,99),s(),e.on({"keyup keypress keydown paste cut":s,focusout:u,"input updateInput change":o})};e.event.customEvent&&(e.event.customEvent.updateInput=!0),e(i).on("focusin",function(t){!t.target||!t.target.type||t.target.readOnly||t.target.disabled||"input"!=(t.target.nodeName||"").toLowerCase()||a[t.target.type]||r(e(t.target))})}()}}()});