import "./Card.css";
import Picker from "./Picker/Picker.js";
import ColorRole from "./ColorRole/ColorRole.js";

export default function Cards({ theme, showDetails, onClick }) {
  console.log(theme);

  return theme.map((color) => (
    <li className="card-total" key={color.role}>
      <ColorRole role={color.role} value={color.value} />
      <Picker value={color.value} />
    </li>
  ));
}
