var a = "Hello World";
document.getElementById("jj").innerHTML = a;

var books = {
    sports: "SportsIllustrated",
    fiction: "Magic tree house",
    nonFiction: "9/11",
    year: 2001
};
console.log(books);
//alert(books.sports);
var bookYear = 2018 - books.year;
console.log("9/11 came out" + " " + bookYear + " " + "years ago.");

Object.keys(books);
console.log(Object.keys(books));

var values = books.sports + books.fiction + books.nonFiction + books.year;
document.getElementById("values").innerHTML = values;

const games = ["GTA 5", "Madden 18", "Mortal Kombat"];
console.log(games.length);
document.write(games[2]);
document.write(" " + games[0]);

function greeting(age){
    document.write(" Hello Josiah" + " " + age);
    console.log("high");
    //return "Hello Josiah";
    return document.getElementById("greeting").innerHTML = "high";
};
//console.log(greeting());
//alert(greeting());
greeting(18);

//math function
function multiply(number){
    //alert(number*number);
    return number*number;
};
console.log(multiply(14));
document.getElementById("boo").innerHTML = multiply(14);

//alert x = 20, this.x = 29, var x is in the global scope so both "x"'s can be used at same time, you have to use this keyword to seperate them so they dont interfere w each other.
const x = 20;
//object literal constructor function
var p = {
    x: 29,
    poop: function(){
        alert(x); //this is coming from the global scope variable x
        return this.x; //this is coming from inside object literal local scope, NOT global scope by using keyword this.
    }
};
console.log(p.poop());

function Cars(name, color, model) {
    this.name = name,
    this.color = color,
    this.model = model,
    this.myCars = function(){
        console.log(this.name + " " + this.color + " " + this.model + " " + "<-- my strings.");
    };
    return console.log(this.myCars());
};
const car1 = new Cars("Lamborghini", "Red", "Aventador");
const car2 = new Cars("Bugatti", "Orange, Yellow", "Veyron");

Cars.prototype.language = "english";
Cars.prototype.language2 = function() {
    return this.language + this.color;
};
var myLanguage = new Cars("ingles"," rojo","verde");
document.getElementById("language").innerHTML = myLanguage.language + " " + myLanguage.language2();

//4 ways to execute function
//#1. es5 function
function hello1(){
    console.log("Hello World1");
};
hello1();

//#2. method
var hello2 = function(){
    console.log("Hello World2");
};
hello2();

//#3. self invoking iffy function
(function hello3()
{
    console.log("Hello World3");
})();

//#4. es6 function
//fat arrows () =>
const hello4 = () => {
    console.log("Hello World4")
};
hello4();

//es6 class/new way of making constructors
class Trucks{
    constructor(fName, lName){
        this.fName = 'Polygon',
        this.lName = 'matrix'
    };
      
    sayName() {
        console.log('Hi, I am a ', this.fName + " " + this.lName + '.');
      }
    };
    const trucks1 = new Trucks();
trucks1.sayName();




function Book(name, year, author){
    this.name = name,
    this.year = year,
    //this.rating = "children", the rating is being prototyped behind the scenes.
    this.author = author,
    //this.sex = function(){console.log("male")}, the sex method is being prototyped behind the scenes.
    this.library = function(){
        console.log(`${this.name} ${this.year} ${this.author}`)
    };
};

const books1 = new Book("nwa", 1987,"josh");
    console.log(books1.library());
Book.prototype.rating = "children";
    console.log(books1.rating);
Book.prototype.rating = "rated-R";
    console.log(books1.rating);
Book.prototype.sex = function(){
    console.log("male");
};
console.log(books1.sex());

//es5 function
function josiahIsCool(a){
    console.log(1400*a);
};
josiahIsCool(2);

//method
var joe = function(b){
    console.log("city of angels"+b);
};
joe(" is los angeles");

//self invoking iffy function
(function ice(c){
    console.log("New York"+c);
})(" brooklyn");

//es6 function
const cube = (d) => {
console.log("DEX"+d);
};
cube(" UZI");

//set timeout: 
setTimeout(function(){ alert("Hello"); }, 3000);