export interface ITodo {
  id: number;
  value: string;
  isCompleted: boolean;
}

export interface ITodoState {
  value: string,
  todoItems: ITodo[]
}