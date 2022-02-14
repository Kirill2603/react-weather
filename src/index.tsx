import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import {Provider} from "react-redux";
import {store} from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
      <Provider store={store}>
          <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
)