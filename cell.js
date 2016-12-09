function Cell(pos, r, c) {
  this.pos = pos || createVector(random(width), random(height))
  this.r = r || 80;
  this.c = c || color(random(255), random(255), random(255));

  this.move = function() {
    var velocity = p5.Vector.random2D();
    this.pos.add(velocity);
  }

  this.show = function() {
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r, this.r)
  }

  this.clicked = function(x, y) {
    var d = dist(this.pos.x, this.pos.y, x, y);
    return(d < this.r);
  }

  this.mitosis = function() {
    var cell = new Cell(this.pos, this.r/2, this.c);
    return cell;
  }
}
