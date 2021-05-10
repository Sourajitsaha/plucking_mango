class Stone{
    constructor(x,y,radius){
var Bob_options={
  isStatic:false,
  restitution:0,
  friction:1,
  density:1.2
        }
   this.body=Bodies.circle(x,y,radius/2,Bob_options);
   
   this.radius=radius;
   this.image=loadImage("images/stone.png");
   World.add(world,this.body);  
    }
    display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        image(this.image,pos.x, pos.y, this.radius, this.radius);
      }
};