class Umbrella {

    constructor(x, y){

        var options = {

            isStatic : true

        }

        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        this.image = loadImage("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png", "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png");
        this.bestmanImg = loadImage("Bestman-01.png");
        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        imageMode(CENTER);
        if(frameCount % 200 < 50){

            image(this.bestmanImg, pos.x, pos.y+70, 200, 300);

        }else{

        image(this.image, pos.x, pos.y+70, 300, 300);

        }

    }

}