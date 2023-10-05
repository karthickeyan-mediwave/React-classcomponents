import { useState } from "react";
import "./App.css";
import InputField from "./components/Input";
import Button from "./components/Button";
function App() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [age, setage] = useState("");

  function clickHandler(e: any) {
    e.preventDefault();
    console.log("firstname", firstname, "lastname", lastname, "age", age);
  }

  return (
    <div>
      <form>
        <h2></h2>
        <InputField
          inputType="firstname"
          placeholder="firstname"
          name={firstname}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setfirstname(e.target.value)
          }
        />{" "}
        <br />
        <InputField
          inputType="lastname"
          placeholder="lastname"
          name={lastname}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setlastname(e.target.value)
          }
        />
        <br />
        <InputField
          inputType="number"
          placeholder="age"
          name={age}
          onChange={(e: any) => setage(e.target.value)}
        />
        <br />
        <Button value="submit" onClick={clickHandler} />
      </form>
    </div>
  );
}
export default App;
