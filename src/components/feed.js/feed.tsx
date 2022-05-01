import React, { FC, useMemo } from "react";
import style from "./feed.module.css";
import bunTest from "../../images/bunTest.png";
import CurrencyIcon from "../../images/CurrencyIcon.svg";
import { useSelector } from "../../services/hooks";
import { IOrder } from "../../utils/types";

interface IIngredientIcon {
  readonly item: string;
  readonly length: number;
}

const IngredientIcon: FC<IIngredientIcon> = ({ item, length }) => {
  const ingredients = useSelector((state) => state.burger.ingredients);
  const image = ingredients.find((ingr) => ingr._id === item);

  return (
    <li className={style.image__box}>
      <img src={image?.image || bunTest} className={style.picture} />
      <span className={"text text_type_main-default " + style.span}>{`+${
        length - 5
      }`}</span>
    </li>
  );
};

interface IFeed {
  feed: IOrder;
  place: string;
}

export const Feed: FC<IFeed> = ({ feed, place }) => {
  const ingredientsData = useSelector((state) => state.burger.ingredients);
  const price = useMemo(() => {
    let total = 0;
    feed.ingredients.forEach((item: string) => {
      const ingredient = ingredientsData.find((el) => el._id === item);
      if (ingredient) {
        total += ingredient.price;
      }
    });
    return total;
  }, [feed, ingredientsData]);

  const doneStatus = () => {
    const doneStatus =
      feed?.status === "done"
        ? "Выполнен"
        : feed?.status === "created"
        ? "Создан"
        : feed?.status === "pending"
        ? "Готовится"
        : "Отменен";
    return doneStatus;
  };

  return (
    <li className={place === "orders" ? style.feed__orders : style.feed}>
      <div className={style.numbers}>
        <h3 className="text text_type_digits-default">{feed.number}</h3>
        <p className="text text_type_main-default text_color_inactive">
          {feed.createdAt.replace(/[A-Za-z]/gi, " ").split(".")[0]}
        </p>
      </div>
      <div className="pl-6 pr-6">
        <h2 className={"text text_type_main-medium " + style.feed__name}>
          {feed.name}
        </h2>
        {place === "orders" && (
          <p
            className="text text_type_main-default pt-2"
            style={
              feed?.status === "done"
                ? { color: "#00CCCC" }
                : feed?.status === "cancel"
                ? { color: "red" }
                : { color: "#F2F2F3" }
            }
          >
            {doneStatus()}
          </p>
        )}
      </div>
      <div className={style.last__box}>
        <ul className={style.pic__box}>
          {feed.ingredients.map((item: string, index: number) => (
            <IngredientIcon
              key={index}
              item={item}
              length={feed.ingredients.length}
            />
          ))}
        </ul>
        <div className={style.price__box}>
          <p className="text text_type_digits-medium">{price}</p>
          <img src={CurrencyIcon} alt="Самоцвет" />
        </div>
      </div>
    </li>
  );
};
