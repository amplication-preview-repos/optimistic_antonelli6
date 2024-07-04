import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProcessedArticleList } from "./processedArticle/ProcessedArticleList";
import { ProcessedArticleCreate } from "./processedArticle/ProcessedArticleCreate";
import { ProcessedArticleEdit } from "./processedArticle/ProcessedArticleEdit";
import { ProcessedArticleShow } from "./processedArticle/ProcessedArticleShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BlogConsumerService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ProcessedArticle"
          list={ProcessedArticleList}
          edit={ProcessedArticleEdit}
          create={ProcessedArticleCreate}
          show={ProcessedArticleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
