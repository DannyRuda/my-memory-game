import { Card } from "./Card"
import Boba from './../assets/card-pictures/boba.jpg'
import Chicken from './../assets/card-pictures/chicken-rice.png'
import Crawfish from './../assets/card-pictures/crawfish.png'
import Curry from './../assets/card-pictures/curry.jpg'
import Dimsum from './../assets/card-pictures/dimsum.jpg'
import Hotpot from './../assets/card-pictures/hotpot.jpg'
import Matcha from './../assets/card-pictures/matcha.jpg'
import Ramen from './../assets/card-pictures/ramen.jpg'
import Steak from './../assets/card-pictures/steak.png'
import Sushi from './../assets/card-pictures/sushi.png'
import Takoyaki from './../assets/card-pictures/takoyaki.jpg'
import Zongzi from './../assets/card-pictures/zongzi.jpg'

import './GameSection.scss';


function GameSection(props) {
    return (<>
        <div className="game-section">
            <Card image={Boba} shadowColor="#38bdf8" color="sky-400" title="Boba" />
            <Card image={Chicken} shadowColor="rgb(161 98 7)" color="yellow-700" title="Chicken" />
            <Card image={Curry} shadowColor="rgb(251 191 36)" color="amber-400" title="Curry" />
            <Card image={Crawfish} shadowColor="rgb(5 150 105)" color="emerald-600" title="Crawfish" />
            <Card image={Ramen} shadowColor="rgb(202 138 4)" color="yellow-600" title="Ramen" />
            <Card image={Dimsum} shadowColor="rgb(124 45 18)" color="orange-900" title="Dimsum" />
            <Card image={Hotpot} shadowColor="rgb(251 146 60)" color="orange-400" title="Hotpot" />
            <Card image={Takoyaki} shadowColor="rgb(120 53 15)" color="amber-900" title="Takoyaki" />
        </div>
        <Card image={Matcha} shadowColor="rgb(252 165 165)" color="red-300" title="Matcha" />
        <Card image={Steak} shadowColor="rgb(127 29 29)" color="red-900" title="Steak" />
        <Card image={Sushi} shadowColor="rgb(250 204 21)" color="yellow-400" title="Sushi" />
        <Card image={Zongzi} shadowColor="rgb(77 124 15)" color="lime-700" title="Zongzi" />
        </>
    )
}

export {GameSection}