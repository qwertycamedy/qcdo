import { FC } from "react";
import { store } from "@/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, TicTacToePage } from "./pages";

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tic_tac_toe" element={<TicTacToePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
