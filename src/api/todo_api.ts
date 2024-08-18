import { ITodo } from "@/models/todo";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/todo_items/" }),
  endpoints: (builder) => ({
    getTodoItems: builder.query<ITodo[], number>({
      query: (limit = 5) => ({
        url: "",
        _limit: limit,
      }),
    }),

    addTodo: builder.mutation<ITodo, string>({
      query: (value) => ({
        url: "",
        method: "POST",
        body: {
          value,
          isCompleted: false,
        },
      }),
    }),

    toggleTodo: builder.mutation<ITodo, ITodo>({
      query: (todo) => ({
        url: `${todo.id}`,
        method: "PUT",
        body: { ...todo, isCompleted: !todo.isCompleted },
      }),
    }),

    deleteTodo: builder.mutation<ITodo, ITodo>({
      query: (todo) => ({
        url: `${todo.id}`,
        method: "DELETE",
        body: todo,
      }),
    }),
  }),
});

export const {
  useGetTodoItemsQuery,
  useAddTodoMutation,
  useToggleTodoMutation,
  useDeleteTodoMutation
} = todoApi;
