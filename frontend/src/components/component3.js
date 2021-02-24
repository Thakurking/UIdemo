import React, { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import axios from "axios";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

export default function Home() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("/getUser").then(async (res) => {
      console.log(res);
      if (res.data.isSuccess) {
        setUser(res.data.getUsers);
      }
    });
  }, []);
  const users = user.map((users) => (
    <>
      <li>{users.name}</li>
      <li>{users.email}</li>
      <li>{users.phone}</li>
      <br />
      <br />
    </>
  ));
  return (
    <Rnd
      style={style}
      default={{
        x: 50,
        y: 550,
        width: 1250,
        height: 500,
      }}
      disableDragging
    >
      <div>{users}</div>
    </Rnd>
  );
}
