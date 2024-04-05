import "./Card.css";
import Picker from "./Picker/Picker.js";
import ColorRole from "./ColorRole/ColorRole.js";

export default function Cards({ theme, deleteTheme, id }) {

  console.log("Showing the theme prop in Component 'card':", id)

  return <> <button className="delete-button" onClick={(themes) => deleteTheme?.(theme)}>Delete</button>
  {theme.map((color) => (
    <div className="card-total" key={color.role}>
        <ColorRole role={color.role} value={color.value} />
        <Picker value={color.value} />
    </div>
  ))}
  </>
}
