import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <About /> */}
      {/* <Contact /> */}
      <Login/>
    </>
  );
}

export default App;
