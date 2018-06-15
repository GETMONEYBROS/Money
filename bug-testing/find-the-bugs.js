/* 
 Your job is to find the bugs and debug the code so that it will print to the page.
 I have written the code but I put bugs in it so that it will not work.
 You will try to find bugs and fix it.

 hint: look for missspellings, comma, quotes, etc...

 GOOD LUCK!
*/


//this line of code has 1 bug
//document.getElementById('bug1').innerHtML= 33;


//no hints
foo('BMW'); 

function foo(x){
    return document.getElementById('bug2').innerHtML= x;
}

//no hints
const car = {
    sportCar: "Ford Mustang",
    truck: "GMC",
    electric: "Telsa"
}

document.getElementById('bug3').innerHTML= car.bomb;

//no hints
const pets = ['dog', 'monkey', 'cat'];
document.getElementById('bug4').innerHTML= 'There are '  pets.length + ' items in the array. But I only have a ' + pets[2];

//no hints
const names = ["Bob", "Jim", "Vanity", "Mina", "Rita", "Mason"];
let text = "";
let i;
for (i = 0; i < names.length; i+) {
    text += names[] + "<br>";
}
document.getElementById("bug5").innerHTML = text;