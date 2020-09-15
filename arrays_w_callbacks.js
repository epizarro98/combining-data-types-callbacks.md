//The first question is for the numbers array. The second question is for the words array.

//You don't have to write an answer to the thought questions.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']


//Every
//Determine if every number is greater than or equal to 0
// determine if every word shorter than 8 characters


function checkNum(nums) {
  return nums >= 0;
}
checkNum();


// determine if every word shorter than 8 characters

//  if (panagram.length > 8){
//  return panagram; 
//  }



panagram.every(array=>array.length<8)



//Filter
//filter the array for numbers less than 4

nums.filter(num => num < 4)




// var ages = [32, 33, 12, 40];

// function checkAdult(age) {
//   return age >=

//filter words that have an even length
//panagram.filter(word => )



panagram.filter(word=>word.length%2===0)

//Find the first value divisible by 5
nums.find(num=>num %5===0)



//find the first word that is longer than 5 characters
panagram.find(word=>word.length >=5)


//find the index of the first number that is divisible by 3
nums.indexOf(num=>num%3===0)
//Come back to the one, unsure onto why we were getting -1


//find the index of the first word that is less than 2 characters long

//Get back to this one (stuck on indexOf method)
panagram.indexOf(word=>word.length <= 2)




//For Each
//console.log each value of the nums array multiplied by 3

// for( let i = 0; i < nums.length; i++) {
    //nums.forEach(function())
//}

//Understand whats going on in function.
function myFunction(item, index, arr){
arr[index] = item * 3;
}
nums.forEach(myFunction)
console.log(nums)

// }
// console.log(multiply(8, 6));

//This was another solution i found but found Preet and i found a better solution
//console.log each word with an exclamation point at the end of it
// function myFunction(itm, index, arr) {
//     arr[index] = item + "!";
// }
// for(let i = 0; i < panagram.length; i++) {
    
// }
// panagram.forEach(panagrams => {
// for (let i=0; i<panagram.length; i++)

//   console.log(panagram !")
// })

panagram.forEach(element => {
  console.log(element + '!')
})



// for(let i = 0; i < panagram.length; i++) {
//     panagram[i] = '!'
// }


// function add2(addElement){
//   const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
//   for (let i = 0; i < panagram.length; i++){
//     // panagram.push(addElement)
//    return panagram
//   }
// }

// console.log(add2('!'))




// Thought Questions

// What happened to the original array?
//Each element in the array got an exclaamion mark.

// Can you store the values from a forEach method in a new array?
//Yes.





// Map
// make a new array of each number multiplied by 100
 const someFunc = (nums)=>{
   return nums * 10
 }
let newArr = nums.map(someFunc)
console.log(newArr)


// make a new array of all the words in all uppercase
const uppercased = panagram.map(word => word.toUpperCase())
console.log(uppercased)


// Thought Questions

// What happened to the original array?
//Each element in the array got capitalized.

// Can you store the values from a forEach method in a new array?
//Yes.



//Some
// //Find out if some numbers are divisible by 7

nums.some(element =>{
    return element % 7 === 0;
  
  })
  // // code found online. 
  
  // //Find out if some words have the letter a in them
  panagram.some(word =>{
    let someArr = word.toString()
    return word.includes('a');
  })
  
  