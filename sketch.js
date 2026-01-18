function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  angleMode(DEGREES);
}

function draw() {
  background(120,100,100);
  fill(70,100,100);
  translate(0,height/2,);
  ellipse(50,0,50,50);
  
  for(let i =0;i<width;i++){
    let y = sin(i)*50;
    let x=i;
    point (x,-y);




  }  
}
