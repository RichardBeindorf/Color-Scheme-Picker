import "./SchemeList.css";
import Cards from "../Card/Cards";
import { useState } from "react";
import { SingleColors } from "../Previews/Preview";
import { IconSelector } from "@tabler/icons-react";

export default function SchemeList({ name, colors, deleteTheme, id }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleDropdown() {
    setShowDetails(!showDetails);
  }

  return (
    <>
      <div className="scheme-list">
        <h2 className="scheme-head">{name}</h2>
        <div className="scheme-head" onClick={handleDropdown}>
          <IconSelector className="icon-selector" stroke={2} size={22} />
        </div>
        <ul className="preview-colors">    
          {!showDetails && <SingleColors colors={colors} />}
        </ul>
        {showDetails && <Cards deleteTheme={deleteTheme} theme={colors} id={id}/>}
      </div>
    </>
  );
}
