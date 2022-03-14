import PropTypes from "prop-types";
import CurrencyIcon from "../../images/CurrencyIcon.svg";
import style from './feed-details.module.css'
import { useSelector } from "react-redux";
import { useMemo } from "react";

const IngredientDetail = ({ item }) => {
  const ingredients = useSelector(state => state.burger.ingredients)
  const data = ingredients?.find((ingr) => ingr._id === item)

  return (
    <li className={'pr-6 ' + style.ingr__details}>
      <div className={style.name__box}>
        <img className={style.ingr__image} src={data?.image}></img>
        <p className="ml-4 text text_type_main-default">{data?.name}</p>
      </div>
      <div className={style.price__box}>
        <p className="text text_type_digits-default">{`1 x ${data?.price}`}</p>
        <img src={CurrencyIcon} alt='Самоцвет'></img>
      </div>
    </li>
  )
}

IngredientDetail.propTypes = {
  item: PropTypes.string
}

export const FeedDetails = () => {
  const { orders } = useSelector(state => state.websocket)

  const feed = useSelector(state => state.feed.feedView)
  const data = orders.find(item => item._id === feed)
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
  }, [data, ingredientsData])

  const doneStatus = () => {
    const doneStatus = data?.status === 'done' ? 'Выполнен' : data?.status === 'created' ? 'Создан' : data?.status === 'created' ? 'Готовится' : 'Отменен'
    return doneStatus
  }

  return (
    <div className={style.feed__details}>
      <h2 className="mt-10 text text_type_main-medium">{data?.name}</h2>
      <p className='mt-3 text text_type_main-default' style={data?.status === 'done' ? { color: 'green' } : { color: 'red' }}>{doneStatus()}</p>
      <div>
        <h2 className="mt-15 mb-6 text text_type_main-medium">Состав:</h2>
        <ul className={style.composition}>
          {data?.ingredients.map((item, index) => <IngredientDetail key={index} item={item} />
          )}
        </ul>
      </div>
      <div className={'mt-10 mb-10 ' + style.date__box}>
        <p className="text text_type_main-default text_color_inactive">{data?.createdAt}</p>
        <div className={style.price__box}>
          <p className="text text_type_digits-medium">{price}</p>
          <img src={CurrencyIcon} alt="Самоцвет" />
        </div>
      </div>
    </div>
  )
}
