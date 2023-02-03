import React, { useContext, useReducer } from "react";
import classes from "./Form.module.css";
import { useForm } from "react-hook-form";
import { DataContext } from "../App";

const Form = () => {
  const { data, setData, formValue, dispatch, edit, setEdit } =
    useContext(DataContext);
  const { register, handleSubmit } = useForm();
  const submitHandler = (event) => {
    event.ID = Math.floor(Math.random() * 1000);
    setData([...data, event]);
  };
  const usernameChangeHandler = (event) => {
    dispatch({ type: "username", value: event.target.value });
  };
  const nameChangeHandler = (event) => {
    dispatch({ type: "name", value: event.target.value });
  };

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
        <label>Name</label>
        <input
          value={formValue.name}
          type={"text"}
          placeholder={"Name"}
          {...register("name", {
            required: true,
            minLength: 3,
            pattern: "/^[A-Za-z]+$/i",
          })}
          onChange={nameChangeHandler}
        ></input>
        <label>UserName</label>
        <input
          value={formValue.username}
          type={"text"}
          placeholder={"UserName"}
          {...register("username", {
            required: true,
            minLength: 5,
            pattern: "^[a-zA-Z0-9_.-]*$",
          })}
          onChange={usernameChangeHandler}
        ></input>
        <div className={classes.buttonGroup}>
          {edit.name ? (
            <button
              className={classes.editUser}
              onClick={(event) => {
                event.preventDefault();
                console.log(edit);
                data.forEach((item) => {
                  if (item.ID == edit.ID) {
                    item.name = formValue.name;
                    item.username = formValue.username;
                  }
                });
                setData([...data]);
                setEdit({});
                dispatch({ type: "reset" });
              }}
            >
              EDIT USER
            </button>
          ) : (
            <button className={classes.editUser}>ADD USER</button>
          )}

          <button
            className={classes.cancelBtn}
            onClick={(event) => {
              dispatch({ type: "reset" });
              setEdit({});
            }}
          >
            CANCEL
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
