const petsData = [

{
name: "Playboi Carti",
species: "cat",
favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
birthYear: 2018,
photo: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350"
},

{
name: "Famous Dex",
species: "dog",
birthYear: 2017,
photo: "https://www.rover.com/blog/wp-content/uploads/2017/06/7683806832_59688557b2_o-960x540.jpg"
},

{
name: "Rich The Kid",
species: "cat",
favFoods: ["tuna", "catnip", "celery"],
birthYear: 2008,
photo: "http://rs568.pbsrc.com/albums/ss123/minzayminzay/Decorated%20images/WhiteCatFace.gif?w=280&h=210&fit=crop"
},

{
name: "LIL UZI VERT",
species: "cat",
favFoods: ["nothing it starves", "poop", "piss"],
birthYear: 2008,
photo: "https://craigturic.files.wordpress.com/2016/08/catredeyes1.jpg?w=630"
}
];

function age(birthYear) {
return new Date().getFullYear() - birthYear;
if (calculatedAge == 1) {
return "1 year old"
    } else if (calculatedAge == 0) {
      return "baby" 
    } else {
        return `${calculatedAge} years old`
    }
}

function foods(foods) {
    return `
    <h4>Favorite Foods</h4>
    <ul class="foods.list">
    ${foods.map(function (food) {
        return `<li>${food}</li>`
    }).join("")}
    </ul>

    `
}

function petTemplate(pet) {
return `
<div class="animal">
<img class="pet-photo" src="${pet.photo}">
<h2 class="pet-name">${pet.name} <span>(${pet.species})</span></h2>
<p><strong>age:</strong> ${age(pet.birthYear)}</p>
${pet.favFoods ? foods(pet.favFoods) : ""}
</div>
 `
}



document.getElementById("app").innerHTML = `
<h1 class="app-title">pets (${petsData.length} results)</h1>
${petsData.map(petTemplate).join("")}
<p class="footer">These ${petsData.length} pets were added recently. Check back soon for updates,</p>
`