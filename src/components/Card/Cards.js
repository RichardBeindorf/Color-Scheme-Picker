import "./Card.css";
import Picker from "./Picker/Picker.js";
import ColorRole from "./ColorRole/ColorRole.js";
import { useEffect, useState } from "react";

export default function Cards({ colors }) {

// const initialName = colors.map(color => {return color.name});

// console.log("Farbarray:",initialName);
console.log("this is the colors object:", colors);
const [colorNames, setColorNames] = useState(" ");

console.log("colorNames state:", colorNames);

useEffect(() => {
  async function fetchColorName(){
    const hexValue = colors.map(color => {return color.value.slice(1, 6)});
    const response = await fetch(`https://www.thecolorapi.com/id?hex=${hexValue}`);
    const data = await response.json();
    console.log(data);
    const realName = data.name.value;

    const newColors = {
      name: data.themeName,
      colors: [
        {
          role: "primary",
          value: data.primary,
          name: data.name.value,
        },
        {
          role: "secondary",
          value: data.secondary,
          name: data.name.value,
        },
        {
          role: "surface",
          value: data.surface,
          name: data.name.value,
        },
        {
          role: "surface-on",
          value: data["surface-on"],
          name: data.name.value,
        },
      ],
    };

    return setColorNames(realName);
  }
  fetchColorName();
});


  return (
    <>
      {colors.map((color) => (
        <div className="card-total" key={color.role}>
          <ColorRole role={color.role} value={color.value} name={colorNames}/>
          <Picker value={color.value} />
        </div>
      ))}
    </>
  );
}