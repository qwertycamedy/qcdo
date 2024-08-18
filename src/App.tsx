import { FC } from "react";
import { TodoAdd, TodoList } from "./components/shared";
import { store } from "@/store";
import { Provider } from "react-redux";

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className="max-w-screen-md mx-auto pt-8 w-full min-h-full flex flex-col gap-5">
        <TodoAdd />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
