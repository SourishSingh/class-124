function setup(){
video = createCapture(VIDEO);
video.size(550,500);

canvas = createCanvas(550, 500);
canvas.position(560,150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',getPoses);
}

function draw(){
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    square(noseX,noseY, difference);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseX=results[0].pose.nose.y;
        console.log("noseX = "+noseX+"NoseY"+noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].poserighttWrist.x;
        difference = leftWrist - rightWristX;
        console.log("leftWristX = "+leftWristX +"rightWristX = "+leftWristX +"difference = "+ difference)
    }
}

noseX=0;
noseY=0;
difference=0;
rightWristX =0;
leftWristX =0;