import React, { FC, useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import burgerIngredientsStyle from "./burger-ingredients.module.css";
import {
  Tab,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { Modal } from "../modal/modal";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { useSelector, useDispatch } from "../../services/hooks";
import { CLOSE_CARD, OPEN_CARD } from "../../services/actions/view";
import { useDrag } from "react-dnd";
import { IIngredientType } from "../../utils/types";

export const Header: FC = (props) => {
  return (
    <h1 className="mt-10 mb-5 text text_type_main-large">{props.children}</h1>
  );
};

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

interface ITabContainer {
  tab: string;
  sauses: () => void;
  buns: () => void;
  main: () => void;
}

const TabContainer: FC<ITabContainer> = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <Tab
        value="one"
        active={props.tab === "one"}
        onClick={() => {
          props.buns();
        }}
      >
        Булки
      </Tab>
      <Tab
        value="two"
        active={props.tab === "two"}
        onClick={() => {
          props.sauses();
        }}
      >
        Соусы
      </Tab>
      <Tab
        value="three"
        active={props.tab === "three"}
        onClick={() => {
          props.main();
        }}
      >
        Начинки
      </Tab>
    </div>
  );
};

interface IIngredientCard {
  props: IIngredientType;
}

const IngredientCard: FC<IIngredientCard> = ({ props }) => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const componentsData = useSelector((store) => store.construct);
  function getComponentsIdArray() {
    let arr: Array<string> = [];
    if (componentsData.components.length > 0) {
      arr = componentsData.components.map((item) => item.id);
    }
    return arr;
  }
  const componentsIdArray = React.useMemo(
    () => getComponentsIdArray(),
    [componentsData]
  );
  const ingredients = React.useMemo(
    () => componentsIdArray.concat(componentsData.bun),
    [componentsData]
  );
  const counter = React.useMemo(
    () => ingredients.filter((item) => item === props._id).length,
    [ingredients, props]
  );

  const [{ opacity }, ref] = useDrag({
    type: "ingredient",
    item: { props },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.1 : 1,
    }),
  });

  const handleOpen = () => {
    dispatch({
      type: OPEN_CARD,
      view: props,
    });
    setIsVisible(true);
    window.history.pushState(
      { path: `/ingredients/${props._id}` },
      "",
      `/ingredients/${props._id}`
    );
  };
  const handleClose = () => {
    dispatch({
      type: CLOSE_CARD,
    });
    setIsVisible(false);
    window.history.pushState({ path: `/` }, "", `/`);
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
        <img className="ml-4 mr-4 " src={props.image} alt={props.image} />
        <div className={"mt-1 mb-1 " + burgerIngredientsStyle.priceBox}>
          <p className="text text_type_digits-default">{props.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <h2
          className={
            "text text_type_main-default " + burgerIngredientsStyle.name
          }
        >
          {props.name}
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

interface IIngredientsBlock {
  type: string;
  text: string;
  refElement: any;
}

const IngredientsBlock: FC<IIngredientsBlock> = (data) => {
  const ingredients = useSelector((store) => store.burger.ingredients);
  const itemType = ingredients.filter((item) => item.type === data.type);

  return (
    <li className="mt-10" id={data.type} ref={data.refElement}>
      <h2 className="text text_type_main-medium">{data.text}</h2>
      <ul className={" pl-4 " + burgerIngredientsStyle.ingredientsList}>
        {itemType.map((item) => (
          <IngredientCard key={item._id} props={item} />
        ))}
      </ul>
    </li>
  );
};

export const BurgerIngredients = () => {
  const buns = useRef<any>("bun");
  const sause = useRef<any>("sause");
  const main = useRef<any>("main");
  const [tab, setTab] = useState<string>("one");

  const scroll = (item: any) => {
    item.current.scrollIntoView({ behavior: "smooth" });
  };

  const onScroll = (e: any): void => {
    let element = e.target;

    if (
      element.scrollTop > buns.current.scrollHeight &&
      e.target.scrollTop <
        sause.current.scrollHeight + buns.current.scrollHeight
    ) {
      setTab("two");
    }
    if (
      e.target.scrollTop >
      sause.current.scrollHeight + buns.current.scrollHeight
    ) {
      setTab("three");
    }
    if (e.target.scrollTop <= buns.current.scrollHeight) {
      setTab("one");
    }
  };

  return (
    <section className={burgerIngredientsStyle.burgerIngredients}>
      <Header>Соберите бургер</Header>
      <TabContainer
        buns={() => scroll(buns)}
        sauses={() => scroll(sause)}
        main={() => scroll(main)}
        tab={tab}
      />
      <ul className={burgerIngredientsStyle.box} onScroll={(e) => onScroll(e)}>
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
