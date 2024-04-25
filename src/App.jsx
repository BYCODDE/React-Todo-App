import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
function App() {
  const [dark, setDark] = useState(true);

const [input,setInput] = useState("")

console.log(input);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Hello world",
      content: "fhsodfhosdhf",
      author: "Beqa",
    },
    {
      id: 2,
      title: "Hello world",
      content: "fhsodfhosdhf",
      author: "Anar",
    },
    {
      id: 3,
      title: "Hello world",
      content: "fhsodfhosdhf",
      author: "Alim",
    },
  ]);
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
      <Header input={input} setInput={setInput}   dark={dark} toggleDarkMode={toggleDarkMode}></Header>
      <Main posts={posts} dark={dark}></Main>
    </div>
  );
}

export default App;
