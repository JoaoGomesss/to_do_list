import React from "react";
import Card from "./Card";

function DoneImge(props) {
  if (props.done) {
    return <img alt="done" src="./assets/om.png"></img>;
  } else {
    return <img alt="undone" src="./assets/off.png"></img>;
  }
}

function ListItem(props) {
  return (
    <li>
      <Card className={props.item.done ? "done item" : "item"}>
        {props.item.text}
        <div>
          <button
            onClick={() => {
              props.onDone(props.item);
            }}
          >
            <DoneImge done={props.item.done}></DoneImge>
          </button>
          <button
            onClick={() => {
              props.onItemDeleted(props.item);
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
