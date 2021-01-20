(this.webpackJsonponepac=this.webpackJsonponepac||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n.n(c),r=n(18),o=n.n(r),s=(n(33),n(34),n(11)),l=n(2),u=n(4),j=new(n(19).Dispatcher),d=n(5),b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={timeout:2e3,Accept:"application/json","Content-Type":"application/json"},a=Object(d.a)(Object(d.a)({},n),t),c=function(e){return e.json().then((function(t){return e.status>=200&&e.status<300?Promise.resolve(t):e.status>=400&&e.status<500?Promise.reject(t):t}),(function(){var t=new Error(e.statusText);throw t.response=e,t}))};return fetch(e,a).then(c)};var m=function(e){return Promise.resolve().then((function(){return JSON.parse(localStorage.getItem(e))}))};var O={SEARCH_DATA:"SEARCH_DATA",LOAD_DATA:"LOAD_DATA",EDIT_DATA:"EDIT_DATA",LIKE_DATA:"LIKE_DATA",UNLIKE_DATA:"UNLIKE_DATA",REMOVE_DATA:"REMOVE_DATA",UNREMOVE_DATA:"UNREMOVE_DATA"};function h(e){return function(e){return b("".concat("https://images-api.nasa.gov/","/search?q=").concat(e,"&media_type=image"))}(e).then((function(e){j.dispatch({actionTypes:O.SEARCH_DATA,collection:e.collection})}))}function f(){return m("onepacTest").then((function(e){j.dispatch({actionTypes:O.LOAD_DATA,collection:e})}))}function g(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(!1),o=Object(u.a)(r,2),s=o[0],j=o[1],d=Object(l.f)();return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(!0),h(n).then((function(){d.push("/data"),j(!1)}))},children:[Object(a.jsx)("input",{type:"text",value:n,onChange:function(e){i(e.target.value)}}),Object(a.jsx)("input",{type:"submit",value:"Search"}),s?Object(a.jsx)("p",{children:"Searching..."}):Object(a.jsx)(a.Fragment,{})]})}var v=function(){return Object(a.jsxs)("div",{className:"jumbotron",children:[Object(a.jsx)("h3",{children:"Search NASA API"}),Object(a.jsx)(g,{})]})},p=function(){return Object(a.jsx)("h1",{children:"Oops! Page not found."})},x=n(21),A=n(22),D=n(27),y=n(26),C=n(23),E="change",T=[],k=new(function(e){Object(D.a)(n,e);var t=Object(y.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(A.a)(n,[{key:"addChangeListener",value:function(e){this.on(E,e)}},{key:"removeChangeListener",value:function(e){this.removeListener(E,e)}},{key:"emitChange",value:function(){this.emit(E)}},{key:"updateLocalStorage",value:function(){var e=JSON.stringify(T);localStorage.setItem("onepacTest",e)}},{key:"getCollection",value:function(){return T}},{key:"getDataById",value:function(e){return T.items.find((function(t){return t.data[0].nasa_id===e})).data[0]}},{key:"getImageById",value:function(e){return T.items.find((function(t){return t.data[0].nasa_id===e})).links[0].href}}]),n}(C.EventEmitter));j.register((function(e){switch(e.actionTypes){case O.SEARCH_DATA:T=e.collection,k.updateLocalStorage(),k.emitChange();break;case O.LOAD_DATA:T=e.collection,k.emitChange();break;case O.EDIT_DATA:case O.LIKE_DATA:T.items.forEach((function(t,n){t.data[0].nasa_id===e.item.nasa_id&&(T.items[n].data[0]=e.item)})),k.updateLocalStorage(),k.emitChange();break;case O.REMOVE_DATA:console.log(e.item.nasa_id),T.items.forEach((function(t,n){t.data[0].nasa_id===e.item.nasa_id&&(console.log(T.items[n].data[0]),T.items[n].data[0]=e.item,console.log(T.items[n].data[0]))})),k.updateLocalStorage(),k.emitChange()}}));var S=k,_=n(9),I=n.n(_),N=n(24),L=n.n(N);n(46);var R=function(e){var t=Object(c.useState)(e.item.data[0]),n=Object(u.a)(t,2),i=n[0],r=n[1],o=Object(c.useRef)(!0);return Object(c.useEffect)((function(){o.current?o.current=!1:function(e){j.dispatch({actionTypes:O.LIKE_DATA,item:e})}(i)}),[i]),Object(a.jsx)("button",{className:"likeButton "+(i.like?"liked":"unliked"),onClick:function(){i.like?(console.log("unliked"),r(Object(d.a)(Object(d.a)({},i),{},{like:!1}))):(console.log("liked"),r(Object(d.a)(Object(d.a)({},i),{},{like:!0})))},children:"Like"})};var M=function(e){var t=Object(c.useState)(e.item.data[0]),n=Object(u.a)(t,2),i=n[0],r=n[1],o=Object(c.useRef)(!0);return Object(c.useEffect)((function(){o.current?o.current=!1:function(e){j.dispatch({actionTypes:O.REMOVE_DATA,item:e})}(i)}),[i]),Object(a.jsx)("button",{className:"removeButton "+(i.remove?"removed":""),onClick:function(){i.remove?(console.log("undo"),r(Object(d.a)(Object(d.a)({},i),{},{remove:!1}))):(console.log("remove"),r(Object(d.a)(Object(d.a)({},i),{},{remove:!0})))},children:i.remove?"Undo":"X"})},B=function(e){var t=e.id,n=e.image,c=e.title,i=e.item;return Object(a.jsxs)("article",{className:"GalleryItem",children:[Object(a.jsxs)(s.b,{className:"GalleryItem-wrapper",to:"/detail/".concat(t),title:c,children:[Object(a.jsx)("div",{className:"GalleryItem-imageWrapper",children:Object(a.jsx)(L.a,{height:200,once:!0,children:Object(a.jsx)("img",{src:n,alt:c,className:"GalleryItem-image"})})}),Object(a.jsx)("p",{className:"GalleryItem-title",children:c})]}),Object(a.jsx)(R,{item:i}),Object(a.jsx)(M,{item:i})]})};B.prototype={image:I.a.string.isRequired,id:I.a.string.isRequired,title:I.a.string.isRequired};var w=B,P=(n(47),n(25)),F=n.n(P);var K=function(e){console.log(e.filter,e.type);var t=[];switch(e.type){case"LIKED":t=e.collection.items.filter((function(e){return e.data[0].like&&!e.data[0].remove}));break;case"REMOVED":t=e.collection.items.filter((function(e){return e.data[0].remove}));break;default:t=e.collection.items}return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(F.a,{breakpointCols:3,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:t.map((function(e){return Object(a.jsx)(w,{id:e.data[0].nasa_id,image:e.links[0].href,title:e.data[0].title,item:e},e.data[0].nasa_id)}))})})};var V=function(){var e=Object(c.useState)(S.getCollection()),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(!0),o=Object(u.a)(r,2),s=o[0],l=o[1],j=Object(c.useState)(),d=Object(u.a)(j,2),b=d[0],m=d[1],O=Object(c.useState)(),h=Object(u.a)(O,2),g=h[0];function v(){i(S.getCollection())}function p(e){m(e.target.value),console.log(e.target.value)}return h[1],Object(c.useEffect)((function(){return S.addChangeListener(v),0===S.getCollection.length&&f().then((function(){return l(!1)}),console.log("asdf")),function(){return S.removeChangeListener(v)}}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Data Page"}),Object(a.jsx)("button",{value:"ALL",onClick:p,children:"All Data"}),Object(a.jsx)("button",{value:"LIKED",onClick:p,children:"All Liked Data"}),Object(a.jsx)("button",{value:"REMOVED",onClick:p,children:"All Removed Data"}),s?Object(a.jsx)("div",{children:"Loading"}):Object(a.jsx)(K,{collection:n,type:b,filter:g})]})},q=n(12);function G(e){var t="form-group";return e.error.length>0&&(t+=" has-error"),Object(a.jsxs)("div",{className:t,children:[Object(a.jsx)("div",{className:"field",children:Object(a.jsx)("input",{id:e.id,type:"text",onChange:e.onChange,name:e.name,className:"form-control",value:e.value})}),e.error&&Object(a.jsx)("div",{className:"alert alert-danger",children:e.error})]})}G.defaultProps={error:""};var U=G;function H(e){var t="form-group";return e.error.length>0&&(t+=" has-error"),Object(a.jsxs)("div",{className:t,children:[Object(a.jsx)("div",{className:"field",children:Object(a.jsx)("textarea",{id:e.id,type:"text",onChange:e.onChange,name:e.name,className:"form-control",value:e.value})}),e.error&&Object(a.jsx)("div",{className:"alert alert-danger",children:e.error})]})}H.defaultProps={error:""};var J=H;var W=function(e){return Object(a.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(a.jsx)(U,{id:"title",label:"Title",onChange:e.onChange,name:"title",value:e.data.title,error:e.errors.title}),Object(a.jsx)(J,{id:"description",label:"Description",onChange:e.onChange,name:"description",value:e.data.description,error:e.errors.description}),Object(a.jsx)("input",{type:"submit",value:"Save",className:"btn btn-primary"})]})},X=(n(48),function(e){var t=Object(c.useState)({}),n=Object(u.a)(t,2),i=n[0],r=n[1],o=Object(c.useState)(S.getCollection()),s=Object(u.a)(o,2),b=s[0],m=s[1],h=Object(c.useState)({}),g=Object(u.a)(h,2),v=g[0],p=g[1],x=Object(c.useState)({}),A=Object(u.a)(x,2),D=A[0],y=A[1],C=Object(c.useState)(!0),E=Object(u.a)(C,2),T=E[0],k=E[1],_=Object(l.f)();function I(){m(S.getCollection())}function N(){_.push("/data")}return Object(c.useEffect)((function(){S.addChangeListener(I);var t=e.match.params.id;return 0===b.length?f().catch((function(){k(!1),p(S.getDataById(t)),y(S.getImageById(t))})):t&&(p(S.getDataById(t)),y(S.getImageById(t)),k(!1)),function(){return S.removeChangeListener(I)}}),[b.length,e.match.params.id]),Object(a.jsx)(a.Fragment,{children:T?Object(a.jsx)("div",{children:"Loading"}):Object(a.jsxs)("div",{className:"flex-row",children:[Object(a.jsx)("div",{className:"flex-img",children:Object(a.jsx)("div",{className:"ManageItem",children:Object(a.jsx)("div",{className:"ManageItem-imageWrapper",children:Object(a.jsx)("img",{src:D,alt:v.title,className:"ManageItem-image"})})})}),Object(a.jsxs)("div",{className:"flex-form",children:[Object(a.jsx)("br",{}),Object(a.jsx)("button",{onClick:N,children:"Back"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("h2",{children:"Edit Data"}),Object(a.jsx)(W,{errors:i,data:v,onChange:function(e){var t=e.target;p(Object(d.a)(Object(d.a)({},v),{},Object(q.a)({},t.name,t.value)))},onSubmit:function(e){var t;e.preventDefault(),function(){var e={};return v.title||(e.title="Title is required"),v.description||(e.description="Description is required"),r(e),0===Object.keys(e).length}()&&(t=v,j.dispatch({actionTypes:O.EDIT_DATA,item:t}),N())}})]})]})})});var z=function(){return Object(a.jsx)("div",{id:"app",className:"container-fluid",children:Object(a.jsx)(s.a,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",component:v}),Object(a.jsx)(l.a,{path:"/data",component:V}),Object(a.jsx)(l.a,{path:"/detail/:id",component:X}),Object(a.jsx)(l.a,{component:p})]})})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};n(49);o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(z,{})}),document.getElementById("root")),Q()}},[[50,1,2]]]);
//# sourceMappingURL=main.2df503d5.chunk.js.map