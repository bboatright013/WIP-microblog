import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import rootReducer from './actions/rootReducer';
import postsReducer from './actions/postsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
