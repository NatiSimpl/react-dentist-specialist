import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import SingleDoctor from "./pages/SingleDoctor";
import Error from "./pages/Error";


import {Route, Switch} from
'react-router-dom'

import NavBar from "./components/NavBar";

function App() { 
      return (
          <>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/doctors/" component={Doctors} />
            <Route exact path="/doctors/:slug" component={SingleDoctor} />{/* el :slug es la ruta para cada pagina */}
            <Route component={Error} />
           </Switch>
          </>
      )
 }

export default App;