import{_}from"../../chunks/preload-helper-ec9aa979.js";import{S as T,i as V,s as y,e as m,t as b,k as P,c as p,a as g,g as E,d as c,n as j,b as v,f as d,E as h,h as I,l as k,I as A,J as x}from"../../chunks/vendor-f01f4eb0.js";function D(i,e,o){const r=i.slice();return r[2]=e[o].path,r[3]=e[o].metadata.title,r}function L(i){let e,o,r=i[3]+"",n,f,l;return{c(){e=m("li"),o=m("a"),n=b(r),l=P(),this.h()},l(t){e=p(t,"LI",{});var a=g(e);o=p(a,"A",{href:!0});var s=g(o);n=E(s,r),s.forEach(c),l=j(a),a.forEach(c),this.h()},h(){v(o,"href",f=`/blog/${i[2].replace(".md","").replace(".svx","")}`)},m(t,a){d(t,e,a),h(e,o),h(o,n),h(e,l)},p(t,a){a&1&&r!==(r=t[3]+"")&&I(n,r),a&1&&f!==(f=`/blog/${t[2].replace(".md","").replace(".svx","")}`)&&v(o,"href",f)},d(t){t&&c(e)}}}function S(i){let e,o,r,n,f=i[0],l=[];for(let t=0;t<f.length;t+=1)l[t]=L(D(i,f,t));return{c(){e=m("h1"),o=b(i[1]),r=P();for(let t=0;t<l.length;t+=1)l[t].c();n=k()},l(t){e=p(t,"H1",{});var a=g(e);o=E(a,i[1]),a.forEach(c),r=j(t);for(let s=0;s<l.length;s+=1)l[s].l(t);n=k()},m(t,a){d(t,e,a),h(e,o),d(t,r,a);for(let s=0;s<l.length;s+=1)l[s].m(t,a);d(t,n,a)},p(t,[a]){if(a&2&&I(o,t[1]),a&1){f=t[0];let s;for(s=0;s<f.length;s+=1){const u=D(t,f,s);l[s]?l[s].p(u,a):(l[s]=L(u),l[s].c(),l[s].m(n.parentNode,n))}for(;s<l.length;s+=1)l[s].d(1);l.length=f.length}},i:A,o:A,d(t){t&&c(e),t&&c(r),x(l,t),t&&c(n)}}}const O={"../blog/first-post.md":()=>_(()=>import("../blog/first-post.md-92a320e8.js"),["pages/blog/first-post.md-92a320e8.js","chunks/vendor-f01f4eb0.js"]),"../blog/forth-post.md":()=>_(()=>import("../blog/forth-post.md-633c0073.js"),["pages/blog/forth-post.md-633c0073.js","chunks/vendor-f01f4eb0.js"]),"../blog/second-post.md":()=>_(()=>import("../blog/second-post.md-6601f62d.js"),["pages/blog/second-post.md-6601f62d.js","chunks/vendor-f01f4eb0.js"]),"../blog/third-post.md":()=>_(()=>import("../blog/third-post.md-b48b0803.js"),["pages/blog/third-post.md-b48b0803.js","chunks/vendor-f01f4eb0.js"])};let R=[];for(let i in O)R.push(O[i]().then(({metadata:e})=>(console.log(e),{path:i,metadata:e})));const C=async({page:i})=>{const e=await Promise.all(R),o=i.params.tag;return{props:{filterdPosts:e.filter(n=>n.metadata.tags.includes(o)),tag:o}}};function q(i,e,o){let{filterdPosts:r}=e,{tag:n}=e;return i.$$set=f=>{"filterdPosts"in f&&o(0,r=f.filterdPosts),"tag"in f&&o(1,n=f.tag)},[r,n]}class H extends T{constructor(e){super();V(this,e,q,S,y,{filterdPosts:0,tag:1})}}export{H as default,C as load};