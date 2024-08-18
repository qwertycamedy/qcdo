import { FC, useContext } from "react";
import { TodoItem } from "./todo_item";
import { TodoContext } from "@/context/todo_context";
import { ITodoContext } from "@/types/todo";

export const TodoList: FC = () => {
  const {
    todoItems,
    onDeleteTodo: onDelete,
    onToggleTodo: onToggle,
  } = useContext(TodoContext) as ITodoContext;

  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};
