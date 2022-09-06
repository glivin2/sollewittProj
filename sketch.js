//This is a javascript comment!!!!!!!!!!!!!!


function setup() {
    createCanvas(windowWidth, windowHeight);
    
  }

function draw() {
    background(0, 0, 255);

    //Left side
    fill(0);
    rect(0,0,windowWidth/12, windowHeight);

    fill(255);
    rect(windowWidth/12, 0, windowWidth/12, windowHeight);

    fill(0);
    rect((windowWidth/12)*2, 0, windowWidth/12, windowHeight);

    fill(255);
    rect((windowWidth/12)*3, 0, windowWidth/12, windowHeight);

    fill(0);
    rect((windowWidth/12)*4,0,windowWidth/12, windowHeight);

    noStroke();
    fill(255);
    rect((windowWidth/12)*5, 0, windowWidth/12, windowHeight);




  //Right side
  fill(0);
  rect(windowWidth/2,0,windowWidth/2,windowHeight/6);

  fill(255);
  rect(windowWidth/2,windowHeight/6,windowWidth/2,windowHeight/6);

  fill(0);
  rect(windowWidth/2,(windowHeight/6)*2,windowWidth/2,windowHeight/6);

  fill(255);
  rect(windowWidth/2,(windowHeight/6)*3,windowWidth/2,windowHeight/6);

  fill(0);
  rect(windowWidth/2,(windowHeight/6)*4,windowWidth/2,windowHeight/6);

  fill(255);
  rect(windowWidth/2,(windowHeight/6)*5,windowWidth/2,windowHeight/6);


  }

