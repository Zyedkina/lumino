(this.webpackJsonplumino=this.webpackJsonplumino||[]).push([[0],{30:function(e,t,n){e.exports=n.p+"static/media/lumino.fd742692.png"},32:function(e,t,n){e.exports=n(80)},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),i=(n(37),n(6)),l=n(7),s=n(8),m=n(9),u=(n(38),n(39),a.Component,n(28)),p=n.n(u),d=(n(40),n(29)),f=n.n(d),b=n(30),h=n.n(b),g=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"ma4 mt5 center"},o.a.createElement(f.a,{className:"Tilt br2 shadow-2 center",options:{max:45},style:{display:"flex",alignItems:"center",height:150,width:150}},o.a.createElement("div",{className:"Tilt-inner pa1"},o.a.createElement("img",{src:h.a,alt:"logo"}))))}}]),n}(a.Component),v=(n(41),function(e){var t=e.url,n=e.box,a=t,r=n;return console.log("Face Box ",n),o.a.createElement("div",{className:"center ma"},o.a.createElement("div",{className:"center absolute mt2"},o.a.createElement("img",{id:"image",alt:"",src:a,width:"500px",height:"auto"}),o.a.createElement("div",{className:"bounding-box",style:{top:r.topRow,right:r.rightCol,bottom:r.bottomRow,left:r.leftCol}})))}),E=(n(42),function(e){var t=e.onChangeURL,n=e.onSubmit;return o.a.createElement("div",{className:""},o.a.createElement("p",{className:"fontA"},"This is an A.I. based face detection system. Give it a try."),o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"nice pa4 br3 center shadow-5"},o.a.createElement("input",{type:"text",className:"w-70 f4 pa2 center",placeholder:"Enter image (png or jpg) link",onChange:t}),o.a.createElement("button",{onClick:n,className:"fontRS w-30 grow f4 link ph3 pv2",style:{borderColor:"grey",backgroundColor:"#F17D16"}},"Detect"))))}),w=(a.Component,n(31)),x=new(n.n(w).a.App)({apiKey:"09f7fc57537a44df828b43038f1c4e57"}),y={number:{value:10,density:{enable:!0,value_area:1e3}}},C=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).calFaceBox=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("image"),a=Number(n.width),o=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*o,rightCol:a-t.right_col*a,bottomRow:o-t.bottom_row*o}},a.displayFaceBox=function(e){a.setState({box:e})},a.onChangeURL=function(e){a.setState({input:e.target.value})},a.onSubmit=function(){a.setState((function(e){return{imgURL:e.input,box:{}}})),x.models.predict("a403429f2ddf4b49b307e318f00e528b",a.state.input).then((function(e){return a.displayFaceBox(a.calFaceBox(e))})).catch((function(e){return console.log("Error Baby :( ",e)}))},a.state={input:"",imgURL:"",box:{}},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.imgURL;return o.a.createElement("div",{className:"App"},o.a.createElement(p.a,{className:"particles",params:y}),o.a.createElement(g,null),o.a.createElement(E,{onChangeURL:this.onChangeURL,onSubmit:this.onSubmit}),o.a.createElement(v,{box:this.state.box,url:e}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.0ac7b17f.chunk.js.map