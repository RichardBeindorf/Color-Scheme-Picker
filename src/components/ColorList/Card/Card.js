import "./Card.css";
import Picker from "./Picker/Picker.js";
import ColorRole from "./ColorRole/ColorRole";

export default function Card() {
  return (
      <div className="card-total">
        <ColorRole />
        <Picker />
      </div>
  );
}