var locB=0;
var locG=0;
var locY=0;
var locPR=0;
var locW=0;
var RTN=75;
function setup() {
  // put setup code here
    createCanvas(1000,1000);
}

function draw() {
  // put drawing code here
    background("#76FFFF");
    fill("#add8e6");
    stroke("#EFFBFB");
    strokeWeight(5);
    fill("#93CCCC");
    textFont("Geneva");
    textSize(24);
    textStyle(ITALIC);
    text("Ripples",840,930);
    stroke("#F1FDFD");
    fill("#58CFCF");
    ellipse(280,260,locB,locB);
    fill("#63FF51");
    ellipse(200,800,locG,locG);
    fill("#EDFF51");
    ellipse(700,900,locY,locY);
    fill("#C349FF");
    ellipse(900,300,locPR,locPR);
    fill("#FFFFFF");
    ellipse(500,500,locW,locW);
    rect(840,900,RTN,RTN,20);
    
    
     if (locB>=250){
        locB=0;
    }else{
        locB = locB+1.5;}
    
if (locG>=200){
        locG=0;
    }else{
        locG = locG+1.6;}
    
    if (locY>=160){
        locY=0;
    }else{
        locY = locY+1.4;}
    
     if (locPR>=300){
        locPR=0;
    }else{
        locPR = locPR+1.9;}
    
    if (locW>=200){
        locW=0;
    }else{
        locW = locW+1.58;}
}
function mousePressed(){
   
   if (RTN<=5){
        RTN=75;
    }else{
        RTN = RTN-3;}
    
    
    
    
}