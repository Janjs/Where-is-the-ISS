(this["webpackJsonpfind-the-iss"]=this["webpackJsonpfind-the-iss"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var i=n(2),r=n.n(i),o=n(26),c=n.n(o),s=(n(34),n(14)),a=(n(35),n(15));function u(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var h=n(0),f={container:{margin:0},title:{color:"#ffffff",marginBottom:0},map:{fill:"#0b3d91"}},d=function(){var e=Object(i.useState)({}),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(i.useState)(!0),c=Object(s.a)(o,2),d=c[0],l=c[1];Object(i.useEffect)((function(){fetch("http://api.open-notify.org/iss-now.json").then((function(e){return e.json()})).then((function(e){return r(e.iss_position)})).catch((function(e){return console.error(e)})).finally((function(){return l(!1)}))}),[]),console.log(n);var j=function(){var e=Object(i.useState)(u()),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){function e(){r(u())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),p=j.height,b=j.width;return Object(h.jsxs)("div",{style:f.container,className:"App",children:[Object(h.jsx)("h1",{style:f.title,children:"Here is where the ISS \ud83d\udef0\ufe0f is flying over"}),!d&&Object(h.jsx)("div",{children:Object(h.jsxs)(a.ComposableMap,{width:b,height:p-100,children:[Object(h.jsx)(a.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json",style:f.map,children:function(e){return e.geographies.map((function(e){return Object(h.jsx)(a.Geography,{geography:e},e.rsmKey)}))}}),Object(h.jsx)(a.Marker,{coordinates:[n.longitude,n.latitude],children:Object(h.jsx)("text",{textAnchor:"middle",fontSize:16,children:"\ud83d\udef0\ufe0f"})})]})})]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),i(e),r(e),o(e),c(e)}))};c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(d,{})}),document.getElementById("root")),l()}},[[44,1,2]]]);
//# sourceMappingURL=main.7cb28e4a.chunk.js.map