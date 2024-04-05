import "./App.css";
import { initialThemes } from "./db";
import SchemeList from "./components/SchemeList/SchemeList";

function App() {
  return (
    <div className="color-app">
      <header className="header">
        <h1>Color Picker 3000</h1>
      </header>
      <main>
        <form>
          <label for=></label>
          <input>
          </input>
        </form>
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
