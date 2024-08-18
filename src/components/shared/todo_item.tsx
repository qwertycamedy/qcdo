import { ITodo } from "@/models/todo";
import { FC } from "react";
import { Checkbox } from "../ui";
import { Trash2 } from "lucide-react";
import { useDeleteTodoMutation, useToggleTodoMutation } from "@/api/todo_api";
import { useAppDispatch } from "@/hooks/redux";
import { deleteTodo, toggleTodo } from "@/store/slices/todo_slice";

type TodoItemProps = {
  item: ITodo;
};

export const TodoItem: FC<TodoItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const [apiToggleTodo] = useToggleTodoMutation();
  const [apiDeleteTodo] = useDeleteTodoMutation();

  const onToggle = async () => {
    try {
      await apiToggleTodo(item);
      dispatch(toggleTodo(item));
    } catch (err) {
      console.log(err);
    }
  };

  const onDelete = async () => {
    try {
      await apiDeleteTodo(item);
      dispatch(deleteTodo(item));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="p-[2px] rounded-md hover:outline cursor-pointer"
      onClick={onToggle}
    >
      <div className="border border-secondary rounded-md flex items-center justify-between gap-4 py-4 px-6">
        <div className="flex items-center gap-4">
          <Checkbox checked={item.isCompleted} />
          <p>{item.value}</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <Trash2 className="hover:text-destructive" size={18} />
        </button>
      </div>
    </div>
  );
};
