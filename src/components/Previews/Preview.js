import "./Preview.css";

export const SingleColors = function({ colors }){
return colors.map((color) => (
     <li
        key={color.role}
      style={{
        listStyleType: "none",
        backgroundColor: `${color.value}`,
        padding: "5px",
        margin: "1px",
      }}
    ></li>
))}