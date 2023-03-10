import { TODO_TYPE } from "./enums";

export interface ITodo {
  id: string;
  name: string;
  createdAt: string;
  completed: boolean;
}

export interface ITodos {
  items: ITodo[];
}

export type SelectorType = `${TODO_TYPE}`;
