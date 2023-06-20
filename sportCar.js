const car ={
    engine : true,
    steering : true,
    speed : 'slow'
}

const sportsCar =  Object.create(car);
sportsCar.speed = "fast";
console.log("The  sportsCar object:", sportsCar);

let greet = "Hello";
let place ="World";
console.log('${greet} ${place} !');
console.log('${1+1+1+1}');
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) ;

let MultiLine ="No multiline string in ES5";
console.log()