

{

    let Car = {
        make: "Honda",
        model: "Fit",
        class: "Subcompact",
        releaseyear: "2020",
        msrp: "",
        get year(){
            return this.releaseyear
        },
        bestcarformoney: function(){
            console.log("The best " + this.class + " car for the money is the " + this.releaseyear + " " + this.make + " " + this.model + ".");
        },
        set price(price) {
            return this.msrp = this.price;
        }
        
        
    };
    Car.year;
    Car.bestcarformoney();
    Car.price = "From $16,190";
    Car.price 
    //Car.horsepower(){return "128 - 130 hp"};
    
    

}


{

    let Sports_Teeam = {
        
    };

}


{

    let Animal = {
        name: "Sun Bear",
        class: "Mammalia",
        species_family: "Bear (Ursidae)",
        height: "",
        set size(size){
            return this.height = this.size;
        },
        weight: "up to 150lbs",
        get family(){
            return this.species_family;
        },
        home: "South East Asia",
        diet_type: function(){alert("Omnivorous")},
        description: function(){
            console.log("The " + this.name + "is an " + this.diet_type + " species of " + this.species_family + " found in the tropical forests, rainforests, mountain forests, and swamps of " + this.home + "." + " It is the smallest bear, standing " + this.size + " and weighting " + this.weight + ".")
        }


    };
    Animal.diet_type()
    Animal.size = "around 5 feet";
    Animal.family
}