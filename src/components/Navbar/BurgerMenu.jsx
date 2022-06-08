import React, { useState } from "react";


export default function BurgerMenu() {
  const [open, setOpen] = useState(false)
  const handleToggle = () => {
    setOpen((prev) => !prev)
  };
  return (
    <div onClick={handleToggle}>
      {open ? (
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFF" fill-rule="evenodd">
            <path d="M2.1.686 23.315 21.9l-1.415 1.415L.686 2.1z" />
            <path d="M.686 21.9 21.9.685l1.415 1.415L2.1 23.314z" />
          </g>
        </svg>
      ) : (
        <svg width="30" height="18" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFF" fill-rule="evenodd">
            <path d="M0 0h30v2H0zM0 8h30v2H0zM0 16h30v2H0z" />
          </g>
        </svg>
      )}
    </div>
  );
}
