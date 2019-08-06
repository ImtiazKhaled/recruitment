import React from "react";
import { } from "./components/students";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Students from "./components/students";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './redux/rootReducer';

const store = createStore(RootReducer);

function App() {
  return (
    <Provider store={store}>
      <Students />;
    </Provider>
  );
}

export default App;
