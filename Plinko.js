class Plinko{
    constructor(x, y, r){
      var options = {
        isStatic: true
      }
      this.r = r;
      this.body = Bodies.circle(x, y, 10, options);
      World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
    }
}