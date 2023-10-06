import React from "react";

function CustomInput({ title, placeholder, onchange, value, name, type }) {
  return (
    <div>
      <span>{title} : </span>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onchange}
        value={value}
        name={name}
      />
    </div>
  );
}

export default CustomInput;
