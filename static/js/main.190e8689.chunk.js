(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,i,t){},,,,,,,function(e,i,t){},function(e,i,t){},,,,,,,,,,function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},,function(e,i,t){"use strict";t.r(i),t.d(i,"mainCategory",(function(){return M})),t.d(i,"listItems",(function(){return $})),t.d(i,"cartItems",(function(){return G}));var a=t(1),n=t.n(a),s=t(10),c=t.n(s),r=(t(23),t(5)),o=t(3),d=t.p+"static/media/cart.b590ce36.svg",u=(t(24),t(0)),l=function(){return Object(u.jsxs)("div",{className:"navbar",children:[Object(u.jsx)(r.b,{to:"/",children:Object(u.jsx)("h1",{className:"navbar-header",children:"Haman"})}),Object(u.jsxs)("ul",{className:"navbar-list",children:[Object(u.jsx)(r.b,{to:"/",children:Object(u.jsx)("li",{className:"navbar-home",children:"Home"})}),Object(u.jsx)(r.b,{to:"/categories",children:Object(u.jsx)("li",{className:"navbar-shop",children:"Shop"})}),Object(u.jsx)(r.b,{to:"/cart",children:Object(u.jsx)("li",{children:Object(u.jsx)("img",{src:d,alt:"Cart",className:"navbar-cart"})})})]})]})},m=(t(34),t(35),function(e){var i=e.title,t=e.className,a=e.onClick;return Object(u.jsx)("button",{onClick:a,className:t,children:i})}),j=function(){return Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)(l,{}),Object(u.jsx)("div",{className:"home-content-container",children:Object(u.jsxs)("div",{className:"home-content",children:[Object(u.jsx)("h3",{className:"home-content-header",children:"Find yourself"}),Object(u.jsx)(r.b,{to:"/categories",children:Object(u.jsx)(m,{title:"Shop Now",className:"shop-button"})})]})})]})},p=t(7),b=(t(36),t.p+"static/media/remove.909964ca.svg"),h=t(8),g=(t(15),function(e){e.title;var i=Object(a.useState)([]),t=Object(p.a)(i,2),n=t[0],s=t[1],c=Object(a.useState)(0),r=Object(p.a)(c,2),o=r[0],d=r[1];Object(a.useEffect)((function(){s(G)}),[]),Object(a.useEffect)((function(){var e=n.map((function(e){return Number(e.targetItem.price)*e.itemQuantity})).reduce((function(e,i){return e+i}),0);d(e)}),[n]);var j=function(e){var i=n.find((function(i){return i.targetItem.uniqid===e.target.parentNode.id})),t=G.filter((function(e){return e!==i})),a=G.indexOf(i);G.splice(a),s(t)};h.a.configure();return n.length>0?Object(u.jsxs)("div",{className:"cart",children:[Object(u.jsx)(l,{}),Object(u.jsx)("div",{className:"cart-header-container",children:Object(u.jsx)("h3",{className:"cart-header",children:"Cart"})}),Object(u.jsxs)("div",{className:"cart-main",children:[n.map((function(e){return Object(u.jsxs)("div",{className:"cart-content-container",children:[Object(u.jsxs)("div",{className:"name-price-container",children:[Object(u.jsx)("h3",{className:"item-name",children:e.targetItem.name}),Object(u.jsxs)("h3",{className:"item-price-cart",children:["$",e.targetItem.price*e.itemQuantity]})]}),Object(u.jsxs)("div",{className:"remove-quantity-container",children:[Object(u.jsx)("button",{className:"remove-item",id:e.targetItem.uniqid+1,onClick:j,children:Object(u.jsx)("img",{src:b,alt:"Remove icon",id:e.targetItem.uniqid})}),Object(u.jsx)("h3",{className:"item-quantity",children:e.itemQuantity})]})]},e.id)})),Object(u.jsx)("hr",{className:"hr"}),Object(u.jsxs)("h3",{className:"total",children:["Total: $",o]}),Object(u.jsx)(m,{className:"shop-button cart-button",title:"Checkout",onClick:function(){return h.a.success("Your order is confirmed.",{position:h.a.POSITION.BOTTOM_RIGHT}),s([]),G.splice(0,G.length)}})]})]}):Object(u.jsxs)("div",{className:"cart",children:[Object(u.jsx)(l,{}),Object(u.jsx)("div",{className:"cart-header-container",children:Object(u.jsx)("h3",{className:"cart-header",children:"Cart"})}),Object(u.jsx)("h3",{className:"empty-message",children:"Cart is empty."})]})}),x=(t(16),t(37),function(e){var i=e.value,t=e.onChange;return Object(u.jsx)("div",{className:"search-bar-container",children:Object(u.jsx)("input",{id:i,onChange:t,type:"text",className:"search-bar",placeholder:"Search an item"})})}),O=(t(38),t(39),function(e){var i=e.item;return Object(u.jsxs)("div",{className:"item-card-container",children:[Object(u.jsx)("div",{className:"item-card-image-container",children:Object(u.jsx)("img",{src:i.img,alt:i.name})}),Object(u.jsxs)("div",{className:"item-card-info",children:[Object(u.jsxs)("div",{className:"item-name-brand-container",children:[Object(u.jsx)("h2",{className:"item-name",children:i.name}),Object(u.jsx)("h4",{className:"item-brand",children:i.brand})]}),Object(u.jsxs)("p",{className:"item-price",children:["$",i.price]})]})]})}),v=function(e){var i,t=e.match,n=Object(a.useState)([]),s=Object(p.a)(n,2),c=s[0],o=s[1],d=(i=t.params.category).charAt(0).toUpperCase()+i.slice(1),m="Dresses"===d?M.find((function(e){return"dresses"===e.name})).items:"Hoodies"===d?M.find((function(e){return"hoodies"===e.name})).items:"Shirts"===d?M.find((function(e){return"shirts"===e.name})).items:"Bags"===d?M.find((function(e){return"bags"===e.name})).items:"Sunglasses"===d?M.find((function(e){return"sunglasses"===e.name})).items:[],j=function(e){var i;i=e?e.target.value:"";var t=m.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));o(t)};Object(a.useEffect)(j,[]);var b=c.length>0?c:m,h=!(0===m.length),g=b.map((function(e){return Object(u.jsx)(r.b,{to:"/categories/".concat(t.params.category,"/").concat(e.id),prototype:e,children:Object(u.jsx)(O,{item:e},e.id)},e.id)})),v=h?g:Object(u.jsx)("h3",{className:"no-item-message",children:"There is no item in this category."});return Object(u.jsxs)("div",{children:[Object(u.jsx)(l,{}),Object(u.jsx)(x,{id:"search-bar",onChange:j}),Object(u.jsx)("div",{className:"categories-header-container",children:Object(u.jsx)("h2",{className:"categories-header",children:d})}),Object(u.jsx)("div",{className:"cards-container",children:v})]})},f=function(){return Object(u.jsxs)("div",{className:"categories",children:[Object(u.jsx)(l,{}),Object(u.jsx)("div",{className:"categories-header-container",children:Object(u.jsx)("h2",{className:"categories-header",children:"Categories"})}),Object(u.jsx)("div",{className:"categories-main",children:Object(u.jsx)("div",{className:"categories-content-container",children:$.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:"categories-subheader",children:e.name}),Object(u.jsx)("ul",{className:"categories-ul",children:e.subheaders.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/categories/".concat(e.category.toLowerCase()),children:e.category})},e.id)}))})]},e.id)}))})})]})},q=(t(40),t(41),t.p+"static/media/increase.63d6dee6.svg"),N=t.p+"static/media/decrease.9ff82a7a.svg",y=function(e){var i=e.quantity,t=e.increaseOnClick,a=e.decreaseOnClick;return Object(u.jsxs)("div",{className:"product-count",children:[Object(u.jsx)("button",{onClick:a,children:Object(u.jsx)("img",{src:N,alt:"increase"})}),Object(u.jsx)("div",{className:"product-quantity",children:i}),Object(u.jsx)("button",{onClick:t,children:Object(u.jsx)("img",{src:q,alt:"increase"})})]})},C=function(e){var i=e.match,t=Object(a.useState)(1),n=Object(p.a)(t,2),s=n[0],c=n[1],r=G.length>0?G[G.length-1].id+1:1,o=Object(a.useState)(r),d=Object(p.a)(o,2),j=d[0],b=d[1],g=M.find((function(e){return e.name===i.params.category?e:null})).items.find((function(e){return e.id===i.params.id?e:null})),x={targetItem:g,itemQuantity:s,id:r},v=!G.find((function(e){return e===x}));h.a.configure();return Object(u.jsxs)("div",{children:[Object(u.jsx)(l,{}),Object(u.jsxs)("div",{className:"product",children:[Object(u.jsxs)("div",{className:"product-content",children:[Object(u.jsx)(O,{item:g},g.id),Object(u.jsx)("p",{className:"product-description",children:g.description})]}),Object(u.jsxs)("div",{className:"product-bottom",children:[Object(u.jsx)("div",{className:"product-quantity-container",children:Object(u.jsx)(y,{quantity:s,decreaseOnClick:function(){s>1&&c(s-1)},increaseOnClick:function(){s<20&&c(s+1)}})}),Object(u.jsx)("div",{className:"add-to-cart-button-container",children:Object(u.jsx)(m,{title:"Add to Cart",className:"add-to-cart-button",onClick:function(){return h.a.success("".concat(g.name," added to cart."),{position:h.a.POSITION.BOTTOM_RIGHT}),x.id=j,b(j+1),v?G.push(x):null}})})]})]})]})},D=function(){return Object(u.jsx)(r.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",exact:!0,component:j}),Object(u.jsx)(o.a,{path:"/cart",exact:!0,component:g}),Object(u.jsx)(o.a,{path:"/categories",exact:!0,component:f}),Object(u.jsx)(o.a,{path:"/categories/:category",exact:!0,component:v}),Object(u.jsx)(o.a,{path:"/categories/:category/:id",exact:!0,component:C})]})})},S=t(2),I=t.n(S),L=t.p+"static/media/dress-1.9079cee2.png",k=t.p+"static/media/dress-2.c600034d.png",U=t.p+"static/media/dress-3.e4293940.png",H=t.p+"static/media/dress-4.2057a7f9.png",T=t.p+"static/media/dress-5.2572e6fa.png",B=t.p+"static/media/dress-6.1eb86ab6.png",F=t.p+"static/media/hoodie-1.6e44acdf.png",w=t.p+"static/media/hoodie-2.1139849a.png",R=t.p+"static/media/bag-1.14d1093b.png",E=t.p+"static/media/bag-2.d22a47c6.png",Q=t.p+"static/media/sunglasses-1.ba0a93f8.png",A=t.p+"static/media/sunglasses-2.a0255b3f.png",M=[{name:"dresses",id:I()(),items:[{name:"Dress 1",brand:"Dress Factory",price:"2.00",img:L,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",id:"1",uniqid:I()()},{name:"Dress 2",brand:"Dress Factory",price:"3.00",img:k,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",id:"2",uniqid:I()()},{name:"Dress 3",brand:"Dress Company",price:"3.00",img:U,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",id:"3",uniqid:I()()},{name:"Dress 4",brand:"Dress Factory",price:"3.00",img:H,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",id:"4",uniqid:I()()},{name:"Dress 5",brand:"Dress Company",price:"3.00",img:T,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",id:"5",uniqid:I()()},{name:"Dress 6",brand:"Dress Factory",price:"3.00",img:B,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",id:"6",uniqid:I()()}]},{name:"hoodies",id:I()(),items:[{name:"Hoodie 1",brand:"Hoodie Company",price:"4.00",img:F,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",id:"1",uniqid:I()()},{name:"Hoodie 2",brand:"Hoodie Factory",price:"24.00",img:w,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",id:"2",uniqid:I()()}]},{name:"shirts",id:"1",items:[]},{name:"bags",id:I()(),items:[{name:"Blue Bag",brand:"Blueos",price:"2.00",img:R,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",id:"1",uniqid:I()()},{name:"Red Bag",brand:"Redos",price:"3.00",img:E,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",id:"2",uniqid:I()()}]},{name:"sunglasses",id:I()(),items:[{name:"Sunglasses 1",brand:"Sunglasses Company",price:"2.00",img:Q,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",id:"1",uniqid:I()()},{name:"Sunglasses 2",brand:"Sunglasses Factory",price:"3.00",img:A,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",id:"2",uniqid:I()()}]}],$=[{name:"Clothes",id:I()(),subheaders:[{category:"Dresses",id:I()()},{category:"Hoodies",id:I()()},{category:"Shirts",id:I()()}]},{name:"Accesorries",id:I()(),subheaders:[{category:"Bags",id:I()()},{category:"Sunglasses",id:I()()}]}],G=[];c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root"))}],[[43,1,2]]]);
//# sourceMappingURL=main.190e8689.chunk.js.map