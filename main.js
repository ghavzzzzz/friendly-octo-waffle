song="";
somg="";
leX=0;
leY=0;
riX=0;
riY=0;
leS=0;
Sl=0;
function setup(){

    canvas=createCanvas(600 , 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}     
function modelLoaded(){
    console.log("posenet initialized '_' ");
}
function draw(){

    image(video,0,0,600,500);

    fill('#FF000');
    stroke('#FF000');
    
}
function preload(){

    song=loadSound("music.mp3");
    somg=loadSound("music2.mp3");
}
function songname(){

    song.play();
    song.setVolume(1);
    song.rate(1.5);
}
function gotPoses(results){

    if(results.length > 0){

        console.log(results);
        leS=results[0].pose.keypoint[9].score;
        console.log("leS = " + leS);
        leX=results[0].pose.leftWrist.x;
        leY=results[0].pose.leftWrist.y;
        console.log("leX=" + leX + "leY=" + leY);

        riX=results[0].pose.rightWrist.x;
        riY=results[0].pose.rightWrist.y;
        console.log("riX=" + riX + "riY=" + riY);
    }

}