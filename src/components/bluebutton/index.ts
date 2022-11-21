export function initBlueButtonComp() {
    class BlueButtonComponent extends HTMLElement {
      constructor() {
        super();
        this.render();
      };
      
      render(){
        const shadow=this.attachShadow({mode:"open"});
        const button=document.createElement('button');
        button.className="button";
        const style=document.createElement("style");
        style.innerHTML=`
        .button{
          background-color: #006CFC;
          border: 10px solid #001997;
          border-radius: 10px;
          width: 300px;
        }
        button:hover {
          background-color: #DC0F5C;
        }
        `;
  
        button.innerHTML=`
        <custom-text variant="button-text">${this.textContent}</custom-text>
        `;
  
        shadow.appendChild(button);
        shadow.appendChild(style);
      }
    }
    customElements.define("blue-button", BlueButtonComponent);
  }  