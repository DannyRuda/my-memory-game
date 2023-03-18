 import { Button } from "./Button";

 function ButtonSection(props) {
    return <div className="buttons">
        {props.children}
    </div>
 }

 export {ButtonSection}

 /*<Button color="bg-sky-300">Play</Button>
        <Button color="bg-amber-800">Rules</Button>
        <Button color="bg-orange-500">Star this Project</Button> */