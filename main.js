var leftWrist =""
var rightWrist =""
var diff = 0
var nosex
var nosey
function setup ()
{
    canvas = createCanvas(550,550);
    canvas. position(560,100);
    video = createCapture(VIDEO);
    video.size(560,500);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPose);
}

function modelLoaded() {
    console.log('PoseNet');
}

function gotPose(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWrist=results[0].pose.leftWrist.x
        console.log(leftWrist);
        rightWrist=results[0].pose.rightWrist.x
        console.log(rightWrist);

        diff=leftWrist-rightWrist

        nosex=results[0].pose.nose.x
        console.log(nosex);
        nosey=results[0].pose.nose.x
        console.log(nosey);
        document.getElementById("size").innerHTML=Math.floor(diff)+"px";
    }
}

function draw ()
{
    background("blue");
    fill("black");
    text ("Avni",nosex,nosey);
    textSize(diff)
}