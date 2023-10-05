import InputField from "./Input";
import Button from "./Button";
import { useState } from "react";

interface forinput {
  age?: string | undefined;
  lastname: string | undefined;
  firstname: string | undefined;
}
function Learn() {
  const [formData, updateFormData] = useState<forinput>({
    age: undefined,
    lastname: undefined,
    firstname: undefined,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    console.log(e.target.name, e.target.value);
  };
  return (
    <div>
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
    </div>
  );
}

export default Learn;
