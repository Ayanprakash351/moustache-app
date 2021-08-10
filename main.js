mousX = 0;
mousY = 0;
function preload(){

}
function setup()
{
   canvas = createCanvas(300, 300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300, 300);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function draw(){
image(video,0,0,300,300);

}

function take_snapshot(){
  save('gentlemen.png')
}

function modelLoaded()
{
   console.log('The moustache has started growing');
}

function gotPoses(results)
{
   if(results.lenght>0)
   {
       console.log( results);
       console.log("mous x = " + results[0].pose.mous.x);
       console.log("mous y = " + results[0].pose.mous.y);
   }
}