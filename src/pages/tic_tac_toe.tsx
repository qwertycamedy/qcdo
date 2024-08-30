import { Button, Page } from "@/components/ui";
import { FC } from "react";
import { Link } from "react-router-dom";

export const TicTacToePage: FC = () => {
  return (
    <Page>
      <div>
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </div>
    </Page>
  );
};
