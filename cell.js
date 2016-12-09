function Cell() {
  this.pos = createVector(random(width), random(height))
  this.r = 50;
  this.c = color(random(255), random(255), random(255));

  this.move = function() {
    var velocity = p5.Vector.random2D();
    this.pos.add(velocity);
  }

  this.show = function() {
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r, this.r)
  }

  this.clicked = function(x, y) {
    var dist = distance(this.pos.x, this.pos.y, x, y);
    return (dist < this.r);
  }
}
