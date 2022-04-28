import { IIngredientType } from "../../utils/type";

export const OPEN_CARD: "OPEN_CARD" = "OPEN_CARD";
export const CLOSE_CARD: "CLOSE_CARD" = "CLOSE_CARD";

export interface IOpenCard<T> {
  readonly type: typeof OPEN_CARD;
  readonly view: T | string;
}

export interface ICloseCard {
  readonly type: typeof CLOSE_CARD;
}

export type TViev = ICloseCard | IOpenCard<IIngredientType>;
