// function calculatePizzaPrice1(size, toppings, quantity) {
//     let basePrice;

//     // Set base price based on size
//     switch (size) {
//         case 'small':
//             basePrice = 8;
//             break;
//         case 'medium':
//             basePrice = 10;
//             break;
//         case 'large':
//             basePrice = 12;
//             break;
//         default:
//             basePrice = 0;
//     }

//     // Add extra cost for each topping
//     const toppingPrice = 1.5; // Price per topping
//     const toppingsCost = toppings.length * toppingPrice;

//     // Calculate the total price
//     const totalPrice = (basePrice + toppingsCost) * quantity;

//     return totalPrice;
// }

// // Example usage
// const size = 'medium'; // 'small', 'medium', or 'large'
// const toppings = ['pepperoni', 'mushrooms', 'olives']; // Array of chosen toppings
// const quantity = 2; // Number of pizzas

// const total = calculatePizzaPrice1(size, toppings, quantity);
// console.log(`Total price for your order: $${total}`);
