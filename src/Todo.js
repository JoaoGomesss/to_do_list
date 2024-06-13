import React, { useEffect, useState } from "react";
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import Item from "./components/Item";
import "./Todo.css";
import Modal from "./components/Modal";

const SAVED_ITENS = "savedItens";

function Todo() {
  const [showModal, setShowModal] = useState(false);
  const [itens, setItens] = useState([]);

  useEffect(() => {
    let savedItens = JSON.parse(localStorage.getItem(SAVED_ITENS));
    if (savedItens) {
      setItens(savedItens);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SAVED_ITENS, JSON.stringify(itens));
  }, [itens]);

  function onAddItem(text) {
    let item = new Item(text);
    setItens([...itens, item]);
    onhideModal();
  }

  function onItemDeleted(item) {
    let filteredItems = itens.filter((it) => it.id !== item.id);
    setItens(filteredItems);
  }

  function onDone(item) {
    let uptadesItems = itens.map((it) => {
      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    });
    setItens(uptadesItems);
  }

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
      <List onDone={onDone} onItemDeleted={onItemDeleted} itens={itens}></List>
      <Modal show={showModal} onhideModal={onhideModal}>
        {<TodoForm onAddItem={onAddItem}></TodoForm>}
      </Modal>
    </div>
  );
}

export default Todo;
