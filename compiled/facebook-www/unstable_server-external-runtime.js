(function(){function v(a,b,n){function d(a){this.s=a}for(var k=window.$RC,g=window.$RM,t=new Map,u=document,p,l,m=u.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;l=m[h++];)t.set(l.dataset.precedence,p=l);l=0;m=[];for(var f,q,e,c;f=n[l++];){var r=0;q=f[r++];if(e=g.get(q))"l"!==e.s&&m.push(e);else{c=u.createElement("link");c.href=q;c.rel="stylesheet";for(c.dataset.precedence=h=f[r++];e=f[r++];)c.setAttribute(e,f[r++]);e=c._p=new Promise(function(a,b){c.onload=a;c.onerror=b});
e.then(d.bind(e,"l"),d.bind(e,"e"));g.set(q,e);m.push(e);f=t.get(h)||p;f===p&&(p=c);t.set(h,c);f?f.parentNode.insertBefore(c,f.nextSibling):(h=u.head,h.insertBefore(c,h.firstChild))}}Promise.all(m).then(k.bind(null,a,b,""),k.bind(null,a,b,"Resource failed to load"))}new MutationObserver(function(){var a=document.getElementById(void 0);a&&(a=a.previousSibling,a.data="$!",a._reactRetry&&a._reactRetry());v();a=document.getElementById(void 0);a.parentNode.removeChild(a);var b=document.getElementById(void 0);
if(b){b=b.previousSibling;var n=b.parentNode,d=b.nextSibling,k=0;do{if(d&&8===d.nodeType){var g=d.data;if("/$"===g)if(0===k)break;else k--;else"$"!==g&&"$?"!==g&&"$!"!==g||k++}g=d.nextSibling;n.removeChild(d);d=g}while(d);for(;a.firstChild;)n.insertBefore(a.firstChild,d);b.data="$";b._reactRetry&&b._reactRetry()}a=document.getElementById(void 0);b=document.getElementById(void 0);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)})})();