import React from "react";
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
import {
  IngredientsContext,
  IngredientsContextT,
} from "../../services/ingredientsContext";
import {
  ConstructorContext,
  ConstructorDataContext,
} from "../../services/constructorContext";
import { BASE_URL } from "../../utils/base-url";
import { OrderContext } from "../../services/orderContext";

const ConstructorItem = ({ ingridient }) => {
  return (
    <li className={"pl-8 " + burgerConstructorStyle.card}>
      <div className={burgerConstructorStyle.drag}>
        <DragIcon type="primary" />
      </div>
      <div className={burgerConstructorStyle.element}>
        <ConstructorElement
          type={ingridient.type}
          text={ingridient.name}
          price={ingridient.price}
          thumbnail={ingridient.image}
        ></ConstructorElement>
      </div>
    </li>
  );
};

ConstructorItem.propTypes = {
  ingridient: ingredientType,
};

const ConstructorLockedItem = ({ ingridient, position }) => {
  return (
    <li className="pl-8">
      <ConstructorElement
        isLocked={true}
        type={ingridient.type}
        text={ingridient.name + position}
        price={ingridient.price / 2}
        thumbnail={ingridient.image}
      ></ConstructorElement>
    </li>
  );
};

ConstructorLockedItem.propTypes = {
  ingridient: ingredientType,
  position: PropTypes.string,
};

const ConstructorBox = ({ post }) => {
  const ingredientsData = React.useContext(IngredientsContext);
  const { dispatch } = React.useContext(ConstructorDataContext);

  const constructorData = ingredientsData.filter((item) =>
    post.find((el) => el === item._id)
  );

  const ingredients = constructorData.filter((item) => item.type !== "bun");
  const buns = constructorData.filter((item) => item.type === "bun");

  React.useEffect(() => {
    dispatch({ type: "set", arr: constructorData });
  }, [ingredientsData, post]);

  return (
    <ul className={burgerConstructorStyle.box}>
      {buns.map((item) => (
        <ConstructorLockedItem
          key={item._id}
          ingridient={item}
          position={" (верх)"}
        />
      ))}
      <li>
        <ul className={burgerConstructorStyle.box_active}>
          {ingredients.map((item) => (
            <ConstructorItem key={item._id} ingridient={item} />
          ))}
        </ul>
      </li>
      {buns.map((item) => (
        <ConstructorLockedItem
          key={item._id}
          ingridient={item}
          position={" (низ)"}
        />
      ))}
    </ul>
  );
};

ConstructorBox.propTypes = {
  post: PropTypes.array.isRequired
};

const ConstructorButtonBoxPrice = () => {
  const { state } = React.useContext(ConstructorDataContext);

  return (
    <div className={"mr-10 " + burgerConstructorStyle.price}>
      <p className="text text_type_digits-medium">{state.price}</p>
      <img src={CurrencyIcon} alt="Самоцвет" />
    </div>
  );
};

const ConstructorButtonBox = ({ post }) => {
  const [order, setOrder] = React.useState({});
  const [isVisible, setIsVisible] = React.useState(false);

  const handleOpen = () => {
    setIsVisible(true);
  };

  const fetchOrder = async () => {
    await fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ingredients: post,
      }),
    })
      .then(function (res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.statusText}`);
      })
      .then((data) => setOrder(data))
      .catch((err) => console.log(err));
  };

  const handleClose = () => {
    setIsVisible(false);
  };
  const modal = (
    <Modal onClose={handleClose}>
      <OrderDetails />
    </Modal>
  );

  return (
    <div className={"mr-4 mt-10 " + burgerConstructorStyle.button_box}>
      <OrderContext.Provider value={order}>
        <ConstructorButtonBoxPrice></ConstructorButtonBoxPrice>
        <Button
          type="primary"
          size="large"
          onClick={async () => {
            await fetchOrder();
            await handleOpen();
          }}
        >
          Оформить заказ
        </Button>
        {isVisible && modal}
      </OrderContext.Provider>
    </div>
  );
};

ConstructorButtonBox.propTypes = {
  post: PropTypes.array.isRequired
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
  const [state, dispatch] = React.useReducer(reducer, priceInitialState);
  const components = React.useContext(ConstructorContext);
  const buns = React.useContext(IngredientsContextT);
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    const array = components.concat(buns);
    setPost(array);
  }, [components, buns]);

  return (
    <section className={"pt-25 " + burgerConstructorStyle.constructor}>
      <ConstructorDataContext.Provider value={{ state, dispatch }}>
        <ConstructorBox post={post} />
        <ConstructorButtonBox post={post} />
      </ConstructorDataContext.Provider>
    </section>
  );
};
