import React, { useState } from "react";
import { Rnd } from "react-rnd";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

export default function Home() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const postData = () => {
    axios
      .post("/addUser", {
        email,
        phone,
        name,
      })
      .then(async (res) => {
        if(res.data.isSuccess){
          alert(res.data.message);
          setEmail("")
          setPhone("")
          setName("");
        }
      });
  };
  return (
    <Rnd
      style={style}
      default={{
        x: 300,
        y: 20,
        width: 1000,
        height: 500,
      }}
      disableDragging
    >
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">Please Enter Your Email</Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Form.Text className="text-muted">Please Enter Your Phone</Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Text className="text-muted">Please Enter Your Name</Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => {
            postData();
          }}
        >
          Submit
        </Button>
      </Form>
    </Rnd>
  );
}
