class Mango{
    constructor(x,y,radius){
var Bob_options={
  isStatic:true,
  restitution:0,
  friction:1
        }
   this.body=Bodies.circle(x,y,radius/2,Bob_options);
   
   this.radius=radius;
   this.image=loadImage("images/mango.png");
   World.add(world,this.body);  
    }
    display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        image(this.image,pos.x, pos.y, this.radius, this.radius);
      }
};