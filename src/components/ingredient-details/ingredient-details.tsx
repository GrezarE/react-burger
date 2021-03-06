import ingredientDetailsStyle from "./ingredient-details.module.css";
import { useSelector } from "../../services/hooks";
import { FC } from "react";

interface INutrient {
  readonly nutrient: string;
}

const Nutrient: FC<INutrient> = (props) => {
  return (
    <div className={ingredientDetailsStyle.nutrient__box}>
      <p className="text text_type_main-default text_color_inactive">
        {props.nutrient}
      </p>
      <span className="text text_type_digits-default text_color_inactive">
        {props.children}
      </span>
    </div>
  );
};

export const IngredientDetails = () => {
  const view = useSelector((store) => store.view.openCard);
  if (view) {
    return (
      <div className={ingredientDetailsStyle.box}>
        <img
          className={ingredientDetailsStyle.image}
          src={view.image}
          alt={view.name}
        />
        <h2
          className={
            "text text_type_main-medium pt-4 " + ingredientDetailsStyle.header
          }
        >
          {view.name}
        </h2>
        <div className={"mt-8 pb-15 " + ingredientDetailsStyle.nutrients}>
          <Nutrient nutrient="Калории,ккал">{view.calories}</Nutrient>
          <Nutrient nutrient="Белки, г">{view.proteins}</Nutrient>
          <Nutrient nutrient="Жиры, г">{view.fat}</Nutrient>
          <Nutrient nutrient="Углеводы, г">{view.carbohydrates}</Nutrient>
        </div>
      </div>
    );
  } else {
    return (
      <></>
    )
  }
};
