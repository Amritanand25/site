/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function(e,t,n){function i(e){return e}function s(e){return decodeURIComponent(e.replace(r," "))}var r=/\+/g,o=e.cookie=function(r,u,a){if(u!==n){a=e.extend({},o.defaults,a),u===null&&(a.expires=-1);if(typeof a.expires=="number"){var f=a.expires,l=a.expires=new Date;l.setDate(l.getDate()+f)}return u=o.json?JSON.stringify(u):String(u),t.cookie=[encodeURIComponent(r),"=",o.raw?u:encodeURIComponent(u),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}var c=o.raw?i:s,h=t.cookie.split("; ");for(var p=0,d=h.length;p<d;p++){var v=h[p].split("=");if(c(v.shift())===r){var m=c(v.join("="));return o.json?JSON.parse(m):m}}return null};o.defaults={},e.removeCookie=function(t,n){return e.cookie(t)!==null?(e.cookie(t,null,n),!0):!1}})(jQuery,document),function(e,t,n,r){var i=n(e),s=n(t),o=n.fancybox=function(){o.open.apply(this,arguments)},u=navigator.userAgent.match(/msie/),a=null,f=t.createTouch!==r,l=function(e){return e&&e.hasOwnProperty&&e instanceof n},c=function(e){return e&&"string"===n.type(e)},h=function(e){return c(e)&&0<e.indexOf("%")},p=function(e,t){var n=parseInt(e,10)||0;return t&&h(e)&&(n*=o.getViewport()[t]/100),Math.ceil(n)},d=function(e,t){return p(e,t)+"px"};n.extend(o,{version:"2.1.4",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!f,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(u?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeChange:n.noop,beforeClose:n.noop,afterClose:n.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){if(e&&(n.isPlainObject(t)||(t={}),!1!==o.close(!0)))return n.isArray(e)||(e=l(e)?n(e).get():[e]),n.each(e,function(i,s){var u={},a,f,h,p,d;"object"===n.type(s)&&(s.nodeType&&(s=n(s)),l(s)?(u={href:s.data("fancybox-href")||s.attr("href"),title:s.data("fancybox-title")||s.attr("title"),isDom:!0,element:s},n.metadata&&n.extend(!0,u,s.metadata())):u=s),a=t.href||u.href||(c(s)?s:null),f=t.title!==r?t.title:u.title||"",p=(h=t.content||u.content)?"html":t.type||u.type,!p&&u.isDom&&(p=s.data("fancybox-type"),p||(p=(p=s.prop("class").match(/fancybox\.(\w+)/))?p[1]:null)),c(a)&&(p||(o.isImage(a)?p="image":o.isSWF(a)?p="swf":"#"===a.charAt(0)?p="inline":c(s)&&(p="html",h=s)),"ajax"===p&&(d=a.split(/\s+/,2),a=d.shift(),d=d.shift())),h||("inline"===p?a?h=n(c(a)?a.replace(/.*(?=#[^\s]+$)/,""):a):u.isDom&&(h=s):"html"===p?h=a:!p&&!a&&u.isDom&&(p="inline",h=s)),n.extend(u,{href:a,type:p,content:h,title:f,selector:d}),e[i]=u}),o.opts=n.extend(!0,{},o.defaults,t),t.keys!==r&&(o.opts.keys=t.keys?n.extend({},o.defaults.keys,t.keys):!1),o.group=e,o._start(o.opts.index)},cancel:function(){var e=o.coming;e&&!1!==o.trigger("onCancel")&&(o.hideLoading(),o.ajaxLoad&&o.ajaxLoad.abort(),o.ajaxLoad=null,o.imgPreload&&(o.imgPreload.onload=o.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0,!0).trigger("onReset").remove(),o.coming=null,o.current||o._afterZoomOut(e))},close:function(e){o.cancel(),!1!==o.trigger("beforeClose")&&(o.unbindEvents(),o.isActive&&(!o.isOpen||!0===e?(n(".fancybox-wrap").stop(!0).trigger("onReset").remove(),o._afterZoomOut()):(o.isOpen=o.isOpened=!1,o.isClosing=!0,n(".fancybox-item, .fancybox-nav").remove(),o.wrap.stop(!0,!0).removeClass("fancybox-opened"),o.transitions[o.current.closeMethod]())))},play:function(e){var t=function(){clearTimeout(o.player.timer)},r=function(){t(),o.current&&o.player.isActive&&(o.player.timer=setTimeout(o.next,o.current.playSpeed))},i=function(){t(),n("body").unbind(".player"),o.player.isActive=!1,o.trigger("onPlayEnd")};!0===e||!o.player.isActive&&!1!==e?o.current&&(o.current.loop||o.current.index<o.group.length-1)&&(o.player.isActive=!0,n("body").bind({"afterShow.player onUpdate.player":r,"onCancel.player beforeClose.player":i,"beforeLoad.player":t}),r(),o.trigger("onPlayStart")):i()},next:function(e){var t=o.current;t&&(c(e)||(e=t.direction.next),o.jumpto(t.index+1,e,"next"))},prev:function(e){var t=o.current;t&&(c(e)||(e=t.direction.prev),o.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,n){var i=o.current;i&&(e=p(e),o.direction=t||i.direction[e>=i.index?"next":"prev"],o.router=n||"jumpto",i.loop&&(0>e&&(e=i.group.length+e%i.group.length),e%=i.group.length),i.group[e]!==r&&(o.cancel(),o._start(e)))},reposition:function(e,t){var r=o.current,i=r?r.wrap:null,s;i&&(s=o._getPosition(t),e&&"scroll"===e.type?(delete s.position,i.stop(!0,!0).animate(s,200)):(i.css(s),r.pos=n.extend({},r.dim,s)))},update:function(e){var t=e&&e.type,n=!t||"orientationchange"===t;n&&(clearTimeout(a),a=null),o.isOpen&&!a&&(a=setTimeout(function(){var r=o.current;r&&!o.isClosing&&(o.wrap.removeClass("fancybox-tmp"),(n||"load"===t||"resize"===t&&r.autoResize)&&o._setDimension(),"scroll"===t&&r.canShrink||o.reposition(e),o.trigger("onUpdate"),a=null)},n&&!f?0:300))},toggle:function(e){o.isOpen&&(o.current.fitToView="boolean"===n.type(e)?e:!o.current.fitToView,f&&(o.wrap.removeAttr("style").addClass("fancybox-tmp"),o.trigger("onUpdate")),o.update())},hideLoading:function(){s.unbind(".loading"),n("#fancybox-loading").remove()},showLoading:function(){var e,t;o.hideLoading(),e=n('<div id="fancybox-loading"><div></div></div>').click(o.cancel).appendTo("body"),s.bind("keydown.loading",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),o.cancel())}),o.defaults.fixed||(t=o.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))},getViewport:function(){var t=o.current&&o.current.locked||!1,n={x:i.scrollLeft(),y:i.scrollTop()};return t?(n.w=t[0].clientWidth,n.h=t[0].clientHeight):(n.w=f&&e.innerWidth?e.innerWidth:i.width(),n.h=f&&e.innerHeight?e.innerHeight:i.height()),n},unbindEvents:function(){o.wrap&&l(o.wrap)&&o.wrap.unbind(".fb"),s.unbind(".fb"),i.unbind(".fb")},bindEvents:function(){var e=o.current,t;e&&(i.bind("orientationchange.fb"+(f?"":" resize.fb")+(e.autoCenter&&!e.locked?" scroll.fb":""),o.update),(t=e.keys)&&s.bind("keydown.fb",function(i){var s=i.which||i.keyCode,u=i.target||i.srcElement;if(27===s&&o.coming)return!1;!i.ctrlKey&&!i.altKey&&!i.shiftKey&&!i.metaKey&&(!u||!u.type&&!n(u).is("[contenteditable]"))&&n.each(t,function(t,u){if(1<e.group.length&&u[s]!==r)return o[t](u[s]),i.preventDefault(),!1;if(-1<n.inArray(s,u))return o[t](),i.preventDefault(),!1})}),n.fn.mousewheel&&e.mouseWheel&&o.wrap.bind("mousewheel.fb",function(t,r,i,s){for(var u=n(t.target||null),a=!1;u.length&&!a&&!u.is(".fancybox-skin")&&!u.is(".fancybox-wrap");)a=u[0]&&(!u[0].style.overflow||"hidden"!==u[0].style.overflow)&&(u[0].clientWidth&&u[0].scrollWidth>u[0].clientWidth||u[0].clientHeight&&u[0].scrollHeight>u[0].clientHeight),u=n(u).parent();0!==r&&!a&&1<o.group.length&&!e.canShrink&&(0<s||0<i?o.prev(0<s?"down":"left"):(0>s||0>i)&&o.next(0>s?"up":"right"),t.preventDefault())}))},trigger:function(e,t){var r,i=t||o.coming||o.current;if(i){n.isFunction(i[e])&&(r=i[e].apply(i,Array.prototype.slice.call(arguments,1)));if(!1===r)return!1;i.helpers&&n.each(i.helpers,function(t,r){r&&o.helpers[t]&&n.isFunction(o.helpers[t][e])&&(r=n.extend(!0,{},o.helpers[t].defaults,r),o.helpers[t][e](r,i))}),n.event.trigger(e+".fb")}},isImage:function(e){return c(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)},isSWF:function(e){return c(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t={},r,i;e=p(e),r=o.group[e]||null;if(!r)return!1;t=n.extend(!0,{},o.opts,r),r=t.margin,i=t.padding,"number"===n.type(r)&&(t.margin=[r,r,r,r]),"number"===n.type(i)&&(t.padding=[i,i,i,i]),t.modal&&n.extend(!0,t,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),t.autoSize&&(t.autoWidth=t.autoHeight=!0),"auto"===t.width&&(t.autoWidth=!0),"auto"===t.height&&(t.autoHeight=!0),t.group=o.group,t.index=e,o.coming=t;if(!1===o.trigger("beforeLoad"))o.coming=null;else{i=t.type,r=t.href;if(!i)return o.coming=null,o.current&&o.router&&"jumpto"!==o.router?(o.current.index=e,o[o.router](o.direction)):!1;o.isActive=!0;if("image"===i||"swf"===i)t.autoHeight=t.autoWidth=!1,t.scrolling="visible";"image"===i&&(t.aspectRatio=!0),"iframe"===i&&f&&(t.scrolling="scroll"),t.wrap=n(t.tpl.wrap).addClass("fancybox-"+(f?"mobile":"desktop")+" fancybox-type-"+i+" fancybox-tmp "+t.wrapCSS).appendTo(t.parent||"body"),n.extend(t,{skin:n(".fancybox-skin",t.wrap),outer:n(".fancybox-outer",t.wrap),inner:n(".fancybox-inner",t.wrap)}),n.each(["Top","Right","Bottom","Left"],function(e,n){t.skin.css("padding"+n,d(t.padding[e]))}),o.trigger("onReady");if("inline"===i||"html"===i){if(!t.content||!t.content.length)return o._error("content")}else if(!r)return o._error("href");"image"===i?o._loadImage():"ajax"===i?o._loadAjax():"iframe"===i?o._loadIframe():o._afterLoad()}},_error:function(e){n.extend(o.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:o.coming.tpl.error}),o._afterLoad()},_loadImage:function(){var e=o.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,o.coming.width=this.width,o.coming.height=this.height,o._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,o._error("image")},e.src=o.coming.href,!0!==e.complete&&o.showLoading()},_loadAjax:function(){var e=o.coming;o.showLoading(),o.ajaxLoad=n.ajax(n.extend({},e.ajax,{url:e.href,error:function(e,t){o.coming&&"abort"!==t?o._error("ajax",e):o.hideLoading()},success:function(t,n){"success"===n&&(e.content=t,o._afterLoad())}}))},_loadIframe:function(){var e=o.coming,t=n(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",f?"auto":e.iframe.scrolling).attr("src",e.href);n(e.wrap).bind("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(o.showLoading(),t.one("load",function(){n(this).data("ready",1),f||n(this).bind("load.fb",o.update),n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),o._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||o._afterLoad()},_preloadImages:function(){var e=o.group,t=o.current,n=e.length,r=t.preload?Math.min(t.preload,n-1):0,i,s;for(s=1;s<=r;s+=1)i=e[(t.index+s)%n],"image"===i.type&&i.href&&((new Image).src=i.href)},_afterLoad:function(){var e=o.coming,t=o.current,r,i,s,u,a;o.hideLoading();if(e&&!1!==o.isActive)if(!1===o.trigger("afterLoad",e,t))e.wrap.stop(!0).trigger("onReset").remove(),o.coming=null;else{t&&(o.trigger("beforeChange",t),t.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),o.unbindEvents(),r=e.content,i=e.type,s=e.scrolling,n.extend(o,{wrap:e.wrap,skin:e.skin,outer:e.outer,inner:e.inner,current:e,previous:t}),u=e.href;switch(i){case"inline":case"ajax":case"html":e.selector?r=n("<div>").html(r).find(e.selector):l(r)&&(r.data("fancybox-placeholder")||r.data("fancybox-placeholder",n('<div class="fancybox-placeholder"></div>').insertAfter(r).hide()),r=r.show().detach(),e.wrap.bind("onReset",function(){n(this).find(r).length&&r.hide().replaceAll(r.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":r=e.tpl.image.replace("{href}",u);break;case"swf":r='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+u+'"></param>',a="",n.each(e.swf,function(e,t){r+='<param name="'+e+'" value="'+t+'"></param>',a+=" "+e+'="'+t+'"'}),r+='<embed src="'+u+'" type="application/x-shockwave-flash" width="100%" height="100%"'+a+"></embed></object>"}(!l(r)||!r.parent().is(e.inner))&&e.inner.append(r),o.trigger("beforeShow"),e.inner.css("overflow","yes"===s?"scroll":"no"===s?"hidden":s),o._setDimension(),o.reposition(),o.isOpen=!1,o.coming=null,o.bindEvents(),o.isOpened?t.prevMethod&&o.transitions[t.prevMethod]():n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(),o.transitions[o.isOpened?e.nextMethod:e.openMethod](),o._preloadImages()}},_setDimension:function(){var e=o.getViewport(),t=0,r=!1,i=!1,r=o.wrap,s=o.skin,u=o.inner,a=o.current,i=a.width,f=a.height,l=a.minWidth,c=a.minHeight,v=a.maxWidth,m=a.maxHeight,g=a.scrolling,y=a.scrollOutside?a.scrollbarWidth:0,w=a.margin,E=p(w[1]+w[3]),S=p(w[0]+w[2]),T,N,C,k,L,A,O,M,_;r.add(s).add(u).width("auto").height("auto").removeClass("fancybox-tmp"),w=p(s.outerWidth(!0)-s.width()),T=p(s.outerHeight(!0)-s.height()),N=E+w,C=S+T,k=h(i)?(e.w-N)*p(i)/100:i,L=h(f)?(e.h-C)*p(f)/100:f;if("iframe"===a.type){if(_=a.content,a.autoHeight&&1===_.data("ready"))try{_[0].contentWindow.document.location&&(u.width(k).height(9999),A=_.contents().find("body"),y&&A.css("overflow-x","hidden"),L=A.height())}catch(D){}}else if(a.autoWidth||a.autoHeight)u.addClass("fancybox-tmp"),a.autoWidth||u.width(k),a.autoHeight||u.height(L),a.autoWidth&&(k=u.width()),a.autoHeight&&(L=u.height()),u.removeClass("fancybox-tmp");i=p(k),f=p(L),M=k/L,l=p(h(l)?p(l,"w")-N:l),v=p(h(v)?p(v,"w")-N:v),c=p(h(c)?p(c,"h")-C:c),m=p(h(m)?p(m,"h")-C:m),A=v,O=m,a.fitToView&&(v=Math.min(e.w-N,v),m=Math.min(e.h-C,m)),N=e.w-E,S=e.h-S,a.aspectRatio?(i>v&&(i=v,f=p(i/M)),f>m&&(f=m,i=p(f*M)),i<l&&(i=l,f=p(i/M)),f<c&&(f=c,i=p(f*M))):(i=Math.max(l,Math.min(i,v)),a.autoHeight&&"iframe"!==a.type&&(u.width(i),f=u.height()),f=Math.max(c,Math.min(f,m)));if(a.fitToView)if(u.width(i).height(f),r.width(i+w),e=r.width(),E=r.height(),a.aspectRatio)for(;(e>N||E>S)&&i>l&&f>c&&!(19<t++);)f=Math.max(c,Math.min(m,f-10)),i=p(f*M),i<l&&(i=l,f=p(i/M)),i>v&&(i=v,f=p(i/M)),u.width(i).height(f),r.width(i+w),e=r.width(),E=r.height();else i=Math.max(l,Math.min(i,i-(e-N))),f=Math.max(c,Math.min(f,f-(E-S)));y&&"auto"===g&&f<L&&i+w+y<N&&(i+=y),u.width(i).height(f),r.width(i+w),e=r.width(),E=r.height(),r=(e>N||E>S)&&i>l&&f>c,i=a.aspectRatio?i<A&&f<O&&i<k&&f<L:(i<A||f<O)&&(i<k||f<L),n.extend(a,{dim:{width:d(e),height:d(E)},origWidth:k,origHeight:L,canShrink:r,canExpand:i,wPadding:w,hPadding:T,wrapSpace:E-s.outerHeight(!0),skinSpace:s.height()-f}),!_&&a.autoHeight&&f>c&&f<m&&!i&&u.height("auto")},_getPosition:function(e){var t=o.current,n=o.getViewport(),r=t.margin,i=o.wrap.width()+r[1]+r[3],s=o.wrap.height()+r[0]+r[2],r={position:"absolute",top:r[0],left:r[3]};return t.autoCenter&&t.fixed&&!e&&s<=n.h&&i<=n.w?r.position="fixed":t.locked||(r.top+=n.y,r.left+=n.x),r.top=d(Math.max(r.top,r.top+(n.h-s)*t.topRatio)),r.left=d(Math.max(r.left,r.left+(n.w-i)*t.leftRatio)),r},_afterZoomIn:function(){var e=o.current;e&&(o.isOpen=o.isOpened=!0,o.wrap.css("overflow","visible").addClass("fancybox-opened"),o.update(),(e.closeClick||e.nextClick&&1<o.group.length)&&o.inner.css("cursor","pointer").bind("click.fb",function(t){!n(t.target).is("a")&&!n(t.target).parent().is("a")&&(t.preventDefault(),o[e.closeClick?"close":"next"]())}),e.closeBtn&&n(e.tpl.closeBtn).appendTo(o.skin).bind("click.fb",function(e){e.preventDefault(),o.close()}),e.arrows&&1<o.group.length&&((e.loop||0<e.index)&&n(e.tpl.prev).appendTo(o.outer).bind("click.fb",o.prev),(e.loop||e.index<o.group.length-1)&&n(e.tpl.next).appendTo(o.outer).bind("click.fb",o.next)),o.trigger("afterShow"),!e.loop&&e.index===e.group.length-1?o.play(!1):o.opts.autoPlay&&!o.player.isActive&&(o.opts.autoPlay=!1,o.play()))},_afterZoomOut:function(e){e=e||o.current,n(".fancybox-wrap").trigger("onReset").remove(),n.extend(o,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),o.trigger("afterClose",e)}}),o.transitions={getOrigPosition:function(){var e=o.current,t=e.element,n=e.orig,r={},i=50,s=50,u=e.hPadding,a=e.wPadding,f=o.getViewport();!n&&e.isDom&&t.is(":visible")&&(n=t.find("img:first"),n.length||(n=t)),l(n)?(r=n.offset(),n.is("img")&&(i=n.outerWidth(),s=n.outerHeight())):(r.top=f.y+(f.h-s)*e.topRatio,r.left=f.x+(f.w-i)*e.leftRatio);if("fixed"===o.wrap.css("position")||e.locked)r.top-=f.y,r.left-=f.x;return r={top:d(r.top-u*e.topRatio),left:d(r.left-a*e.leftRatio),width:d(i+a),height:d(s+u)}},step:function(e,t){var n,r,i=t.prop;r=o.current;var s=r.wrapSpace,u=r.skinSpace;if("width"===i||"height"===i)n=t.end===t.start?1:(e-t.start)/(t.end-t.start),o.isClosing&&(n=1-n),r="width"===i?r.wPadding:r.hPadding,r=e-r,o.skin[i](p("width"===i?r:r-s*n)),o.inner[i](p("width"===i?r:r-s*n-u*n))},zoomIn:function(){var e=o.current,t=e.pos,r=e.openEffect,i="elastic"===r,s=n.extend({opacity:1},t);delete s.position,i?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===r&&(t.opacity=.1),o.wrap.css(t).animate(s,{duration:"none"===r?0:e.openSpeed,easing:e.openEasing,step:i?this.step:null,complete:o._afterZoomIn})},zoomOut:function(){var e=o.current,t=e.closeEffect,n="elastic"===t,r={opacity:.1};n&&(r=this.getOrigPosition(),e.closeOpacity&&(r.opacity=.1)),o.wrap.animate(r,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:n?this.step:null,complete:o._afterZoomOut})},changeIn:function(){var e=o.current,t=e.nextEffect,n=e.pos,r={opacity:1},i=o.direction,s;n.opacity=.1,"elastic"===t&&(s="down"===i||"up"===i?"top":"left","down"===i||"right"===i?(n[s]=d(p(n[s])-200),r[s]="+=200px"):(n[s]=d(p(n[s])+200),r[s]="-=200px")),"none"===t?o._afterZoomIn():o.wrap.css(n).animate(r,{duration:e.nextSpeed,easing:e.nextEasing,complete:o._afterZoomIn})},changeOut:function(){var e=o.previous,t=e.prevEffect,r={opacity:.1},i=o.direction;"elastic"===t&&(r["down"===i||"up"===i?"top":"left"]=("up"===i||"left"===i?"-":"+")+"=200px"),e.wrap.animate(r,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){n(this).trigger("onReset").remove()}})}},o.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!f,fixed:!0},overlay:null,fixed:!1,create:function(e){e=n.extend({},this.defaults,e),this.overlay&&this.close(),this.overlay=n('<div class="fancybox-overlay"></div>').appendTo("body"),this.fixed=!1,e.fixed&&o.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(e){var t=this;e=n.extend({},this.defaults,e),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(e),this.fixed||(i.bind("resize.overlay",n.proxy(this.update,this)),this.update()),e.closeClick&&this.overlay.bind("click.overlay",function(e){n(e.target).hasClass("fancybox-overlay")&&(o.isActive?o.close():t.close())}),this.overlay.css(e.css).show()},close:function(){n(".fancybox-overlay").remove(),i.unbind("resize.overlay"),this.overlay=null,!1!==this.margin&&(n("body").css("margin-right",this.margin),this.margin=!1),this.el&&this.el.removeClass("fancybox-lock")},update:function(){var e="100%",n;this.overlay.width(e).height("100%"),u?(n=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),s.width()>n&&(e=s.width())):s.width()>i.width()&&(e=s.width()),this.overlay.width(e).height(s.height())},onReady:function(e,r){n(".fancybox-overlay").stop(!0,!0),this.overlay||(this.margin=s.height()>i.height()||"scroll"===n("body").css("overflow-y")?n("body").css("margin-right"):!1,this.el=t.all&&!t.querySelector?n("html"):n("body"),this.create(e)),e.locked&&this.fixed&&(r.locked=this.overlay.append(r.wrap),r.fixed=!1),!0===e.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){t.locked&&(this.el.addClass("fancybox-lock"),!1!==this.margin&&n("body").css("margin-right",p(this.margin)+t.scrollbarWidth)),this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(e){this.overlay&&!o.isActive&&this.overlay.fadeOut(e.speedOut,n.proxy(this.close,this))}},o.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t=o.current,r=t.title,i=e.type;n.isFunction(r)&&(r=r.call(t.element,t));if(c(r)&&""!==n.trim(r)){t=n('<div class="fancybox-title fancybox-title-'+i+'-wrap">'+r+"</div>");switch(i){case"inside":i=o.skin;break;case"outside":i=o.wrap;break;case"over":i=o.inner;break;default:i=o.skin,t.appendTo("body"),u&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),o.current.margin[2]+=Math.abs(p(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](i)}}},n.fn.fancybox=function(e){var t,r=n(this),i=this.selector||"",u=function(s){var u=n(this).blur(),a=t,f,l;!s.ctrlKey&&!s.altKey&&!s.shiftKey&&!s.metaKey&&!u.is(".fancybox-wrap")&&(f=e.groupAttr||"data-fancybox-group",l=u.attr(f),l||(f="rel",l=u.get(0)[f]),l&&""!==l&&"nofollow"!==l&&(u=i.length?n(i):r,u=u.filter("["+f+'="'+l+'"]'),a=u.index(this)),e.index=a,!1!==o.open(u,e)&&s.preventDefault())};return e=e||{},t=e.index||0,!i||!1===e.live?r.unbind("click.fb-start").bind("click.fb-start",u):s.undelegate(i,"click.fb-start").delegate(i+":not('.fancybox-item, .fancybox-nav')","click.fb-start",u),this.filter("[data-fancybox-start=1]").trigger("click"),this},s.ready(function(){n.scrollbarWidth===r&&(n.scrollbarWidth=function(){var e=n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),t=t.innerWidth()-t.height(99).innerWidth();return e.remove(),t});if(n.support.fixedPosition===r){var e=n.support,t=n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),i=20===t[0].offsetTop||15===t[0].offsetTop;t.remove(),e.fixedPosition=i}n.extend(o.defaults,{scrollbarWidth:n.scrollbarWidth(),fixed:n.support.fixedPosition,parent:n("body")})})}(window,document,jQuery),function(e){function r(e){if(e in t.style)return e;var n=["Moz","Webkit","O","ms"],r=e.charAt(0).toUpperCase()+e.substr(1);if(e in t.style)return e;for(var i=0;i<n.length;++i){var s=n[i]+r;if(s in t.style)return s}}function i(){return t.style[n.transform]="",t.style[n.transform]="rotateY(90deg)",t.style[n.transform]!==""}function f(e){return typeof e=="string"&&this.parse(e),this}function l(e,t,n){t===!0?e.queue(n):t?e.queue(t,n):n()}function c(t){var n=[];return e.each(t,function(t){t=e.camelCase(t),t=e.transit.propertyMap[t]||e.cssProps[t]||t,t=d(t),e.inArray(t,n)===-1&&n.push(t)}),n}function h(t,n,r,i){var s=c(t);e.cssEase[r]&&(r=e.cssEase[r]);var o=""+m(n)+" "+r;parseInt(i,10)>0&&(o+=" "+m(i));var u=[];return e.each(s,function(e,t){u.push(t+" "+o)}),u.join(", ")}function p(t,r){r||(e.cssNumber[t]=!0),e.transit.propertyMap[t]=n.transform,e.cssHooks[t]={get:function(n){var r=e(n).css("transit:transform");return r.get(t)},set:function(n,r){var i=e(n).css("transit:transform");i.setFromString(t,r),e(n).css({"transit:transform":i})}}}function d(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function v(e,t){return typeof e=="string"&&!e.match(/^[\-0-9\.]+$/)?e:""+e+t}function m(t){var n=t;return e.fx.speeds[n]&&(n=e.fx.speeds[n]),v(n,"ms")}e.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var t=document.createElement("div"),n={},s=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;n.transition=r("transition"),n.transitionDelay=r("transitionDelay"),n.transform=r("transform"),n.transformOrigin=r("transformOrigin"),n.transform3d=i();var o={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"},u=n.transitionEnd=o[n.transition]||null;for(var a in n)n.hasOwnProperty(a)&&typeof e.support[a]=="undefined"&&(e.support[a]=n[a]);t=null,e.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"},e.cssHooks["transit:transform"]={get:function(t){return e(t).data("transform")||new f},set:function(t,r){var i=r;i instanceof f||(i=new f(i)),n.transform==="WebkitTransform"&&!s?t.style[n.transform]=i.toString(!0):t.style[n.transform]=i.toString(),e(t).data("transform",i)}},e.cssHooks.transform={set:e.cssHooks["transit:transform"].set},e.fn.jquery<"1.8"&&(e.cssHooks.transformOrigin={get:function(e){return e.style[n.transformOrigin]},set:function(e,t){e.style[n.transformOrigin]=t}},e.cssHooks.transition={get:function(e){return e.style[n.transition]},set:function(e,t){e.style[n.transition]=t}}),p("scale"),p("translate"),p("rotate"),p("rotateX"),p("rotateY"),p("rotate3d"),p("perspective"),p("skewX"),p("skewY"),p("x",!0),p("y",!0),f.prototype={setFromString:function(e,t){var n=typeof t=="string"?t.split(","):t.constructor===Array?t:[t];n.unshift(e),f.prototype.set.apply(this,n)},set:function(e){var t=Array.prototype.slice.apply(arguments,[1]);this.setter[e]?this.setter[e].apply(this,t):this[e]=t.join(",")},get:function(e){return this.getter[e]?this.getter[e].apply(this):this[e]||0},setter:{rotate:function(e){this.rotate=v(e,"deg")},rotateX:function(e){this.rotateX=v(e,"deg")},rotateY:function(e){this.rotateY=v(e,"deg")},scale:function(e,t){t===undefined&&(t=e),this.scale=e+","+t},skewX:function(e){this.skewX=v(e,"deg")},skewY:function(e){this.skewY=v(e,"deg")},perspective:function(e){this.perspective=v(e,"px")},x:function(e){this.set("translate",e,null)},y:function(e){this.set("translate",null,e)},translate:function(e,t){this._translateX===undefined&&(this._translateX=0),this._translateY===undefined&&(this._translateY=0),e!==null&&e!==undefined&&(this._translateX=v(e,"px")),t!==null&&t!==undefined&&(this._translateY=v(t,"px")),this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var e=(this.scale||"1,1").split(",");return e[0]&&(e[0]=parseFloat(e[0])),e[1]&&(e[1]=parseFloat(e[1])),e[0]===e[1]?e[0]:e},rotate3d:function(){var e=(this.rotate3d||"0,0,0,0deg").split(",");for(var t=0;t<=3;++t)e[t]&&(e[t]=parseFloat(e[t]));return e[3]&&(e[3]=v(e[3],"deg")),e}},parse:function(e){var t=this;e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(e,n,r){t.setFromString(n,r)})},toString:function(e){var t=[];for(var r in this)if(this.hasOwnProperty(r)){if(!n.transform3d&&(r==="rotateX"||r==="rotateY"||r==="perspective"||r==="transformOrigin"))continue;r[0]!=="_"&&(e&&r==="scale"?t.push(r+"3d("+this[r]+",1)"):e&&r==="translate"?t.push(r+"3d("+this[r]+",0)"):t.push(r+"("+this[r]+")"))}return t.join(" ")}},e.fn.transition=e.fn.transit=function(t,r,i,s){var o=this,a=0,f=!0;typeof r=="function"&&(s=r,r=undefined),typeof i=="function"&&(s=i,i=undefined),typeof t.easing!="undefined"&&(i=t.easing,delete t.easing),typeof t.duration!="undefined"&&(r=t.duration,delete t.duration),typeof t.complete!="undefined"&&(s=t.complete,delete t.complete),typeof t.queue!="undefined"&&(f=t.queue,delete t.queue),typeof t.delay!="undefined"&&(a=t.delay,delete t.delay),typeof r=="undefined"&&(r=e.fx.speeds._default),typeof i=="undefined"&&(i=e.cssEase._default),r=m(r);var c=h(t,r,i,a),p=e.transit.enabled&&n.transition,d=p?parseInt(r,10)+parseInt(a,10):0;if(d===0){var v=function(e){o.css(t),s&&s.apply(o),e&&e()};return l(o,f,v),o}var y={},b=function(r){var i=!1,a=function(){i&&o.unbind(u,a),d>0&&o.each(function(){this.style[n.transition]=y[this]||null}),typeof s=="function"&&s.apply(o),typeof r=="function"&&r()};d>0&&u&&e.transit.useTransitionEnd?(i=!0,o.bind(u,a)):window.setTimeout(a,d),o.each(function(){d>0&&(this.style[n.transition]=c),e(this).css(t)})},w=function(e){this.offsetWidth,b(e)};return l(o,f,w),this},e.transit.getTransitionValue=h}(jQuery),function(e){function t(e,t){var n=(e&65535)+(t&65535),r=(e>>16)+(t>>16)+(n>>16);return r<<16|n&65535}function n(e,t){return e<<t|e>>>32-t}function r(e,r,i,s,o,u){return t(n(t(t(r,e),t(s,u)),o),i)}function i(e,t,n,i,s,o,u){return r(t&n|~t&i,e,t,s,o,u)}function s(e,t,n,i,s,o,u){return r(t&i|n&~i,e,t,s,o,u)}function o(e,t,n,i,s,o,u){return r(t^n^i,e,t,s,o,u)}function u(e,t,n,i,s,o,u){return r(n^(t|~i),e,t,s,o,u)}function a(e,n){e[n>>5]|=128<<n%32,e[(n+64>>>9<<4)+14]=n;var r,a,f,l,c,h=1732584193,p=-271733879,d=-1732584194,v=271733878;for(r=0;r<e.length;r+=16)a=h,f=p,l=d,c=v,h=i(h,p,d,v,e[r],7,-680876936),v=i(v,h,p,d,e[r+1],12,-389564586),d=i(d,v,h,p,e[r+2],17,606105819),p=i(p,d,v,h,e[r+3],22,-1044525330),h=i(h,p,d,v,e[r+4],7,-176418897),v=i(v,h,p,d,e[r+5],12,1200080426),d=i(d,v,h,p,e[r+6],17,-1473231341),p=i(p,d,v,h,e[r+7],22,-45705983),h=i(h,p,d,v,e[r+8],7,1770035416),v=i(v,h,p,d,e[r+9],12,-1958414417),d=i(d,v,h,p,e[r+10],17,-42063),p=i(p,d,v,h,e[r+11],22,-1990404162),h=i(h,p,d,v,e[r+12],7,1804603682),v=i(v,h,p,d,e[r+13],12,-40341101),d=i(d,v,h,p,e[r+14],17,-1502002290),p=i(p,d,v,h,e[r+15],22,1236535329),h=s(h,p,d,v,e[r+1],5,-165796510),v=s(v,h,p,d,e[r+6],9,-1069501632),d=s(d,v,h,p,e[r+11],14,643717713),p=s(p,d,v,h,e[r],20,-373897302),h=s(h,p,d,v,e[r+5],5,-701558691),v=s(v,h,p,d,e[r+10],9,38016083),d=s(d,v,h,p,e[r+15],14,-660478335),p=s(p,d,v,h,e[r+4],20,-405537848),h=s(h,p,d,v,e[r+9],5,568446438),v=s(v,h,p,d,e[r+14],9,-1019803690),d=s(d,v,h,p,e[r+3],14,-187363961),p=s(p,d,v,h,e[r+8],20,1163531501),h=s(h,p,d,v,e[r+13],5,-1444681467),v=s(v,h,p,d,e[r+2],9,-51403784),d=s(d,v,h,p,e[r+7],14,1735328473),p=s(p,d,v,h,e[r+12],20,-1926607734),h=o(h,p,d,v,e[r+5],4,-378558),v=o(v,h,p,d,e[r+8],11,-2022574463),d=o(d,v,h,p,e[r+11],16,1839030562),p=o(p,d,v,h,e[r+14],23,-35309556),h=o(h,p,d,v,e[r+1],4,-1530992060),v=o(v,h,p,d,e[r+4],11,1272893353),d=o(d,v,h,p,e[r+7],16,-155497632),p=o(p,d,v,h,e[r+10],23,-1094730640),h=o(h,p,d,v,e[r+13],4,681279174),v=o(v,h,p,d,e[r],11,-358537222),d=o(d,v,h,p,e[r+3],16,-722521979),p=o(p,d,v,h,e[r+6],23,76029189),h=o(h,p,d,v,e[r+9],4,-640364487),v=o(v,h,p,d,e[r+12],11,-421815835),d=o(d,v,h,p,e[r+15],16,530742520),p=o(p,d,v,h,e[r+2],23,-995338651),h=u(h,p,d,v,e[r],6,-198630844),v=u(v,h,p,d,e[r+7],10
,1126891415),d=u(d,v,h,p,e[r+14],15,-1416354905),p=u(p,d,v,h,e[r+5],21,-57434055),h=u(h,p,d,v,e[r+12],6,1700485571),v=u(v,h,p,d,e[r+3],10,-1894986606),d=u(d,v,h,p,e[r+10],15,-1051523),p=u(p,d,v,h,e[r+1],21,-2054922799),h=u(h,p,d,v,e[r+8],6,1873313359),v=u(v,h,p,d,e[r+15],10,-30611744),d=u(d,v,h,p,e[r+6],15,-1560198380),p=u(p,d,v,h,e[r+13],21,1309151649),h=u(h,p,d,v,e[r+4],6,-145523070),v=u(v,h,p,d,e[r+11],10,-1120210379),d=u(d,v,h,p,e[r+2],15,718787259),p=u(p,d,v,h,e[r+9],21,-343485551),h=t(h,a),p=t(p,f),d=t(d,l),v=t(v,c);return[h,p,d,v]}function f(e){var t,n="";for(t=0;t<e.length*32;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function l(e){var t,n=[];n[(e.length>>2)-1]=undefined;for(t=0;t<n.length;t+=1)n[t]=0;for(t=0;t<e.length*8;t+=8)n[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return n}function c(e){return f(a(l(e),e.length*8))}function h(e,t){var n,r=l(e),i=[],s=[],o;i[15]=s[15]=undefined,r.length>16&&(r=a(r,e.length*8));for(n=0;n<16;n+=1)i[n]=r[n]^909522486,s[n]=r[n]^1549556828;return o=a(i.concat(l(t)),512+t.length*8),f(a(s.concat(o),640))}function p(e){var t="0123456789abcdef",n="",r,i;for(i=0;i<e.length;i+=1)r=e.charCodeAt(i),n+=t.charAt(r>>>4&15)+t.charAt(r&15);return n}function d(e){return unescape(encodeURIComponent(e))}function v(e){return c(d(e))}function m(e){return p(v(e))}function g(e,t){return h(d(e),d(t))}function y(e,t){return p(g(e,t))}function b(e,t,n){return t?n?g(t,e):y(t,e):n?v(e):m(e)}"use strict",typeof define=="function"&&define.amd?define(function(){return b}):e.md5=b}(this),(!window.console||!console.log)&&function(){var e=function(){},t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","markTimeline","table","time","timeEnd","timeStamp","trace","warn"],n=t.length,r=window.console={};while(n--)r[t[n]]=e}(),function(){var e;e=this,$(function(){var e,t,n,r;return n=$("#signedin-nav"),r=$("#signedout-nav"),t=$.cookie("crafted_session"),t?(e=$.post("https://codio.com/service/",{acrequest:JSON.stringify({object:"AccountManager",method:"getMyInfo",params:{session_id:t}})}),e.done(function(e){var t,i,s;return e.code!==1?r.fadeIn():(i=e.response.details,typeof Intercom!="undefined"&&Intercom("boot",{app_id:"ee8711023afa04b80a6b921ddb3939c1171e0f62",email:i.email,created_at:i.created_at?Math.round(i.created_at/1e3):void 0,username:i.name,name:i.actual_name||i.name,user_id:e.response.account,widget:{activator:"#IntercomDefaultWidget"}}),t=md5(i.email.toLowerCase()),$("#gravatar img").prop("src","//www.gravatar.com/avatar/"+t+"?s=32&amp;d=mm"),s=$("#userlink"),s.prop("href","/"+i.name),s.text(i.name),n.fadeIn())})):r.fadeIn()}),$(function(){return $("a[href^='#']").on("click",function(e){var t,n;t=$(this).data().el||$(this.hash),$(this).data().el=t;if(!t.length)return;return n=t.offset().top,$("html,body").animate({scrollTop:n-50},"slow"),e.preventDefault()})}),$(function(){return $("#content-body h1 button").click(function(){return $("aside").is(":visible")?$("aside").hide():$("aside").show()})}),$(function(){return $(".fancybox").fancybox({helpers:{title:{type:"inside"}},beforeLoad:function(){return this.title=$(this.element).find("img").attr("title")}})}),$(function(){var e,t;if((e=$("body.standard aside")).length>0)return t=e.offset().top-parseFloat(e.css("marginTop").replace(/auto/,0)),$(window).scroll(function(n){return $(this).scrollTop()>=t?e.addClass("fixed"):e.removeClass("fixed")})}),$(function(){var e,t;(e=$("body.blog section.posts article img")).length>0&&e.each(function(){var e;e=$(this);if(!e.parent().is("a"))return e.wrap(function(){return"<a href='"+e.attr("src")+"' class='fancybox' />"})}),$("body.blog section.posts article pre > code").addClass("lang-javascript");if((t=$("body.blog section.posts article a[href*='youtube']")).length>0)return t.addClass("fancybox fancybox.iframe")}),$(function(){var e,t;if((e=$("#tree")).length>0)return t=function(){var e,t;(e=$("body.docs article :not(a)>img")).length>0&&e.wrap(function(){return"<a href='"+$(this).attr("src")+"' class='fancybox' />"}),$("body.docs article pre > code").addClass("lang-javascript");if((t=$("body.docs article a[href*='youtube']")).length>0)return t.addClass("fancybox fancybox.iframe")},t(),$("#full-screen").on("click",function(t){return t.preventDefault(),$("body").hasClass("full-screen")?$("body").removeClass("full-screen"):($("body").addClass("full-screen"),e.height($(window).height()-e.offset().top-20))}),e.find("div>span").on("click",function(){return $(this).parent().parent().toggleClass("expanded")}),e.find("a").on("click",function(){var t;return e.find("li").removeClass("checked"),t=$(this).parent().find(">span").length>0?$(this).parent().parent():$(this).parent(),t.addClass("checked"),t.parents("li").addClass("checked")}),expandTreeWithPath(),$(document).on("page:change",function(){return expandTreeWithPath(),t(),Rainbow.color()})}),e.expandTreeWithPath=function(e){var t,n;e==null&&(e=document.location.pathname),e=e.replace(/\/$/,"")+"/";if((n=$("#tree a[href='"+e+"']")).length>0)return $("#tree li").removeClass("checked"),n.parent().find(">span").length>0?t=n.parent().parent():t=n.parent(),t.addClass("checked"),t.parents("li").addClass("checked")}}.call(this);