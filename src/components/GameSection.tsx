import { Card } from "./Card"
import Boba from './../assets/card-pictures/boba.jpg'
import './GameSection.scss';


function GameSection(props) {
    return (
        <div className="game-section">
            <Card image={Boba} color="yellow-300" title="Boba" />
            <Card image={Boba} color="yellow-300" title="Boba" />
            <Card image={Boba} color="yellow-300" title="Boba" />
            <Card image={Boba} color="yellow-300" title="Boba" />
            <Card image={Boba} color="yellow-300" title="Boba" />
            <Card image={Boba} color="yellow-300" title="Boba" />
            <Card image={Boba} color="yellow-300" title="Boba" />
            <Card image={Boba} color="yellow-300" title="Boba" />
        </div>
    )
}

export {GameSection}