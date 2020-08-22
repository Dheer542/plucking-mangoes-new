class tree{
constructor(x,y,width,height){
var options={
isStatic:true,
friction:1,
restitution:0
}
this.x = x;
this.y = y; 
this.width = width;
this.height = height;
this.image = loadImage("Plucking mangoes/tree.png"); 
this.body = Bodies.rectangle(x, y,width,height,options); 
World.add(world, this.body);
}
display(){ 
var pos=this.body.position;
push();
translate(pos.x,pos.y);
//pos.x= mouseX; 
//pos.y = mouseY; 
imageMode(CENTER); 
image(this.image,0,0,300,500);
pop();
}
}