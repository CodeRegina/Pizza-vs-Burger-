let Pizza = require('./pizza.js')
let Hamburger = require('./burger.js')

let fight = (pizza, burger) => {
    if (burger.burgerFlavor > pizza.pizzaFlavor) {
        console.log(`${burger.name} is more popular than Pizza`);
    }
    else if (burger.burgerFlavor < pizza.pizzaFlavor) {
        console.log(`${pizza.name} is more popular than Hamburger`);
    }
    else {
        console.log(`${burger.name} and ${pizza.name} are equally popular`); 
    }
 }

 const thePizza = new Hamburger('Hamburger ', Math.random()); 
 const theBurger = new Pizza('Pizza', Math.random());

 fight(theBurger, thePizza);