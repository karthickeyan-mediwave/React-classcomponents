import { Component } from "react";
interface button {
  value: string;
  onClick: (e: any) => any;
}
export class Button extends Component<button> {
  render() {
    const { value, onClick } = this.props;

    return (
      <div>
        <button onClick={onClick} type="submit">
          {value}
        </button>
      </div>
    );
  }
}

export default Button;
