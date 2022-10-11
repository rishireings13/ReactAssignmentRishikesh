import React, { useContext } from "react";
import { TaskContext } from "../../App";
export default function Card(props) {
  const state = useContext(TaskContext);
  const [cards] = state.cards;
  const [, setTask] = state.task;
  const handleSelect = (ind) => {
    setTask({ ...cards[ind], idx: ind });
  };
  return (
    <div
      className="card"
      key={props.index}
      onClick={handleSelect.bind(this, props.index)}
    >
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.content}</p>
      </div>
    </div>
  );
}
