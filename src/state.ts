type Choice= "rock"|"paper"|"scisors";
type Result= "win"|"lose"|"tie";

const state={
    data:{
        currentGame:{
            computerPlay:"",
            myPlay:"",
            result:[],
        },
        historicalScore:{
            myScore:0,
            computerScore:0
        }
    },

    setState(newState){
        this.data= newState;
    },

    getState(){
        return this.data;
    },

    // Funciones cuya lógica es importante para la aplicación

    setMyMove(move:Choice){
        const currentState=this.getState();
        currentState.currentGame.myPlay=move;
    },

    setcomputerMove(){
        const currentState=this.getState();
        const randomMove=Math.floor(Math.random()*3);
        const options=["rock","paper","scisors"];
        const computerDecision=options[randomMove];
        currentState.currentGame.computerPlay=computerDecision;
    },

    whoWins(myPlay:Choice,computerPlay:Choice){
        let result="";
        const winWithRock= myPlay=="rock"&& computerPlay=="scisors";
        const winWithPaper= myPlay=="paper"&& computerPlay=="rock";
        const winWithScisors= myPlay=="scisors"&& computerPlay=="paper";
        const playerWin= [winWithRock,winWithPaper,winWithScisors].includes(true);
        
        const loseWithRock= myPlay=="rock"&& computerPlay=="paper";
        const loseWithPaper= myPlay=="paper"&& computerPlay=="scisors";
        const loseWithScisors= myPlay=="scisors"&& computerPlay=="rock";
        const computerWin= [loseWithRock,loseWithPaper,loseWithScisors].includes(true);
        
        const tieWithRock= myPlay=="rock"&& computerPlay=="rock";
        const tieWithPaper= myPlay=="paper"&& computerPlay=="paper";
        const tieWithScisors= myPlay=="scisors"&& computerPlay=="scisors";
        const tie= [tieWithRock,tieWithPaper,tieWithScisors].includes(true);

        if(playerWin){
            result="win";
        } if (computerWin){
            result="lose";
        }if(tie){
            result="tie";
        }
        return result;
    },

    pushToHistory(result:Result){
        const currentState=this.getState();
        const playerScore=currentState.historicalScore.myScore;
        const pcScore=currentState.historicalScore.computerScore;

        if(result=="win"){
            this.setState({
                ...currentState,
                historicalScore:{
                    myScore: playerScore+1,
                    computerScore:pcScore
                }
            })
        } else if(result=="lose"){
            this.setState({
                ...currentState,
                historicalScore:{
                    myScore: playerScore,
                    computerScore:pcScore+1
                }
            })
        };
        this.savedData();
    },

    // Aquí se maneja la informacion del localstorage

    savedData(){
        const currentState=this.getState().historicalScore;
        localStorage.setItem("data",JSON.stringify(currentState));
    },

    cleanData(){
        const currentState=this.getState().historicalScore;
        currentState.myScore=0;
        currentState.computerScore=0;
        localStorage.setItem("data",JSON.stringify(currentState));
    },

    getStorageData(){
        const localData=JSON.parse(localStorage.getItem("data") as string);
        if(localStorage.getItem("data")){
            this.data.historicalScore=localData
        }
    }
};

export {state};