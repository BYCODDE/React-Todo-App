import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
function App() {
  const [dark, setDark] = useState(true);

  const [posts, setPosts] = useState([]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      event.preventDefault();
      const content = event.target.value;
      setPosts([...posts, { content, id: Math.random() }]);
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
        dark={dark}
        toggleDarkMode={toggleDarkMode}
        handleKeyPress={handleKeyPress}
      ></Header>
      <Main posts={posts} dark={dark} setPosts={setPosts} ></Main>
    </div>
  );
}

export default App;
