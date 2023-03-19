import Boba from "./../assets/card-pictures/boba.jpg";
import Chicken from "./../assets/card-pictures/chicken-rice.png";
import Crawfish from "./../assets/card-pictures/crawfish.png";
import Curry from "./../assets/card-pictures/curry.jpg";
import Dimsum from "./../assets/card-pictures/dimsum.jpg";
import Hotpot from "./../assets/card-pictures/hotpot.jpg";
import Matcha from "./../assets/card-pictures/matcha.jpg";
import Ramen from "./../assets/card-pictures/ramen.jpg";
import Steak from "./../assets/card-pictures/steak.png";
import Sushi from "./../assets/card-pictures/sushi.png";
import Takoyaki from "./../assets/card-pictures/takoyaki.jpg";
import Zongzi from "./../assets/card-pictures/zongzi.jpg";

interface Dish {
  image: string;
  title: string;
  color: string;
  shadowColor: string;
  clicked: boolean;
}

function Card(
  image: string,
  title: string,
  color: string,
  shadowColor: string,
  clicked: boolean
) {
  return {
    image,
    title,
    color,
    shadowColor,
    clicked,
  };
}

const cardObjects = [
  Card(Boba, "Boba", "bg-sky-400", "#38bdf8", false),
  Card(Chicken, "Chicken", "bg-yellow-700", "rgb(161 98 7)", false),
  Card(Curry, "Curry", "bg-amber-400", "rgb(251 191 36)", false),
  Card(Crawfish, "Crawfish", "bg-emerald-600", "rgb(5 150 105)", false),
  Card(Ramen, "Ramen", "bg-yellow-600", "rgb(202 138 4)", false),
  Card(Dimsum, "Dimsum", "bg-orange-900", "rgb(124 45 18)", false),
  Card(Hotpot, "Hotpot", "bg-orange-400", "rgb(251 146 60)", false),
  Card(Takoyaki, "Takoyaki", "bg-amber-900", "rgb(120 53 15)", false),
  Card(Matcha, "Matcha", "bg-red-300", "rgb(252 165 165)", false),
  Card(Steak, "Steak", "bg-red-900", "rgb(127 29 29)", false),
  Card(Sushi, "Sushi", "bg-yellow-400", "rgb(250 204 21)", false),
  Card(Zongzi, "Zongzi", "bg-lime-700", "rgb(77 124 15)", false),
];

export {cardObjects}