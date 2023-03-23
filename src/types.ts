import { TODO_TYPE } from "./enums";

export interface ITodo {
  id: string;
  name: string;
  createdAt: string;
  completed: boolean;
}

export type SelectorType = `${TODO_TYPE}`;

export interface ITodos {
  items: ITodo[];
  page: number;
  limit: number;
  selector: SelectorType;
}
