import "./Preview.css";

export const SingleColors = function ({ colors }) {
  return colors.map((color) => (
    <li
      key={color.role}
      style={{
        listStyleType: "none",
        backgroundColor: `${color.value}`,
        borderRadius: "7px",
        padding: "15px",
        margin: "5px",
      }}
    ></li>
  ));
};
