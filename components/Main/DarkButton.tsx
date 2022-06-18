import Image from "next/image";
import React, { useEffect, useState } from "react";
import dark_mode_toggle from "../../public/icons/dark-mode-toggle.png";

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
      <button
        onClick={changeMode}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <Image
          alt="dark-theme"
          height={32}
          width={32}
          priority={true}
          src={dark_mode_toggle}
        />
      </button>
    </div>
  );
};

export default DarkButton;
