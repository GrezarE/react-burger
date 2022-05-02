import { FC } from "react";
import style from "./loader.module.css";

interface ILoader {
  readonly text: string;
}

export const Loader: FC<ILoader> = ({ text }) => {
  return (
    <div className={style.loader}>
      <span className={style.loader__icon}></span>
      <p className="text text_type_main-medium">{text}</p>
    </div>
  );
};
