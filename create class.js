class Train{
    constructor (color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights(){
        this.lightsOn = !this.lightsOn;
    }
    lightStatus()
    {
        console.log("Light On? ", this.lightsOn);
    }
    getSelf(){
        console.log(this);
    }

    getPrototype(){
        var photo = Object.getPrototypeOf(this);
        console.log(photo);
    }
}

var train4 = new Train("red", false);
train4.getPrototype();
train4.getSelf();
train4.toggleLights();
train4.lightStatus();


class HighSpeedTrain extends Train{
    constructor(passengers, highSpeedOn,color, lightsOn){
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed(){
        this.highSpeedOn = !this.highSpeedOn;
        console.log("High speed  status:", this.highSpeedOn);
    }
    toggleLights_any() {
        super.toggleLights();
        super.lightStatus();
        console.log('Lights are 100% operational.');
    }
}

var highSpeed1 = new HighSpeedTrain(200, false,'Green',false );
highSpeed1.toggleHighSpeed();
highSpeed1.lightStatus();
highSpeed1.getPrototype();