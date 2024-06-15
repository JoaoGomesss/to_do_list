import React from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { deleteItem, changeDone } from "../actions/listAction";

function DoneImge(props) {
  if (props.done) {
    return <img alt="done" src="./assets/om.png"></img>;
  } else {
    return <img alt="undone" src="./assets/off.png"></img>;
  }
}

function ListItem(props) {
  const dispatch = useDispatch();
  return (
    <li>
      <Card className={props.item.done ? "done item" : "item"}>
        {props.item.text}
        <div>
          <button
            onClick={() => {
              dispatch(changeDone(props.item.id));
            }}
          >
            <DoneImge done={props.item.done}></DoneImge>
          </button>
          <button
            onClick={() => {
              dispatch(deleteItem(props.item.id));
            }}
          >
            <img alt="delete" src="./assets/trash_114825.png"></img>
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ListItem;
