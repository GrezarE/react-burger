import PropTypes from "prop-types";
import style from "./loader.module.css";

export const Loader = ({ text }) => {
  return (
    <div className={style.loader} >
      <span className={style.loader__icon}></span>
      <p className="text text_type_main-medium">{text}</p>
    </div>
  );
};

Loader.propTypes = {
  text: PropTypes.string,
};
