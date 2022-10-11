import React, { useState, createContext } from "react";
import FilterComponent from "./components/filterComponent/FilterComponent";
import FormComponent from "./components/form/FormComponent";
import "./App.css";
import Actions from "./components/actions/Action";
export const TaskContext = createContext();

const App = () => {
  const [cards, setcards] = useState([]);
  const [task, setTask] = useState({
    idx: "none",
    created: "",
    for: "",
    title: "",
    content: "",
  });
  const state = {
    cards: [cards, setcards],
    task: [task, setTask],
  };

  return (
    <TaskContext.Provider value={state}>
      <div className="app">
        <FilterComponent />
        <section className="section">
          <Actions />
          <FormComponent />
        </section>
      </div>
    </TaskContext.Provider>
  );
};
export default App;
