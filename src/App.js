import "./App.css";
import { initialThemes } from "./db";
import SchemeList from "./components/SchemeList/SchemeList";
import Form from "./components/Form Input/form";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
const [themes, setThemes] = useState(initialThemes);

function handleAddTheme(newTheme){
  // use UUID to create an ID
  const newThemeWithID = { ...newTheme, id: uuid() }
  setThemes([newThemeWithID, ...themes]);
}

  return (
    <div className="color-app">
      <header className="header">
        <h1>Color Picker 3000</h1>
      </header>
      <main>
        <Form addTheme={handleAddTheme}/>
        <ul>
          {themes.map((theme) => (
            <li key={theme.id}>
              <SchemeList name={theme.name} colors={theme.colors} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
