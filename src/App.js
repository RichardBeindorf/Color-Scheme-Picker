import "./App.css";
import { initialThemes } from "./db";
import SchemeList from "./components/SchemeList/SchemeList";
import Form from "./components/Form Input/form";
import { useState } from "react";

function App() {
const [themes, setThemes] = useState(initialThemes);

function handleAddTheme(){
  return 
}

  return (
    <div className="color-app">
      <header className="header">
        <h1>Color Picker 3000</h1>
      </header>
      <main>
        <Form addTheme={handleAddTheme}/>
        <ul>
          {initialThemes.map((theme) => (
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
