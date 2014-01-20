/*
Tipue Search 2.0
Copyright (c) 2012 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/
!function(e){e.fn.tipuesearch=function(t){var i=e.extend({show:7,newWindow:!1,showURL:!0,minimumLength:3,descriptiveWords:25,highlightTerms:!1,highlightEveryTerm:!1,mode:"static",contentLocation:"tipuesearch/tipuesearch_content.json"},t);return this.each(function(){function t(e){return decodeURIComponent((new RegExp("[?|&]"+e+"="+"([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||null}function n(t,o){e("#tipue_search_content").hide();var l="",s=!1,d=!1,c=e(".docs aside form input").val().toLowerCase();c=e.trim(c);var u=c.split(" ");if(c.length>=i.minimumLength){if(o){for(var f=c,p=0;p<u.length;p++)for(var h=0;h<tipuesearch_replace.words.length;h++)u[p]==tipuesearch_replace.words[h].word&&(c=c.replace(u[p],tipuesearch_replace.words[h].replace_with),s=!0);u=c.split(" ")}for(var g=c,p=0;p<u.length;p++)for(var h=0;h<tipuesearch_stem.words.length;h++)u[p]==tipuesearch_stem.words[h].word&&(g=g+" "+tipuesearch_stem.words[h].stem);u=g.split(" ");var y=0;found=new Array;for(var p=0;p<a.pages.length;p++)if(void 0!=a.pages[p].t){for(var b=1e7,m=a.pages[p].t,h=0;h<u.length;h++){var v=new RegExp(u[h],"i");if(-1!=a.pages[p].t.search(v)&&(b-=2e3-p),a.pages[p].text&&-1!=a.pages[p].text.search(v)&&(b-=1500-p),i.highlightTerms){if(i.highlightEveryTerm)var w=new RegExp("("+u[h]+")","gi");else var w=new RegExp("("+u[h]+")","i");m=m.replace(w,"<em>$1</em>")}-1!=a.pages[p].b.search(v)&&(b-=1e3-p)}1e7>b&&(found[y++]=b+"^"+a.pages[p].r+"^"+m+"^"+a.pages[p].u)}if(0!=y){1==s&&(l+='<div id="tipue_search_warning_head">Showing results for '+c+"</div>",l+='<div id="tipue_search_warning">Show results for <a href="javascript:void(0)" id="tipue_search_replaced">'+f+"</a></div>"),1==y?l+='<div id="tipue_search_results_count">1 result for '+c+"...</div>":(c_c=y.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),l+='<div id="tipue_search_results_count">'+c_c+" results for "+c+"...</div>"),found.sort();for(var x=0,p=0;p<found.length;p++){var _=found[p].split("^");if(x>=t&&x<i.show+t){l+='<div id="tipue_search_content_title"><a href="'+_[3]+'"'+r+">"+_[1]+"</a></div>";var k=_[2],C="",T=k.split(" ");if(T.length<i.descriptiveWords)C=k;else for(var h=0;h<i.descriptiveWords;h++)C+=T[h]+" ";C=e.trim(C),"."!=C.charAt(C.length-1)&&(C+=" ..."),l+='<div id="tipue_search_content_text">'+C+"</div>",i.showURL&&(l+='<div id="tipue_search_content_loc"><a href="'+_[3]+'"'+r+">"+_[3]+"</a></div>")}x++}if(y>i.show){var S=Math.ceil(y/i.show),E=t/i.show;if(l+='<div id="tipue_search_foot"><ul id="tipue_search_foot_boxes">',t>0&&(l+='<li><a href="javascript:void(0)" class="tipue_search_foot_box" id="'+(t-i.show)+"_"+o+'">&#171; Previous</a></li>'),4>=E){var O=S;S>5&&(O=5);for(var h=0;O>h;h++)l+=h==E?'<li class="current">'+(h+1)+"</li>":'<li><a href="javascript:void(0)" class="tipue_search_foot_box" id="'+h*i.show+"_"+o+'">'+(h+1)+"</a></li>"}else{var O=S+4;O>S&&(O=S);for(var h=E;O>h;h++)l+=h==E?'<li class="current">'+(h+1)+"</li>":'<li><a href="javascript:void(0)" class="tipue_search_foot_box" id="'+h*i.show+"_"+o+'">'+(h+1)+"</a></li>"}E+1!=S&&(l+='<li><a href="javascript:void(0)" class="tipue_search_foot_box" id="'+(t+i.show)+"_"+o+'">Next &#187;</a></li>'),l+="</ul></div>"}}else l+='<div id="tipue_search_warning_head">Nothing found</div>'}else d?l+='<div id="tipue_search_warning_head">Nothing found</div><div id="tipue_search_warning">Common words are largely ignored</div>':(l+='<div id="tipue_search_warning_head">Search too short</div>',l+=1==i.minimumLength?'<div id="tipue_search_warning">Should be one character or more</div>':'<div id="tipue_search_warning">Should be '+i.minimumLength+" characters or more</div>");e(".docs article").fadeOut(function(){e("#tipue_search_content").html(l).fadeIn()}),e("#tipue_search_replaced").click(function(){n(0,!1)}),e(".tipue_search_foot_box").click(function(){var t=e(this).attr("id"),i=t.split("_");n(parseInt(i[0]),i[1])})}var a={pages:[]};e.ajaxSetup({async:!1}),"json"==i.mode&&e.getJSON(i.contentLocation,function(t){a=e.extend({},t)}),"static"==i.mode&&(a=e.extend({},tipuesearch));var r="";i.newWindow&&(r=' target="_blank"'),t("q")&&(e(".docs aside form input").val(t("q")),n(0,!0)),e(".docs aside form").submit(function(){return n(0,!0),!1})})}}(jQuery);