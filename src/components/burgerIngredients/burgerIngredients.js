import React from "react";
import PropTypes from "prop-types";
import burgerIngredientsStyle from "./burgerIngredients.module.css";
import {
  Tab,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { Modal } from "../modal/modal.js";
import {IngredientDetails} from "../ingredientDetails/ingredientDetails.js"

const HeaderIngridients = (props) => {
  return (
    <h1 className="mt-10 mb-5 text text_type_main-large">{props.children}</h1>
  );
};

HeaderIngridients.propTypes = {
  children: PropTypes.string.isRequired,
};

const TabConteiner = (props) => {
  const [current, setCurrent] = React.useState("one");
  return (
    <div style={{ display: "flex" }}>
      <Tab
        value="one"
        active={current === "one"}
        onClick={() => {
          setCurrent("one");
          props.buns();
        }}
      >
        Булки
      </Tab>
      <Tab
        value="two"
        active={current === "two"}
        onClick={() => {
          setCurrent("two");
          props.sauses();
        }}
      >
        Соусы
      </Tab>
      <Tab
        value="three"
        active={current === "three"}
        onClick={() => {
          setCurrent("three");
          props.main();
        }}
      >
        Начинки
      </Tab>
    </div>
  );
};

const IngridientCard = ({ card }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const handleOpen = () => {
    setIsVisible(true);
  };
  const handleClose = () => {
    setIsVisible(false);
  };
  const modal = <Modal onClose={handleClose} header='Детали ингредиента'>
    <IngredientDetails {...card}/>
  </Modal>;

  return (
    <>
      <li
        className={"mt-6 " + burgerIngredientsStyle.ingridientCard}
        onClick={handleOpen}
      >
        <img className="ml-4 mr-4 " src={card.image} alt={card.image} />
        <div className={"mt-1 mb-1 " + burgerIngredientsStyle.priceBox}>
          <p className="text text_type_digits-default">{card.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <h2
          className={
            "text text_type_main-default " + burgerIngredientsStyle.name
          }
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
      {isVisible && modal}
    </>
  );
};

IngridientCard.propTypes = {
  card: PropTypes.object.isRequired,
};

const IngridientsBlock = (data) => {
  let itemType = data.api.filter((item) => item.type === data.type);
  return (
    <li className="mt-10" id={data.type} ref={data.refElement}>
      <h2>{data.text}</h2>
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

export const BurgerIngredients = (props) => {
  console.log(props)
  const buns = React.useRef("bun");
  const sause = React.useRef("sause");
  const main = React.useRef("main");

  const scroll = (item) => {
    item.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={burgerIngredientsStyle.burgerIngredients}>
      <HeaderIngridients>Соберите бургер</HeaderIngridients>
      <TabConteiner
        buns={() => scroll(buns)}
        sauses={() => scroll(sause)}
        main={() => scroll(main)}
      />
      <ul className={burgerIngredientsStyle.box}>
        <IngridientsBlock
          refElement={buns}
          api={props.api}
          key="bun"
          type="bun"
          text="Булки"
        />
        <IngridientsBlock
          refElement={sause}
          api={props.api}
          key="sauce"
          type="sauce"
          text="Соусы"
        />
        <IngridientsBlock
          refElement={main}
          api={props.api}
          key="main"
          type="main"
          text="Начинки"
        />
      </ul>
    </section>
  );
};

BurgerIngredients.propTypes = {
  api: PropTypes.array
}
