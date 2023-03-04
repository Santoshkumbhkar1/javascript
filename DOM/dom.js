// 'use strict';

// document.querySelector('.message').textContent = "😂😁correct number";

// document.querySelector('.guess').textContent = 12;
// document.querySelector('.number').textContent = 12;

// document.querySelector('.score').textContent = 12;

// document.querySelector('.guess').value = 15;

const number = Math.trunc(Math.random() * 20 + 1);

document.querySelector(".number").textContent = 
number;

const diplaycontent =(message)=>{
  document.querySelector(".message").textContent =message; 
}


let score =20;
let highscore= 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess);
   if(score<=0){
    document.querySelector(".message").textContent =
    "🤣🤣 bhai ab kuch nahi khali ho gaye....";
    document.querySelector('.score').textContent = 0;

   }
 else{ 
  if(!guess) {
    document.querySelector(".message").textContent =
      "🤣🤣bhai kuch to likh..tu bhul gaya bhula bhula....";
      document.querySelector('.score').textContent = score--;
  }
  else if (number == guess) {
    document.querySelector(".message").textContent =
      "😏😮😮bhai kya tukka he correct answer ye 10 rupaye";
    document.querySelector('.number').textContent = number;  

    document.querySelector('body').style.backgroundColor='#ff6347';
    document.querySelector(".score").textContent = score--;
    if(score>highscore){
      highscore =score;
      document.querySelector('.highscore').textContent =highscore;
    }

  } 

  else if(guess!==number){
    if(score>1){
      document.querySelector(".message").textContent=guess>number?"bhai bahut high value he tukka sahi laga":"🙄🙄bhai bahut low value he tukka sahi laga";
    score--;
    document.querySelector(".score").textContent = score;
    }

    else{
      document.querySelector(".message").textContent = "😋😋 ja na khatm tera kaam " ;
      document.querySelector(".score").textContent =0;
    }

  }
}
//   else if (guess < number) {
//     document.querySelector(".message").textContent =
//       "🙄🙄bhai bahut low value he tukka sahi laga";
//     document.querySelector(".score").textContent = score--;
    
//   }
  
//   else {
//     document.querySelector(".message").textContent =
//       "bhai bahut high value he tukka sahi laga";
//     document.querySelector(".score").textContent = score--;
//   }

// }
});
