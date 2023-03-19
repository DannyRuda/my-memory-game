import { Card } from "./Card"
import Boba from './../../assets/card-pictures/boba.jpg'
import Chicken from './../../assets/card-pictures/chicken-rice.png'
import Crawfish from './../../assets/card-pictures/crawfish.png'
import Curry from './../../assets/card-pictures/curry.jpg'
import Dimsum from './../../assets/card-pictures/dimsum.jpg'
import Hotpot from './../../assets/card-pictures/hotpot.jpg'
import Matcha from './../../assets/card-pictures/matcha.jpg'
import Ramen from './../../assets/card-pictures/ramen.jpg'
import Steak from './../../assets/card-pictures/steak.png'
import Sushi from './../../assets/card-pictures/sushi.png'
import Takoyaki from './../../assets/card-pictures/takoyaki.jpg'
import Zongzi from './../../assets/card-pictures/zongzi.jpg'

import './GameSection.scss';


function GameSection(props) {
    return (<>
        <div className="game-section">
            {props.children}
        </div>
        </>
    )
}

export {GameSection}