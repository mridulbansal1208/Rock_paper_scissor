let userscore = 0;
let compscore = 0;
const compchoice = ()=>{
    const options = ["Scissor","rock","paper"];
    const ind=Math.floor(Math.random()*3);
    return options[ind];
};
const msg = document.querySelector("#msg");
const drawgame=()=>{
   msg.innerText = "Game is Drawn";
   msg.style.backgroundColor = "#222831";
}; 
const userpoint = document.querySelector("#userscore");
const comppoint = document.querySelector("#compscore");

const showwinner= (userwin,userchoice,compch)=>{
   if(userwin === true){
    msg.innerText = `You Win!! Your ${userchoice} beats ${compch}`;
    msg.style.backgroundColor = "#0C0C0C";
    userscore++;
    userpoint.innerText = userscore;
   }else{
    msg.innerText = `You Lose!! ${compch} beats ${userchoice}`;
    msg.style.backgroundColor = "#49243E";
    compscore++;
    comppoint.innerText = compscore;
   }
};
const playgame = (userchoice)=>{
  const compch = compchoice();
  if(userchoice===compch){
    drawgame();
  }
  else{
    let userwin = true;
    if(userchoice === "rock"){
       userwin =  compch === "paper"? false:true;
    }else if(userchoice === "paper"){
        userwin =  compch === "scissor"? false:true;
     }else if(userchoice === "scissor"){
        userwin =  compch === "rock"? false:true;
     } 
     showwinner(userwin,userchoice,compch);
  }
};
let choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id"); 
        playgame(userchoice);
    });
});
   
