import React from "react";

function customButton(type, className) {
  return (
    <div>
      <button className={className}>{type}</button>
    </div>
  );
}

export default customButton;
