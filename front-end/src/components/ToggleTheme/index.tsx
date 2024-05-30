"use client";

import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      // localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      // localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const iconProps = {
    color: "rgb(157 23 77)",
    size: "35"
  };

  return (
    <div
      onClick={() => setDarkMode(!darkMode)} className="cursor-pointer"
    >
      {darkMode ? <FaSun {...iconProps}/> : <FaMoon {...iconProps}/>}
    </div>
  );
}
