import React, { Props } from "react";
import ReactDOM from "react-dom";
import { api } from "../../utils/data";
import PropTypes from "prop-types";
import burgerIngredientsStyle from "./burgerIngredients.module.css";

import {
  Tab,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const HeaderIngridients = (props: any) => {
  return (
    <h1 className="mt-10 mb-5 text text_type_main-large">{props.children}</h1>
  );
};

const TabConteiner = () => {
  const [current, setCurrent] = React.useState("one");
  return (
    <div style={{ display: "flex" }}>
      <Tab value="one" active={current === "one"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === "two"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === "three"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
};

const IngridientCard = ({ card }: any) => {
  return (
    <li className={"mt-6 " + burgerIngredientsStyle.ingridientCard}>
      <img className="ml-4 mr-4 " src={card.image} alt={card.image} />
      <div className={"mt-1 mb-1 " + burgerIngredientsStyle.priceBox}>
        <p className="text text_type_digits-default">{card.price}</p>
        <CurrencyIcon type="primary" />{" "}
      </div>
      <h2
        className={"text text_type_main-default " + burgerIngredientsStyle.name}
      >
        {card.name}
      </h2>
      <div
        className={
          (card.__v > 0 && burgerIngredientsStyle.count) ||
          burgerIngredientsStyle.countZero
        }
      >
        {card.__v}
      </div>
    </li>
  );
};

IngridientCard.propTypes = {
  card: PropTypes.object,
  image: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
  __v: PropTypes.number,
  _id: PropTypes.string,
};

const IngridientsBlock = (props: any) => {
  let itemType = api.filter((item) => item.type === props.type);
  return (
    <div className="mt-10">
      <h2>{props.text}</h2>
      <ul className={" pl-4 " + burgerIngredientsStyle.ingridientsList}>
        {itemType.map((item) => (
          <IngridientCard key={item._id} card={item} />
        ))}
      </ul>
    </div>
  );
};

export default class BurgerIngredients extends React.Component {
  render() {
    return (
      <div className={burgerIngredientsStyle.burgerIngredients}>
        <HeaderIngridients>Соберите бургер</HeaderIngridients>
        <TabConteiner />
        <div className={burgerIngredientsStyle.box}>
          <IngridientsBlock type="bun" text="Булки" />
          <IngridientsBlock type="sauce" text="Соусы" />
          <IngridientsBlock type="main" text="Начинки" />
        </div>
      </div>
    );
  }
}
