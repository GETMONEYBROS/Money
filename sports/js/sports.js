//sports object literal
var sports = {
    football: "runningback",
    basketball: "pointGuard",
    soccer: "forward",
    baseball: "pitcher"
};

//equipmentPrices object literal
var equipmentPrices = {
    helmet: 20,
    shoudlerPads: 25,
    gloves: 50
};

//printing keys
console.log(Object.keys(sports));
document.getElementById("keys").innerHTML = Object.keys(sports);
console.log(Object.keys(equipmentPrices)[0]);

//sportsEquipment array
var sportsEquipment = ["helmet", "shoudler pads", "gloves"];

var a = "There are" + " " + " " + sportsEquipment.length + " " + "items of equipment.";

var sportsEquipmentLength = " " + sportsEquipment[0] + "," + " " + sportsEquipment[1] + "," + " " + sportsEquipment[2];

document.getElementById("sportsEquipment").innerHTML = a + sportsEquipmentLength;


//helmet function
var b = helmetPrice(equipmentPrices.helmet, 0.87);

document.getElementById("helmet").innerHTML = b;

function helmetPrice(equipmentPrices, tax){
    return  '$' +   equipmentPrices +  " "  +   '$' + (equipmentPrices + tax) + " is how much the helmet cost AFTER tax."
  };

//shoulderPads function
var c = shoulderPadsPrice(equipmentPrices.shoudlerPads, 0.87);

document.getElementById("shoulderPads").innerHTML = c;

function shoulderPadsPrice(equipmentPrices, tax){
return  '$' +  equipmentPrices + " "  +  '$' + (equipmentPrices + tax) + " is how much the shoulder pads cost AFTER tax"
  };

//gloves function
var d = glovesPrice(equipmentPrices.gloves, 0.87);

document.getElementById("gloves").innerHTML = d;

function glovesPrice(equipmentPrices, tax){
    return  '$' + equipmentPrices + " "  +  '$' + (equipmentPrices + tax) + " is how much the gloves cost AFTER tax."
  };

//helmet parameter
var p = para("a helmet", equipmentPrices.helmet);

document.getElementById("a helmet").innerHTML = p;


function para(equipmentPrices, price){
    return    '$' + (20)  + ' is how much ' +   equipmentPrices + ' costs.';
  };
  
//shoulder pads parameter
var x = shoul("shoulder pads", equipmentPrices.shoudlerPads);

document.getElementById("shoulder pads").innerHTML = x;


function shoul(equipmentPrices){
    return    '$' + (25)  + ' is how much ' +   equipmentPrices + ' costs.';
  };
  
//gloves parameter
var z = glove("good gloves", equipmentPrices.gloves);

document.getElementById("good gloves").innerHTML = z;


function glove(equipmentPrices){
    return    '$' + (50)  + ' is how much ' +   equipmentPrices + ' costs.';
  };