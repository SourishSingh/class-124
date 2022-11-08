function setup(){
video = createCapture(VIDEO);
video.size(550,500);

canvas = createCanvas(550, 500);
canvas.position(560,150);

poseNet = ml5.poseNet(video, modelLoaded);
}

function draw(){
    background('#969A97');
    fill('#F90093');
    textSize(10);
    text('abcd',50,400);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results){
    if(results.length > 0){
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWristX.x;
        difference = leftWristX-rightWristX;
    }
}