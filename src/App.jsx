import { useState } from "react";
import Home from "./components/Home";
import HeaderLeft from "./components/HeaderLeft";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <>
      <div
        className={`flex min-h-screen w-full flex-col subpixel-antialiased sm:flex-row ${
          darkMode ? "bg-black" : "bg-white"
        }`}
      >
        <HeaderLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Home />
      </div>
    </>
  );
}

export default App;
