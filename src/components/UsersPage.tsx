import React, { FC, useState, useEffect } from "react";
import { SubLayout, HeaderArea, MainArea, RightArea } from "../styled/grid";
import SubHeader from "./SubHeader";
import Filter from "./Filter";
import ResultView from "./ResultView";
import { User } from "../models/user";
import { UserRepository } from "../services/userRepository";

interface Props {
  endpoint: string;
}

let userRepo: UserRepository;

const UsersView: FC<Props> = ({ endpoint }) => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    userRepo = new UserRepository(endpoint);
  }, []);

  const retreive = async (min?: number, max?: number) => {
    const result = await userRepo.fetch(min, max);
    setUsers(result);
  };
  return (
    <SubLayout>
      <HeaderArea>
        <SubHeader title="Users" />
      </HeaderArea>
      <RightArea>
        <Filter onRetreive={retreive} />
      </RightArea>
      <MainArea>
        <ResultView users={users} />
      </MainArea>
    </SubLayout>
  );
};

export default UsersView;
