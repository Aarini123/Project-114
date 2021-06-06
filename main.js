var x = 0;
var y = 0;
function preload(){
nose=loadImage("https://i.postimg.cc/rwJ1ZLCq/clownnose.png");
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
    x=results[0].pose.nose.x-20;
    y=results[0].pose.nose.y-20;
}
}


function modelLoaded(){
    console.log("M0dEl_L0AdEd");
}


function draw(){
image(video,0,0,300,300);
image(nose,x,y,40,40);
}

function take_snapshot(){
    save("CLOWN_Image.png");
}