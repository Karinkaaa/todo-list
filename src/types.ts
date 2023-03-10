export interface ITodo {
  id: string;
  name: string;
  createdAt: string;
  completed: boolean;
}

export interface ITodos {
  items: ITodo[];
}
