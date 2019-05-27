function cars(){
    console.log("This will be a website with car listings");
};
cars();

function Cars(color, brand, model, country){
    this.color = color,
    this.brand = brand,
    this.model = model,
    this.country = country,
    this.myCars = function(){
        document.write(this.color + " " + this.brand + " " + this.model + " " + this.country);
    };
    return (this.myCars());
};

const car1 = new Cars("Red", "Ferrari", "458", "from Italy, ");
const car2 = new Cars("Orange", "BMW", "I8", "from Germany, ");
const car3 = new Cars("Yellow", "Lamborghini", "Sesto Elemento", "from Italy");