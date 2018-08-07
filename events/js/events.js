var x = new Date();
console.log(x);
document.getElementById("date").innerHTML = x;

var y = new Date();
//this is how you pull out the full month without the array you'll get the month# instead of month name.
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
//todays date is july 12th/2018 i made this function.
document.getElementById("date2").innerHTML =`${monthNames[y.getMonth()]}/${y.getDate()}/${y.getFullYear()}`;

function newButton(){
    alert("Josiah Jamison");
};

document.getElementById("boo").addEventListener("click", function(){
    document.getElementById("boo").innerHTML = "Josiah";
    newButton();
});