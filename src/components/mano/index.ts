const piedra = require("url:../../images/piedra.svg");
const papel = require("url:../../images/papel.svg");
const tijera = require("url:../../images/tijera.svg");

export function initManoComp() {
  class ManoComponent extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const img = document.createElement("img");
      const option = this.getAttribute("option") || "";
      const style = document.createElement("style");
      style.innerHTML = `
            img{
              width:100%;
              height:100%;
              max-height: 400px;
          }
            `;

      if (option === "piedra") {
        img.src =piedra;
      };
      if (option === "papel") {
        img.src =papel;
      }
      if (option === "tijera") {
        img.src =tijera;
      }

      img.className = option;
      shadow.appendChild(img);
      shadow.appendChild(style);
    }
  }
  customElements.define("mano-comp", ManoComponent);
}