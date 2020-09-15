// Create an array called apartmentBuilding that has an array as one of 
// its elements, the inner array should be the names of the tenants. 
// Log one of the elements of the inner array.
const crayonBox = {
    crayons: ['red', 'blue', 'purple', 'pink']
   }
   console.log(crayonBox.crayons[0])
   
   
   const bottle = {
     cap:  {
       material: 'plastic',
       color: 'blue'
     }
   }
   console.log(bottle.cap.material)
   
   
   const receipt = {name: 'ed', price: 5}
   console.log(receipt.name)
   
   const apartmentBuilding = {
     tenants: ['bob', 'rick', 'kelsey']
   }
   console.log(apartmentBuilding.tenants[1])



  //  Create a function knit that returns an object that has the following kinds of properties item: scarf, 
  //  size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

  //  Create a function crayonSelector that returns an object that has an array 
  //  (you can reuse your crayonBox object). Log one of the elements of that array.

  //  Create a function powerButton that returns a function called options - options should console.log 
  //  a simple message like select a song. Call that inner function

  const knit = {
    newObj: {
      item: 'scarf',
      size: 3
    }
  }
  knit.newObj.item

  
  crayonBox2 = {
    craziness: ['sox', 'pears', 'monkeys']
  }
  crayonBox2.craziness[2]
  
  
  const powerButton = 'null'
  
  const options = () => {
    console.log('Try me')
  }
  options()
  //Not sure if this is correct, but feel like there is a 
  //better way of doing this.



   //a vending machine is an object
//it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array    position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack

const vendingMachine = {
  items: [
    { name: "Espresso", price: 1 },
    { name: "Cappuccino", price: 2.5 },
    { name: "Chocolate", price: 2 },
    { name: "Potato", price: 3.5 },
  ],
  vend: (arrposition) => {
    return vendingMachine.items[arrposition].name;
  },
};
vendingMachine.vend(2);
//Not logging what it needs to be. Mateen and I looked at it and seemed fine 
//but still isnt working.





//================================================
//My first attempt at this code but Trez showed me a better way
//================================================

// Callbacks
// Make a function add that takes two arguments (numbers) and sums them together
// const add = (a, b) => {
//   return a + b;
// }
// console.log(add(2,3));
// // function add(x, y) {
// //     return x+y;
// // }
// // console.log(add(2, 3));      // 5
// // console.log(add(-1, 1));     // 0
// // console.log(add(1, 1, 1));   //
// // Make a function subtract that takes two arguments (numbers) and subtracts them
// function subtract(x,y) {
//   return x-y;
// }
// console.log(subtract(8,5));
// // Make a function multiply that takes two arguments and multiplies them
// function multiply(a, b) {
//   return a * b
// }
// console.log(multiply(8, 6));

// // Make a function divide that takes two arguments and divides them
//  function divide (a, b) {
//    return a/b
//  }
//  console.log(divide(12, 3));
// // Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
// //We made a function called calculate, then passed in
// //3 arguments. Wasnt sure on how to create a second 
// //function and make it a callback.
// function calculate(num1, num2, num3){
//   return num1*num2*num3
//   console.log(num1); 
//   console.log(num2);
//   console.log(num3);
// }
// calculate(2,4,6);

// Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
//We made a function called calculate, then passed in
//3 arguments. Wasnt sure on how to create a second 
//function and make it a callback.
// function calculate(num1, num2, num3){
//   return num1*num2*num3
//   console.log(num1); 
//   console.log(num2);
//   console.log(num3);
// }
// calculate(2,4,6);





const calculate = (num1, num2, operates) =>{
  return operates(num1,num2)
}
console.log(calculate(4, 4,add))


// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.


// Call calculate 4 times, each time using one of the operation functions you wrote

console.log(calculate(5,4, add))
console.log(calculate (5,5, subtract))
console.log(calculate(5,5,multiply))
console.log(calculate(5,5,division))

// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.

// Call calculate 4 times, each time using one of the operation functions you wrote

calculate(1,3,5);








//Clean up this code, so that it works and has function definitions in the correct place

//inthe invoke function had to be moved below the curly brackets as it was currently a global scope.

const bar = () => {
  console.log('bar here');
}
bar();

const foo = () => {
  console.log('foo here');
}
foo();



//What is meant by the error(s) this produces? 
// Foo has been already been declared in the above function, we need something different. Also, it needs to be moved below the function to invoke it. 


const foo2 = () => {
  console.log('hi');
}
foo2();