var animals = {
    hot:"camels",
    cold:"polar bears",
    water:"sharks"
};

//document.getElementById("animals").innerHTML=animals.hot;

//only use 'let' if your gonna use it in block loop scoop so i changed it to 'const'
const coworkers = ['Kenna','Josiah', 'Malik'];  //put your mouse over the errors. It will try and tell what to fix. your commas was inside of the quotes in 

//changed 'let' to 'const'
//updated to cammelHump
const coWorkersSalaries = { //these are numbers so DO NOT turn them into strings if your gonna use for math calculations and do not put in decimals or ',' comnas.
    best: 1000000000,
    optimal: 1000000,
    worst:100000
};

//updated to cammelHump to read better
// you cant have the same name as the function as the same name as the object
//and you must put the key word function before the function name
//now you can finish building your salary function you have more objects to write to make this work in order pass them corretly to the arrugments
//NOTE: you dont want to pass the ENTIRE object 'coWorkersSalaries'

function coWorkersSalaries(coWorkersSalariesKenna, coWorkersSalaries){
return '$' + (40 *   coWorkersSalaries)  + ' hr  is how much' +   coWorkersSalariesKenna + ' makes per week.';
}

function workersSalary(coWorkersSalariesJosiah, coWorkersSalaries){
    return '$' + (40 *   coWorkersSalaries)  + ' hr  is how much' +   coWorkersSalariesJosiah + ' makes per week.';
}

function bigMoney(coWorkersSalariesMalik, coWorkersSalaries){
 return    '$' + (40 *   coWorkersSalaries)  + ' hr  is how much' +   coWorkersSalariesMalik + ' makes per week.';
}

