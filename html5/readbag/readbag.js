var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
var img1 = document.getElementById('img1')
var reset =document.getElementById('reset')
var show = document.getElementById('show')
/*context.fillStyle='red'
context.fillRect(0,0,canvas.width,canvas.height)*/
canvas.width = 400;
canvas.height = 300;
var radius=50;
var clippingRegion = {
  x:-1,
  y:-1,
  r:radius
};
var img = new Image()
  img.src = img1.src;
  img.onload = function(){
    initDraw();
} 
function initDraw(){
  clippingRegion.x=Math.random()*(canvas.width-2*radius)+radius;
  clippingRegion.y=Math.random()*(canvas.height - 2*radius)+radius;
  clippingRegion.r=radius;
   draw(img);
}
function drawClippingRegion(){
  context.beginPath();
 context.arc(clippingRegion.x,clippingRegion.y,clippingRegion.r,0,Math.PI*2,false) 
 context.clip();
}
function draw(img){
  context.clearRect(0,0,canvas.width,canvas.height);
  context.save();
  drawClippingRegion();
  context.drawImage(img,0,0,canvas.width,canvas.height)
  context.restore();
}
initDraw();

show.onclick = function(){
  //clippingRegion.r=1000;
  var time = setInterval(function(){
      clippingRegion.r+=10;
      if (clippingRegion.r>300) {
        clearInterval(time);
      }
      draw(img);
  },20);
}
reset.onclick = function(){
  initDraw();
}
