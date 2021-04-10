class Drops {

    constructor(x,y){

      var options = {

        isStatic : false,
        restitution : 0.1,
        friction : 0.1,

      }

      this.body = Bodies.circle(x, y, 2, options);
      this.radius = 2;
      World.add(world, this.body);

    }

    update(){

        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x : random(0, 400), y : random(0, 400)});
    
          } 

    }
  
    display() {

        noStroke();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);

    }

  }