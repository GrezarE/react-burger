import orderDetailsStyle from "./order-details.module.css";
import image from '../../images/done.svg'
import { useSelector } from 'react-redux';



export const OrderDetails = () => {
  const {order} = useSelector(store => store.order)


  return (
    <div className={"pt-4 " + orderDetailsStyle.box}>
      <h2 className="text text_type_digits-large pb-8">{order}</h2>
      <p className="text text_type_main-medium pb-15">идентификатор заказа</p>
      <img src={image} alt="Заказ готовится"/>
      <p className="text text_type_main-default pt-15">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive pb-30 pt-2">Дождитесь готовности на орбитальной станции</p>
    </div>
  );
};
