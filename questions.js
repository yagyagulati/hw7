function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
	fill(0);
 
  text('Voltage is a measure of potential energy per unit charge of electrons.', 20, 35);
  text('Resistence is when electrons work their way through the material\n(conductor),they encounter opposition to motion. This opposition\nto electric current depends non the type of material, its cross-sectional\narea, and its temperature. The conductor can be good or bad, good\nconductor example could be thin gold wire, alluminium.', 20, 70);
  text('A short circuit is an example of a closed circuit as it just\ncutshorts the path and does not go through the entire path.\nBut it remains closed as it keeps flowing without a beginning\nor an end.', 20, 170);
  text('A closed circuit allows electrons to flow through continuously\nwithout beginning or end. The circuit should be made up of\nconductive material. An open circuit is when the path or flow\nof the electrons has been interrupted.', 20, 255);  
 	text('YES', 20, 340);
	stroke(3);
	text('What is voltage?', 20, 20);
	text('What is resistance?', 20, 55);
	text('Is a short circuit an example of a closed or open circuit?', 20, 155);
  text('How can you determine if a cricuit is closed or open?', 20, 240);
	text('Did you set up your computer to use the Feather?', 20, 325);
pop();
}

