import React, { useContext } from "react";
import "./action.css";
import { TaskContext } from "../../App";
export default function Actions() {
  const state = useContext(TaskContext);
  const [cards, setcards] = state.cards;
  const [task, setTask] = state.task;

  function clearContent() {
    setTask({
      created: "",
      for: "",
      title: "",
      content: "",
      idx: "none",
    });
  }

  function handleNew() {
    clearContent();
  }
  function handleSave() {
    if (!task.for.trim()) return alert("For field is Empty");
    if (!task.title.trim()) return alert("Title field is Empty");
    if (!task.content.trim()) return alert("Content field is Empty");

    cards.push({
      created: task.created,
      for: task.for,
      title: task.title,
      content: task.content,
      idx: "none",
    });
    setcards([...cards]);
    clearContent();
  }
  function handleDelete() {
    if (task.idx === "none") return;
    cards.splice(task.idx, 1);
    setcards([...cards]);
    clearContent();
  }
  return (
    <div className="header d-flex justify-content-end">
      <button className="btn btn-primary mx-3" onClick={handleNew}>
        New
      </button>
      <button className="btn btn-primary mx-3" onClick={handleSave}>
        Save
      </button>
      <button className="btn btn-primary mx-3" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
