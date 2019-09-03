import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store'
import { Provider } from 'react-redux';
import Root from './components/Root';
import { HashRouter, Route } from "react-router-dom";


document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  window.store = configureStore()
  ReactDOM.render( <Provider store={window.store}>
                    <HashRouter>
                    <Root />
                    </HashRouter>
                    </Provider>, root );
})