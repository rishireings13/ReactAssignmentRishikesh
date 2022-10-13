import React from "react";
import { useDispatch } from "react-redux";
import { delete_cards } from "../../Redux/Actions/action";
export default function Card(props) {
  const dispatch = useDispatch();
  return props.mylist.map((val) => {
    return (
      <div className="card" style={{ width: "18rem" }} key={val.id}>
        <div className="card-body">
          <h5 className="card-title">{val.data.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{val.data.title}</h6>
          <p className="card-text">{val.data.describe}</p>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => dispatch(delete_cards(val.id))}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });
}
