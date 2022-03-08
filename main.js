Harrypotter="";
Peterpan="";
leftX=0;
leftY=0;
rightX=0;
rightY=0;
lftScore=0;
rtScore=0;
HPstatus="";
PPstatus="";

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on("pose", gotPoses)
}
function preload()
{
    Harrypotter= loadSound("music.mp3");
    Peterpan= loadSound("music2.mp3");
}

function draw(){
    image(video,0,0,600,500);
    fill("#456cf7");
    stroke("#456cf7");
    HPstatus=HarryPotter.isPlaying();
    if(HPstatus>0.2){
        circle(leftX,leftY,20);
        PeterPan.stop();
    
    if(HPstatus=false){
        HarryPotter.play();
        document.getElementById("songName").innerHTML="Song Name : Harry Potter Theme Song";
    }
}

PPstatus=PeterPan.isPlaying();
if(PPstatus>0.2){
    circle(leftX,leftY,20);
    HarryPotter.stop();

if(PPstatus=false){
    PeterPan.play();
    document.getElementById("songName").innerHTML="Song Name : Peter Pan Theme Song";
}
}
}

function modelLoaded(){
console.log("Posenet is Initialized!");
}

function gotPoses(results){
    if(results.length>0){
     console.log(results);
     leftX=results[0].pose.leftWrist.x;
     leftY=results[0].pose.leftWrist.y;
     console.log("leftX = "+leftX+" leftY = "+leftY);
     HPstatus=results[0].pose.keypoints[9].score;

     rightX=results[0].pose.rightWrist.x;
     rightY=results[0].pose.rightWrist.y;
     console.log("rightX = "+rightX+" rightY = "+rightY);
     PPstatus=results[0].pose.keypoints[10].score;
    }
    

    
}