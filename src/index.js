
import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";


import Config from "./config";
import Home from "./home";
import ReviewList from "./review_list/review_list";
import Review from './review_detail/review';
import { configure } from "@testing-library/react";

Config.init()

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/review_list" component={ReviewList}/>
      <Route exact path="/review_detail" component={Review}/>

    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<Root/>, document.getElementById('root'));
