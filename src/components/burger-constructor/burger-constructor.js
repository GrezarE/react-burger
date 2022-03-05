import React, { useMemo, useRef } from "react";
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
import { ORDER_CLEAR, getOrder } from "../../services/actions/order";
import {
  ADD_COMPONENT,
  CHANGE_BUN,
  REMOVE_COMPONENT,
  SORT_COMPONENT,
  CLEAR_COMPONENTS,
} from "../../services/actions/construct";
import update from "immutability-helper";
import { useDrag, useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { Redirect, useHistory } from "react-router-dom";

const ConstructorItem = ({ ingredient, index, itemKey }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const componentsData = useSelector((store) => store.construct);

  const moveCard = (dragIndex, hoverIndex) => {
    const components = componentsData.components;
    const newComp = components.slice();
    const spliced = update(newComp, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, newComp[dragIndex]],
      ],
    });
    dispatch({
      type: SORT_COMPONENT,
      components: spliced,
    });
  };

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
    dispatch({ type: REMOVE_COMPONENT, key: itemKey });
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
  index: PropTypes.number.isRequired,
  itemKey: PropTypes.string.isRequired,
};

const Plug = () => {
  return (
    <li className={"pl-8 " + burgerConstructorStyle.card}>
      <div className={burgerConstructorStyle.plug}>
        <p className="text text_type_main-medium">Создайте здесь свой бургер</p>
      </div>
    </li>
  );
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

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop({ card }) {
      if (card.type === "bun") {
        dispatch({ type: CHANGE_BUN, id: card._id });
      } else {
        let key = uuidv4();
        dispatch({ type: ADD_COMPONENT, id: card._id, key: key });
      }
    },
  });

  const ingredientsData = useSelector((state) => state.burger.ingredients);
  const components = useSelector((store) => store.construct);

  return (
    <ul className={burgerConstructorStyle.box} ref={dropTarget}>
      {ingredientsData.map(
        (item) =>
          item._id === components.bun && (
            <ConstructorLockedItem
              key={item._id}
              ingredient={item}
              position={" (верх)"}
            />
          )
      )}
      <li>
        <ul className={burgerConstructorStyle.box_active}>
          {ingredients.length === 1 ? (
            <Plug />
          ) : (
            components.components.map(({ id, key }, index) => {
              const ingredient = ingredientsData.find(
                (el) => el._id === id && el.type !== "bun"
              );
              return (
                ingredient && (
                  <ConstructorItem
                    key={key}
                    ingredient={ingredient}
                    itemKey={key}
                    index={index}
                  />
                )
              );
            })
          )}
        </ul>
      </li>
      {ingredientsData.map(
        (item) =>
          item._id === components.bun && (
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
  const ingredientsData = useSelector((state) => state.burger.ingredients);

  const price = useMemo(() => {
    let total = 0;
    ingredients.forEach((item) => {
      const ingredient = ingredientsData.find((el) => el._id === item);
      if (ingredient) {
        total += ingredient.price;
      }
    });
    return total;
  }, [ingredients, ingredientsData]);

  return (
    <div className={"mr-10 " + burgerConstructorStyle.price}>
      <p className="text text_type_digits-medium">{price}</p>
      <img src={CurrencyIcon} alt="Самоцвет" />
    </div>
  );
};

ConstructorButtonBoxPrice.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const ConstructorButtonBox = ({ ingredients }) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const { order } = useSelector((store) => store.order);
  const { isAuthenticated, token } = useSelector(state => state.user)


  const handleClose = () => {
    dispatch({
      type: ORDER_CLEAR,
    });
    dispatch({
      type: CLEAR_COMPONENTS,
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
        onClick={() => {
          if (!isAuthenticated) {
            history.replace({ pathname: `/login` });
          } else {
            dispatch(getOrder(ingredients, token));
          }
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

export const BurgerConstructor = () => {
  const componentsData = useSelector((store) => store.construct);

  function getComponentsIdArray() {
    let arr = [];
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

  return (
    <section className={"pt-25 " + burgerConstructorStyle.constructor}>
      <ConstructorBox ingredients={ingredients} />
      <ConstructorButtonBox ingredients={ingredients} />
    </section>
  );
};