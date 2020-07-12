// import registerServiceWorker from './registerServiceWorker'
import React from 'react';
import ReactDOM from 'react-dom' ; 
import {Provider} from 'react-redux' ;
import App from './containers/app';
// import 'semantic-ui-css/semantic.min.css'
// import './styles/styles.less'
// import './styles/styles.scss'

import configureStore from './store/configStore';
 
const initialState = {};
const store = configureStore(initialState); 
ReactDOM.render(
  <Provider store={store}>  
      <App /> 
  </Provider>,
  document.getElementById('root')
)
 
