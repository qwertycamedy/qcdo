import { FC } from "react";
import { Button, Input } from "../ui";
import { X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  addTodo,
  clearValue,
  setValue,
  todoSel,
} from "@/store/slices/todo_slice";
import { useAddTodoMutation } from "@/api/todo_api";

export const TodoAdd: FC = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector(todoSel);
  const [apiAddTodo] = useAddTodoMutation();

  const onAdd = async () => {
    if (value && value.trim() !== "") {
      try {
        const {data: newTodo} = await apiAddTodo(value);
        dispatch(addTodo(newTodo));
        dispatch(clearValue());
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="flex gap-2">
      <div className="relative w-full">
        <Input
          className="pr-8 hover:outline"
          value={value}
          onChange={(e) => dispatch(setValue(e.target.value))}
          onKeyDown={(e) => e.key === "Enter" && onAdd()}
        />
        {value && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={() => dispatch(clearValue())}
          >
            <X size={16} />
          </button>
        )}
      </div>
      <Button onClick={() => onAdd()}>Add</Button>
    </div>
  );
};
