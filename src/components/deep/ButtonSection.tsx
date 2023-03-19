 import { Button } from "./Button";

 interface ButtonsSectionProps {
    children: React.ReactNode;
 }

 function ButtonSection(props: ButtonsSectionProps) {
    return <div className="buttons">
        {props.children}
    </div>
 }

 export {ButtonSection}

 /*<Button color="bg-sky-300">Play</Button>
        <Button color="bg-amber-800">Rules</Button>
        <Button color="bg-orange-500">Star this Project</Button> */