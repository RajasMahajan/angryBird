class Bird{
    constructor(x,y)
    {

        var options = {
            restitution: 0.5,friction:1.0,density:1.5
    
        }
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;
        this.body = Bodies.rectangle(x,y,30,30,options);
      
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle=this.body.angle;
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        
        rectMode(CENTER);
        fill("red");
        strokeWeight(4);
        stroke("white");
        rect(0, 0,this.width,this.height);
        pop();
    }

    
}