import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [dark,setDark] = useState(true)

const onDark = function(){
  setDark(!dark)
  console.log(dark);
}

  return (
    <>
      <Header dark={dark}  onDark={onDark}></Header>
    </>
  );
}

export default App;
