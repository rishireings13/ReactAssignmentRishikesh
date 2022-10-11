import React, { useContext } from "react";
import { TaskContext } from "../../App";
import Card from "../card/Card";
import "./filterComponent.css";

export default function FilterComponent() {
  const state = useContext(TaskContext);
  const [cards] = state.cards;
  return (
    <nav>
      <div className="input-group mb-3">
        <select className="form-select" aria-label="Default select example">
          <option>Select</option>
          <option value="created">Created</option>
          <option value="for">For</option>
          <option value="title">Title</option>
        </select>
      </div>
      <div className="input-group mb-3">
        <select
          className="form-select"
          aria-label="Default select example"
        ></select>
      </div>

      <div className="input-group mb-3">
        <button type="button" className="actionBtn btn btn-primary">
          Select Item{" "}
        </button>
      </div>

      <div className="cardList">
        {cards.map((singleCard, i) => {
          return (
            <Card
              index={i}
              key={i}
              title={singleCard.title}
              content={singleCard.content}
            />
          );
        })}
      </div>
    </nav>
  );
}
