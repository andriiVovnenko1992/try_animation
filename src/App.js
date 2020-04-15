import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './app.css';
import Layout from './components/LeftMenu/Layout';
import Mercedes from './components/Mercedes/Mercedes';
import Bmw from './components/Bmw/Bmw';
import Audi from './components/Audi/Audi';
import Honda from './components/Honda/Honda';
import Main from "./components/Main/Main";
import Volkswagen from "./components/Volkswagen/Volkswagen";

const App = () => {
  return (
  <Router>
    <Layout>
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/mercedes" component={Mercedes}/>
            <Route path="/bmw" component={Bmw}/>
            <Route path="/audi" component={Audi}/>
            <Route path="/honda" component={Honda}/>
            <Route path="/volkswagen" component={Volkswagen}/>
          </Switch>
    </Layout>
  </Router>
  )
};

export default App;
