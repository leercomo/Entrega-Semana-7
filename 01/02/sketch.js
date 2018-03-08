//Esta es una variación de "Colors" del tutorial de Hello Processing. Me base en las forma y un poco en la gama de colors que usaban para este ejercicio.
function setup() {
  createCanvas(400, 400);
	
}

function draw() {
 
 noStroke();
	fill(192);
	ellipse(200,200,500,500);
	
	fill(255);
	ellipse(200,200,450,450);
	
	fill(95,206,47);
	ellipse(200,200,430,430);
	
	fill(128,255,128);
	ellipse(200,200,380,380);
	
	fill(141,221,226);
	ellipse(200,200,360,360);
	
	fill(255);
	ellipse(200,200,340,340);
	
	fill(194,151,107);
	ellipse(200,200,320,320);
	
	fill(64,78,204);
	ellipse(200,200,280,280);
	
	fill(194,151,107);
	ellipse(200,200,230,230);
	
	fill(141,221,226);
	ellipse(200,200,200,200);
	
	fill(95,206,47);
	ellipse(200,200,160,160);
	
	fill(255);
	ellipse(200,200,130,130);
	
	fill(random(0,255),random(0,255),random(0,255));
	ellipse(mouseX,mouseY,10,10)
}