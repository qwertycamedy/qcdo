import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/index";
import { ITodo, ITodoState } from "@/models/todo";

const initialState: ITodoState = {
  value: "",
  todoItems: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    //
    clearValue: (state) => {
      state.value = "";
    },
    setTodoItems: (state, action: PayloadAction<ITodo[]>) => {
      state.todoItems = action.payload;
    },
    //
    addTodo: (state, action: PayloadAction<ITodo | undefined>) => {
      const newTodo = action.payload;
      if (newTodo) {
        state.todoItems.push(newTodo);
      }
    },
    //
    deleteTodo: (state, action: PayloadAction<ITodo>) => {
      const curTodoId = action.payload.id;
      state.todoItems = [...state.todoItems].filter(
        (todo) => todo.id !== curTodoId
      );
    },
    //
    toggleTodo: (state, action: PayloadAction<ITodo>) => {
      const curTodoId = action.payload.id;
      state.todoItems = [...state.todoItems].map((todo) =>
        todo.id === curTodoId
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    },
  },
});

export const {
  setValue,
  clearValue,
  setTodoItems,
  addTodo,
  deleteTodo,
  toggleTodo,
} = todoSlice.actions;
export const todoSel = (state: RootState) => state.todo;
export default todoSlice.reducer;
