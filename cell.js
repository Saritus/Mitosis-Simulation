function Cell(pos, r, c) {

  if (pos) {
    this.pos = pos.copy();
  }
  else {
    this.pos = createVector(random(width), random(height));
  }

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
    var offset = random(-2 * this.r, 2 * this.r);
    var newpos = createVector(this.pos.x + offset, this.pos.y + offset)
    var cell = new Cell(this.pos, this.r*0.8, this.c);
    return cell;
  }
}
