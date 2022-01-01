import React from "react";
import { api } from "../../utils/data";
import PropTypes from "prop-types";
import burgerIngredientsStyle from "./burgerIngredients.module.css";
import {
  Tab,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const HeaderIngridients = (props) => {
  return (
    <h1 className="mt-10 mb-5 text text_type_main-large">{props.children}</h1>
  );
};

HeaderIngridients.propTypes = {
  children: PropTypes.string.isRequired,
};

const TabConteiner = () => {
  const [current, setCurrent] = React.useState("one");
  return (
    <div style={{ display: "flex" }}>
      <a className={burgerIngredientsStyle.link} href="#bun">
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
      </a>
      <a className={burgerIngredientsStyle.link} href="#sauce">
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
      </a>
      <a className={burgerIngredientsStyle.link} href="#main">
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </a>
    </div>
  );
};

const IngridientCard = ({ card }) => {
  return (
    <li className={"mt-6 " + burgerIngredientsStyle.ingridientCard}>
      <img className="ml-4 mr-4 " src={card.image} alt={card.image} />
      <div className={"mt-1 mb-1 " + burgerIngredientsStyle.priceBox}>
        <p className="text text_type_digits-default">{card.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <h2
        className={"text text_type_main-default " + burgerIngredientsStyle.name}
      >
        {card.name}
      </h2>
      <div
        className={
          "text text_type_digits-default " +
          ((card.__v > 0 && burgerIngredientsStyle.count) ||
            burgerIngredientsStyle.countZero)
        }
      >
        {card.__v}
      </div>
    </li>
  );
};

IngridientCard.propTypes = {
  card: PropTypes.object.isRequired,
};

const IngridientsBlock = (props) => {
  let itemType = api.filter((item) => item.type === props.type);
  return (
    <li className="mt-10" id={props.type}>
      <h2>{props.text}</h2>
      <ul className={" pl-4 " + burgerIngredientsStyle.ingridientsList}>
        {itemType.map((item) => (
          <IngridientCard key={item._id} card={item} />
        ))}
      </ul>
    </li>
  );
};

IngridientsBlock.propTypes = {
  type: PropTypes.oneOf(["bun", "sauce", "main"]).isRequired,
  text: PropTypes.string.isRequired,
};

export const BurgerIngredients = () => {
  const buns = React.useRef("bun");
  return (
    <section className={burgerIngredientsStyle.burgerIngredients}>
      <HeaderIngridients>Соберите бургер</HeaderIngridients>
      <TabConteiner />
      <ul className={burgerIngredientsStyle.box}>
        <IngridientsBlock key="bun" type="bun" text="Булки" />
        <IngridientsBlock key="sauce" type="sauce" text="Соусы" />
        <IngridientsBlock key="main" type="main" text="Начинки" />
      </ul>
    </section>
  );
};

// export default class BurgerIngredients extends React.Component {
//   render() {
//     return (
//       <section className={burgerIngredientsStyle.burgerIngredients}>
//         <HeaderIngridients>Соберите бургер</HeaderIngridients>
//         <TabConteiner />
//         <ul className={burgerIngredientsStyle.box}>
//           <IngridientsBlock key="bun" type="bun" text="Булки" />
//           <IngridientsBlock key="sauce" type="sauce" text="Соусы" />
//           <IngridientsBlock key="main" type="main" text="Начинки" />
//         </ul>
//       </section>
//     );
//   }
// }
