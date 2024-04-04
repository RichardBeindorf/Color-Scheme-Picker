import "./SchemeList.css";
import Cards from "../Card/Cards";
import { initialThemes } from "../../db";
import { useState } from "react";

export default function SchemeList() {
  const [themes, setThemes] = useState(initialThemes);
  console.log(themes);

  return themes.map(theme => (
    <>
      <ul className="scheme-list" key={theme.id}>
        <h2>{theme.name}</h2>
        <Cards theme={theme.colors} />
      </ul>
    </>
  ));
}