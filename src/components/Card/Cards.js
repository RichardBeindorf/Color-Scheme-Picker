import "./Card.css";
import Picker from "./Picker/Picker.js";
import ColorRole from "./ColorRole/ColorRole.js";

export default function Cards({ theme, deleteTheme }) {

  

  return <> <button className="delete-button" onClick={deleteTheme}>Delete</button>
  {theme.map((color) => (
    <div className="card-total" key={color.role}>
        <ColorRole role={color.role} value={color.value} />
        <Picker value={color.value} />
    </div>
  ))}
  </>
}
