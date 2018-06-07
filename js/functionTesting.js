//rapper object

    var rapper =  {
        firstname:"famous",
        lastname:"dex",
        age:23,
        eyecolor:"red"
    };    
    //Q. Where is this "person" object coming from? I only see a "rapper object"
    //document.getElementById("demo1").innerHTML = person.firstname + " is " + person.age + " years old, so he still young u feel me.";       
    var x = 1400 + "gang";
    //this what you wanted the code you wanted to write.
    //you had document.write() you will ONLY use this inline. I will teach how to use this line of code.
    document.getElementById('x14').innerHTML = x;              

    //demo  rapper2 object. 
    //you cant have the same object with the same name "rapper" so i changed it to "rapper2"
    //I will soon teach you how to use the powerful javaScript key word "this".
    //using the key word "this" WILL ALLOW YOU to use and object with the same name.
    var txt = "";
    var rapper2 = {fname:"Josiah", lname:"Jamison", age:18}; 
    var x; //get in the habbit of using the 'let' key word if your going us it in for loop. 'let' is for block scoping for loops.
    for (x in rapper2) {
        txt += rapper2[x] + " ";
    }
    document.getElementById("demo").innerHTML = txt;


    //demo  rapper3 object
    var rapper3 = {
        firstName:"Famous",
        lastName:" Dex",
        age:23,
        eyeColor:"red"
    };
    delete rapper3.age;
    document.getElementById("demo2").innerHTML = rapper3.firstName + rapper3.lastName + " is " + rapper3.age + " years old.";


    //data types
    //make sure you understand datatypes since you will use them every day in programming. this is for ALL languages in programming.
    document.getElementById("x320").innerHTML = 
    typeof {name:'Josiah', age:18} + "<br>" +
    typeof [1,2,3,4] + "<br>" +
    typeof null + "<br>" +
    typeof function myFunc(){};


//javascript math demo

//because use used the variable 'x' already on the same page you will over write the one above so I had to change it.
var x1 = myFunction(4, 3); //make sure you understand passing arrguments
document.getElementById("demo3").innerHTML = x1;

function myFunction(a, b) {
    return a * b; //make sure you UNDERSTAND the 'return' key word.
}


//javascript functions and passing arrguments

document.getElementById("demo4").innerHTML = "The temperature is " + toCelsius(66) + " Celsius";

function toCelsius(fahrenheit) { //make sure you understand passing arrguments
    return (1/4) * (fahrenheit-28);  //make sure you UNDERSTAND the 'return' key word.
} 

//javascript functions and passing arrguments
function toCelsius(f) {
    return (4/1) * (f-1400);
}
//this will give the ENTIRE function instead of a value IF YOU DO NOT add the '()' toCelsius()
document.getElementById("demo5").innerHTML = toCelsius;
