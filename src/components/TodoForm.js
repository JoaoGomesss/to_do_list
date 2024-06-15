import React, { useState } from "react";
import { addItem } from "../actions/listAction";
import { useDispatch } from "react-redux";

function TodoForm(props) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function handleChange(event) {
    let text = event.target.value;
    setText(text);
  }

  function addItemEvent(event) {
    event.preventDefault();
    if (text) {
      dispatch(addItem(text));
      setText("");
      props.onHideModal();
    }
  }

  return (
    <form>
      <input onChange={handleChange} type="text" value={text}></input>
      <button onClick={addItemEvent}>Add</button>
    </form>
  );
}

export default TodoForm;
