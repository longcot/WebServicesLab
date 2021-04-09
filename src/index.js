import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

// ROUTER
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducers,applyMiddleware(thunk))
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Provider store ={store}>
//       <App />
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     
      <App />
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);