import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducers/mainReducer";

const rootElement = document.getElementById("root");
const store = createStore(reducer);
// store 생성
// store는 Reducer를 인자로 받아 생성한다,
// Provider의 type중 하나인 store를 통해 위에 생성한 Store를 넣는다.
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
