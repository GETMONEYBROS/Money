//my rapper object

var rapper =  {
    firstname:"famous",
    lastname:"dex",
    age:23,
    eyecolor:"red"
 };             
    var x= 1400 + " gang";

    
    document.getElementById("demo").innerHTML =
    rapper.firstname + " is " + rapper.age + " years old, so he still young u feel me.";

//myself object
var txt = "";
const myself= {
    fname:"Josiah",
    lname:"Jamison",
    age:18
};

//for loop myself
let i;
for (i in myself) {
    txt += myself[i] + " ";
}

document.getElementById("newName").innerHTML = txt;

//kennas object
var kenna = {
    firstName:"Kenna",
    lastName:" West",
    age:18,
    eyeColor:"Orange"
};
//delete kennas age
delete kenna.age;
document.getElementById("kenna").innerHTML =
kenna.firstName + kenna.lastName + " is " + kenna.age + " years old.";

//type of object testing
document.getElementById("tigard").innerHTML = 
typeof {name:'Josiah', age:18} + "<br>" +
typeof [1,2,3,4] + "<br>" +
typeof null + "<br>" +
typeof function myFunc(){};

//function in passing argument/parameter and using a "return" keyword

var x = myFunction(4, 3);
document.getElementById("compton").innerHTML = x;

function myFunction(a, b) {
    return a * b;
}

document.getElementById("pdx").innerHTML =
"The temperature is " + toCelsius(66) + " Celsius";

function toCelsius(fahrenheit) {
    return (1/4) * (fahrenheit-28);
} 

function toCelsius(f) {
    return (4/1) * (f-1400);
}
document.getElementById("lax").innerHTML = toCelsius;
