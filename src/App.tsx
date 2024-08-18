import { FC } from "react";
import { TodoAdd, TodoList } from "./components/shared";
import { TodoContextProvider } from "./context/todo_context";

const App: FC = () => {
  return (
    <TodoContextProvider>
      <div className="max-w-screen-md mx-auto pt-8 w-full min-h-full flex flex-col gap-5">
        <TodoAdd
        />
        <TodoList
        />
      </div>
    </TodoContextProvider>
  );
};

export default App;
