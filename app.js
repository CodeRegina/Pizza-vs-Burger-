let Meal = require('./meal')

let fight = (pizza, burger) => {
    if (burger.flavor > pizza.flavor) {
        console.log(`${burger.name} is more popular than Pizza`);
    }
    else if (burger.flavor < pizza.flavor) {
        console.log(`${pizza.name} is more popular than Hamburger`);
    }
    // Note this never runs (like very very unlikely) 
    // because Math.random is very random
    else {
        console.log(`${burger.name} and ${pizza.name} are equally popular`);
    }
}

const burger = new Meal('Hamburger ', Math.random());
const pizza = new Meal('Pizza', Math.random());

fight(pizza, burger);