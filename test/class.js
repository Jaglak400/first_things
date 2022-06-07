class Animal{

    constructor(name, height, weight){
        console.log("Created Animal named: ", name)
        this.name = name;
        this.weight = weight;
        this.height =height;
    }

    nameLength(){
        return this.name.length;
    }
}
/* Animal.planet = "Earth";

var dog = new Animal("Fido", 25, 90);
var fish = new Animal("Goldie", 2, .02);

console.log(fish.constructor.planet); */

class Dog extends Animal {

    constructor(name, height, weight, barkVolume, leashColor){
        super(name,height,weight);
        this.barkVolume = barkVolume;
        this.leashColor = leashColor;
        this.speed = speed;
    }

    bark(){
        if(this.barkVolume >50){
            console.log(this.name, "barks loudly",this.barkVolume,);
        }else{
            console.log(this.name, "barks timidly",this.barkVolume,);
        }
    }
}

class Fish extends Animal {
    constructor(name, height, weight, swimSpeed){
        super(name,height,weight);
        this.swimSpeed = swimSpeed;
    }

    swim(chaserSpeed){
        if(this.swimSpeed > 50){
            console.log(this.name, "swims around quickly", this.swimSpeed);
        }else{
            console.log(this.name, "swims around slowly", this.swimSpeed);
        }

        if(this.swimSpeed > chaserSpeed){
            console.log(this.name, "got away");
        }else{
            console.log(this.name, "got caught");
        }
    }
}
var king = new Dog("King",45,90,72,"red",52);
var goldie = new Fish("Goldie",2,.1,77);

king.bark();
goldie.swim(king.speed);