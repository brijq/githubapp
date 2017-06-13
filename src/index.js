import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router , Route} from 'react-router-dom'
import mainPage from './scenes/mainPage'


ReactDOM.render((
    <Router>
      <div>
        <Route path="/" component={mainPage}/>
      </div>
    </Router>
  ), document.getElementById('root')
);
