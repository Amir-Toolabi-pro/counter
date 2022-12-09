import { render } from "react-dom";
import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";

render(
    <Provider store={Store}>
        <App />
    </Provider>
    ,document.getElementById("root")
);
