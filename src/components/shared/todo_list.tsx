import { FC, useEffect } from "react";
import { TodoItem } from "./todo_item";
import { useGetTodoItemsQuery } from "@/api/todo_api";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setTodoItems, todoSel } from "@/store/slices/todo_slice";

export const TodoList: FC = () => {
  const dispatch = useAppDispatch();
  const { todoItems } = useAppSelector(todoSel);
  const {
    data: apiTodoItems,
    isError,
    isLoading,
    isSuccess,
  } = useGetTodoItemsQuery(10);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setTodoItems(apiTodoItems));
    }
  }, [dispatch, apiTodoItems, isSuccess]);

  if (isLoading) return <h1 className="text-center my-6">Loading</h1>;
  if (isError) return <h1 className="text-center my-6">Error</h1>;

  return (
    <div>
      {isSuccess && todoItems && todoItems.length > 0 ? (
        todoItems
          .map((item) => <TodoItem key={item.id} item={item} />)
          .reverse()
      ) : (
        <h1 className="text-center my-6">Add some todo</h1>
      )}
    </div>
  );
};
