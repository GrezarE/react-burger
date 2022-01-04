import {shape, number, string} from "prop-types";

export const ingredientType = shape({
  __v: number,
  _id: string,
  calories: number,
  carbohydrates: number,
  fat: number,
  image: string,
  image_large: string,
  image_mobile: string,
  name: string,
  price: number,
  proteins: number,
  type: string,
});
