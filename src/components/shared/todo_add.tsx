import { FC, useContext } from "react";
import { Button, Input } from "../ui";
import { X } from "lucide-react";
import { TodoContext } from "@/context/todo_context";
import { ITodoContext } from "@/types/todo";

export const TodoAdd: FC = () => {
  const {
    value,
    onChangeValue: onChange,
    onAddTodo: onAdd,
    onClearValue: onClear,
  } = useContext(TodoContext) as ITodoContext;
  return (
    <div className="flex gap-2">
      <div className="relative w-full">
        <Input
          className="pr-8 hover:outline"
          value={value}
          onChange={onChange}
          onKeyDown={(e) => e.key === "Enter" && onAdd(value)}
        />
        {value && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={onClear}
          >
            <X size={16} />
          </button>
        )}
      </div>
      <Button onClick={() => onAdd(value)}>Add</Button>
    </div>
  );
};
