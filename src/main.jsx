import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Styles
import "./index.css";

// Reac router
import { BrowserRouter } from "react-router-dom";

// Redux
import store from "./app/store";
import { Provider } from "react-redux";

// Redux persist to store on local storage
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
