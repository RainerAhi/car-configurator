import React, { useEffect, useState } from "react";

export default function NavigationBar() {

  const handleClick = (linkUrl) => {
    // Open the specified webpage link in a new tab when carousel-content is clicked
    window.open(linkUrl, '_blank');
  };

  return (
    <div className="navigation">
      <i onClick={() => handleClick('https://peakcreations.vercel.app/')} class="fa-solid fa-user"></i>
      <h1>PORSCHE</h1>
      <i class="fa-solid fa-car"></i>
    </div>
  );
}