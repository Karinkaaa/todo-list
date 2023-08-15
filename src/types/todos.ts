import { TODO_PRIORITY, TODO_STATUS } from "./enums";

export type StatusType = `${TODO_STATUS}`;
export type PriorityType = `${TODO_PRIORITY}`;

export interface IFilters {
  [key: string]: string;
}

export interface ITodo {
  id: string;
  name: string;
  createdAt: string;
  status: StatusType;
  priority: PriorityType;
  isEdited: boolean;
}

export interface ITodos {
  items: ITodo[];
  page: number;
  limit: number;
  filters: IFilters;
}
