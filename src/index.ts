import { state } from "./state";
import {initRouter} from "./router";
import {initTextComp} from "./components/text";
import {initBlueButtonComp} from "./components/bluebutton";
import {initManoComp} from "./components/mano";

(function(){
    initTextComp();
    initBlueButtonComp();
    initManoComp();
    const root=document.querySelector(".root");
    initRouter(root);
    state.getStorageData();
})()