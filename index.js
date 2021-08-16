const readlineSync = require("readline-sync");

console.log("This is quiz about Indian states and their Capitals");

var counter=0;
function Quiz(question,answer){
  var res = readlineSync.question(question);
  //console.log("response is "+res.toUpperCase());
  //console.log("answer is "+answer.toUpperCase());
  if(res.toUpperCase()===answer.toUpperCase()){
    counter++
    console.log("you are right");
  } else {
    console.log("you are wrong");
  }
}

var questions=[

  {
    question:"What is capital of Telangana?",
    answer:"Hyderabad"
  },
  {
    question:"What is capital of Karnataka?",
    answer:"Bengaluru"
  },
  {
    question:"What is the Capital of TamilNadu?",
    answer:"Chennai"
  },
  {
    question:"What is the Capital of Maharasthra?",
    answer:"Mumbai"
  },
  {
    question:"What is the Capital of Gujarat?",
    answer:"Gandhinagar"
  }


];

//taking user name
var userName = readlineSync.question("What is your name? ");
console.log("Welcome "+userName);

for(var i=0;i<questions.length;i++){
  Quiz(questions[i].question,questions[i].answer);
}

console.log("your score is "+counter);