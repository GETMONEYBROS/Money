//this is an object literal
let rappers = {
    currency: 7000000,
    drug: 'lean',
    carType: 'foreign cars'
};

let house = {
    rooms: 'bedrooms',
    emenitities: 'swimming pool',
    petIntrance: 'doggy door'
};

document.write(rappers.drug);   
console.log('young nudty is worth: ' + rappers.currency);
console.log('money');
console.log('lean');
console.log('foreign cars');
console.log('bedrooms');
console.log('swimming pool');
console.log('doggy door');

const  songs = ['EA','Goyard','YUNGXANHOE'];

console.log(songs);

for(let i=0; i<songs.length; i++) {
    console.log(   songs[i]     );
}

console.log(songs.length);


for(let i=0;  i<=5;  i++) {
    console.log(i);
}

// new keyword & Object constructor
const student = new Object();
 
student.grade = 12;
student.gradePointAverage = 3.7;
student.classes = ["English", "Algebra", "Chemistry"];
student.getClasses = function() {
  return this.classes;
};
 
 console.log(student.grade);
 console.log(student.gradePointAverage);
 console.log(student.classes);
 console.log(student.getClasses);
 console.log(student.getClasses());


 //below we will work on this after I learn function
  
// constructor function 
function Car(color, brand, year) {
    this.color = color;
    this.brand = brand;
    this.year = year;
  }
   
  Car.prototype.getColor = function() {
    return this.color;
  };
   
  const carlysCar = new Car('blue', 'ferarri', 2015);
  const jimsCar = new Car('red', 'tesla', 2014);
   
  console.log(carlysCar.getColor());
  console.log(jimsCar.getColor());
  
  
  
  //something to know...
  const user1 = {
    name: 'Jordan',
    age: 28,
  };
   
  const user2 = {
    name: 'Jordan',
    age: 28,
  };
   
  console.log(user1 == user2); //return false because objects DO NOT compare in value only reference
  console.log(user1 === user2); //return false because objects DO NOT compare in value only reference
  //now to make this true you must delete user2 and  write your reference as: const user2 = user1;
  
  //the other way to get a value and not reference is to use JSON.stringify() to convert the object to a string then it can be compared by value
  //because strings are primative data types and do not contain properties.
  // console.log(JSON.stringify(user1) === JSON.stringify(user2);