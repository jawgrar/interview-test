import React, { FC, memo } from "react";
import { User } from "../models/user";

interface Props {
  users: User[] | undefined;
}

const ResultView: FC<Props> = ({ users }) => {
  if (!users || users.length === 0) return <p>no data</p>;
  return (
    <>
      {users.map((user) => (
        <pre>{JSON.stringify(user)}</pre>
      ))}
    </>
  );
};

export default memo(ResultView);
