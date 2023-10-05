import { Component } from "react";
interface InputProps {
  inputType?: string;
  placeholder: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
class InputField extends Component<InputProps> {
  render() {
    const { inputType, placeholder, name, onChange } = this.props;
    return (
      <input
        type={inputType}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    );
  }
}
export default InputField;
