// OOP = object oriented programing


/*
notice i have two objects both named 'foo' and they BOTH have the same key:value pair.
HOWEVER by using the 'this' keyword in the second object 'foo' i am able 
to make sure that i ONLY grab the correct object value that i want that belongs
to its own object 'foo'. This because of variable scoping to keep from overriding.
*/
var foo = { 
    two: 'kitty'
}


//example 1 using 'this' keyword in method/function in objbect literal
var foo = {
    one: 1,
    two: 2,
    three: 'three',
    four:function(){ //when a function is inside of objects key:value its a "method" 
        return document.getElementById('oop2').innerHTML = 29;
    },
    five: function(){
        return document.getElementById('oop3').innerHTML = this.two;  //the 'this' keyword grabs the value of whats in the MAIN parent object itself '{}' and nothing outside of it.
    }
}

foo.four(); //this is how you return the value of the method/function in your objects key:value

foo.five(); //this is how you return the value of the method/function in your objects key:value


//example 2 passing arguments/parameters

function car(a,b,c){
    //alert( a+b+c);  
    return document.getElementById('oop1').innerHTML = a + b + c;
    console.log( a + b + c);
}

car(1,2,"blah");

//example 3 using the key word 'this' for object oriented programming OOP
//this is called a 'constructor function' also known as 'classes'
//and classes and contructors need to have 'capital letter' so people know what it is.
//your class/constructor is known as 'blue print'
function House(size, color, type, city, state){
    this.size = size,
    this.color = color,
    this.type = type,
    this.city = city,
    this.state = state
    console.log( this.size + " " +  this.color + " " +  this.type + " " + ' i will by it for sale 5k in' + " " +  this.city + " " + this.state);
}

//house(2, 'red', 'condo' );
//notice the keyword 'new' this is how you make and 'instance' of the class/constructor function
const friscoHills = new House(5, 'blue', 'trailer park', 'frisco', 'tx');
const beverlyHills = new House(15, 'green', 'mansion', 'beverly hills', 'ca');
const portlandNW= new House(152, 'white', 'apartment', 'portland', 'or');

/*
prototyping is VERY POWERFUL in javaScript.

note: we are gonna learn how to use the 'prototype' keyword to update and object and constructor function.
things to know about prototypes YOU CAN NOT update a property outside of the constructor function.
BUT you can on a regular object literal. 
HOWEVER YOU CAN add a 'method' to both of the object and constructor function ouside
of the their '{}'.

https://www.w3schools.com/js/js_object_prototypes.asp
*/

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
Person.prototype.nationality = "English";
Person.prototype.middlename = "Joe";
Person.prototype.sex = "male";

Person.prototype.bDay =function() {
    return this.age;
};
    
Person.prototype.eyeBalls =function() {
    return this.eyeColor;
};
    
var myFather = new Person("John", "Doe", 50, "blue");
document.getElementById("demo").innerHTML =
"My father is " + myFather.nationality + " "  + myFather.middlename + " " + myFather.sex + " " + myFather.bDay() + " " + myFather.eyeBalls();



//how to make a self-invoking your function on load.
function jj(){
    return document.getElementById('oop4').innerHTML = 'hello world invoke me';
}

jj(); //self-invoking


//another way to self-invoking
//all self-invoking function means it will invoke right way
(function aj(x){
    return document.getElementById('oop5').innerHTML = 'hello world andre' + x;
})(29); //notice the '()' invoke parentheses


//this is called anonymous function when the function is in a variable!
const myNumber = function(){
    return document.getElementById('oop6').innerHTML = 'i am anonymous function';
}
myNumber(); //this is how you call your anonymous function

/*
we are gonna learn about javascritpt 'closurs'.
this is important to understand how to keep variables in closures so you dont override 
variables on the global scope.

so lets make sure we review the 'global scope'
https://www.w3schools.com/js/js_function_closures.asp
*/

function Shoes(size, color, brand){
    this.size = size,
    this.color = color,
    this.brand = brand
    this.myShoes = function(){
    console.log(this.size + this.color + this.brand);
    document.getElementById("nike").innerHTML = this.size + this.color + this.brand;
    };
};

const nike = new Shoes(10, " red", " Nike");
console.log( nike.myShoes());

Shoes.prototype.country = "USA";
console.log(nike.country);

Shoes.prototype.factory = function(){
    console.log("Made in China");
};
console.log(nike.factory());


function josiah(){
    return "";
};


var apple = function kenna(){
    return "";
};


(function josiah2(){
    return "";
})();

const josiah3 =() => {
    return "";
};

//the 5 different way to print value to page.
//document.getElementById("").innerHTML = ;
//document.write();
//alert();
//return
//console.log();

//event listen example 1
function testButton(){
    alert("cali");
};

//event listen example 2
document.getElementById("myBtn").addEventListener("click", function(){
    document.getElementById("demo2").innerHTML = "Hello World Josiah";
});

//event listen example 3
document.getElementById("myBtn1").addEventListener("click", boo);

function boo() {
    document.getElementById("demo3").innerHTML = "sleep";
}

//event listen example 4
var p1 = 5;
var p2 = 7;

document.getElementById("myBtn2").addEventListener("click", function() {
    myFunction(p1, p2);
});

function myFunction(a, b) {
    var result = a * b;
    document.getElementById("demo4").innerHTML = result;
}

//example 5 style colors
//notice the "this" keyword.
document.getElementById("myBtn3").addEventListener("click", function(){
    this.style.backgroundColor = "red";
});