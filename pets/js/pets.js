const petsData = [

{
name: "purrsLoud",
species: "cat",
favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
birthYear: 2018
},

{
name: "barksAlot",
species: "dog",
birthYear: 2017
},

{
name: "meowsAlot",
species: "cat",
favFoods: ["tuna", "catnip", "celery"],
birthYear: 2008
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