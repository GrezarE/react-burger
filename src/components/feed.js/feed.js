import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect } from "react";
import style from './feed.module.css'
import bunTest from '../../images/bunTest.png'
import CurrencyIcon from "../../images/CurrencyIcon.svg";


const IngredientIcon = ({ image }) => {
  return (
    <img src={bunTest || image} className={style.picture} />
  )
}

export const Feed = () => {
  return (
    <li className={style.feed}>
      <div className={style.numbers}>
        <h3 className="text text_type_digits-default">#034535</h3>
        <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
      </div>
      <h2 className="text text_type_main-medium ml-6 mr-6">Death Star Starship Main бургер</h2>
      <div className={style.last__box}>
        <ul className={style.pic__box}>
          <IngredientIcon />
          <IngredientIcon />
          <IngredientIcon />
          <IngredientIcon />
          <IngredientIcon />
          <IngredientIcon />
        </ul>
        <div className={style.price__box}>
          <p className="text text_type_digits-medium">480</p>
          <img src={CurrencyIcon} alt="Самоцвет" />
        </div>
      </div>


    </li>)
}
