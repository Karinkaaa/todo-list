import { TODO_PRIORITY, TODO_STATUS } from "./enums";

export type SxType = {
  [key: string]: string | number;
};

export type StatusType = `${TODO_STATUS}`;
export type PriorityType = `${TODO_PRIORITY}`;
export type SelectorType = StatusType | PriorityType;

export interface ITodo {
  id: string;
  name: string;
  createdAt: string;
  status: StatusType;
  priority: PriorityType;
}

export interface ITodos {
  items: ITodo[];
  page: number;
  limit: number;
  selector?: SelectorType;
}
