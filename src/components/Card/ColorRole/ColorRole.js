import "./ColorRole.css";
import { useEffect, useState } from "react";


export default function ColorRole({ role, value }){
const [colorName, setColorName] = useState(" ");

useEffect(() => {
    async function fetchColorName(){
      const hexValue = value.slice(1, 7);
      const response = await fetch(`https://www.thecolorapi.com/id?hex=${hexValue}`);
      const data = await response.json();
      console.log("fetched data", data);
      const realName = data.name.value;
      return setColorName(realName);
    }
    fetchColorName();
  }, [value]);

    return <div className="color-role">
        <h5 className="color-role">{ role }</h5>
        <p className="color-name">{ colorName }</p>
        <p className="hex-value">{ value }</p>
    </div>
}