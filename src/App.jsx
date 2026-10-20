import { useEffect, useState } from "react";
import Home from "./components/Home";
import HeaderLeft from "./components/HeaderLeft";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = darkMode
        ? "/tawseef-rahman_logo_initials_white-on-black.png"
        : "/tawseef-rahman_logo_initials_black-on-white.png";
    }
  }, [darkMode]);

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
