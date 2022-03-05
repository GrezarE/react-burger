import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import style from './ingredient.module.css'
import PropTypes from "prop-types";
import { Header } from "../components/app-header/app-header";

const Nutrient = (props) => {
  return (
    <div className={style.nutrient__box} >
      <p className="text text_type_main-default text_color_inactive">{props.nutrient}</p>
      <span className="text text_type_digits-default text_color_inactive">{props.children}</span>
    </div>
  );
};

Nutrient.propTypes = {
  nutrient: PropTypes.string,
  children: PropTypes.number
}

export const Ingredient = () => {
  const { ingredients } = useSelector(state => state.burger)
  const params = useParams()
  const ingredientData = ingredients.find((item) => item._id === params.id)

  return (
    <>
      <Header />
      <section className={style.section}>
        <h1 className={"text text_type_main-large  " + style.header}>Детали ингредиента</h1>
        <div className={style.box}>
          <img className={style.image} src={ingredientData?.image} alt={ingredientData?.name} />
          <h2 className={"text text_type_main-medium pt-4 " + style.name}>{ingredientData?.name}</h2>
          <div className={'mt-8 pb-15 ' + style.nutrients}>
            <Nutrient nutrient="Калории,ккал" >{ingredientData?.calories}</Nutrient>
            <Nutrient nutrient="Белки, г">{ingredientData?.proteins}</Nutrient>
            <Nutrient nutrient="Жиры, г">{ingredientData?.fat}</Nutrient>
            <Nutrient nutrient="Углеводы, г">{ingredientData?.carbohydrates}</Nutrient>
          </div>
        </div>
      </section>
    </>
  )
}
