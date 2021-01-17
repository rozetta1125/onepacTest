import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import PageNotFound from "./components/PageNotFound";
import DataPage from "./components/DataPage";

function App() {
  return (
    <div id="app" className="container-fluid">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="/data" component={DataPage} />
        <Route component={PageNotFound} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
