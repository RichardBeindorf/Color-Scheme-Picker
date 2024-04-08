import "./ColorRole.css";

export default function ColorRole({ role, value, name }){
    return <div className="color-role">
        <h5 className="color-role">{ role }</h5>
        <p className="color-name">{ name }</p>
        <p className="hex-value">{ value }</p>
    </div>
}