(window["webpackJsonpburger-builder"]=window["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"burger-ingredient-styles__BreadBottom__KOKFz",BreadTop:"burger-ingredient-styles__BreadTop__1cQgQ",Seeds1:"burger-ingredient-styles__Seeds1__1a5B9",Seeds2:"burger-ingredient-styles__Seeds2__37Fs-",Meat:"burger-ingredient-styles__Meat__1XHUy",Cheese:"burger-ingredient-styles__Cheese__1Q9Xk",Salad:"burger-ingredient-styles__Salad__10bce",Bacon:"burger-ingredient-styles__Bacon__3zEFi"}},,,,function(e,t,n){e.exports={SideDrawer:"side-drawer-styles__SideDrawer__pj94I",Open:"side-drawer-styles__Open__1xhZ5",Close:"side-drawer-styles__Close__20X3P",Logo:"side-drawer-styles__Logo__1gwAb"}},function(e,t,n){e.exports={Input:"input-styles__Input__2ntgB",Label:"input-styles__Label__s9MxL",InputElement:"input-styles__InputElement__YDw1O",Invalid:"input-styles__Invalid__1fXCL",ValidationError:"input-styles__ValidationError__2Rmvp"}},,function(e,t,n){e.exports={BuildControl:"build-control-styles__BuildControl__2BNkn",Label:"build-control-styles__Label__2LW68",Less:"build-control-styles__Less__2sGAG",More:"build-control-styles__More__1pg-M"}},,,function(e,t,n){e.exports={Toolbar:"tool-bar-styles__Toolbar__TyBO9",Logo:"tool-bar-styles__Logo__3qSLu",DesktopOnly:"tool-bar-styles__DesktopOnly__THHkr"}},,,function(e,t,n){e.exports={NavigationItem:"navigation-item-styles__NavigationItem__1LEOV",active:"navigation-item-styles__active__3VYLK"}},,,function(e,t,n){e.exports={BuildControls:"build-controls-styles__BuildControls__1w8TX",OrderButton:"build-controls-styles__OrderButton__36QuD",enable:"build-controls-styles__enable__1YRi4"}},function(e,t,n){e.exports={Button:"button-styles__Button__3rset",Success:"button-styles__Success__3FL8B",Danger:"button-styles__Danger__3SPZ8"}},,,,,,,,,,,,,function(e,t,n){e.exports={Content:"layout-styles__Content__1vZyV"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"logo-styles__Logo__3R-Kh"}},function(e,t,n){e.exports={NavigationItems:"navigation-items-styles__NavigationItems__1NAZW"}},,function(e,t,n){e.exports={DrawerToggle:"drawer-toggle-styles__DrawerToggle__WW6U1"}},function(e,t,n){e.exports={Backdrop:"backdrop-styles__Backdrop__23L0O"}},function(e,t,n){e.exports={Burger:"burger-styles__Burger__1oxP7"}},function(e,t,n){e.exports={Modal:"modal-styles__Modal__2uZGs"}},,function(e,t,n){e.exports={Loader:"spinner-styles__Loader__2y119",load2:"spinner-styles__load2__sUbR9"}},function(e,t,n){e.exports={ContactData:"contact-data-styles__ContactData__3saUQ"}},function(e,t,n){e.exports={CheckoutSummary:"checkout-summery-styles__CheckoutSummary__Scyzn"}},function(e,t,n){e.exports={Order:"order-styles__Order__3-fgp"}},,function(e,t,n){e.exports=n(89)},,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(24),i=n.n(o),c=n(19),l=n(13),s=n(18),u=n(45),d=(n(70),n(17)),p=n(2),m=n(3),h=n(5),g=n(4),f=n(6),b=function(e){return e.children},_=n(46),y=n.n(_),E=n(26),v=n.n(E),O=n(47),C=n.n(O),j=n(48),k=n.n(j),w=function(e){return a.a.createElement("div",{className:k.a.Logo,style:{height:e.height}},a.a.createElement("img",{src:C.a,alt:"MyBurger"}))},S=n(49),N=n.n(S),D=n(29),I=n.n(D),T=function(e){return a.a.createElement("li",{className:I.a.NavigationItem},a.a.createElement(c.b,{exact:e.exact,to:e.link,activeClassName:I.a.active},e.children))},P=function(){return a.a.createElement("ul",{className:N.a.NavigationItems},a.a.createElement(T,{exact:!0,link:"/"},"Burger Builder"),a.a.createElement(T,{link:"/Orders"},"Orders"))},R=n(51),B=n.n(R),L=function(e){return a.a.createElement("div",{className:B.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},x=function(e){return a.a.createElement("header",{className:v.a.Toolbar},a.a.createElement(L,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:v.a.Logo},a.a.createElement(w,null)),a.a.createElement("nav",{className:v.a.DesktopOnly},a.a.createElement(P,null)))},H=n(20),A=n.n(H),F=n(52),U=n.n(F),M=function(e){return e.show?a.a.createElement("div",{className:U.a.Backdrop,onClick:e.clicked}," "):null},V=function(e){var t=[A.a.SideDrawer,A.a.Close];return e.open&&(t=[A.a.SideDrawer,A.a.Open]),a.a.createElement(b,null,a.a.createElement(M,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" ")},a.a.createElement("div",{className:A.a.Logo},a.a.createElement(w,null)),a.a.createElement("nav",null,a.a.createElement(P,null))))},G=function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return a.a.createElement(b,null,a.a.createElement(x,{drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(V,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:y.a.Content},this.props.children))}}]),t}(r.Component),z=n(12),W=n(60),q=n(53),Y=n.n(q),X=n(16),Z=n.n(X),Q=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=a.a.createElement("div",{className:Z.a.BreadBottom});break;case"bread-top":e=a.a.createElement("div",{className:Z.a.BreadTop},a.a.createElement("div",{className:Z.a.Seeds1}),a.a.createElement("div",{className:Z.a.Seeds2}));break;case"meat":e=a.a.createElement("div",{className:Z.a.Meat});break;case"cheese":e=a.a.createElement("div",{className:Z.a.Cheese});break;case"salad":e=a.a.createElement("div",{className:Z.a.Salad});break;case"bacon":e=a.a.createElement("div",{className:Z.a.Bacon});break;default:e=null}return e}}]),t}(r.Component),K=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(W.a)(Array(e.ingredients[t])).map((function(e,n){return a.a.createElement(Q,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=a.a.createElement("p",null,"Please start adding ingredients!")),a.a.createElement("div",{className:Y.a.Burger},a.a.createElement(Q,{type:"bread-top"}),t,a.a.createElement(Q,{type:"bread-bottom"}))},$=n(32),J=n.n($),ee=n(23),te=n.n(ee),ne=function(e){return a.a.createElement("div",{className:te.a.BuildControl},a.a.createElement("div",{className:te.a.Label},e.label),a.a.createElement("button",{className:te.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:te.a.More,onClick:e.added},"More"))},re=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ae=function(e){return a.a.createElement("div",{className:J.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null," ",e.price.toFixed(2))),re.map((function(t){return a.a.createElement(ne,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemove(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{disabled:!e.purchasable,className:J.a.OrderButton,onClick:e.ordered},"ORDER NOW"))},oe=n(54),ie=n.n(oe),ce=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentWillUpdate",value:function(){console.log("[Modal] WillUpdate")}},{key:"render",value:function(){var e={transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"};return a.a.createElement(b,null,a.a.createElement(M,{clicked:this.props.modalClosed,show:this.props.show}),a.a.createElement("div",{className:ie.a.Modal,style:e},this.props.children))}}]),t}(r.Component),le=n(33),se=n.n(le),ue=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[se.a.Button,se.a[e.bntType]].join(" "),onClick:e.clicked},e.children)},de=function(e){var t=Object.keys(e.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),":"," ",e.ingredients[t])}));return a.a.createElement(b,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: "),e.price.toFixed(2)),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(ue,{bntType:"Danger",clicked:e.purchaseCanceled},"CANCEL"),a.a.createElement(ue,{bntType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},pe=n(55),me=n.n(pe).a.create({baseURL:"https://burgerbuilder-c6548.firebaseio.com/"}),he=n(56),ge=n.n(he),fe=function(){return a.a.createElement("div",{className:ge.a.Loader},"Loading...")},be=function(e,t){return function(n){function r(){var e,t;Object(p.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=Object(h.a)(this,(e=Object(g.a)(r)).call.apply(e,[this].concat(a)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(f.a)(r,n),Object(m.a)(r,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return a.a.createElement(b,null,a.a.createElement(ce,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),a.a.createElement(e,this.props))}}]),r}(r.Component)};function _e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_e(n,!0).forEach((function(t){Object(z.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ve=function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1},n.purchaseHandler=function(){return n.setState({purchasing:!0})},n.purchaseCancelHandler=function(){return n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(n,!0).forEach((function(t){Object(z.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null,"Ingredients can't be loaded!"):a.a.createElement(fe,null);return this.props.ings&&(r=a.a.createElement(b,null,a.a.createElement(K,{ingredients:this.props.ings}),a.a.createElement(ae,{ingredientAdded:this.props.onIngredientAdded,ingredientRemove:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,price:this.props.price})),n=a.a.createElement(de,{ingredients:this.props.ings,purchaseCanceled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,price:this.props.price})),a.a.createElement(b,null,a.a.createElement(ce,{modalClosed:this.purchaseCancelHandler,show:this.state.purchasing},n),r)}}]),t}(r.Component),Oe=Object(l.b)((function(e){return{ings:e.burgerBuilde.ingredients,price:e.burgerBuilde.totalPrice,error:e.burgerBuilde.error,purchased:e.order.purchased}}),(function(e){return{onIngredientAdded:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onIngredientRemoved:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})},onInitIngredients:function(){return e((function(e){me.get("/ingredients.json").then((function(t){console.log("my object ".concat(t.data)),e(function(e){return{type:"SET_INGREDIENTS",ingredients:e}}(t.data))})).catch((function(t){e({type:"FETCH_INGREDIENTS_FAILD"})}))}))},onInitPurchase:function(){return e({type:"PURCHASE_INIT"})}}}))(be(ve,me)),Ce=n(57),je=n.n(Ce),ke=n(21),we=n.n(ke),Se=function(e){var t=null,n=null,r=[we.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&(n=a.a.createElement("p",null,"Please enter a valid value!"),r.push(we.a.Invalid)),e.elementType){case"input":t=a.a.createElement("input",Object.assign({className:r.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=a.a.createElement("textarea",Object.assign({className:r.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=a.a.createElement("select",{className:r.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=a.a.createElement("input",Object.assign({className:we.a.InputElement},e.elementConfig,{value:e.value,onChange:e.changed}))}return a.a.createElement("div",{className:we.a.Input},a.a.createElement("label",{className:we.a.Label},e.label),t,n)};function Ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ne(n,!0).forEach((function(t){Object(z.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ie=function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5,isNumeric:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},n.orderHandler=function(e){e.preventDefault();var t={};for(var r in n.state.orderForm)t[r]=n.state.orderForm[r].value;var a={ingredients:n.props.ings,price:n.props.price,orderData:t};n.props.onOrderBurger(a)},n.inputChangedHandler=function(e,t){var r=De({},n.state.orderForm),a=De({},r[t]);a.value=e.target.value,a.valid=n.checkValidity(a.value,a.validation),a.touched=!0,r[t]=a;var o=!0;for(var i in r)o=r[i].valid&&o;n.setState({orderForm:r,formIsValid:o})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"checkValidity",value:function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var r=a.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return a.a.createElement(Se,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})})),a.a.createElement(ue,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(r=a.a.createElement(fe,null)),a.a.createElement("div",{className:je.a.ContactData},a.a.createElement("h4",null,"Enter your Contact Data"),r)}}]),t}(r.Component),Te=Object(l.b)((function(e){return{ings:e.burgerBuilde.ingredients,price:e.burgerBuilde.totalPrice,loading:e.order.loading}}),(function(e){return{onOrderBurger:function(t){return e(function(e){return function(t){t({type:"PURCHASE_BURGER_START"}),me.post("/orders.json",e).then((function(n){t(function(e,t){return{type:"PURCHASE_BURGER_SUCCESS",orderId:e,orderData:t}}(n.data.name,e))})).catch((function(e){t(function(e){return{type:"PURCHASE_BURGER_FAIL",error:e}}(e))}))}}(t))}}}))(be(Ie,me)),Pe=n(58),Re=n.n(Pe),Be=function(e){return a.a.createElement("div",{className:Re.a.CheckoutSummary},a.a.createElement("h1",null,"We hope it tastes well!"),a.a.createElement("div",{style:{width:"100%",margin:"auto"}},a.a.createElement(K,{ingredients:e.ingredients})),a.a.createElement(ue,{bntType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),a.a.createElement(ue,{bntType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},Le=function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).checkoutCancelledHandler=function(){return n.props.history.goBack()},n.checkoutContinuedHandler=function(){return n.props.history.replace("/checkout/contact-data")},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=a.a.createElement(d.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?a.a.createElement(d.a,{to:"/"}):null;e=a.a.createElement("div",null,t,a.a.createElement(Be,{checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler,ingredients:this.props.ings}),a.a.createElement(d.b,{path:"".concat(this.props.match.path,"/contact-data"),component:Te}))}return e}}]),t}(r.Component),xe=Object(l.b)((function(e){return{ings:e.burgerBuilde.ingredients,purchased:e.order.purchased}}))(Le),He=n(59),Ae=n.n(He),Fe=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var r=t.map((function(e){return a.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")}));return a.a.createElement("div",{className:Ae.a.Order},a.a.createElement("p",null,"Ingredients: ",r),a.a.createElement("p",null,"Price: ",a.a.createElement("strong",null,"USD ",parseFloat(e.price).toFixed(2))))},Ue=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchOrders()}},{key:"render",value:function(){var e=a.a.createElement(fe,null);return this.props.loading||(e=this.props.Orders.map((function(e){return a.a.createElement(Fe,{key:e.id,ingredients:e.ingredients,price:e.price})}))),a.a.createElement("div",null,e)}}]),t}(r.Component),Me=Object(l.b)((function(e){return{Orders:e.order.orders,loading:e.order.loading}}),(function(e){return{onFetchOrders:function(){return e((function(e){e({type:"FETCH_ORDERS_START"}),me.get("/orders.json").then((function(t){var n=[];for(var r in t.data)n.push(ye({},t.data[r],{id:r}));e({type:"FETCH_ORDERS_SUCCESS",orders:n})})).catch((function(t){e({type:"FETCH_ORDERS_FAIL",error:t})}))}))}}}))(be(Ue,me));var Ve=function(){return a.a.createElement("div",null,a.a.createElement(G,null,a.a.createElement(d.d,null,a.a.createElement(d.b,{path:"/checkout",component:xe}),a.a.createElement(d.b,{path:"/orders",component:Me}),a.a.createElement(d.b,{exact:!0,path:"/",component:Oe}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ze=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ge(n,!0).forEach((function(t){Object(z.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ge(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t)},We={ingredients:null,totalPrice:4,error:!1},qe={salad:.5,bacon:.4,cheese:1.3,meat:.7},Ye=function(e,t){var n=Object(z.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:ze(e.ingredients,n),totalPrice:e.totalPrice+qe[t.ingredientName]};return ze(e,r)},Xe=function(e,t){var n=Object(z.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:ze(e.ingredients,n),totalPrice:e.totalPrice-qe[t.ingredientName]};return ze(e,r)},Ze=function(e,t){return ze(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1})},Qe=function(e,t){return ze(e,{error:!0})},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return Ye(e,t);case"REMOVE_INGREDIENT":return Xe(e,t);case"SET_INGREDIENTS":return Ze(e,t);case"FETCH_INGREDIENTS_FAILD":return Qe(e);default:return e}},$e={orders:[],loading:!1,purchased:!1},Je=function(e,t){return ze(e,{purchased:!1})},et=function(e,t){return ze(e,{loading:!0})},tt=function(e,t){var n=ze(t.orderData,{id:t.orderId});return ze(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})},nt=function(e,t){return ze(e,{loading:!1})},rt=function(e,t){return ze(e,{loading:!0})},at=function(e,t){return ze(e,{orders:t.orders,loading:!1})},ot=function(e,t){return ze(e,{loading:!1})},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PURCHASE_INIT":return Je(e);case"PURCHASE_BURGER_START":return et(e);case"PURCHASE_BURGER_SUCCESS":return tt(e,t);case"PURCHASE_BURGER_FAIL":return nt(e);case"FETCH_ORDERS_START":return rt(e);case"FETCH_ORDERS_SUCCESS":return at(e,t);case"FETCH_ORDERS_FAIL":return ot(e);default:return e}},ct=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,lt=Object(s.c)({burgerBuilde:Ke,order:it}),st=Object(s.e)(lt,ct(Object(s.a)(u.a))),ut=a.a.createElement(l.a,{store:st},a.a.createElement(c.a,{basename:"/react-burger-builder-app"},a.a.createElement(Ve,null)));i.a.render(ut,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[61,1,2]]]);
//# sourceMappingURL=main.09cca4ad.chunk.js.map