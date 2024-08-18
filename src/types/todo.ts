import { ChangeEvent } from "react";

export interface ITodo {
  id: number;
  value: string;
  isCompleted: boolean;
}

export interface ITodoContext {
  value: string;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  onClearValue: () => void;
  todoItems: ITodo[];
  onAddTodo: (value: string) => void;
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}
