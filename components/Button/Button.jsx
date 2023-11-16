import React from "react";

//INTERNAL IMPORT
import Style from "./Button.module.css";
12345
const Button = ({ btnName }) => {
  const scrollOnePage = () => {
    window.scrollTo({
      top: window.pageYOffset + window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={Style.box}>
      <button className={Style.button} onClick={scrollOnePage}>
        {btnName}
      </button>
    </div>
  );
};
export default Button;
