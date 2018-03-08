//Esta es una variación de Shapes del tutorial de Hello Processing. Yo no utilice las formas del ejercicio, sino las que utiliza como ejemplo en su explicación porque me evocaron a un pacman y eso decidí hacer.
function setup() {
  createCanvas(400, 400);
}

function draw() {
		background(0);
	
	//forma Pacman
	noStroke();
	fill(255,255,0);
	ellipse(200,200,200,200);
	fill(0,0,0);
	triangle(310,150,200,200,310,250);
	ellipse(220,130,25,25);
	
	
	//forma camino
	fill(186,3,190);
	stroke(249,2,163);
	rect(0,60,width,15);
	rect(0,320,width,15);
	
}