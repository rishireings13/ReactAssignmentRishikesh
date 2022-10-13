import React from "react";
import FilterComponent from "./components/filterComponent/FilterComponent";
import FormComponent from "./components/form/FormComponent";
import "./App.css";
// import Actions from "./components/actions/Action";

const App = () => {
  return (
    <div className="app">
      <FilterComponent />
      <section className="section">
        {/* <Actions /> */}
        <FormComponent />
      </section>
    </div>
  );
};
export default App;
