import InputField from "./Input";
import Button from "./Button";
import { useState } from "react";
import "../App.css";

interface forinput {
  age?: string | undefined;
  lastname: string | undefined;
  firstname: string | undefined;
}
function Learn() {
  const [formData, updateFormData] = useState<forinput[]>([
    {
      firstname: undefined,
      lastname: undefined,
      age: undefined,
    },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(formData);
    // console.log(e.target.name, e.target.value);
  };
  return (
    <div>
      <h2>form</h2>
      <InputField
        inputType="firstname"
        placeholder="firstname"
        name="firstname"
        onChange={handleChange}
      />
      <br />
      <InputField
        inputType="lastname"
        placeholder="lastname"
        name="lastname"
        onChange={handleChange}
      />
      <br />
      <InputField
        inputType="number"
        placeholder="age"
        name="age"
        onChange={handleChange}
      />
      <Button value="submit" onClick={handleSubmit} />

      {/* {formData.map((formData, index) => {
        return (
          <ul>
            key={index}
            <li>id: {formData.firstname}</li>
          </ul>
        );
      })} */}
    </div>
  );
}

export default Learn;
