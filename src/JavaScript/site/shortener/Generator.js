$(".mat-input").focus(function(){$(this).parent().addClass("is-active is-completed")}),$(".mat-input").focusout(function(){""===$(this).val()&&$(this).parent().removeClass("is-completed"),$(this).parent().removeClass("is-active")});var SPY=function(){function f(i,a,d){var j,k,l,m;d==i.length?e.animationComplete=!0:(l=a.innerHTML,m=Math.floor(21*Math.random()+5),j=32==i[d]?32:i[d]-m,k=setInterval(function(){a.innerHTML=l+String.fromCharCode(j),j==i[d]?(clearInterval(k),j=32,d++,setTimeout(function(){f(i,a,d)},10)):j++},5))}var e={};return e={animationComplete:!1,text:function(e){this.animationComplete=!1,e=document.getElementById(e);for(var g=e.innerHTML,d=[],b=0;b<g.length;b++)d.push(g.charCodeAt(b));e.innerHTML="",f(d,e,0)}}}();$("document").ready(function(){$(".header").hide(),$(".london").fadeIn(1200),setTimeout(function(){$(".header").fadeIn("slow"),SPY.text("Shortened-URL")},1e3)});