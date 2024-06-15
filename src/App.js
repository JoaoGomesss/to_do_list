import React, { useState } from "react";
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import "./Todo.css";
import Modal from "./components/Modal";

import { createStore } from "redux";
import { Provider } from "react-redux";

import listReducer from "./reducers/listReducer";

const SAVED_ITENS = "savedItens";

function persistState(state) {
  localStorage.setItem(SAVED_ITENS, JSON.stringify(state));
}

function loadState() {
  const actualState = localStorage.getItem(SAVED_ITENS);
  if (actualState) {
    return JSON.parse(actualState);
  } else {
    return [];
  }
}

const store = createStore(listReducer, loadState());

store.subscribe(() => {
  persistState(store.getState());
});

function App() {
  const [showModal, setShowModal] = useState(false);

  function onhideModal() {
    setShowModal(false);
  }

  return (
    <div className="container">
      <header className="header">
        <h1>To-do</h1>
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="addButton"
        >
          +
        </button>
      </header>
      <Provider store={store}>
        <List></List>
        <Modal show={showModal} onHideModal={onhideModal}>
          <TodoForm onHideModal={onhideModal}></TodoForm>
        </Modal>
      </Provider>
    </div>
  );
}

export default App;
