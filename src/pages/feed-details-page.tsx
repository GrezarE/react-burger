import CurrencyIcon from "../images/CurrencyIcon.svg";
import style from "./feed-details-page.module.css";
import { FC, useEffect, useMemo } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import {
  WS_CONNECTION_START_ORDER,
  WS_CONNECTION_END,
} from "../services/actions/ws-feed-actions";
import { useSelector, useDispatch } from "../services/hooks";

interface IIngredientDetail {
  item: string;
}

const IngredientDetail: FC<IIngredientDetail> = ({ item }) => {
  const ingredients = useSelector((state) => state.burger.ingredients);
  const data = ingredients?.find((ingr) => ingr._id === item);

  return (
    <li className={"pr-6 " + style.ingr__details}>
      <div className={style.name__box}>
        <img className={style.ingr__image} src={data?.image}></img>
        <p className="ml-4 text text_type_main-default">{data?.name}</p>
      </div>
      <div className={style.price__box}>
        <p className="text text_type_digits-default">{`1 x ${data?.price}`}</p>
        <img src={CurrencyIcon} alt="Самоцвет"></img>
      </div>
    </li>
  );
};

export const FeedDetailsPage = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  useEffect(() => {
    if (match.path === "/profile/orders/:id") {
      dispatch({ type: WS_CONNECTION_START_ORDER });
      return () => {
        dispatch({ type: WS_CONNECTION_END });
      };
    }
  }, [match]);
  const { id } = useParams<{ id?: string }>();
  const { orders } = useSelector((state) => state.temporaryOrder);
  const wsData = useSelector((state) => state.websocket);

  const getData = () => {
    return match.path === "/profile/orders/:id"
      ? wsData?.orders.find((item) => item._id === id)
      : orders?.find((item) => item._id === id);
  };
  const data = getData();
  const ingredientsData = useSelector((state) => state.burger.ingredients);

  const price = useMemo(() => {
    let total = 0;
    data?.ingredients.forEach((item) => {
      const ingredient = ingredientsData.find((el) => el._id === item);
      if (ingredient) {
        total += ingredient.price;
      }
    });
    return total;
  }, [data, ingredientsData]);

  const doneStatus = () => {
    const doneStatus =
      data?.status === "done"
        ? "Выполнен"
        : data?.status === "created"
        ? "Создан"
        : data?.status === "created"
        ? "Готовится"
        : "Отменен";
    return doneStatus;
  };

  return (
    <section className={style.section}>
      <div className={style.feed__details}>
        <h1
          className={"text text_type_digits-default " + style.header}
        >{`#${data?.number}`}</h1>
        <h2 className="mt-10 text text_type_main-medium">{data?.name}</h2>
        <p
          className="mt-3 text text_type_main-default"
          style={
            data?.status === "done" ? { color: "#00CCCC" } : { color: "red" }
          }
        >
          {doneStatus()}
        </p>
        <div>
          <h2 className="mt-15 mb-6 text text_type_main-medium">Состав:</h2>
          <ul className={style.composition}>
            {data?.ingredients.map((item, index) => (
              <IngredientDetail key={index} item={item} />
            ))}
          </ul>
        </div>
        <div className={"mt-10 mb-10 " + style.date__box}>
          <p className="text text_type_main-default text_color_inactive">
            {data?.createdAt}
          </p>
          <div className={style.price__box}>
            <p className="text text_type_digits-medium">{price}</p>
            <img src={CurrencyIcon} alt="Самоцвет" />
          </div>
        </div>
      </div>
    </section>
  );
};
