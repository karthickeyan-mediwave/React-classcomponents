import { Link } from "react-router-dom";

const CustomNav = () => {
  return (
    <div className="navbar">
      <div>
        <h1>Tweety</h1>
      </div>
      <div>
        <ul className="link">
          <li className="">
            <Link to="">Home</Link>
          </li>
          <li className="">
            <Link to="/form">Form</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomNav;
