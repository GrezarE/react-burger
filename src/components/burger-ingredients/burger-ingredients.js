import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import burgerIngredientsStyle from "./burger-ingredients.module.css";
import {
  Tab,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { Modal } from "../modal/modal.js";
import { IngredientDetails } from "../ingredient-details/ingredient-details.js";
import { ingredientType } from "../../utils/types.js";
import { useDispatch, useSelector } from "react-redux";
import {
  OPEN_CARD,
  CLOSE_CARD,
  getView,
  ADD_COMPONENT,
} from "../../services/actions/burger";
import { useDrag, useDrop } from "react-dnd";

const HeaderIngredients = (props) => {
  return (
    <h1 className="mt-10 mb-5 text text_type_main-large">{props.children}</h1>
  );
};

HeaderIngredients.propTypes = {
  children: PropTypes.string.isRequired,
};

const TabConteiner = (props) => {
  const [current, setCurrent] = useState("one");
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
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

// counter обратботчик
  const componentsData = useSelector((store) => store.burger.components);
  const ingredients = React.useMemo(
    () => componentsData.component.concat(componentsData.buns),
    [componentsData]
  );
  // const counter = componentsData.component.filter((item) => item === card._id).length;
  const counter = ingredients.filter((item) => item === card._id).length;

  const [{ opacity }, ref] = useDrag({
    type: "component",
    item: card._id,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.1 : 1,
    }),
  });

  const handleOpen = () => {
    dispatch(getView(card));
    // if (card.type !== "bun") {
    //   dispatch({
    //     type: ADD_COMPONENT,
    //     id: card._id,
    //   });
    // }

    setIsVisible(true);
  };
  const handleClose = () => {
    dispatch({
      type: CLOSE_CARD,
    });
    setIsVisible(false);
  };

  const modal = (
    <Modal onClose={handleClose} header="Детали ингредиента">
      <IngredientDetails />
    </Modal>
  );

  return (
    <>
      <li
        className={"mt-6 " + burgerIngredientsStyle.ingredientCard}
        onClick={handleOpen}
        ref={ref}
        style={{ opacity }}
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
            ((counter > 0 && burgerIngredientsStyle.count) ||
              burgerIngredientsStyle.countZero)
          }
        >
          {counter}
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
  const ingredients = useSelector((store) => store.burger.ingredients);
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
  const buns = useRef("bun");
  const sause = useRef("sause");
  const main = useRef("main");

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
