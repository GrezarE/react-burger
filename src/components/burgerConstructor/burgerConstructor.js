import React from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorStyle from "./burgerConstructor.module.css";
import image from "../../images/CurrencyIcon.svg";
import "./burgerConstructor.module.css";
import { Modal } from "../modal/modal.js";


const ConstructorItem = ({ props }) => {
  return (
    <li className={"pl-8 " + burgerConstructorStyle.card}>
      <div className={burgerConstructorStyle.drag}>
        <DragIcon type="primary" />
      </div>
      <div className={burgerConstructorStyle.element}>
        <ConstructorElement
          type={props.type}
          text={props.name}
          price={props.price}
          thumbnail={props.image}
        ></ConstructorElement>
      </div>
    </li>
  );
};

ConstructorItem.propTypes = {
  props: PropTypes.object,
};

const ConstructorLockedItem = (props) => {
  return (
    <li className="pl-8">
      <ConstructorElement
        type={props.type}
        isLocked={true}
        text={props.text}
        price={props.price}
        thumbnail={props.thumbnail}
      ></ConstructorElement>
    </li>
  );
};

ConstructorLockedItem.propTypes = {
  type: PropTypes.string.isRequired,
  isLocked: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

const ConstructorBox = (data) => {
  let ingredients = data.api.filter((item) => item.type !== "bun");
  return (
    <ul className={burgerConstructorStyle.box}>
      <ConstructorLockedItem
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
      />
      <li>
        <ul className={burgerConstructorStyle.box_active}>
          {ingredients.map((item) => (
            <ConstructorItem key={item._id} props={item} />
          ))}
        </ul>
      </li>
      <ConstructorLockedItem
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
      />
    </ul>
  );
};

const ConstructorButtonBoxPrice = (props) => {
  return (
    <div className={"mr-10 " + burgerConstructorStyle.price}>
      <p className="text text_type_digits-medium">{props.children}</p>
      <img src={image} alt="Самоцвет" />
    </div>
  );
};

const ConstructorButtonBox = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleOpen = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };
  const modal = <Modal onClose={handleClose}></Modal>;

  // const modal = <Modal active={isVisible} setActive={setIsVisible}></Modal>;



  return (
    <div className={"mr-4 mt-10 " + burgerConstructorStyle.button_box}>
      <ConstructorButtonBoxPrice>610</ConstructorButtonBoxPrice>
      <Button type="primary" size="large" onClick={handleOpen}>
        Оформить заказ
      </Button>
      {isVisible && modal}
    </div>
  );
};

export const BurgerConstructor = (props) => {
  return (
    <section className={"pt-25 " + burgerConstructorStyle.constructor}>
      <ConstructorBox api={props.api} />
      <ConstructorButtonBox />
    </section>
  );
};
