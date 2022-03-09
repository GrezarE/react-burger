import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect } from "react";
import style from './feed.module.css'
import bunTest from '../../images/bunTest.png'
import CurrencyIcon from "../../images/CurrencyIcon.svg";
import { useSelector } from "react-redux";


const IngredientIcon = ({ item, length }) => {
  const ingredients = useSelector(state => state.burger.ingredients)
  const image = ingredients.find(ingr => ingr._id === item)
  // console.log(image)


  return (
    <li className={style.image__box}>
      <img src={image?.image || bunTest} className={style.picture} />
      <span className={"text text_type_main-default " + style.span}>{`+${length - 5}`}</span>
    </li>
  )
}

export const Feed = ({ feed }) => {


  const testData = ["60d3b41abdacab0026a733c6",
    "60d3b41abdacab0026a733c9",
    "60d3b41abdacab0026a733ce",
    "60d3b41abdacab0026a733d1"]
  const ingredients = useSelector(state => state.burger.ingredients)
  // const qwe = testData.map(item => console.log(ingredients.find(ingr => ingr._id === item)))

  useEffect(() => {
    // testData.forEach(item => console.log(item))
    // console.log(testData.forEach(item => ingredients.find(ingr => ingr._id === item)))
    // console.log(ingredients)
    // console.log(feed)
    // console.log(qwe)
  }, [testData, ingredients,])


  return (
    <li className={style.feed}>
      <div className={style.numbers}>
        <h3 className="text text_type_digits-default">#034535</h3>
        <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
      </div>
      <h2 className="text text_type_main-medium ml-6 mr-6">Death Star Starship Main бургер</h2>
      <div className={style.last__box}>
        <ul className={style.pic__box}>
          {feed.ingredients.map((item, index) => (<IngredientIcon key={index} item={item} length={feed.ingredients.length} />
          ))}
        </ul>
        <div className={style.price__box}>
          <p className="text text_type_digits-medium">480</p>
          <img src={CurrencyIcon} alt="Самоцвет" />
        </div>
      </div>


    </li>)
}
