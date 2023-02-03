import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from "./Users.module.css";
import { DataContext } from "../App";

const Users = () => {
  const { data, setData, formValue, dispatch, edit, setEdit } =
    useContext(DataContext);

  const editHandler = (event) => {
    setEdit();
  };
  return (
    <>
      <table cellSpacing={"10rem"} cellPadding={"3rem"}>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>UserName</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>
                  <button
                    onClick={() => {
                      setData(data.filter((i) => i.ID != item.ID));
                    }}
                  >
                    DELETE
                  </button>
                  <button
                    onClick={(event) => {
                      setEdit(item);
                      dispatch({
                        type: "all",
                        value: { name: item.name, username: item.username },
                      });
                    }}
                  >
                    EDIT
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Users;
