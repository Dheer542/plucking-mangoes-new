class mango{
constructor(x,y,r){
var options={
    isStatic:true,
    restitution:0,
    friction:1
}
this.x = x;
this.y = y; 
this.r = r;
this.image = loadImage("Plucking mangoes/mango.png"); 
this.body = Bodies.circle(x, y, r/2,options); 
World.add(world, this.body);
}
display(){ 
var pos=this.body.position;
push();
translate(pos.x,pos.y);
//pos.x= mouseX; 
//pos.y = mouseY; 
imageMode(CENTER); 
image(this.image,0,0,this.r,this.r);
pop();
} 
}