export type IIngredientType = {
  readonly __v: number;
  readonly _id: string;
  readonly calories: number;
  readonly carbohydrates: number;
  readonly fat: number;
  readonly image: string;
  readonly image_large: string;
  readonly image_mobile: string;
  readonly name: string;
  readonly price: number;
  readonly proteins: number;
  readonly type: string;
};

export interface IOrder {
  readonly _id: string;
  readonly createdAt: string;
  readonly name: string;
  readonly number: number;
  readonly status: string;
  readonly updatedAt: string;
  readonly ingredients: Array<string>;
}

export interface IAuthorizationBoolean {
  readonly isRequest: boolean;
  readonly isFail: boolean;
}
