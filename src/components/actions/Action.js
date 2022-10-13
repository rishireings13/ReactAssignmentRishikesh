import React from "react";
import "./action.css";
export default function Actions(props) {
  return (
    <div className="header d-flex justify-content-end">
      <button className="btn btn-primary mx-3" onClick={() => props.clearInputs()}>New</button>
      <button
        className="btn btn-primary mx-3"
        onClick={() => props.onClickSave()}
      >
        Save
      </button>
      <button className="btn btn-primary mx-3" onClick={props.deleteAll}>
        Delete All Cards
      </button>
    </div>
  );
}
