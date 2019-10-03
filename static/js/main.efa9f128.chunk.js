(window["webpackJsonpburger-builder"]=window["webpackJsonpburger-builder"]||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"burger-ingredient-styles__BreadBottom__KOKFz",BreadTop:"burger-ingredient-styles__BreadTop__1cQgQ",Seeds1:"burger-ingredient-styles__Seeds1__1a5B9",Seeds2:"burger-ingredient-styles__Seeds2__37Fs-",Meat:"burger-ingredient-styles__Meat__1XHUy",Cheese:"burger-ingredient-styles__Cheese__1Q9Xk",Salad:"burger-ingredient-styles__Salad__10bce",Bacon:"burger-ingredient-styles__Bacon__3zEFi"}},function(e,t,a){e.exports={BuildControl:"build-control-styles__BuildControl__2BNkn",Label:"build-control-styles__Label__2LW68",Less:"build-control-styles__Less__2sGAG",More:"build-control-styles__More__1pg-M"}},,,,,,function(e,t,a){e.exports={BuildControls:"build-controls-styles__BuildControls__1w8TX",OrderButton:"build-controls-styles__OrderButton__36QuD",enable:"build-controls-styles__enable__1YRi4"}},,,,function(e,t,a){e.exports={Burger:"burger-styles__Burger__1oxP7"}},function(e,t,a){e.exports={Modal:"modal-styles__Modal__2uZGs"}},,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),s=a.n(l),i=(a(20),function(e){return e.children}),c=function(e){return r.a.createElement(i,null,r.a.createElement("div",null,"Toolbar, SideDrawer, Backdrop"),r.a.createElement("main",{className:c.Content},e.children))},o=a(11),d=a(3),u=a(4),b=a(6),m=a(5),p=a(7),g=a(14),_=a(12),h=a.n(_),y=a(1),f=a.n(y),v=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:f.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:f.a.BreadTop},r.a.createElement("div",{className:f.a.Seeds1}),r.a.createElement("div",{className:f.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:f.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:f.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:f.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:f.a.Bacon});break;default:e=null}return e}}]),t}(n.Component),E=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(g.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(v,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:h.a.Burger},r.a.createElement(v,{type:"bread-top"}),t,r.a.createElement(v,{type:"bread-bottom"}))},O=a(8),B=a.n(O),k=a(2),w=a.n(k),j=function(e){return r.a.createElement("div",{className:w.a.BuildControl},r.a.createElement("div",{className:w.a.Label},e.label),r.a.createElement("button",{className:w.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:w.a.More,onClick:e.added},"More"))},P=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],S=function(e){return r.a.createElement("div",{className:B.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null," ",e.price.toFixed(2))),P.map((function(t){return r.a.createElement(j,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemove(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{disabled:!e.purchasable,className:B.a.OrderButton,onClick:e.ordered},"ORDER NOW"))},C=a(13),N=a.n(C),M=function(e){var t={transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"};return r.a.createElement("div",{className:N.a.Modal,style:t},e.children)},x=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),":"," ",e.ingredients[t])}));return r.a.createElement(i,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,"Continue to Checkout?"))};function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H={salad:.5,bacon:.4,cheese:1.3,meat:.7},A=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(b.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=D({},a.state.ingredients);n[e]=t;var r=H[e],l=a.state.totalPrice+r;a.setState({ingredients:n,totalPrice:l}),a.updatePurchaseState(n)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e];if(!(t<=0)){var n=t-1,r=D({},a.state.ingredients);r[e]=n;var l=H[e],s=a.state.totalPrice-l;a.setState({ingredients:r,totalPrice:s}),a.updatePurchaseState(r)}},a.purchaseHandler=function(){return a.setState({purchasing:!0})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=D({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(i,null,r.a.createElement(M,{show:this.state.purchasing},r.a.createElement(x,{ingredients:this.state.ingredients})),r.a.createElement(E,{ingredients:this.state.ingredients}),r.a.createElement(S,{ingredientAdded:this.addIngredientHandler,ingredientRemove:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,ordered:this.purchaseHandler,price:this.state.totalPrice}))}}]),t}(n.Component);var T=function(){return r.a.createElement("div",null,r.a.createElement(c,null,r.a.createElement(A,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[15,1,2]]]);
//# sourceMappingURL=main.efa9f128.chunk.js.map