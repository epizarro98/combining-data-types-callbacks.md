
// Common programming principles
//DRY : 'Dont repeat yourself' this means to not repeat yourself but instead to 
// use abstractions or using data normalization to avoid redundancy.
//I feel as i struggle with this because I tend to repeat myself when it comes
//to my code.

//KISS : 'Keep it simple stupid' this simply means to keep your code simple
// and readable for others to understand.

//Avoid Creating a YAGNI (You aren’t going to need it) what i got from this was
// to not make an app more complex than it needs to be. Not making it interactive
//if it doesnt need to be.

// Do the simplest thing that could possibly work - What i got from this was 
// to make things simple and to not get fancy unless nesseccary.

// Don’t make me think - this means to basically make the code easy to read.
// The person reading the code should be able to read whats going on without having a hard seeing what you are trying to put down.

//Write code for the maintainer
//This basically means to write code that is maintainable for not only for yourself but for anyone else who is going to maintain it.



// Single responsibility principle
//This is a computer programming principle that every module like a class, or a 
//function should have responsibility over a single part of that programs functionality


// Avoid premature optimization
// This is the process of modifying a section of code when it isnt working or slower than you want it to. Otherwise, avoid doing it.




// Separation of concerns
//This is where you would separate a computer program into different sections to in case you need to go back and make a modification.














// Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

const f = l => {// function f taking a parameter called l
  let es = 0, p = 0, c = 1, n = 0//four variables set to 0
  while (c <= l) {//while loop w/c less than or equal to l
    n = c + p;//setting n to value of c and p 
    // console.log(n)// This is me trying to see what this will output
    // console.log([c, p])// This is me trying to see what this will output
    [c, p] = [n, c]//c=1 p=0, n=1 since c + p = 1, then c runs through the loop
    // console.log([c, p]) This is me trying to see what this will output
    es += (c % 2 === 0) ? c : 0//es += c modulus 2 ===0, then a conditional
    //tenary, question mark is an if statement and the colon is the else
  }
  return es//returning the value of es
}

console.log(f(55))//while loop becomes false when it reaches 55, and passes in l


const f2 = (limit) => {//f2 is taking a parameter called limit
  let evenSum = 0; //variable evenSum is being declared equal to 0
  let previous = 0;//variable previous is being declared equal to 0
  let current = 1;//variable current is being declared equal to 1
  while (current <= limit) { //while loop, 'current' variable is less than or equal to limit
    let next = current + previous;//new variable called next is being declared, current + previous = 1
    previous = current;//previous becomes 1 but now is equal to current
    current = next;//current then passes 1 to next
    if (current % 2 === 0) {//if 1 % 2 === 0; which is false
      evenSum += current;//not 100% sure whats going on here but im pretty sure that += operator
      //is joining those two variables together and adding them
    }
  }
  return evenSum;//while loop becomes false when it reaches 55, passes in l, and logs the value
}


console.log(f2(55))//while loop becomes false when it reaches 55, passes in f2, and logs the value


// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
//I think the classic would be Fizzbuzz. We did it in class and for hw. I think an easier variable name would probably be 'sum' or 'findValue'. F was hard to keep track of but f2 wasnt too bad.


// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
//I think i have a decent understanding on both but would probably go with f2. F2 looks easier to read and would be easier to explain to an interviewer.



// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
//Yes, i think it needs the semi-colon because its a single equal sign, where if you had a double or a triple equal sign you wouldnt need it, or using a boolean.