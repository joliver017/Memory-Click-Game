(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Honda",image:"./assets/images/honda.png",clicked:!1},{id:2,name:"Toyota",image:"./assets/images/toyota.png",clicked:!1},{id:3,name:"Nissan",image:"./assets/images/nissan.png",clicked:!1},{id:4,name:"Subaru",image:"./assets/images/subaru.png",clicked:!1},{id:5,name:"Acura",image:"./assets/images/acura.png",clicked:!1},{id:6,name:"Mazda",image:"./assets/images/mazda.png",clicked:!1},{id:7,name:"Volkswagen",image:"./assets/images/volkswagen.png",clicked:!1},{id:8,name:"Mitsubishi",image:"./assets/images/mitsubishi.png",clicked:!1},{id:9,name:"BMW",image:"./assets/images/bmw.png",clicked:!1},{id:10,name:"Mercedes",image:"./assets/images/mercedes.png",clicked:!1}]},,,,,,,,function(e,a,s){e.exports=s(19)},,,,,,function(e,a,s){},function(e,a,s){},function(e,a,s){},function(e,a,s){},function(e,a,s){"use strict";s.r(a);var t=s(0),n=s.n(t),i=s(3),c=s.n(i),r=s(4),l=s(5),m=s(7),o=s(6),d=s(8);s(15);var u=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{key:e.id,alt:e.name,src:e.image,onClick:function(){return e.handleClick(e.id)}})))};s(16);var g=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)},h=s(1),k=(s(17),function(e){function a(){var e,s;Object(r.a)(this,a);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(s=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(n)))).state={cards:h,clickedCards:[],score:0,winlose:""},s.handleClick=function(e){var a=s.state.clickedCards;if(a.includes(e))return s.setState({clickedCards:[],score:0}),void s.setState({winlose:"You lose"});a.push(e),s.setState({score:s.state.score+1,winlose:""}),console.log(s.state);for(var t=0;t<h.length;t++){var n=Math.floor(Math.random()*(t+1)),i=[h[n],h[t]];h[t]=i[0],h[n]=i[1]}9!==s.state.score||s.setState({winlose:"You win!",clickedCards:[],score:0})},s}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(g,null,n.a.createElement("h1",{className:"header"},"Memory Click Game"),n.a.createElement("h2",{className:"subheader"},"Don't click the same image twice"),n.a.createElement("h2",{className:"subheader"},"Total = ",this.state.score),n.a.createElement("h1",{className:"header"},this.state.winlose),this.state.cards.map(function(a){return n.a.createElement(u,Object.assign({},a,{key:a.id,handleClick:e.handleClick}))}))}}]),a}(n.a.Component));s(18);c.a.render(n.a.createElement(k,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.267115f4.chunk.js.map