import "./ColorList.css";
import Card from "./Card/Card.js"


export default function ColorList({ themes }){
    return <>
    <div className="color-list">
        <Card />
        <Card />
    </div>
    </>
}