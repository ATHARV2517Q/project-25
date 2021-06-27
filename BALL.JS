class Ball{
    constructor(x,y,radius){
    
        var options={
          restitution:1,
          density:0.1
        
          }
          this.body= Bodies.circle(x,y,radius,options) 
          World.add(world,this.body) 
        this.image=loadImage('paper.png')
    this.radius=radius
    
    
    }
    display(){
    var pos=this.body.position
    var angle=this.body.angle
    push() 
   translate(pos.x,pos.y) 
   rotate(angle)
       imageMode(CENTER)
       image(this.image,0,0,this.radius*2,this.radius*2) 
    pop()
    }
    
    
    }