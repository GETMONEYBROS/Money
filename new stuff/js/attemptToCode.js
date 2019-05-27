var a = "Kenna West";
document.getElementById("Wifey").innerHTML = a;

document.write("I Love Kenna West");

function kenna(){
    console.log("I Love Kenna");
};
kenna();

var west = function(){
    console.log("West");
};
west();

(function oregon(){
    console.log("Portland");
})();

//arrow function
const tigard = () => {
    console.log("Tigard");
};
tigard();

var object1 = {
    clothes: "designer",
    drink: "lean",
    smoke: "gas"
};
alert(object1.smoke);

Object.keys(object1);
console.log(Object.keys(object1));

const c = ["kenna", "josiah"];
console.log(c);

function Playstation(game, year, company){
    this.game = game,
    this.year = year,
    this.company = company
    this.myPs4 = function(){
        console.log(this.game + " " + this.year + " " + this.company)
    };
    return console.log(this.myPs4());
};

const game1 = new Playstation("GTA 5", 2015, "Rockstar");
const game2 = new Playstation("Red Dead 2", 2019, "Rockstar");

Playstation.prototype.state = "California";
Playstation.prototype.stateF = function(){
    return this.state + " " + this.year;
};

var myGame = new Playstation("lit", "addicting", "Hollywood");
document.getElementById("ps4").innerHTML = myGame.state + " " + myGame.stateF();

