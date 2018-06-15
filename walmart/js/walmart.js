var groceries = {
    lightBreakfast: "waffles",
    proteinMeal: "chicken",
    topping: "cheese",
    dinner: "pizza",
    bathroomUtility: "toiletPaper"
};

var storePrices = {
    waffles: 4,
    chicken: 7,
    cheese: 6,
    pizza: 5,
    toiletPaper: 6
};

//printing out the properties/keys in my object to console
for(let prop in storePrices) {
    console.log(prop);
};

const managers = ['Kenna','Josiah','Malik', "Dill"];

var a = "There is" + " " + " " + managers.length + " " + "managers at walmart";

var totalManagers = " " + managers[0] + " " + managers[1] + " " + managers[2]  + " " + managers[3];

document.getElementById("managers").innerHTML = a + totalManagers;

let loopTest = "";
    for(let i = 0; i<managers.length; i++) {
    loopTest += managers[i] + ", ";
};

document.getElementById("totalManagers").innerHTML = loopTest;
//waffle function
var b = wafflePrice(storePrices.waffles, 0.87);

document.getElementById("waffles").innerHTML = b;

function wafflePrice(storePrices, tax){
    return  '$' +   storePrices +  " "  +   '$' + (storePrices + tax) + " is how much the waffles are AFTER tax."
  };

//chicken function
  var c = chickenPrice(storePrices.chicken, 0.87);

document.getElementById("chicken").innerHTML = c;

function chickenPrice(storePrices, tax){
    return  '$' +   storePrices +  " "  +   '$' + (storePrices + tax) + " is how much chicken is AFTER tax."
  };
//cheese function
  var d = cheesePrice(storePrices.cheese, 0.87);

  document.getElementById("cheese").innerHTML = d;
  
  function cheesePrice(storePrices, tax){
      return  '$' +   storePrices +  " "  +   '$' + (storePrices + tax) + " is how much the cheese is AFTER tax."
    };
//pizza function
    var e = pizzaPrice(storePrices.pizza, 0.87);

    document.getElementById("pizza").innerHTML = e;
    
    function pizzaPrice(storePrices, tax){
        return  '$' +   storePrices +  " "  +   '$' + (storePrices + tax) + " is how much the pizza will be AFTER tax."
      };

      var j = toiletPaperPrice(storePrices.toiletPaper, 0.87);

  document.getElementById("toiletPaper").innerHTML = j;
  
  function toiletPaperPrice(storePrices, tax){
      return  '$' +   storePrices +  " "  +   '$' + (storePrices + tax) + " is how much the toilet paper is AFTER tax."
    };
