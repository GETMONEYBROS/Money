<p id="dex"></p>
<script> 
    var rapper =  {
    firstname:"famous",
    lastname:"dex",
    age:23,
    eyecolor:"red"
    document.getElementById("demo").innerHTML =
    person.firstname + " is " + person.age + " years old, so he still young u feel me.";
                  };
    <p id="14"></p>              
    var x= 1400 + "gang";
    document.write(14) innerHTML = x;              
</script>



<body>

<h2>JavaScript Objects</h2>

<p id="demo"></p>

<script>
var txt = "";
var rapper = {fname:"Josiah", lname:"Jamison", age:18}; 
var x;
for (x in rapper) {
    txt += rapper[x] + " ";
}
document.getElementById("demo").innerHTML = txt;
</script>

</body>



<body>

<h2>JavaScript Objects</h2>

<p>Deleting object properties.</p>

<p id="demo"></p>

<script>
var rapper = {
    firstName:"Famous",
    lastName:" Dex",
    age:23,
    eyeColor:"red"
};
delete rapper.age;
document.getElementById("demo").innerHTML =
rapper.firstName + rapper.lastName + " is " + rapper.age + " years old.";
</script>



<body>

<h2>Data typessssss</h2>
<p>2019 got a bag for me.</p>
<p>I found the best gas in texas.</p>

<p id="320"></p>

<script>
document.getElementById("320").innerHTML = 
typeof {name:'Josiah', age:18} + "<br>" +
typeof [1,2,3,4] + "<br>" +
typeof null + "<br>" +
typeof function myFunc(){};
</script>

</body>


<body>

<h2>Javascript Math</h2>

<p>multiplication:</p>

<p id="demo"></p>

<script>
var x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;

function myFunction(a, b) {
    return a * b;
}
</script>

</body>



<body>

<h2>JavaScript Functions</h2>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
"The temperature is " + toCelsius(66) + " Celsius";

function toCelsius(fahrenheit) {
    return (1/4) * (fahrenheit-28);
} 
</script>

</body>


<body>

<h2>JavaScript Functions</h2>

<p>Lil Uzi Vert</p>
<p id="demo"></p>

<script>
function toCelsius(f) {
    return (4/1) * (f-1400);
}
document.getElementById("demo").innerHTML = toCelsius;
</script>

</body>
</html>
