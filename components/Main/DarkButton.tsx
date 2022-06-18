import React, { useEffect, useState } from "react";

const DarkButton = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const changeMode = () => {
    setIsDarkMode((currentIsDark) => !currentIsDark);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme");
  }, [isDarkMode]);

  return (
    <div>
      <button className="btn-gradient" onClick={changeMode}>
        {isDarkMode ? <span>Light Mode</span> : <span>Dark Mode</span>}
      </button>
    </div>
  );
};

export default DarkButton;
