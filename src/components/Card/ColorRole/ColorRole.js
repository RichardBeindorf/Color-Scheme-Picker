import "./ColorRole.css";

export default function ColorRole({ role, value }){
    return <div className="color-role">
        <h5 className="color-role">{ role }</h5>
        <p className="hex-value">{ value }</p>
    </div>
}