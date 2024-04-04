import "./ColorRole.css";

export default function ColorRole({ role, value }){
    return <div className="color-role">
        <h5>{ role }</h5>
        <p>{ value }</p>
    </div>
}