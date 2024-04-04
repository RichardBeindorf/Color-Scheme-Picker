import "./SchemeList.css";
import Cards from "../Card/Cards";
import { initialThemes } from "../../db";
import { useState } from "react";
import { SingleColors } from "../Previews/Preview";

export default function SchemeList() {
  const [themes, setThemes] = useState(initialThemes);
  const [showDetails, setShowDetails] = useState(false);

  return themes.map((theme) => (
    <>
      <ul className="scheme-list" key={theme.id}>
        <h2>{theme.name}</h2>
        <ul className="preview-colors">
          {" "}
          <SingleColors
            colors={theme.colors}
          />{" "}
        </ul>
        <Cards theme={theme.colors} showDetails={showDetails}/>
      </ul>
    </>
  ));
}
