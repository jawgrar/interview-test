import React, { FunctionComponent } from "react";
import { Layout, HeaderArea, MainArea } from "./styled/grid";
import GlobalHeader from "./components/GlobalHeader";
import UsersView from "./components/UsersPage";
import { Container } from "@material-ui/core";

const API_URL = "http://localhost:8099";

const App: FunctionComponent = () => {
  return (
    <Layout className="App">
      <HeaderArea>
        <GlobalHeader />
      </HeaderArea>
      <MainArea>
        <Container maxWidth="md">
          <UsersView endpoint={API_URL} />
        </Container>
      </MainArea>
    </Layout>
  );
};

export default App;
