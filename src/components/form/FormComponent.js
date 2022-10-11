import React, { useContext } from "react";
import { TaskContext } from "../../App";
import "./formComponent.css";
export default function FormComponent() {
  const state = useContext(TaskContext);
  const [task, setTask] = state.task;
  const currentDate = new Date().toDateString();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };
  return (
    <article>
      <div className="input-group mb-3">
        <span className="input-group-text">Created On</span>
        <input
          type="text"
          className="form-control"
          value={task.created || currentDate}
          readOnly
          aria-describedby="basic-addon3"
        ></input>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Note For</span>
        <input
          type="text"
          className="form-control"
          aria-describedby="basic-addon3"
          value={task.for}
          name="for"
          onChange={onChangeInput}
        ></input>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Note Title</span>
        <input
          type="text"
          className="form-control"
          value={task.title}
          aria-describedby="basic-addon3"
          name="title"
          onChange={onChangeInput}
        ></input>
      </div>
      <div className="input-group">
        <span className="input-group-text">Main Content</span>
        <textarea
          className="form-control"
          aria-label="With textarea"
          value={task.content}
          name="content"
          onChange={onChangeInput}
        ></textarea>
      </div>
    </article>
  );
}
