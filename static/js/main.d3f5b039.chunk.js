(window["webpackJsonpburger-builder"]=window["webpackJsonpburger-builder"]||[]).push([[0],{11:function(e,t,n){e.exports={BreadBottom:"burger-ingredient-styles__BreadBottom__KOKFz",BreadTop:"burger-ingredient-styles__BreadTop__1cQgQ",Seeds1:"burger-ingredient-styles__Seeds1__1a5B9",Seeds2:"burger-ingredient-styles__Seeds2__37Fs-",Meat:"burger-ingredient-styles__Meat__1XHUy",Cheese:"burger-ingredient-styles__Cheese__1Q9Xk",Salad:"burger-ingredient-styles__Salad__10bce",Bacon:"burger-ingredient-styles__Bacon__3zEFi"}},14:function(e,t,n){e.exports={SideDrawer:"side-drawer-styles__SideDrawer__pj94I",Open:"side-drawer-styles__Open__1xhZ5",Close:"side-drawer-styles__Close__20X3P",Logo:"side-drawer-styles__Logo__1gwAb"}},16:function(e,t,n){e.exports={BuildControl:"build-control-styles__BuildControl__2BNkn",Label:"build-control-styles__Label__2LW68",Less:"build-control-styles__Less__2sGAG",More:"build-control-styles__More__1pg-M"}},17:function(e,t,n){e.exports={Toolbar:"tool-bar-styles__Toolbar__TyBO9",Logo:"tool-bar-styles__Logo__3qSLu",DesktopOnly:"tool-bar-styles__DesktopOnly__THHkr"}},20:function(e,t,n){e.exports={NavigationItem:"navigation-item-styles__NavigationItem__1LEOV",active:"navigation-item-styles__active__3VYLK"}},21:function(e,t,n){e.exports={BuildControls:"build-controls-styles__BuildControls__1w8TX",OrderButton:"build-controls-styles__OrderButton__36QuD",enable:"build-controls-styles__enable__1YRi4"}},22:function(e,t,n){e.exports={Button:"button-styles__Button__3rset",Success:"button-styles__Success__3FL8B",Danger:"button-styles__Danger__3SPZ8"}},36:function(e,t,n){e.exports={Content:"layout-styles__Content__1vZyV"}},37:function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},38:function(e,t,n){e.exports={Logo:"logo-styles__Logo__3R-Kh"}},39:function(e,t,n){e.exports={NavigationItems:"navigation-items-styles__NavigationItems__1NAZW"}},40:function(e,t,n){e.exports={DrawerToggle:"drawer-toggle-styles__DrawerToggle__WW6U1"}},41:function(e,t,n){e.exports={Backdrop:"backdrop-styles__Backdrop__23L0O"}},43:function(e,t,n){e.exports={Burger:"burger-styles__Burger__1oxP7"}},44:function(e,t,n){e.exports={Modal:"modal-styles__Modal__2uZGs"}},46:function(e,t,n){e.exports={Loader:"spinner-styles__Loader__2y119",load2:"spinner-styles__load2__sUbR9"}},47:function(e,t,n){e.exports={CheckoutSummary:"checkout-summery-styles__CheckoutSummary__Scyzn"}},51:function(e,t,n){e.exports=n(79)},56:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(35),c=n.n(l),s=n(19),o=(n(56),n(12)),i=n(4),u=n(5),d=n(7),m=n(6),p=n(8),h=function(e){return e.children},_=n(36),g=n.n(_),b=n(17),y=n.n(b),f=n(37),E=n.n(f),v=n(38),k=n.n(v),C=function(e){return r.a.createElement("div",{className:k.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:E.a,alt:"MyBurger"}))},O=n(39),w=n.n(O),j=n(20),N=n.n(j),S=function(e){return r.a.createElement("li",{className:N.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?N.a.active:null},e.children))},B=function(){return r.a.createElement("ul",{className:w.a.NavigationItems},r.a.createElement(S,{link:"/",active:!0},"Burger Builder"),r.a.createElement(S,{link:"/checkout"},"Checkout"))},D=n(40),L=n.n(D),T=function(e){return r.a.createElement("div",{className:L.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},x=function(e){return r.a.createElement("header",{className:y.a.Toolbar},r.a.createElement(T,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:y.a.Logo},r.a.createElement(C,null)),r.a.createElement("nav",{className:y.a.DesktopOnly},r.a.createElement(B,null)))},H=n(14),P=n.n(H),I=n(41),M=n.n(I),A=function(e){return e.show?r.a.createElement("div",{className:M.a.Backdrop,onClick:e.clicked}," "):null},W=function(e){var t=[P.a.SideDrawer,P.a.Close];return e.open&&(t=[P.a.SideDrawer,P.a.Open]),r.a.createElement(h,null,r.a.createElement(A,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:P.a.Logo},r.a.createElement(C,null)),r.a.createElement("nav",null,r.a.createElement(B,null))))},U=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(x,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(W,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:g.a.Content},this.props.children))}}]),t}(a.Component),R=n(42),F=n(50),q=n(43),Y=n.n(q),Z=n(11),z=n.n(Z),K=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:z.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:z.a.BreadTop},r.a.createElement("div",{className:z.a.Seeds1}),r.a.createElement("div",{className:z.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:z.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:z.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:z.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:z.a.Bacon});break;default:e=null}return e}}]),t}(a.Component),Q=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(F.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(K,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:Y.a.Burger},r.a.createElement(K,{type:"bread-top"}),t,r.a.createElement(K,{type:"bread-bottom"}))},X=n(21),G=n.n(X),V=n(16),J=n.n(V),$=function(e){return r.a.createElement("div",{className:J.a.BuildControl},r.a.createElement("div",{className:J.a.Label},e.label),r.a.createElement("button",{className:J.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:J.a.More,onClick:e.added},"More"))},ee=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],te=function(e){return r.a.createElement("div",{className:G.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null," ",e.price.toFixed(2))),ee.map((function(t){return r.a.createElement($,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemove(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{disabled:!e.purchasable,className:G.a.OrderButton,onClick:e.ordered},"ORDER NOW"))},ne=n(44),ae=n.n(ne),re=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentWillUpdate",value:function(){console.log("[Modal] WillUpdate")}},{key:"render",value:function(){var e={transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"};return r.a.createElement(h,null,r.a.createElement(A,{clicked:this.props.modalClosed,show:this.props.show}),r.a.createElement("div",{className:ae.a.Modal,style:e},this.props.children))}}]),t}(a.Component),le=n(22),ce=n.n(le),se=function(e){return r.a.createElement("button",{className:[ce.a.Button,ce.a[e.bntType]].join(" "),onClick:e.clicked},e.children)},oe=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),":"," ",e.ingredients[t])}));return r.a.createElement(h,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: "),e.price.toFixed(2)),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(se,{bntType:"Danger",clicked:e.purchaseCanceled},"CANCEL"),r.a.createElement(se,{bntType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},ie=n(45),ue=n.n(ie).a.create({baseURL:"https://burgerbuilder-c6548.firebaseio.com/"}),de=n(46),me=n.n(de),pe=function(){return r.a.createElement("div",{className:me.a.Loader},"Loading...")};function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(n,!0).forEach((function(t){Object(R.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge={salad:.5,bacon:.4,cheese:1.3,meat:.7},be=function(e,t){return function(n){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(p.a)(a,n),Object(u.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(re,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),a}(a.Component)}(function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:4,purchasable:!1,purchasing:!1,loading:!1,error:!1},n.addIngredientHandler=function(e){var t=n.state.ingredients[e]+1,a=_e({},n.state.ingredients);a[e]=t;var r=ge[e],l=n.state.totalPrice+r;n.setState({ingredients:a,totalPrice:l}),n.updatePurchaseState(a)},n.removeIngredientHandler=function(e){var t=n.state.ingredients[e];if(!(t<=0)){var a=t-1,r=_e({},n.state.ingredients);r[e]=a;var l=ge[e],c=n.state.totalPrice-l;n.setState({ingredients:r,totalPrice:c}),n.updatePurchaseState(r)}},n.purchaseHandler=function(){return n.setState({purchasing:!0})},n.purchaseCancelHandler=function(){return n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.history.push("/checkout")},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props),ue.get("/ingredients.json").then((function(t){e.setState({ingredients:t.data})})).catch((function(t){e.setState({error:!0})}))}},{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=_e({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.state.error?r.a.createElement("p",null,"Ingredients can't be loaded!"):r.a.createElement(pe,null);return this.state.ingredients&&(a=r.a.createElement(h,null,r.a.createElement(Q,{ingredients:this.state.ingredients}),r.a.createElement(te,{ingredientAdded:this.addIngredientHandler,ingredientRemove:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,ordered:this.purchaseHandler,price:this.state.totalPrice})),n=r.a.createElement(oe,{ingredients:this.state.ingredients,purchaseCanceled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,price:this.state.totalPrice})),this.state.loading&&(n=r.a.createElement(pe,null)),r.a.createElement(h,null,r.a.createElement(re,{modalClosed:this.purchaseCancelHandler,show:this.state.purchasing},n),a)}}]),t}(a.Component),ue),ye=n(47),fe=n.n(ye),Ee=function(e){return r.a.createElement("div",{className:fe.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it tastes well!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(Q,{ingredients:e.ingredients})),r.a.createElement(se,{bntType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),r.a.createElement(se,{bntType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},ve=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:1,meat:1,cheese:1,bacon:1}},n.checkoutCancelledHandler=function(){n.props.history.goBack()},n.checkoutContinuedHandler=function(){n.props.history.replace("/checkout/contact-data")},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ee,{checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutCancelledHandler,ingredients:this.state.ingredients}))}}]),t}(a.Component);var ke=function(){return r.a.createElement("div",null,r.a.createElement(U,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/checkout",component:ve}),r.a.createElement(o.a,{exact:!0,path:"/",component:be}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=r.a.createElement(s.a,null,r.a.createElement(ke,null));c.a.render(Ce,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.d3f5b039.chunk.js.map