import React, { createContext, useState } from "react";
import MYAPP from "./MYAPP";
import "./styles.css";

export const ThemeContext = createContext();

export default function App() {
  const [themeType, setThemeType] = useState("light");

  const toggleTheam = () => {
    if (themeType === "light") {
      setThemeType("dark");
    } else {
      setThemeType("light");
    }
  };

  return (
    <div>
      <ThemeContext.Provider value={themeType}>
        <MYAPP toggleTheam={toggleTheam} />
      </ThemeContext.Provider>
    </div>
  );
}
