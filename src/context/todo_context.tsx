import { ITodo, ITodoContext } from "@/types/todo";
import { ChangeEvent, createContext, FC, ReactNode, useState } from "react";

interface TodoContextProviderProps {
  children: ReactNode;
}

export const TodoContext = createContext<ITodoContext | null>(null);

export const TodoContextProvider: FC<TodoContextProviderProps> = ({
  children,
}) => {
  const [value, setValue] = useState("");
  const [todoItems, setTodoItems] = useState<ITodo[]>([]);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClearValue = () => {
    setValue("");
  };

  const onAddTodo = (value: string) => {
    if (value) {
      setTodoItems([
        { id: Date.now(), value, isCompleted: false },
        ...todoItems,
      ]);
      setValue("");
    }
  };

  const onDeleteTodo = (curTodoId: number) => {
    setTodoItems([...todoItems].filter((todo) => todo.id !== curTodoId));
  };

  const onToggleTodo = (curTodoId: number) => {
    setTodoItems([
      ...todoItems.map((todo) => {
        if (todo.id === curTodoId) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }

        return todo;
      }),
    ]);
  };

  return (
    <TodoContext.Provider
      value={{
        value,
        onChangeValue,
        onClearValue,
        todoItems,
        onAddTodo,
        onDeleteTodo,
        onToggleTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
