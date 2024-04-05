import "./SchemeList.css";
import Cards from "../Card/Cards";
import { initialThemes } from "../../db";
import { useState } from "react";
import { SingleColors } from "../Previews/Preview";
import { IconSelector } from "@tabler/icons-react";

export default function SchemeList() {
  const [themes, setThemes] = useState(initialThemes);
  const [showDetails, setShowDetails] = useState(false);
  // const dropdownArrow = (
  //   <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7l5 5l5 -5" /><path d="M7 13l5 5l5 -5" /></svg>
  // );

  function handleDropdown() {
    setShowDetails(!showDetails);
  }

  return themes.map((theme) => (
    <>
      <ul className="scheme-list" key={theme.id}>
        <h2 className="scheme-head">{theme.name}</h2>
        <div className="scheme-head" onClick={handleDropdown} >
          <IconSelector className="icon-selector" stroke={2} size={22} style={{ display: "absolute" }}/>
        </div>
        <ul className="preview-colors">
          {!showDetails && <SingleColors colors={theme.colors} />}
        </ul>
        {showDetails && <Cards theme={theme.colors} />}
      </ul>
    </>
  ));
}
