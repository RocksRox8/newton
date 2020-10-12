class rope
{
    constructor(body1,body2,offsetx,offsety){
        this.offsetx=offsetx
        this.offsety=offsety
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetxY}
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }

    display()
    {
    var pointA=this.rope.bodyA.position
    var pointb=this.rope.bodyB.position

    strokeWeight(2);

    var Anchor1X=pointA.x
    var Anchor1Y=pointA.y

    var Anchor2X=pointb.x+this.offsetX
    var Anchor2Y=pointb.y+this.offsetY

    line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)

    }

}