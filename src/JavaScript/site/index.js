(function(){function a(){m=window.innerWidth,n=window.innerHeight,s={x:m/2,y:n/2},o=document.getElementById("large-header"),o.style.height=n+"px",p=document.getElementById("canvas"),p.width=m,p.height=n,q=p.getContext("2d"),r=[];for(var a=0;a<m;a+=m/20)for(var b=0;b<n;b+=n/20){var d=a+Math.random()*m/20,e=b+Math.random()*n/20;r.push({x:d,originX:d,y:e,originY:e})}for(var f=0;f<r.length;f++){for(var g,h=[],t=r[f],u=0;u<r.length;u++)if(g=r[u],t!=g){for(var v=!1,w=0;5>w;w++)v||null==h[w]&&(h[w]=g,v=!0);for(var w=0;5>w;w++)v||l(t,g)<l(t,h[w])&&(h[w]=g,v=!0)}t.closest=h}for(var f in r){var z=new k(r[f],2+2*Math.random(),"rgba(255,255,255,0.3)");r[f].circle=z}}function b(){"ontouchstart"in window||window.addEventListener("mousemove",c),window.addEventListener("scroll",d),window.addEventListener("resize",e)}function c(a){var b=posy=0;a.pageX||a.pageY?(b=a.pageX,posy=a.pageY):(a.clientX||a.clientY)&&(b=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,posy=a.clientY+document.body.scrollTop+document.documentElement.scrollTop),s.x=b,s.y=posy}function d(){t=!(document.body.scrollTop>n)}function e(){m=window.innerWidth,n=window.innerHeight,o.style.height=n+"px",p.width=m,p.height=n}function f(){for(var a in g(),r)h(r[a])}function g(){if(t)for(var a in q.clearRect(0,0,m,n),r)4e3>Math.abs(l(s,r[a]))?(r[a].active=.3,r[a].circle.active=.6):2e4>Math.abs(l(s,r[a]))?(r[a].active=.1,r[a].circle.active=.3):4e4>Math.abs(l(s,r[a]))?(r[a].active=.02,r[a].circle.active=.1):(r[a].active=0,r[a].circle.active=0),j(r[a]),r[a].circle.draw();requestAnimationFrame(g)}function h(a){TweenLite.to(a,1+1*Math.random(),{x:a.originX-50+100*Math.random(),y:a.originY-50+100*Math.random(),ease:Circ.easeInOut,onComplete:function(){h(a)}})}function j(a){if(a.active)for(var b in a.closest)q.beginPath(),q.moveTo(a.x,a.y),q.lineTo(a.closest[b].x,a.closest[b].y),q.strokeStyle="rgba(156,217,249,"+a.active+")",q.stroke()}function k(a,b,c){var d=this;(function(){d.pos=a||null,d.radius=b||null,d.color=c||null})(),this.draw=function(){d.active&&(q.beginPath(),q.arc(d.pos.x,d.pos.y,d.radius,0,2*Math.PI,!1),q.fillStyle="rgba(156,217,249,"+d.active+")",q.fill())}}function l(a,b){return Math.pow(a.x-b.x,2)+Math.pow(a.y-b.y,2)}var m,n,o,p,q,r,s,t=!0;a(),f(),b()})();