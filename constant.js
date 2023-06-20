const car3 = {
    speed : 300,
    color : "yellow"
}
console.log(Object.keys(car3));
console.log(Object.values(car3));
console.log(Object.entries(car3));

const flying ={wings : 2}
const car = {wheel : 4}
const flyingCar =  {...flying,...car}
console.log(flyingCar);

let veggies=['onion','parsley'];
veggies=[...veggies,'carrot','beetroot'];
console.log(veggies);

const greeting ="Hello";
const arrayOfChars =[...greeting];
console.log(arrayOfChars);

const car1={
    speed:200,
    color : 'Yellow'
}

const car2 = {...car1}

car1.speed = 201
console.log(car1.speed, car2.speed)