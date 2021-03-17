var canva;
var gameState = 0;
var playerCount, database, game, question,player;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  
  quiz.display();
}
