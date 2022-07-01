var canvas, bg;
var questions;
var question, contestant, quiz;

function preload() {
  bg = loadImage("quizBg.png");
}

function setup(){
  canvas = createCanvas(660,430);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}

function draw(){
  background(bg);
}
