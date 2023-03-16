import { Card } from "./Card"
import Boba from './../assets/card-pictures/boba.jpg'
import './GameSection.scss';


function GameSection(props) {
    return (
        <div className="game-section">
            <Card image={Boba} shadowColor="#38bdf8" color="sky-400" title="Boba" />
            <Card image={Boba} shadowColor="#38bdf8" color="sky-400" title="Boba" />
            <Card image={Boba} shadowColor="#38bdf8" color="sky-400" title="Boba" />
            <Card image={Boba} shadowColor="#38bdf8" color="sky-400" title="Boba" />
            <Card image={Boba} shadowColor="#38bdf8" color="sky-400" title="Boba" />
            <Card image={Boba} shadowColor="#38bdf8" color="sky-400" title="Boba" />
            <Card image={Boba} shadowColor="#38bdf8" color="sky-400" title="Boba" />
            <Card image={Boba} shadowColor="#38bdf8" color="sky-400" title="Boba" />
        </div>
    )
}

export {GameSection}