import { Component } from "react";
import InputField from "./Input";
import Button from "./Button";
import "../App.css";

interface forinput {
  age?: string | undefined;
  lastname: string | undefined;
  firstname: string | undefined;
}
interface state {
  age?: string | undefined;
  lastname: string | undefined;
  firstname: string | undefined;
}

export class Test extends Component<forinput, state> {
  constructor(props: forinput) {
    super(props);
    this.state = {
      firstname: undefined,
      lastname: undefined,
      age: undefined,
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(formData);
    console.log(e.target.name, e.target.value);
  };
  render() {
    return (
      <div>
        <h2>form</h2>
        <InputField
          inputType="firstname"
          placeholder="firstname"
          name="firstname"
          onChange={this.handleChange}
        />
        <br />
        <InputField
          inputType="lastname"
          placeholder="lastname"
          name="lastname"
          onChange={this.handleChange}
        />
        <br />
        <InputField
          inputType="number"
          placeholder="age"
          name="age"
          onChange={this.handleChange}
        />
        <Button value="submit" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default Test;
