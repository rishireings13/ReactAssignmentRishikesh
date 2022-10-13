import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Delete_all_card, save } from "../../Redux/Actions/action";
import Actions from "../actions/Action";
import "./formComponent.css";
export default function FormComponent() {
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputMain, setInputMain] = useState("");
  const currentDate = new Date().toDateString();
  const createNewTile = () => {
    if (!inputName.trim()) return alert("Name field is Empty");
    if (!inputMain.trim()) return alert("main field is Empty");
    if (!inputTitle.trim()) return alert("title field is Empty");
    const data = {
      name: inputName,
      title: inputTitle,
      describe: inputMain,
    };
    dispatch(save(data));
    clearInputs();
  };
  const clearInputs = () => {
    setInputName("");
    setInputMain("");
    setInputTitle("");
  }
  const handleInputName = (e) => {
    setInputName(e.target.value);
  };
  const handleInputTitle = (e) => {
    setInputTitle(e.target.value);
  };
  const handleInputMain = (e) => {
    setInputMain(e.target.value);
  };

  return (
    <article>
      <Actions
        onClickSave={() => {
          createNewTile();
        }}
        deleteAll={() => {
          dispatch(Delete_all_card());
        }}
        clearInputs={clearInputs}
      />

      <div className="input-group mb-3">
        <span className="input-group-text">Created On</span>
        <input
          type="text"
          className="form-control"
          value={currentDate}
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
          value={inputName}
          onChange={handleInputName}
          name="for"
        ></input>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Note Title</span>
        <input
          type="text"
          className="form-control"
          aria-describedby="basic-addon3"
          name="title"
          value={inputTitle}
          onChange={handleInputTitle}
        ></input>
      </div>
      <div className="input-group">
        <span className="input-group-text">Main Content</span>
        <textarea
          className="form-control"
          aria-label="With textarea"
          name="content"
          value={inputMain}
          onChange={handleInputMain}
        ></textarea>
      </div>
    </article>
  );
}
