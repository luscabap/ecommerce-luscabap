"use client";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   const theme = localStorage.getItem("theme");
  //   if (theme === "light") setDarkMode(false);
  // }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    console.log(theme);
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const iconProps = {
    size: 35,
    color: "#000"
  };

  return (
    <div
      onClick={() => setDarkMode(!darkMode)} className="cursor-pointer"
    >
      {darkMode ? <FaSun {...iconProps}/> : <FaMoon {...iconProps}/>}
    </div>
  );
}
