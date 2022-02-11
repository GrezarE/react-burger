import React, { useEffect, useMemo, useRef, useCallback } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../services/actions/burger";
import {
  ORDER_CLEAR,
  ADD_COMPONENT,
  CHANGE_BUN,
  REMOVE_COMPONENT,
  // SORT_COMPONENTS,
  ADD_SORT_COMPONENT,
  REMOVE_SORT_COMPONENT,
} from "../../services/actions/burger";
import update from "immutability-helper";
import { useDrag, useDrop } from "react-dnd";

const ConstructorItem = ({ ingredient, index }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const componentsData = useSelector((store) => store.burger.components);

  const moveCard = (dragIndex, hoverIndex) => {
    const components = componentsData.component;
    // console.log(components);
    // const newComp = components.filter((item, index) => index !== dragIndex);
    const newComp = components.slice();
    // newComp.splice(hoverIndex, 0, newItem);
    // console.log(newComp);

    const spliced = update(newComp, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, newComp[dragIndex]],
      ],
    });
    dispatch({
      type: ADD_SORT_COMPONENT,
      components: spliced,
    });
    // dispatch({
    //   type: ADD_SORT_COMPONENT,
    //   components: newComp,
    // });
    // console.log(ingredient._id);
    // dispatch({
    //   type: REMOVE_SORT_COMPONENT,
    //   dragIndex: dragIndex,
    // });
  };

  // console.log(ingredients.filter((item) => item === ingredient._id));

  const [{ opacity }, dragRef] = useDrag({
    type: "component",
    item: () => {
      return { ingredient, index };
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const [{ handlerId }, dropRef] = useDrop({
    accept: "component",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      console.log(index);
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
    drop(item) {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
    },
  });

  dragRef(dropRef(ref));
  
  const deleteCard = () => {
    // console.log(ingredient._id, index);
    dispatch({ type: REMOVE_COMPONENT, id: ingredient._id, index: index });
  };

  return (
    <li
      className={"pl-8 " + burgerConstructorStyle.card}
      ref={ref}
      data-handler-id={handlerId}
    >
      <div className={burgerConstructorStyle.drag}>
        <DragIcon type="primary" />
      </div>
      <div className={burgerConstructorStyle.element} style={{ opacity }}>
        <ConstructorElement
          type={ingredient.type}
          text={ingredient.name}
          price={ingredient.price}
          thumbnail={ingredient.image}
          handleClose={() => deleteCard()}
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
  const dispatch = useDispatch();

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(card) {
      if (card.type === "bun") {
        dispatch({ type: CHANGE_BUN, id: card._id });
      } else {
        dispatch({ type: ADD_COMPONENT, id: card._id });
      }
    },
  });

  // const [, componentDropTarget] = useDrop({
  //   accept: "component",
  //   // collect: (monitor) => ({

  //   // })
  //   hover: (monitor) => ({
  //     console: monitor.isOver,
  //   }),
  //   drop(card) {
  //     console.log(card);
  //   },
  // });

  const ingredientsData = useSelector((state) => state.burger.ingredients);
  // const dispatch = useDispatch();
  // const { dispatchState } = React.useContext(ConstructorPriceContext);

  // const qwe = ingredients.map((item) =>
  //   ingredientsData.find((el) => el._id === item)
  // );

  const constructorData = ingredientsData.filter((item) =>
    ingredients.find((el) => el === item._id)
  );

  // const qwe = ingredients.map(function (item) {
  //   ingredientsData.find((el) => el._id === item)
  //   console.log(ingredientsData.find((el) => el._id === item))

  // });
  // console.log(qwe);

  // useEffect(() => {
  //   let total = 0;
  //   ingredients.map((item) => {
  //     const ingridient = ingredientsData.find((el) => el._id === item);
  //     if (ingridient) {
  //       total += ingridient.price;
  //     }
  //   });
  //   dispatch({ type: OVERALL_PRICE, total: total });
  // }, [ingredientsData, ingredients, dispatch]);

  // React.useEffect(() => {
  //   dispatchState({ type: "set", arr: constructorData });
  // }, [ingredientsData, ingredients]);

  return (
    <ul
      className={burgerConstructorStyle.box}
      ref={dropTarget}
      style={{ isHover }}
    >
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
        <ul
          className={burgerConstructorStyle.box_active}
          // ref={componentDropTarget}
        >
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
                <ConstructorItem
                  key={`${item}_${index}`}
                  ingredient={ingridient}
                  index={index}
                />
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

const ConstructorButtonBoxPrice = ({ ingredients }) => {
  // const { state } = React.useContext(ConstructorPriceContext);

  const ingredientsData = useSelector((state) => state.burger.ingredients);

  // function priceCount() {
  //   let total = 0;
  //   ingredients.map((item) => {
  //     const ingridient = ingredientsData.find((el) => el._id === item);
  //     if (ingridient) {
  //       total += ingridient.price;
  //     }
  //   });
  //   return total;
  // }
  // const price = useMemo(
  //   () => priceCount(),
  //   [ingredients, ingredientsData]
  //   // {
  //   // let total = 0;
  //   // ingredients.map((item) => {
  //   //   const ingridient = ingredientsData.find((el) => el._id === item);
  //   //   if (ingridient) {
  //   //     total += ingridient.price;
  //   //   }
  //   // });
  //   // return total;
  //   // }
  // );

  const price = useMemo(() => {
    let total = 0;
    ingredients.map((item) => {
      const ingridient = ingredientsData.find((el) => el._id === item);
      if (ingridient) {
        total += ingridient.price;
      }
    });
    return total;
  }, [ingredients, ingredientsData]);

  console.log(price);

  // const price = ingredients.reduce(
  //   (summ, item) => ingredientsData.find((el) => el._id === item).,
  //   [0]
  // );

  // console.log(price);

  // const { overallPrice } = useSelector((store) => store.burger);
  // console.log(overallPrice);

  return (
    <div className={"mr-10 " + burgerConstructorStyle.price}>
      {/* <p className="text text_type_digits-medium">{state.price}</p> */}
      <p className="text text_type_digits-medium">{price}</p>
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
      <ConstructorButtonBoxPrice ingredients={ingredients} />
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

// const priceInitialState = { price: 0 };
// function reducer(state, action) {
//   switch (action.type) {
//     case "set":
//       let total = 0;
//       action.arr.forEach(function (item) {
//         total += item.price;
//       });
//       return { price: total };
//     case "reset":
//       return priceInitialState;
//     default:
//       throw new Error(`Wrong type of action: ${action.type}`);
//   }
// }

export const BurgerConstructor = () => {
  // const [state, dispatchState] = React.useReducer(reducer, priceInitialState);
  const componentsData = useSelector((store) => store.burger.components);
  console.log(componentsData);

  const ingredients = React.useMemo(
    () => componentsData.component.concat(componentsData.buns),
    [componentsData]
  );

  // let qwe = [0, 1, 2, 3, 4, 5, 6];
  // qwe.splice(1, 0, 6).splice(1, 1);
  // console.log(qwe);
  // useEffect(() => {
  //   let qwe = [0, 1, 2, 3, 4, 5, 6];
  //   qwe.splice(1, 0, 6).splice(1, 1);
  //   console.log(qwe);
  // }, [componentsData]);

  return (
    <section className={"pt-25 " + burgerConstructorStyle.constructor}>
      {/* <ConstructorPriceContext.Provider value={{ state, dispatchState }}> */}
      <ConstructorBox ingredients={ingredients} />
      <ConstructorButtonBox ingredients={ingredients} />
      {/* </ConstructorPriceContext.Provider> */}
    </section>
  );
};
