class Animal{
    constructor(color ="yellow", energy = 100){
    this.color=  color;
    this.energy = energy;
    }
    
    getActive(){
        if(this.energy > 0){
            this.energy -=20;
            console.log("Energy is decreasing: ", this.energy);
            }
        else if(this.energy == 0)
            console.log("sleeping")
    }
    sleep(){
        this.energy +=20;
        console.log("Energy is currently at :", this.energy);
    }
    getColor(){
        console.log(this.color);
    }

}

var ani = new Animal();
ani.getColor();
ani.getActive();
ani.sleep();

class Cat extends Animal{

    constructor(canJump ="High", canClimb = true, sound = "purr",color, energy){
        super(color,energy);
        this.canJump =canJump;
        this.canClimb = canClimb;
        this.sound = sound;
    }
    makeSound(){
        console.log(this.sound);
    }
}

var pyapya = new Cat();
pyapya.makeSound();
pyapya.getActive();
console.log(pyapya.color);