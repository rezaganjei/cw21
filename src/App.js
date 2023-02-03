import logo from "./logo.svg";
import React, { useReducer } from "react";
import "./App.css";
import Form from "./Components/Form";
import Users from "./Components/Users";

import { useState } from "react";

export const DataContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      state.name = action.value;
      return { ...state };
    case "username":
      state.username = action.value;
      return { ...state };
    case "reset":
      return { name: "", username: "" };
    case "all":
      return action.value;
  }
};
const initialState = { name: "", username: "" };
function App() {
  const [edit, setEdit] = useState({});
  const [formValue, dispatch] = useReducer(reducer, initialState);

  const [data, setData] = useState([
    { ID: 1, name: "ali", username: "ali2023" },
    { ID: 2, name: "reza", username: "reza2023" },
    { ID: 3, name: "mehdi", username: "mehdi2023" },
    { ID: 4, name: "mohamad", username: "mohamad2023" },
  ]);
  return (
    <>
      <DataContext.Provider
        value={{ data, setData, formValue, dispatch, edit, setEdit }}
      >
        <Form />
        <Users />
      </DataContext.Provider>
    </>
  );
}

export default App;
