import { ITodo } from "@/types/todo";
import { FC } from "react";
import { Checkbox } from "../ui";
import { Trash2 } from "lucide-react";

type TodoItemProps = {
  item: ITodo;
  onDelete: (curTodoId: number) => void;
  onToggle: (curTodoId: number) => void;
};

export const TodoItem: FC<TodoItemProps> = ({ item, onDelete, onToggle }) => {
  return (
    <div
      className="p-[2px] rounded-md hover:outline cursor-pointer"
      onClick={() => onToggle(item.id)}
    >
      <div className="border border-secondary rounded-md flex items-center justify-between gap-4 py-4 px-6">
        <div className="flex items-center gap-4">
          <Checkbox checked={item.isCompleted} />
          <p>{item.value}</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(item.id);
          }}
        >
          <Trash2 className="hover:text-destructive" size={18} />
        </button>
      </div>
    </div>
  );
};
