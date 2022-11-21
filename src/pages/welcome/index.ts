export function initPageWelcome(params){
    const div=document.createElement("div");
    div.className="root";
    div.innerHTML=`
    <custom-text variant="title">Piedra, Papel o Tijera</custom-text>
    <div class="space">
    <blue-button class="start-button">Empezar</blue-button>
    </div>
    <div class="all-hands">
    <mano-comp option="tijera"></mano-comp>
    <mano-comp option="piedra"></mano-comp>
    <mano-comp option="papel"></mano-comp>
    </div>
    `;
    const startbuttonEL=div.querySelector(".start-button");
    startbuttonEL?.addEventListener("click",()=>{
        params.goTo("/rules");
        ;
        
    })
    return div;
}