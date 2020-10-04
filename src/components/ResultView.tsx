import React, { FC, memo } from "react";
import { User } from "../models/user";
import { DataGrid, ColDef } from "@material-ui/data-grid";
import { ShadowContainer } from "../styled/common";
import styled from "styled-components";

interface Props {
  users: User[] | undefined;
}

const columns: ColDef[] = [
  {
    field: "fullName",
    headerName: "Name",
    sortable: true,
    width: 160,
  },
  { field: "age", headerName: "Age", sortable: true, width: 130 },
];

const ResultView: FC<Props> = ({ users }) => {
  if (!users || users.length === 0) return <NoData>no data</NoData>;

  const rows = users.map((user, i) => {
    return {
      id: i,
      fullName: `${user.name?.firstName || ""} ${user.name?.lastName || ""}`,
      age: user.age,
    };
  });
  return (
    <Container>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </Container>
  );
};

const Container = styled(ShadowContainer)`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 400px;
  width: 600px;
`;

const NoData = styled(Container)`
  justify-content: center;
  align-items: center;
`;

export default memo(ResultView);
