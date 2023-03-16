// what we need

// image url so we can iterate over array containing the objects and fill the card component for each dish object
// Title of the dish
// Card color for the dish
// clicked? 

interface Dish {
    image: string;
    title: string;
    color: string;
    clicked: boolean;
}

let dishObject : Dish = {
    image: "url('./')",
    title: "boba",
    color: "slate-700",
    clicked: false
}

