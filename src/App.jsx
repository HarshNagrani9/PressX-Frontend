import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Maintenance from "./Pages/Maintenance";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <About /> */}
      {/* <Contact /> */}
      <Maintenance/>
    </>
  );
}

export default App;
