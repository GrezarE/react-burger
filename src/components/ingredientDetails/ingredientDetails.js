import PropTypes from "prop-types";
import ingredientDetailsStyle from "./ingredientDetails.module.css";

const Nutrient = (props) => {
  return (
    <div className={ingredientDetailsStyle.nutrient__box} >
      <p className="text text_type_main-default text_color_inactive">{props.nutrient}</p>
      <span className="text text_type_digits-default text_color_inactive">{props.children}</span>
    </div>
  );
};

Nutrient.propTypes = {
  nutrient: PropTypes.string,
  children: PropTypes.number
}


export const IngredientDetails = (props) => {
  return (
    <div className={ingredientDetailsStyle.box}>
      <img className={ingredientDetailsStyle.image} src={props.image} alt={props.name}/>
      <h2 className={"text text_type_main-medium pt-4 " + ingredientDetailsStyle.header}>{props.name}</h2>
      <div className={'mt-8 pb-15 ' + ingredientDetailsStyle.nutrients}>
        <Nutrient nutrient="Калории,ккал" >{props.calories}</Nutrient>
        <Nutrient nutrient="Белки, г">{props.proteins}</Nutrient>
        <Nutrient nutrient="Жиры, г">{props.fat}</Nutrient>
        <Nutrient nutrient="Углеводы, г">{props.carbohydrates}</Nutrient>
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  calories: PropTypes.number,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number
}
