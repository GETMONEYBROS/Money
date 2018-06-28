const people = [
    {
        name: "Playboi Carti",
        species: "ATL Blood",
        favFoods: ["Backwoods", "Females", "<strong>any typa</strong> lean tbh"],
        birthYear: 1996,
        photo: "https://i.ytimg.com/vi/TmOVl7KIOAw/hqdefault.jpg",
        state: "georgia"
    },

    {
        name: "Famous Dex",
        species: "Chiraq Hitta",
        favFoods: ["6 Gram Woods", "Cupcakes", "XAN"],
        birthYear: 1993,
        photo: "https://i.ytimg.com/vi/mkLLTFB-Uk0/maxresdefault.jpg",
        state: "illinois"
    },

    {
        name: "Rich The Kid",
        species: "211/187",
        favFoods: ["Gelato", "Bently", "Ice"],
        birthYear: 1992,
        photo: "http://www.dirty-glove.net/wp-content/uploads/2017/11/rich-smallz-777x437.png",
        state: "New York"
    },

    {
        name: "LIL UZI VERT",
        species: "Weird phili n*gga",
        favFoods: ["Chokers", "Goyard", "Ice"],
        birthYear: 1994,
        photo: "http://s3.amazonaws.com/hiphopdx-production/2016/04/Lil-Uzi-Vert-Hands-On-Face.jpg",
        state: "Philidelphia"
    },

    {
        name: "Kenna West",
        species: "Wifey",
        favFoods: ["Strawberries", "Josiah", "Crepes"],
        birthYear: 2000,
        photo: "https://images2.alphacoders.com/702/702389.jpg",
        state: "Oregon"
    },

    {
        name: "Josiah Jamison",
        species: "Rapper",
        favFoods: ["Gas", "Kenna", "Baconator"],
        birthYear: 2000,
        photo: "http://www.xxlmag.com/files/2018/05/Famous-Dex.jpg",
        state: "California"
    }
];

function age(birthYear) {
return new Date().getFullYear() - birthYear;
        return `${calculatedAge} years old`
};

function foods(foods) {
    return `
    <h4>Favorite Foods</h4>
    <ul class="foods.list">
    ${foods.map( (food) => `<li>${food}</li>`).join("")}
    </ul>

    `
}

function peopleTemplate(people) {
return `
<div class="persons">
    <img class="people-photo" src="${people.photo}">
    <h2 class="people-name">${people.name} <span>(${people.species})</span></h2>
    <p><strong>age:</strong> ${age(people.birthYear)}</p>
    ${people.favFoods ? foods(people.favFoods) : ""}
    <p>${people.state}</p>
</div>
 `
}



document.getElementById("app").innerHTML = `
<h1 class="app-title">people (${people.length} results)</h1>
${people.map(peopleTemplate).join("")}
<p class="footer">These ${people.length} people were added recently, check back soon for updates.</p>
`