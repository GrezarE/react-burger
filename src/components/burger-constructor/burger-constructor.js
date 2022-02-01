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
import { IngredientsContext } from "../../services/ingredientsContext";
import { ConstructorContext } from "../../services/constructorContext";
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
  props: PropTypes.object,
};

const ConstructorLockedItem = ({ ingridient }) => {
  console.log(ingridient);

  return (
    <li className="pl-8">
      <ConstructorElement
        isLocked={true}
        type={ingridient.type}
        text={ingridient.name}
        price={ingridient.price / 2}
        thumbnail={ingridient.image}
      ></ConstructorElement>
    </li>
  );
};

// ConstructorLockedItem.propTypes = {
//   type: PropTypes.string.isRequired,
//   isLocked: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   thumbnail: PropTypes.string.isRequired,
// };

const ConstructorBox = () => {
  const ingredientsData = React.useContext(IngredientsContext);
  const components = React.useContext(ConstructorContext);
  const constructorData = ingredientsData.filter((item) =>
    components.find((el) => el === item._id)
  );

  const ingredients = constructorData.filter((item) => item.type !== "bun");
  const buns = constructorData.filter((item) => item.type === "bun");

  console.log(buns);
  console.log(constructorData);
  console.log(ingredients);

  return (
    <ul className={burgerConstructorStyle.box}>
      {buns.map((item) => (
        <ConstructorLockedItem key={item._id} ingridient={item} />
      ))}
      <li>
        <ul className={burgerConstructorStyle.box_active}>
          {/* {components.map((item) => (
            <ConstructorItem key={item} ingridient={ingredientsData.filter(el => el._id === item)} />
          ))} */}
          {ingredients.map((item) => (
            <ConstructorItem key={item._id} ingridient={item} />
          ))}
          {/* {ingredients.map((item) =>
            <ConstructorItem key={item._id} ingridient={item} />
          )} */}
          {/* {components.map((item) => (
            <ConstructorItem
              key={item}
              id = {item}
            />
          ))} */}
          {/* {components.map(({ _id }) => {
            <ConstructorItem
              key={_id}
              ingridient={ingredients.find((el) => el._id === _id)}
            />;
          })} */}
        </ul>
      </li>
      {buns.map((item) => (
        <ConstructorLockedItem key={item._id} ingridient={item} />
      ))}
      {/* // type="bottom"
        // isLocked={true}
        // text="Краторная булка N-200i (верх)"
        // price={200}
        // thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"} */}
    </ul>
  );
};

ConstructorBox.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType),
};

const ConstructorButtonBoxPrice = (props) => {
  return (
    <div className={"mr-10 " + burgerConstructorStyle.price}>
      <p className="text text_type_digits-medium">{props.children}</p>
      <img src={CurrencyIcon} alt="Самоцвет" />
    </div>
  );
};

ConstructorButtonBoxPrice.propTypes = {
  children: PropTypes.string,
};

const ConstructorButtonBox = () => {
  const components = React.useContext(ConstructorContext);
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
        ingredients: components,
      }),
    })
      .then(function (res) {
        if (res.ok) {
          return res.json();
        }
        console.log(res);
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
        <ConstructorButtonBoxPrice>610</ConstructorButtonBoxPrice>
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

export const BurgerConstructor = () => {
  const [state, setState] = React.useState([
    "60d3b41abdacab0026a733c6",
    "60d3b41abdacab0026a733c8",
    "60d3b41abdacab0026a733ca",
    "60d3b41abdacab0026a733ce",
    "60d3b41abdacab0026a733d2",
    "60d3b41abdacab0026a733d3",
    "60d3b41abdacab0026a733cd",
  ]);

  return (
    <section className={"pt-25 " + burgerConstructorStyle.constructor}>
      <ConstructorContext.Provider value={state}>
        <ConstructorBox />
        <ConstructorButtonBox />
      </ConstructorContext.Provider>
    </section>
  );
};

// BurgerConstructor.propTypes = {
//   data: PropTypes.arrayOf(ingredientType).isRequired
// }
