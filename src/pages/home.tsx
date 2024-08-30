import { TodoAdd, TodoList } from "@/components/shared";
import { Button, Page } from "@/components/ui";
import { FC } from "react";
import { Link } from "react-router-dom";

export const HomePage: FC = () => {
  return (
    <Page>
      <div>
        <Link to="/tic_tac_toe">
          <Button>TicTacToe</Button>
        </Link>
      </div>
      <TodoAdd />
      <TodoList />
    </Page>
  );
};
