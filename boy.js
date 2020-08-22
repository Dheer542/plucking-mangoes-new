class boy{
constructor(x,y,width,height){
var options={
density:1.2,
isStatic:true
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.x=x;
this.height=height;
this.width=width;
this.y=y;
this.image = loadImage("Plucking mangoes/boy.png"); 
World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    push();
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    imageMode(CENTER); 
image(this.image,400,453,300,500);
    pop();
}

}