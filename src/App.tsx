import React, { FunctionComponent } from "react";
import { Layout, HeaderArea, MainArea } from "./styled/grid";
import GlobalHeader from "./components/GlobalHeader";
import UsersView from "./components/UsersPage";

const API_URL = "http://localhost:8099";

const App: FunctionComponent = () => {
  return (
    <Layout className="App">
      <HeaderArea>
        <GlobalHeader />
      </HeaderArea>
      <MainArea>
        <UsersView endpoint={API_URL} />
      </MainArea>
    </Layout>
  );
};

export default App;
