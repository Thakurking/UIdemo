import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

export default function Home() {
  const [addApi, setAddApi] = useState([]);
  const [updateApi, setUpdateApi] = useState([]);
  useEffect(() => {
    axios.get("/getApiCount").then(async (res) => {
      console.log(res.data.addApiCount);
      setAddApi(res.data.addApiCount);
      console.log(res.data.updateApiCount);
      setUpdateApi(res.data.updateApiCount);
    });
  }, []);
  const addApis = addApi.map((apis) => (
    <>
      <p>Add Api Calls</p>
      <li>{apis.addAPICounter}</li>
    </>
  ));
  const updateApis = updateApi.map((apis) => (
    <>
      <p>update Api Calls</p>
      <li>{apis.updateAPICounter}</li>
    </>
  ));
  return (
    <Rnd
      style={style}
      default={{
        x: 50,
        y: 20,
        width: 200,
        height: 500,
      }}
      disableDragging
    >
      <div>{addApis}</div>
      <div>{updateApis}</div>
    </Rnd>
  );
}
