import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
//import React Router
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
//redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

//import Components
import Explorer from './components/Explorer';
import People from './containers/People';
import Starships from './containers/Starships';
import Films from './containers/Films';
import Details from './containers/Details';
import BaseLayout from './components/Layout';

const store = createStore(
    reducers,
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={Explorer} />
          <Route path="/films" component={Films}/>
          <Route path="/starships" component={Starships}/>
          <Route path="/people" component={People} />
          <Route path="/details/:endpoint/:id/:index" component={Details}/>
          <Route path="/film-endpoint/:id/:index/:title" component={Details}/>
        </Switch>
      </BaseLayout>
    </HashRouter>
  </Provider>

,document.getElementById('root'));
registerServiceWorker();
