!function(e){var n={};function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(a,o,function(n){return e[n]}.bind(null,o));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){},function(e,n,t){"use strict";t.r(n),t.d(n,"checker",(function(){return h})),t.d(n,"removeListener",(function(){return f})),t.d(n,"dashoffset",(function(){return y}));t(0);function a(){food.value+=30,clean.value-=20,y(food),y(clean),h(clean),h(food)}function o(){clean.value+=40,happiness.value-=20,y(clean),y(happiness),h(happiness),h(clean)}function l(){happiness.value+=15,food.value-=10,y(food),y(happiness),h(food),h(happiness)}function i(){health.value+=30,money.value-=20,y(money),y(health),h(money),h(health)}function d(){socialization.value+=40,food.value+=10,health.value-=10,money.value-=20,y(food),y(health),y(socialization),y(money),h(health),h(money),h(socialization),h(food)}function c(){money.value+=50,food.value-=10,health.value-=10,socialization.value-=20,y(money),y(food),y(health),y(socialization),h(food),h(money),h(health),h(socialization)}function r(){food.value+=20,money.value-=20,y(food),y(money),h(money),h(food)}function s(){money.value+=100,happiness.value+=100,health.value-=100,socialization.value+=20,y(money),y(happiness),y(socialization),y(health),h(health),h(socialization),h(happiness),h(money)}document.getElementById("start").addEventListener("click",(function(){let e=document.getElementsByTagName("select")[0].value;window.food=new u("food"),window.clean=new u("clean"),window.happiness=new u("happiness"),window.health=new u("health"),window.socialization=new u("socialization"),window.money=new u("money"),"easy"==e?(food.value=100*Math.random(),clean.value=100*Math.random(),happiness.value=100*Math.random(),health.value=100*Math.random(),socialization.value=100*Math.random(),money.value=100*Math.random(),food.maxValue=100,clean.maxValue=100,happiness.maxValue=100,health.maxValue=100,socialization.maxValue=100,money.maxValue=100,window.food_decrease=setInterval(v,5e3,food),window.clean_decrease=setInterval(v,5e3,clean),window.happiness_decrease=setInterval(v,5e3,happiness),window.health_decrease=setInterval(v,5e3,health),window.socialization_decrease=setInterval(v,5e3,socialization),window.money_decrease=setInterval(v,5e3,money),y(food),y(clean),y(happiness),y(socialization),y(health),y(money)):"hard"==e&&(food.value=70*Math.random(),clean.value=70*Math.random(),happiness.value=70*Math.random(),health.value=70*Math.random(),socialization.value=70*Math.random(),money.value=70*Math.random(),food.maxValue=70,clean.maxValue=70,happiness.maxValue=70,health.maxValue=70,socialization.maxValue=70,money.maxValue=70,window.food_decrease=setInterval(m,5e3,food),window.clean_decrease=setInterval(m,5e3,clean),window.happiness_decrease=setInterval(m,5e3,happiness),window.health_decrease=setInterval(m,5e3,health),window.socialization_decrease=setInterval(m,5e3,socialization),window.money_decrease=setInterval(m,5e3,money),y(food),y(clean),y(happiness),y(socialization),y(health),y(money));document.getElementById("feed").addEventListener("click",a),document.getElementById("buy_food").addEventListener("click",r),document.getElementById("wash").addEventListener("click",o),document.getElementById("play").addEventListener("click",l),document.getElementById("treat").addEventListener("click",i),document.getElementById("drink").addEventListener("click",d),document.getElementById("work").addEventListener("click",c),document.getElementById("business").addEventListener("click",s)}));class u{constructor(e){this.id=e,this.r=+document.getElementById(e).getAttribute("r")}}function m(e){e.value-=5,y(e),h(e)}function v(e){e.value-=3,y(e),h(e)}function h(e){+e.value<=0&&(alert("Game over!"),clearInterval(food_decrease),clearInterval(clean_decrease),clearInterval(happiness_decrease),clearInterval(health_decrease),clearInterval(socialization_decrease),clearInterval(money_decrease),f()),+e.value>=100&&(e.value=100)}function f(){document.getElementById("feed").removeEventListener("click",a),document.getElementById("buy_food").removeEventListener("click",r),document.getElementById("wash").removeEventListener("click",o),document.getElementById("play").removeEventListener("click",l),document.getElementById("treat").removeEventListener("click",i),document.getElementById("drink").removeEventListener("click",d),document.getElementById("work").removeEventListener("click",c),document.getElementById("business").removeEventListener("click",s)}function y(e){let n=2*e.r*Math.PI,t=(e.maxValue-e.value)/e.maxValue*n,a=e.id+"_container",o=e.value/e.maxValue*100;if(o=o.toFixed(),o=o<=0?0:o>=100?100:o,o+="%",t<0)document.getElementById(e.id).style.strokeDashoffset=0,document.getElementById(a).setAttribute("data-value",o);else if(t>=n){document.getElementById(e.id).style.strokeDashoffset=n;let t=e.id+"_container";document.getElementById(t).setAttribute("data-value",o)}else{document.getElementById(e.id).style.strokeDashoffset=t;let n=e.id+"_container";document.getElementById(n).setAttribute("data-value",o)}}}]);