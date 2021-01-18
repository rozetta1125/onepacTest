import './App.scss';
import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import PageNotFound from "./components/PageNotFound";
import DataPage from "./components/DataPage";
import ManageData from './components/ManageData';

function App() {
  return (
    <div id="app" className="container-fluid">
      <HashRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="/data" component={DataPage} />
        <Route path="/detail/:id" component={ManageData} />
        <Route component={PageNotFound} />
      </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
