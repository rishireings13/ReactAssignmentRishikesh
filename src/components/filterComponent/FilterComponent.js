import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import "./filterComponent.css";

export default function FilterComponent() {
  const myCard = useSelector((state) => state.saveReducer.list);
  const [mylist, setMyList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectDropdown, setSelectDropdown] = useState("none");
  const optionValue = {
    username: "username",
    title: "title",
    desc: "desc",
  };

  const getInputValue = (selected, item, value) => {
    switch (selected) {
      case "username":
        return item.data.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      case "title":
        return (
          item.data.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
      case "desc":
        return (
          item.data.describe.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
      default:
        break;
    }
  };

  const handleSearchTerm = (e) => {
    const item = e.target.value;
    setSearchTerm(item);
    onChange(item);
  };

  const onChange = (fieldName) => {
    if (fieldName === "" || fieldName === null) {
      setMyList(myCard);
    }
    const indexes = myCard.filter((item, i) => {
      return getInputValue(selectDropdown, item, fieldName);
    });
    setMyList(indexes);
  };

  const handleSelectDropdown = (e) => {
    setSelectDropdown(e.target.value);
  };
  useEffect(() => {
    setMyList(myCard);
    return () => {
      setMyList([]);
    };
  }, [myCard]);
  return (
    <nav>
      <div className="input-group mb-3">
        <select
          className="form-select"
          aria-label="Default select example"
          value={selectDropdown}
          onChange={handleSelectDropdown}
        >
          <option value={optionValue.none}>Select</option>
          <option value={optionValue.username}>Note For</option>
          <option value={optionValue.title}>Note Title</option>
          <option value={optionValue.desc}>Main Content</option>
        </select>
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Search Card"
          value={searchTerm}
          onChange={handleSearchTerm}
          className="form-control"
        />
      </div>

      <div className="input-group mb-3">
        <button type="button" className="actionBtn btn btn-primary">
          Select Item{" "}
        </button>
      </div>

      <div className="cardList">
        <Card mylist={mylist} />
      </div>
    </nav>
  );
}
