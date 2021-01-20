var canvas;
var gameState = 0;
var gameStateC = 1;
var questionCNum;
var questionC;
var contestantCount;
var database;
var quiz;
var question;
var contestant;
var answerAState;
var answerBState;
var answerCState;
var answerDState;
var answerAStateNum;
var answerBStateNum;
var answerCStateNum;
var answerDStateNum;

function setup(){

  canvas = createCanvas(850,400);

  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}


function draw(){

  background("pink");

  //Texts

    if(gameStateC === 1){
      questionCNum = 1
      answerAStateNum = 1
      answerBStateNum = 1
      answerCStateNum = 1
      answerDStateNum = 1
    }

    if(gameStateC === 2){
      questionCNum = 2
      answerAStateNum = 2
      answerBStateNum = 2
      answerCStateNum = 2
      answerDStateNum = 2
    }

    if(gameStateC === 3){
      questionCNum = 3
      answerAStateNum = 3
      answerBStateNum = 3
      answerCStateNum = 3
      answerDStateNum = 3
    }

    if(gameStateC === 4){
      questionCNum = 4
      answerAStateNum = 4
      answerBStateNum = 4
      answerCStateNum = 4
      answerDStateNum = 4
    }

    if(gameStateC === 2){
      answerAStateNum = 2
    }

    if(gameStateC === 3){
      answerAStateNum = 3
    }

    if(gameStateC === 4){
      answerAStateNum = 4
    }

  //Question

    if(questionCNum === 1){
      questionC = "What metal has the highest melting point?"
    }

    if(questionCNum === 2){
      questionC = "Which is the most popular game?"
    }

    if(questionCNum === 3){
      questionC = "Which character 'hacked' fortnite's reality?"
    }

    if(questionCNum === 4){
      questionC = "Which melee weapon is shaped like an axe?"
    }

  //A

    if(answerAStateNum === 1){
      answerAState = "Iron";
    }

    if(answerAStateNum === 2){
      answerAState = "Fortnite";
    }

    if(answerAStateNum === 3){
      answerAState = "Wolverine";
    }

    if(answerAStateNum === 4){
      answerAState = "Tomahawk";
    }

  //B

    if(answerBStateNum === 1){
      answerBState = "Tungsten";
    }

    if(answerBStateNum === 2){
      answerBState = "Valorant";
    }

    if(answerBStateNum === 3){
      answerBState = "Captain Marvel";
    }

    if(answerBStateNum === 4){
      answerBState = "Butterfly Knife";
    }

  //C

    if(answerCStateNum === 1){
      answerCState = "Tin";
    }

    if(answerCStateNum === 2){
      answerCState = "PUBG";
    }

    if(answerCStateNum === 3){
      answerCState = "Hawk-Eye";
    }

    if(answerCStateNum === 4){
      answerCState = "Karambit";
    }

  //D

    if(answerDStateNum === 1){
      answerDState = "Aluminum";
    }

    if(answerDStateNum === 2){
      answerDState = "CSGO";
    }

    if(answerDStateNum === 3){
      answerDState = "Iron Man";
    }

    if(answerDStateNum === 4){
      answerDState = "Cutlass";
    }

}
