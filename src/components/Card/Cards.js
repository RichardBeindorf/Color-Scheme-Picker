import "./Card.css";
import Picker from "./Picker/Picker.js";
import ColorRole from "./ColorRole/ColorRole.js";
import { useState } from "react";

export default function Cards({ theme }) {
// const [colorNames, setColorNames] = useState(colorNames);

  return (
    <>
      {theme.map((color) => (
        <div className="card-total" key={color.role}>
          <ColorRole role={color.role} value={color.value} />
          <Picker value={color.value} />
        </div>
      ))}
    </>
  );
}

  /* 
  <button className="delete-button" onClick={theme => deleteTheme?.(id)}>Delete</button> 
  console.log("Showing the theme prop in Component 'card':", id);
  */