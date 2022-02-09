import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorStyle from "./burger-constructor.module.css";
import CurrencyIcon from "../../images/CurrencyIcon.svg";
import { Modal } from "../modal/modal.js";
import { OrderDetails } from "../order-details/order-details.js";
import { ingredientType } from "../../utils/types.js";
import { ConstructorPriceContext } from "../../services/constructorContext";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../services/actions/burger";
import { ORDER_CLEAR, OVERALL_PRICE } from "../../services/actions/burger";
import { useDrag, useDrop } from "react-dnd";

const ConstructorItem = ({ ingredient }) => {
  // const [] = useDrag({
  //   type: "component",
  //   item: ingredient._id,
  // });

  return (
    <li className={"pl-8 " + burgerConstructorStyle.card}>
      <div className={burgerConstructorStyle.drag}>
        <DragIcon type="primary" />
      </div>
      <div className={burgerConstructorStyle.element}>
        <ConstructorElement
          type={ingredient.type}
          text={ingredient.name}
          price={ingredient.price}
          thumbnail={ingredient.image}
        />
      </div>
    </li>
  );
};

ConstructorItem.propTypes = {
  ingredient: ingredientType.isRequired,
};

const ConstructorLockedItem = ({ ingredient, position }) => {
  return (
    <li className="pl-8">
      <ConstructorElement
        isLocked={true}
        type={ingredient.type}
        text={ingredient.name + position}
        price={ingredient.price / 2}
        thumbnail={ingredient.image}
      />
    </li>
  );
};

ConstructorLockedItem.propTypes = {
  ingredient: ingredientType.isRequired,
  position: PropTypes.string.isRequired,
};

const ConstructorBox = ({ ingredients }) => {
  const ingredientsData = useSelector((state) => state.burger.ingredients);
  const dispatch = useDispatch();
  // const { dispatchState } = React.useContext(ConstructorPriceContext);

  // const qwe = ingredients.map((item) =>
  //   ingredientsData.find((el) => el._id === item)
  // );

  const constructorData = ingredientsData.filter((item) =>
    ingredients.find((el) => el === item._id)
  );

  // const constructorData = ingredients.map(item => ingredientsData.find(el => el._id === item))

  React.useEffect(() => {
    let total = 0;
    ingredients.map((item) => {
      const ingridient = ingredientsData.find((el) => el._id === item);
      if (ingridient) {
        total += ingridient.price;
      }
    });
    dispatch({ type: OVERALL_PRICE, total: total });
  }, [ingredientsData, ingredients]);

  // React.useEffect(() => {
  //   dispatchState({ type: "set", arr: constructorData });
  // }, [ingredientsData, ingredients]);

  return (
    <ul className={burgerConstructorStyle.box}>
      {constructorData.map(
        (item) =>
          item.type === "bun" && (
            <ConstructorLockedItem
              key={item._id}
              ingredient={item}
              position={" (верх)"}
            />
          )
      )}
      <li>
        <ul className={burgerConstructorStyle.box_active}>
          {/* {constructorData.map(
            (item) =>
              item.type !== "bun" && (
                <ConstructorItem key={item._id} ingredient={item} />
              )
          )} */}
          {ingredients.map((item, index) => {
            const ingridient = ingredientsData.find(
              (el) => el._id === item && el.type !== "bun"
            );
            return (
              ingridient && (
                <ConstructorItem key={`${item}_${index} `} ingredient={ingridient} />
              )
            );
          })}
        </ul>
      </li>
      {constructorData.map(
        (item) =>
          item.type === "bun" && (
            <ConstructorLockedItem
              key={item._id}
              ingredient={item}
              position={" (низ)"}
            />
          )
      )}
    </ul>
  );
};

ConstructorBox.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const ConstructorButtonBoxPrice = () => {
  // const { state } = React.useContext(ConstructorPriceContext);

  const { overallPrice } = useSelector((store) => store.burger);
  console.log(overallPrice);

  return (
    <div className={"mr-10 " + burgerConstructorStyle.price}>
      {/* <p className="text text_type_digits-medium">{state.price}</p> */}
      <p className="text text_type_digits-medium">{overallPrice}</p>
      <img src={CurrencyIcon} alt="Самоцвет" />
    </div>
  );
};

const ConstructorButtonBox = ({ ingredients }) => {
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store.burger);

  const handleClose = () => {
    dispatch({
      type: ORDER_CLEAR,
    });
  };
  const modal = (
    <Modal onClose={handleClose}>
      <OrderDetails />
    </Modal>
  );

  return (
    <div className={"mr-4 mt-10 " + burgerConstructorStyle.button_box}>
      <ConstructorButtonBoxPrice />
      <Button
        type="primary"
        size="large"
        onClick={async () => {
          dispatch(getOrder(ingredients));
        }}
      >
        Оформить заказ
      </Button>
      {order && modal}
    </div>
  );
};

ConstructorButtonBox.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const priceInitialState = { price: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "set":
      let total = 0;
      action.arr.forEach(function (item) {
        total += item.price;
      });
      return { price: total };
    case "reset":
      return priceInitialState;
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

export const BurgerConstructor = () => {
  const [state, dispatchState] = React.useReducer(reducer, priceInitialState);
  const componentsData = useSelector((store) => store.burger.components);

  const ingredients = React.useMemo(
    () => componentsData.component.concat(componentsData.buns),
    [componentsData]
  );

  return (
    <section className={"pt-25 " + burgerConstructorStyle.constructor}>
      <ConstructorPriceContext.Provider value={{ state, dispatchState }}>
        <ConstructorBox ingredients={ingredients} />
        <ConstructorButtonBox ingredients={ingredients} />
      </ConstructorPriceContext.Provider>
    </section>
  );
};
