export function initTextComp(){
    class TextComponent extends HTMLElement{
        constructor(){
            super();
            this.render()
        };
        render(){
            const shadow= this.attachShadow({mode:"open"});
            const div=document.createElement("div");
            const variant=this.getAttribute("variant")||"body";
            const style=document.createElement("style");
            style.innerHTML=`
            div{
                display: flex;
                flex-flow: column;
                align-items: center;
                justify-content: center;
            }
            .title{
                font-family:'Bungee', cursive;
                font-size:60px;
                color: #ffffff;
                width: 300px;
                line-height:150%;
                text-align: center
            }
            @media (min-width: 960px) {
                .title{
                    width: 500px;
                }
              }
            
            .body{
                font-family: 'Syncopate', sans-serif;
                font-size:30px;
                font-weight: 600;
                color: #ffffff;
                text-align: center;
                padding:50px 20px 0px 20px;
            }
            .button-text{
                font-family: 'Syncopate', sans-serif;
                font-size:45px;
                font-weight: 400;
                color: #D8FCFC;
            }
            `;
            div.className=variant;
            div.textContent=this.textContent;
            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('custom-text',TextComponent)
}