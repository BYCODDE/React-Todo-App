import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
function App() {
  const [dark, setDark] = useState(true);

  const toggleDarkMode = function () {
    setDark(!dark);
    if (dark) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  };

  return (
    <div className={dark ? "light" : "dark"}>
      <Header dark={dark} toggleDarkMode={toggleDarkMode}></Header>
      <Main dark={dark} ></Main>
    </div>
  );
}

export default App;
