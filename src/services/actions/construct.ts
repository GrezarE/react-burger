export const ADD_COMPONENT: "ADD_COMPONENT" = "ADD_COMPONENT";
export const REMOVE_COMPONENT: "REMOVE_COMPONENT" = "REMOVE_COMPONENT";
export const CHANGE_BUN: "CHANGE_BUN" = "CHANGE_BUN";
export const SORT_COMPONENT: "SORT_COMPONENT" = "SORT_COMPONENT";
export const CLEAR_COMPONENTS: "CLEAR_COMPONENTS" = "CLEAR_COMPONENTS";

export interface IComponent {
  readonly id: string;
  readonly key: string;
}

export interface IAddComponent {
  readonly type: typeof ADD_COMPONENT;
  readonly id: string;
  readonly key: string;
}

export interface IRemoveComponent {
  readonly type: typeof REMOVE_COMPONENT;
  readonly key: string;
}

export interface IChangeBun {
  readonly type: typeof CHANGE_BUN;
  readonly id: string;
}

export interface ISortComponent {
  readonly type: typeof SORT_COMPONENT;
  readonly components: [];
}

export interface IClearComponents {
  readonly type: typeof CLEAR_COMPONENTS;
}

export type TConstruct =
  | IAddComponent
  | IRemoveComponent
  | IChangeBun
  | ISortComponent
  | IClearComponents;
