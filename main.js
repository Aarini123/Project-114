function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    console.log("x =" + results[0].pose.nose.x);
    console.log("y =" + results[0].pose.nose.y);
}
}


function modelLoaded(){
    console.log("M0dEl_L0AdEd!!");
}


function draw(){
image(video,0,0,300,300);
}

function take_snapshot(){
    save("Dog_Image.png");
}

