import React from 'react'
import  { useState } from "react";


const initialValues = {
    fname: "",
    lname: "",
    
};

function Test() {
    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };
  
  return (
    <form>
    <input
      value={values.fname}
      onChange={handleInputChange}
      name="fname"
      label="fname"
    />
    <input
      value={values.lname}
      onChange={handleInputChange}
      name="lname"
      label="lname"
    />
    <button type="submit"> Submit </button>
  </form>
  )
}

export default Test





  
       
 