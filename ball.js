class ball
{
    constuctor(x,y)
    {
        var ball_options={
            'isStatic':false,
            'restitution':1.0,
            'density':1.0,
            'friction':1.0
        }
        this.body = Bodies.cirle(x,y,6,ball_options);
        this.radius = radius;
        World.add(world,this.body);
    }

    display()
    {
       address = this.body.position;
       ellipseMode(RADIUS);
       fill("yellow");
       ellipse(address.x,address.y,3,20);
    }

}