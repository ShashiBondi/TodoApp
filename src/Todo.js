import { useState, useEffect } from "react";
import deleteicon from "./Icons/delete.png";
import "./Todo.css";
import { Auth, Db } from "./Config/fire";
import { v4 } from "uuid";

function Todo() {
  console.log("called");
  const [inputText, setInputtext] = useState("");
  const [myTasks, setMyTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [radioValue, setradioValue] = useState("1");
  const [userId, setUserId] = useState("");

  function handleAuthStateChange(x) {
    console.log("Auth Staet Chenaged");
    setUserId(x.uid);
    Db.collection("Todos")
      .doc(x.uid)
      .collection("Items")
      .get()
      .then(function (y) {
        const k = y.docs;
        const z = k.map(function (item) {
          return item.data();
        });
        setMyTasks(z);
      });
  }

  useEffect(function () {
    console.log("executed");
    Auth.onAuthStateChanged(handleAuthStateChange);
  }, []);

  function deleteItems(targetedKey) {
    const z = myTasks.filter(function (item) {
      if (item.key === targetedKey) return false;
      else return true;
    });
    setMyTasks(z);
    // Delete todo item from db using targetedKey
    Db.collection("Todos")
      .doc(userId)
      .collection("Items")
      .doc(targetedKey)
      .delete();
  }

  function checkingItems(event, targetedKey) {
    const s = myTasks.map(function (item) {
      if (item.key === targetedKey) item.completed = event.target.checked;
      return item;
    });
    setMyTasks(s);
    // update completed tasks in db
    Db.collection("Todos")
      .doc(userId)
      .collection("Items")
      .doc(targetedKey)
      .update({ completed: event.target.checked });
  }

  const x = myTasks
    .filter(function (item) {
      if (radioValue === "1") return true;
      else if (radioValue === "2") return item.completed;
      else return !item.completed;
    })
    .map(function (item) {
      return (
        <div key={item.key} className="todoItemWrapper">
          <div className="todoItem">{item.name}</div>
          <div>
            <input
              type="checkbox"
              onChange={function (event) {
                checkingItems(event, item.key);
              }}
              checked={item.completed}
              style={{ height: "20px" }}
            ></input>
            <span
              onClick={function () {
                deleteItems(item.key);
              }}
            >
              <img src={deleteicon} style={{ height: "20px" }} />
            </span>
          </div>
        </div>
      );
    });

  function inputItems(event) {
    setInputtext(event.target.value);
  }

  function addItems(event) {
    const id = v4();
    const y = myTasks.concat({
      name: inputText,
      key: id,
      completed: false,
    });
    Db.collection("Todos")
      .doc(userId)
      .collection("Items")
      .doc(id)
      .set({ name: inputText, completed: false, key: id });
    setMyTasks(y);
    setInputtext("");
    setCounter(counter + 1);
  }

  function radioChange(event) {
    setradioValue(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="outerBox">
      <div className="App">
        <input
          className="inputTask"
          placeholder="Enter Your Tasks"
          onChange={inputItems}
          value={inputText}
        ></input>
        <button className="addButton" onClick={addItems}>
          ADD
        </button>

        <div>
          <input
            type="radio"
            value="1"
            checked={radioValue === "1"}
            onChange={radioChange}
          ></input>
          <span>All Tasks</span>
          <input
            type="radio"
            value="2"
            checked={radioValue === "2"}
            onChange={radioChange}
          ></input>
          <span>Completed Tasks</span>
          <input
            type="radio"
            value="3"
            checked={radioValue === "3"}
            onChange={radioChange}
          ></input>
          <span>Pending Tasks</span>
        </div>
        <div>{x}</div>
      </div>
    </div>
  );
}

export default Todo;
