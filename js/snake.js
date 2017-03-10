function Snake(x, y, snakeColor) {
    this.d = new p5.Vector(parseInt(x), parseInt(y));
    this.v = new p5.Vector(1, 0);
    this.size = 1;
    this.tail = [];
    this.tail.push(this.d);
    this.dead = false;

    this.update = function() {
        if (this.dead) {
            return;
        }

        // Update tail
        this.tail.push(this.d);
        while (this.tail.length > this.size) {
            this.tail.shift();
        }

        // Update current position
        this.d = p5.Vector.add(this.d, this.v);
        this.d.x = constrain(this.d.x, 0, width / GRID_SIZE - 1);
        this.d.y = constrain(this.d.y, 0, height / GRID_SIZE - 1);
    }

    this.show = function() {
        fill(snakeColor);

        for (var i = 0; i < this.size; i++) {
            rect(this.tail[i].x * GRID_SIZE, this.tail[i].y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
        }
    }

    this.face = function(x, y) {
        this.v.set(x, y);
    }

    this.grow = function() {
        this.size++;
    }

    this.eats = function(f) {
        return this.d.equals(f.d);
    }

    this.checkStatus = function() {
        if (this.dead == true) {
            return;
        }

        for (var i = 0; i < this.size - 1; i++) {
            if (this.d.equals(this.tail[i])) {
                this.dead = true;
            }
        }
        
        if (this.dead == true) {
            console.log("dead");
        }
    }
}
