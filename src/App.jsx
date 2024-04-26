import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
function App() {
  const [dark, setDark] = useState(true);

  // const [input, setInput] = useState("");

  const [posts, setPosts] = useState([]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const content = event.target.value;
      setPosts([...posts, { content }]);
      event.target.value = "";
    }
  };

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
      <Header
        // input={input}
        // setInput={setInput}
        dark={dark}
        toggleDarkMode={toggleDarkMode}
        handleKeyPress={handleKeyPress}
      ></Header>
      <Main posts={posts} dark={dark}></Main>
    </div>
  );
}

export default App;
