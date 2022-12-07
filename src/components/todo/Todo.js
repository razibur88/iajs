import React, { useState, useEffect } from "react";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import "./todo.css";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";

const Todo = () => {
  let [todo, setTodo] = useState("");
  let [extra, setExtra] = useState([]);
  let [pretext, setPretext] = useState(false);
  let [edittext, setEdittext] = useState("");
  let [todoid, setTodoid] = useState("");
  let [todovalue, setTodovalue] = useState("");
  const db = getDatabase();

  let handleinput = (e) => {
    setTodo(e.target.value);
  };

  let handleTodo = () => {
    set(push(ref(db, "todo")), {
      todo: todo,
    });
    setTodo("");
  };

  useEffect(() => {
    const starCountRef = ref(db, "todo");
    onValue(starCountRef, (snapshot) => {
      let todoarr = [];
      snapshot.forEach((take) => {
        todoarr.push({ ...take.val(), key: take.key });
      });
      setExtra(todoarr);
    });
  }, []);

  let handledelete = (id) => {
    remove(ref(db, "todo/" + id));
  };

  let handleEdit = (id, value) => {
    setPretext(!pretext);
    setTodoid(id);
    setTodovalue(value);
  };

  let handleUpdate = (e) => {
    setEdittext(e.target.value);
  };

  let handleFinalUpdate = (id, value) => {
    update(ref(db, "todo/" + value), {
      todo: id,
    }).then(() => {
      setPretext(false);
      console.log("update");
    });
  };

  // let handleEdit = (text, id) => {
  //   setPretext(text);
  // };

  return (
    <div>
      <Menu />
      <Container className="todomain">
        <Row className="justify-content-center">
          <Col lg={6}>
            <h2 style={{ textAlign: "center" }}>Daily Todo list</h2>
            <div className="inputinner">
              <input
                className="input"
                onChange={handleinput}
                placeholder="Enter Your List"
                value={todo}
              />
              <i class="fa-solid fa-plus" onClick={() => handleTodo()}></i>
            </div>
          </Col>
        </Row>

        <Row
          className="justify-content-center hhhh"
          style={{ padding: "50px 0" }}
        >
          <Col lg={6}>
            <h2 style={{ textAlign: "center" }}>Show Data</h2>
            {/* <input
              onChange={(e) => setEdittext(e.target.value)}
              value={edittext ? edittext : pretext}
            /> */}
            {extra.map((item, i) => (
              <ul key={i}>
                <li>
                  {item.todo}
                  <div className="somee">
                    <i
                      class="fa-solid fa-pen-to-square"
                      onClick={() => handleEdit(item.todo, item.key)}
                    ></i>
                    {/* item.todo, item.key */}
                    <i
                      class="fa-solid fa-trash"
                      onClick={() => handledelete(item.key)}
                    ></i>
                  </div>
                </li>
              </ul>
            ))}
            {pretext ? (
              <div>
                <input
                  onChange={handleUpdate}
                  className="edit"
                  placeholder="Edit"
                />
                <button onClick={() => handleFinalUpdate(edittext, todovalue)}>
                  Update
                </button>
              </div>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Todo;
