class launcher{
    constructor(body,anchor){
        var options={bodyA:body,
            point:anchor,
            stifness:0.04,
            lenght:1
        }
        this.bodyA=body
        this.point=anchor
        this.launcher=Constraint.create(options)
       World.add(world,this.launcher)
    }
    attach(body){
        this.launcher.bodyA=body;
    }
    fly(){
        this.launcher.bodyA=null;
    }
    display(){
      if(this.launcher.bodyA){  
      var pointA=this.bodyA.position;
      var  pointB=this.pointB
      
      strokeWeight(2);
  line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}