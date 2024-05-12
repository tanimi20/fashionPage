import { useState } from "react";
import logo from "../images/fashion-company.svg";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpenClose = (e) => {
    setIsOpen(!isOpen);
    console.log("hiii");
  };
  return isOpen ? (
    <div>
      <nav className="container">
        <div className="lcontainerogo ">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button onClick={handleOpenClose}>close</button>
      </nav>
    </div>
  ) : (
    <div></div>
  );
};
export default Navigation;
