function Cell() {
  this.pos = createVector(random(width), random(height))
  this.r = 20;

  this.move = function() {
    var velocity = p5.Vector.random2D();
    this.pos.add(velocity);
  }

  this.show = function() {
    ellipse(this.pos.x, this.pos.y, this.r, this.r)
  }
}
