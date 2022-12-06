import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const Registration = () => {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [succes, setSuccess] = useState("");
  let [usererr, setUsererr] = useState("");

  let user = (e) => {
    setUsername(e.target.value);
  };

  let email1 = (e) => {
    setEmail(e.target.value);
  };
  let password1 = (e) => {
    setPassword(e.target.value);
  };

  let handleClick = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setUsererr("PLease Give All Filed");
    } else {
      setSuccess("Success");
      setUsername("");
      setUsererr("");
    }
  };

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          paddingTop: "100px",
          paddingBottom: "30px",
        }}
      >
        Registration Form
      </h2>

      <Container>
        <Row className="justify-content-center one111">
          {usererr !== "" ? (
            <Form.Text className="text-muted">{usererr}</Form.Text>
          ) : (
            ""
          )}
          <p style={{ textAlign: "center" }}> {succes}</p>
          <Col lg={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  value={username}
                  onChange={user}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  onChange={email1}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter Password"
                  name="password"
                  onChange={password1}
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={handleClick}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Registration;
