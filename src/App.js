import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import IndexPSP from './components/PSP/Index';
import IndexPractica from './components/Practica/IndexPractica';
import MenuOptions from './components/MenuOptions';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MenuOptions} />
        <Route exact path="/segundo-parcial" component={IndexPSP} />
        <Route exact path="/practica-VII" component={IndexPractica} />
      </Switch>
    </Router>
  );
}

export default App;
