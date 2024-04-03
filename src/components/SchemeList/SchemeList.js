import "./SchemeList.css";
import ColorList from "../ColorList/ColorList";
import { initialThemes } from "../../db";
import { useState } from "react";

export default function SchemeList() {
  const [themes, setThemes] = useState(initialThemes);
  console.log(themes);


  return themes.map(theme => 
    <>
    <div className="scheme-list" key={theme.id}>
      <h2>{theme.name}</h2>
      <ColorList themes={themes} />
    </div>
    </>
  );
}
