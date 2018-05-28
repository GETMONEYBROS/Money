 
 //DAD Notes: connect this file to your text.html.html  as <script src="text.html.html"></script> as the video says.
 //DAD Notes: look for red errors these warnings that something is wrong with your code. the more code you write the more you will find you bugs.
//DAD Notes: make sure you checking your work to make sure your getting the correct console.log() answers. DO NOT commit broken buggy code. how would you like it if you bought a sony game and spent $50.00 and the crap didnt work.




 // Comment 1400
 console.log('Hello World');


 let name = 'Playboi Carti'; //DAD Notes: there is a bug here and I dont know why. i need to look at it. but looks fine.
 console.log(name);

 // Cant be reserved keyword
 // meaningful
 // cant start w #
 // no space or hyphen
 // case sensitive

 let firstName = 'Playboi';  // DAD notes: you have parse error here delete the ';' after 'firstName;'
 let lastName = 'Carti';



 const interestRate = 0.3;
 //interestRate = 1;
 console.log(interestRate); //DAD Notes: speeling is wrong for your variable here.


 //let name = 'Playboi Carti b'; // String Literal
 let age = 20; // Number Literal
 let isApproved = false; // Boolean Literal
 //let firstName = undefined;
 let selectedColor = null;


 let person = {
     name: 'Young Nudy',
     age: 20
 };

 // Dot Notation
 //person.name = 'east';
console.log (person.name);

let car = {
    name: 'Lambo',
    color: 'red'
};

console.log (car.name);

car.name = 'Maserati'; //this is prototyping, copying over original value of 'Lambo'

console.log (car.name);


// Bracket Notation  //need to finih this code
let selection = 'name';
 person['selection'] = 'ATL';



 let selectedColors = ['red', 'blue','yellow','green','good gas pack og']; 
//show me how to get the actual value
 //selectedColors[2] = 1;
 console.log(selectedColors.length); //DAD Notes:  check the spelling of your variable. you should check to see if your getting the correct results. if your not then there is and issue. dont just commit code that does not work.

 

// Performing a task
 function greet(name, lastName) {
     console.log('Hello ' + name + ' ' + lastName);
 }

// calculating a value
function square(number) {
    return number * number;
}

//let number = 14;
console.log(square(2));


 greet('east', 'ATL'); //DAD Notes:  do you know where this is to print out??? I DO i see it. so tell me. :-)