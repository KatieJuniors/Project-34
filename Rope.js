class Rope {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.2,
      length: 350
    };

    this.pointB = pointB;
    this.rope = Constraint.create(options);
    Constraint.visible=false;
    World.add(world, this.rope);
  }

  attach(body) {
    this.rope.bodyA = body;
  }

  fly() {
    this.rope.bodyA = null;
    strokeWeight(0);
  }

  display() {
    
    if (this.rope.bodyA) {
      var pointA = this.rope.bodyA.position;
      var pointB = this.pointB;
      push();
      stroke("white");
      strokeWeight(0);
      line(pointB.x, pointB.y, pointA.x, pointA.y);
      pop();
    }
    
  }
}
