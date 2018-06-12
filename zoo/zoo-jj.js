var animals = {
    desert:"camel",
    arctic:"polar bear",
    local:"coyote"
};

var nonMammals = {
    predator:"shark",
    prey:"catfish",
    chillin:"jellyfish"
};
//printing out animal objects, printing out nonmammal objects
var x = "Desert animal: " + animals.desert;

document.getElementById("camel").innerHTML = x;

var b = "Arctic animal: " + animals.arctic;

document.getElementById("bear").innerHTML = b;

var m = "Local: " + animals.local;

document.getElementById("coyote").innerHTML = m;

var v = "Prey: " + nonMammals.prey;

document.getElementById("catfish").innerHTML = v;

var r = "chillin: " + nonMammals.chillin;

document.getElementById("jellyfish").innerHTML = r;

var c = "Predator: " + nonMammals.predator;

document.getElementById("shark").innerHTML = c;

//coworkers array
const coworkers = ['Kenna','Josiah','Malik', "Los Angeles", "Torrance"];

var j = "The total number of coworkers is" + " " + coworkers.length;

var totalNames = " " + coworkers[0] + " " + coworkers[1] + " " + coworkers[2];

document.getElementById("workers").innerHTML = j + totalNames;

//forloop for coworkers array
let loopTest = "";
for(let i = 0; i<coworkers.length; i++) {
loopTest += coworkers[i] + ", ";

}
document.getElementById("totalWorkers").innerHTML = loopTest;

//coworkersSalaries object
const coworkersSalaries = {
    best:1000000000,
    optimal:1000000,
    worst:100000
};

var s = "best salary: " + coworkersSalaries.best;

document.getElementById("money").innerHTML = s;


//passing arguments/parameters to the function

//uno code function

var josiah = uno("kenna", 1000000000);

document.getElementById("josiah").innerHTML = josiah;


function uno(coworkersSalariesKenna, annualWage){
    return    '$' + (40 *   annualWage)  + '/hr  is how much ' +   coworkersSalariesKenna + ' makes per week.';
    }

//workers salary function

var andre = workersSalary("andre", 1400);

document.getElementById("andre").innerHTML = andre;

function workersSalary(coworkersSalariesJosiah, cashOut){
    return    '$' + (40 *   cashOut)  + '/hr  is how much ' +   coworkersSalariesJosiah + ' makes per week.';
    }

//duos function

var malik = duos("malik", 88999);

document.getElementById("malik").innerHTML = malik;

function duos(coworkersSalariesMalik, fatChecks){
    return    '$' + (40 *   fatChecks)  + '/hr  is how much ' +   coworkersSalariesMalik + ' makes per week.';
    }
