import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./components/Auth";
import Weather from "./components/Weather";
import "./App.css";
import ShowScreen from "./components/ShowScreen";
import Recomend from "./components/Recomend";
import UserScreen from "./components/UserScreen";
import Calculate from "./components/Calculate";
import ManageUser from "./components/ManageUser";
import ShowDetailScreen from "./components/ShowDetailScreen";
import ShowGetdata from "./components/ShowGetdata";
import HomePage from "./components/Customer/HomePage";
import ExportData from "./components/ExportData";
import testExport from "./components/testExport";
import Section_Weather from "./components/SectionRecomend/Section_Weather";
import AllCollectionData from "./components/Section/AllCollectionData";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Switch>
            <Route exact path="/test" component={AllCollectionData} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/manageUser" component={ManageUser} />
            <Route exact path="/weather" component={Weather} />
            <Route exact path="/showScreen" component={ShowScreen} />
            <Route
              exact
              path="/showScreen/showDataFarm"
              component={ShowDetailScreen}
            />
            <Route exact path="/recommend" component={Recomend} />
            <Route exact path="/showScreen/calculate" component={Calculate} />
            <Route exact path="/userScreen" component={UserScreen} />
            <Route
              exact
              path="/showScreen/showDataFarm/:id"
              component={ShowGetdata}
            />
            <Route
              exact
              path="/showScreen/calculate/:id"
              component={ExportData}
            />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
