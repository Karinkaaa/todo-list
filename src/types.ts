import { TODO_PRIORITY, TODO_TYPE } from "./enums";

export type SxType = {
  [key: string]: string | number;
};

export type SelectorType = `${TODO_TYPE}`;
export type PriorityType = `${TODO_PRIORITY}`;

export interface ITodo {
  id: string;
  name: string;
  createdAt: string;
  completed: boolean;
  priority: PriorityType;
}

export interface ITodos {
  items: ITodo[];
  page: number;
  limit: number;
  selector: SelectorType;
  priority: PriorityType;
}
