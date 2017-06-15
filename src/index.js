import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from "redux"
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'
import {Router} from 'react-router'
import rootReducer from './store'
import routes from './routes'
import registerServiceWorker from './registerServiceWorker';


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk,
      routerMiddleware(history),
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);

// Register service-worker
registerServiceWorker();