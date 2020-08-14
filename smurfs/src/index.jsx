import React from "react";
import ReactDOM from "react-dom";
import { Paper } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "fontsource-roboto";
import {applyMiddleware, createStore} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./components/App";
import reducer from "./reducer";

const store = createStore(reducer, applyMiddleware(thunk));

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <Paper style={{height: "95vh"}}>
        <App />
      </Paper>
    </ThemeProvider>
  </Provider>, document.getElementById("root"));
