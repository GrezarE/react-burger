import React from "react";
import PropTypes from "prop-types";
import burgerIngredientsStyle from "./burger-ingredients.module.css";
import {
  Tab,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { Modal } from "../modal/modal.js";
import { IngredientDetails } from "../ingredient-details/ingredient-details.js";
import { ingredientType } from "../../utils/types.js";
import { IngredientsContext } from "../../services/ingredientsContext";

const HeaderIngredients = (props) => {
  return (
    <h1 className="mt-10 mb-5 text text_type_main-large">{props.children}</h1>
  );
};

HeaderIngredients.propTypes = {
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

const IngredientCard = ({ card }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const handleOpen = () => {
    setIsVisible(true);
  };
  const handleClose = () => {
    setIsVisible(false);
  };
  const modal = (
    <Modal onClose={handleClose} header="Детали ингредиента">
      <IngredientDetails {...card} />
    </Modal>
  );

  return (
    <>
      <li
        className={"mt-6 " + burgerIngredientsStyle.ingredientCard}
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

IngredientCard.propTypes = {
  card: ingredientType.isRequired,
};

const IngredientsBlock = (data) => {
  const ingredients = React.useContext(IngredientsContext);
  const itemType = ingredients.filter((item) => item.type === data.type);

  return (
    <li className="mt-10" id={data.type} ref={data.refElement}>
      <h2 className="text text_type_main-medium">{data.text}</h2>
      <ul className={" pl-4 " + burgerIngredientsStyle.ingredientsList}>
        {itemType.map((item) => (
          <IngredientCard key={item._id} card={item} />
        ))}
      </ul>
    </li>
  );
};

IngredientsBlock.propTypes = {
  type: PropTypes.oneOf(["bun", "sauce", "main"]).isRequired,
  text: PropTypes.string.isRequired,
};

export const BurgerIngredients = () => {
  const buns = React.useRef("bun");
  const sause = React.useRef("sause");
  const main = React.useRef("main");

  const scroll = (item) => {
    item.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={burgerIngredientsStyle.burgerIngredients}>
      <HeaderIngredients>Соберите бургер</HeaderIngredients>
      <TabConteiner
        buns={() => scroll(buns)}
        sauses={() => scroll(sause)}
        main={() => scroll(main)}
      />
      <ul className={burgerIngredientsStyle.box}>
        <IngredientsBlock refElement={buns} key="bun" type="bun" text="Булки" />
        <IngredientsBlock
          refElement={sause}
          key="sauce"
          type="sauce"
          text="Соусы"
        />
        <IngredientsBlock
          refElement={main}
          key="main"
          type="main"
          text="Начинки"
        />
      </ul>
    </section>
  );
};
