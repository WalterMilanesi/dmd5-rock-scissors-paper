function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequire36f6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire36f6=a),a.register("27Lyk",(function(t,n){var o,a;e(t.exports,"register",(()=>o),(e=>o=e)),e(t.exports,"resolve",(()=>a),(e=>a=e));var r={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},a=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("godLF",(function(e,t){e.exports=new URL(a("27Lyk").resolve("gJUCD"),import.meta.url).toString()})),a.register("kbUIZ",(function(e,t){e.exports=new URL(a("27Lyk").resolve("j6OXA"),import.meta.url).toString()})),a.register("6RnJL",(function(e,t){e.exports=new URL(a("27Lyk").resolve("eRL7z"),import.meta.url).toString()})),a("27Lyk").register(JSON.parse('{"dZpbI":"index.140f2d81.js","gJUCD":"ganar.25adbfe6.svg","j6OXA":"perder.6fa38999.svg","eRL7z":"empatar.a33c1fb6.svg","lyYKJ":"piedra.d487c880.svg","jYzGd":"papel.54194be0.svg","cK2FM":"tijera.20573333.svg"}'));const r={data:{currentGame:{computerPlay:"",myPlay:"",result:[]},historicalScore:{myScore:0,computerScore:0}},setState(e){this.data=e},getState(){return this.data},setMyMove(e){this.getState().currentGame.myPlay=e},setcomputerMove(){const e=this.getState(),t=["rock","paper","scisors"][Math.floor(3*Math.random())];e.currentGame.computerPlay=t},whoWins(e,t){let n="";return["rock"==e&&"scisors"==t,"paper"==e&&"rock"==t,"scisors"==e&&"paper"==t].includes(!0)&&(n="win"),["rock"==e&&"paper"==t,"paper"==e&&"scisors"==t,"scisors"==e&&"rock"==t].includes(!0)&&(n="lose"),["rock"==e&&"rock"==t,"paper"==e&&"paper"==t,"scisors"==e&&"scisors"==t].includes(!0)&&(n="tie"),n},pushToHistory(e){const t=this.getState(),n=t.historicalScore.myScore,o=t.historicalScore.computerScore;"win"==e?this.setState({...t,historicalScore:{myScore:n+1,computerScore:o}}):"lose"==e&&this.setState({...t,historicalScore:{myScore:n,computerScore:o+1}}),this.savedData()},savedData(){const e=this.getState().historicalScore;localStorage.setItem("data",JSON.stringify(e))},cleanData(){const e=this.getState().historicalScore;e.myScore=0,e.computerScore=0,localStorage.setItem("data",JSON.stringify(e))},getStorageData(){const e=JSON.parse(localStorage.getItem("data"));localStorage.getItem("data")&&(this.data.historicalScore=e)}};const s={win:a("godLF"),lose:a("kbUIZ"),tie:a("6RnJL")};const i=[{path:/\/welcome/,component:function(e){const t=document.createElement("div");return t.className="root",t.innerHTML='\n    <custom-text variant="title">Piedra, Papel o Tijera</custom-text>\n    <div class="space">\n    <blue-button class="start-button">Empezar</blue-button>\n    </div>\n    <div class="all-hands">\n    <mano-comp option="tijera"></mano-comp>\n    <mano-comp option="piedra"></mano-comp>\n    <mano-comp option="papel"></mano-comp>\n    </div>\n    ',t.querySelector(".start-button")?.addEventListener("click",(()=>{e.goTo("/rules")})),t}},{path:/\/rules/,component:function(e){const t=document.createElement("div");return t.className="root",t.innerHTML='\n      <custom-text>Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</custom-text>\n      <div class="space">\n      <blue-button class="start-button">Jugar</blue-button>\n      </div>\n      <div class="all-hands">\n      <mano-comp option="tijera"></mano-comp>\n      <mano-comp option="piedra"></mano-comp>\n      <mano-comp option="papel"></mano-comp>\n      </div>\n      ',t.querySelector(".start-button")?.addEventListener("click",(()=>{e.goTo("/game")})),t}},{path:/\/game/,component:function(e){const t=document.createElement("div");t.className="root",t.innerHTML='\n    <div class="countdown-el">3</div>\n    <div class="hands-computer">\n    <mano-comp option="tijera" class="display-none pc-tijera"></mano-comp>\n    <mano-comp option="piedra" class="display-none pc-piedra"></mano-comp>\n    <mano-comp option="papel" class="display-none pc-papel"></mano-comp>\n    </div>\n    <div class="all-hands">\n    <mano-comp option="tijera" class="my-tijera"></mano-comp>\n    <mano-comp option="piedra" class="my-piedra"></mano-comp>\n    <mano-comp option="papel" class="my-papel"></mano-comp>\n    </div>\n    ';const n=document.createElement("style");n.innerHTML="\n    .countdown-el{\n        display:flex;\n            justify-content: center;\n            align-items:center;\n            border-radius: 50%;\n            width: 170px;\n            height: 170px;\n            padding: 10px;\n            border: 23px solid #001997;\n            color: #ffffff;\n            font: 100px 'Bungee';\n    }\n    .hands-computer{\n      transform: rotate(-180deg)\n    }\n    .display-none{\n        display:none\n    }\n    .my-tijera:hover{\n        transform: translateY(-20px)\n    }\n    .my-piedra:hover{\n        transform: translateY(-20px)\n    }\n    .my-papel:hover{\n        transform: translateY(-20px)\n    }\n    .hand-selected{\n        transform: translateY(-50px);\n        transition: all 0.5s;\n      }\n    .deselected{\n        opacity: 0.5;\n        transform: translateY(50px);\n        transition: all 0.5s;\n      }\n    ";const o=t.querySelector(".my-piedra"),a=t.querySelector(".my-papel"),s=t.querySelector(".my-tijera"),i=t.querySelector(".pc-piedra"),c=t.querySelector(".pc-papel"),l=t.querySelector(".pc-tijera"),d=t.querySelector(".countdown-el"),p=t.querySelector(".all-hands")?.children;function m(t){r.setcomputerMove();for(const e of p)e.classList.add("deselected");t==o&&(t.classList.add("hand-selected"),t.classList.remove("deselected"),t.classList.remove("my-piedra"),a?.classList.remove("my-papel"),s?.classList.remove("my-tijera"),setTimeout((()=>{a?.classList.add("display-none"),s?.classList.add("display-none")}),1e3)),t==a&&(t.classList.add("hand-selected"),t.classList.remove("deselected"),t.classList.remove("my-papel"),o?.classList.remove("my-piedra"),s?.classList.remove("my-tijera"),setTimeout((()=>{o?.classList.add("display-none"),s?.classList.add("display-none")}),1e3)),t==s&&(t.classList.add("hand-selected"),t.classList.remove("deselected"),t.classList.remove("my-tijera"),o?.classList.remove("my-piedra"),a?.classList.remove("my-papel"),setTimeout((()=>{o?.classList.add("display-none"),a?.classList.add("display-none")}),1e3));const n=r.getState().currentGame.myPlay,m=r.getState().currentGame.computerPlay,u=r.whoWins(n,m);setTimeout((()=>{d?.classList.add("display-none"),"rock"==m&&i?.classList.remove("display-none"),"paper"==m&&c?.classList.remove("display-none"),"scisors"==m&&l?.classList.remove("display-none")}),1e3),setTimeout((()=>{r.pushToHistory(u),e.goTo("/results")}),2800)}for(const e of p)e.addEventListener("click",(()=>{const t=e.getAttribute("class");clearInterval(f),"my-piedra"==t?(r.setMyMove("rock"),m(o)):"my-papel"==t?(r.setMyMove("paper"),m(a)):"my-tijera"==t&&(r.setMyMove("scisors"),m(s))}));let u=3;const f=setInterval((()=>{const t=document.querySelector(".countdown-el");u--,t.innerHTML=`\n        ${u}\n        `,u<1&&(clearInterval(f),alert("Puedes hacerlo mejor que eso"),e.goTo("/rules"))}),1e3);return t.appendChild(n),t}},{path:/\/results/,component:function(e){const t=r.getState(),n=r.whoWins(t.currentGame.myPlay,t.currentGame.computerPlay),o=document.createElement("div");let a;o.className="result-container","win"==n&&(a=s.win,o.style.backgroundColor="#6CB46C60"),"lose"==n?(a=s.lose,o.style.backgroundColor="#DC0F5C60"):"tie"==n&&(a=s.tie,o.style.backgroundColor="#006CFC25"),o.innerHTML=`\n  <img class="result-image" src="${a}">\n    <div class="board">\n      <h4>Puntaje</h4>\n      <p class="Jugador">Jugador: ${t.historicalScore.myScore}</p>\n      <p class="Maquina">Máquina: ${t.historicalScore.computerScore}</p>\n    </div>\n    \n    <blue-button class="play-again">Rejugar</blue-button>\n    <blue-button class="clean-score">Reiniciar puntos</blue-button>\n    `,o.querySelector(".play-again")?.addEventListener("click",(()=>{e.goTo("/game")})),o.querySelector(".clean-score")?.addEventListener("click",(()=>{r.cleanData(),e.goTo("/rules")}));const i=document.createElement("style");return i.innerHTML="\n    .result-container {\n        width: 100%;\n        height: 100vh;\n        padding: 35px 0 20px 0;\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        justify-content: space-around;\n      }\n      .result-image {\n        width: 220px;\n      }\n      .board {\n        width: 300px;\n        border: 10px solid #000000;\n        background: #ffffff;\n        border-radius: 10px;\n        font-family: 'Syncopate', sans-serif;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding:10px 0px\n      }\n      .board > h4 {\n        font-size:40px;\n        margin: 0 auto;\n      }\n      .board > p {\n        margin: 0 10px 5px 0;\n        font-size: 30px;\n        text-align: end;\n      }\n    ",o.appendChild(i),o}}];function c(){return location.host.includes("github.io")}function l(e){function t(e){const t=c()?"/desafio-modulo5-Piedra-Papel-Tijeras"+e:e;history.pushState({},"",t),n(t)}function n(n){const o=c()?n.replace("/desafio-modulo5-Piedra-Papel-Tijeras",""):n;for(const n of i)if(n.path.test(o)){const o=n.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(o)}}location.host.includes("github.io")||"/"==location.pathname?t("/welcome"):n(location.pathname),window.onpopstate=function(){n(location.pathname)}}function d(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=document.createElement("div"),n=this.getAttribute("variant")||"body",o=document.createElement("style");o.innerHTML="\n            div{\n                display: flex;\n                flex-flow: column;\n                align-items: center;\n                justify-content: center;\n            }\n            .title{\n                font-family:'Bungee', cursive;\n                font-size:60px;\n                color: #ffffff;\n                width: 300px;\n                line-height:150%;\n                text-align: center\n            }\n            @media (min-width: 960px) {\n                .title{\n                    width: 500px;\n                }\n              }\n            \n            .body{\n                font-family: 'Syncopate', sans-serif;\n                font-size:30px;\n                font-weight: 600;\n                color: #ffffff;\n                text-align: center;\n                padding:50px 20px 0px 20px;\n            }\n            .button-text{\n                font-family: 'Syncopate', sans-serif;\n                font-size:45px;\n                font-weight: 400;\n                color: #D8FCFC;\n            }\n            ",t.className=n,t.textContent=this.textContent,e.appendChild(t),e.appendChild(o)}}customElements.define("custom-text",e)}function p(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=document.createElement("button");t.className="button";const n=document.createElement("style");n.innerHTML="\n        .button{\n          background-color: #006CFC;\n          border: 10px solid #001997;\n          border-radius: 10px;\n          width: 300px;\n        }\n        button:hover {\n          background-color: #DC0F5C;\n        }\n        ",t.innerHTML=`\n        <custom-text variant="button-text">${this.textContent}</custom-text>\n        `,e.appendChild(t),e.appendChild(n)}}customElements.define("blue-button",e)}var m;m=new URL(a("27Lyk").resolve("lyYKJ"),import.meta.url).toString();var u;u=new URL(a("27Lyk").resolve("jYzGd"),import.meta.url).toString();var f;function y(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),t=document.createElement("img"),n=this.getAttribute("option")||"",o=document.createElement("style");o.innerHTML="\n            img{\n              width:100%;\n              height:100%;\n              max-height: 400px;\n          }\n            ","piedra"===n&&(t.src=m),"papel"===n&&(t.src=u),"tijera"===n&&(t.src=f),t.className=n,e.appendChild(t),e.appendChild(o)}}customElements.define("mano-comp",e)}f=new URL(a("27Lyk").resolve("cK2FM"),import.meta.url).toString(),function(){d(),p(),y();l(document.querySelector(".root")),r.getStorageData()}();
//# sourceMappingURL=index.140f2d81.js.map
