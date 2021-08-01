import { useState } from "react";
import "./App.css";
import deleteicon from "./Icons/delete.png";

function App() {
  const [myTasks, setMyTasks] = useState([]);
  const [inputText, setInputText] = useState("");
  const [counter, setCounter] = useState(0);
  const [filter, setFilter] = useState("A");

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function onAddTask() {
    const updatedMyTasks = myTasks.concat({
      name: inputText,
      completed: false,
      id: counter,
    });
    setMyTasks(updatedMyTasks);
    setInputText("");
    setCounter(counter + 1);
  }

  function checkboxChange(event, targetedTodoItemId) {
    const newArray = myTasks.map(function (item) {
      if (item.id === targetedTodoItemId) item.completed = event.target.checked;
      return item;
    });
    setMyTasks(newArray);
  }

  const totalTodoItems = myTasks.map(function (item) {
    return (
      <div key={item.id} className="todoItemWrapper">
        <div className="todoItem">{item.name}</div>
        <div>
          <input
            type="checkbox"
            onChange={function (event) {
              checkboxChange(event, item.id);
            }}
            checked={item.completed}
          ></input>
          <div
            onClick={function () {
              onItemDeletion(item.id);
            }}
            style={{ display: "inline-block" }}
          >
            <img src={deleteicon} style={{ height: "20px" }} />
          </div>{" "}
        </div>
      </div>
    );
  });
  function onRadioButtonChange(event) {
    setFilter(event.target.value);
  }
  console.log(filter);

  function onItemDeletion(targetedTodoItemId) {
    const updatedArray = myTasks.filter(function (item) {
      if (targetedTodoItemId !== item.id) return true;
      return false;
    });
    setMyTasks(updatedArray);
  }

  const x = myTasks.filter(function (item) {
    return item.completed;
  });

  const completedTodoItems = x.map(function (item) {
    return (
      <div key={item.id} className="todoItemWrapper">
        <div className="todoItem">{item.name}</div>
        <div>
          <input
            type="checkbox"
            onChange={function (event) {
              checkboxChange(event, item.id);
            }}
            checked={item.completed}
          ></input>
          <div
            onClick={function () {
              onItemDeletion(item.id);
            }}
            style={{ display: "inline-block" }}
          >
            <img src={deleteicon} style={{ height: "20px" }} />
          </div>{" "}
        </div>
      </div>
    );
  });

  const y = myTasks.filter(function (item) {
    return !item.completed;
  });

  const pendingTodoItems = y.map(function (item) {
    return (
      <div key={item.id} className="todoItemWrapper">
        <div className="todoItem">{item.name}</div>
        <div>
          <input
            type="checkbox"
            onChange={function (event) {
              checkboxChange(event, item.id);
            }}
            checked={item.completed}
          ></input>
          <div
            onClick={function () {
              onItemDeletion(item.id);
            }}
            style={{ display: "inline-block" }}
          >
            <img src={deleteicon} style={{ height: "20px" }} />
          </div>{" "}
        </div>
      </div>
    );
  });
  // console.log(myTasks);
  return (
    <div>
      <input
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter Your Tasks..."
        className="inputTask"
      ></input>
      <button onClick={onAddTask} className="addButton">
        Add
      </button>
      <div onChange={onRadioButtonChange}>
        <input type="radio" value="A" checked={filter === "A"}></input>
        <span>All Tasks</span>
        <input type="radio" value="B" checked={filter === "B"}></input>
        <span>Completed Tasks</span>
        <input type="radio" value="C" checked={filter === "C"}></input>
        <span>Pending Tasks</span>
      </div>
      <div className="RadioObjects">
        <div
          className="totalItems"
          style={{ display: filter === "A" ? "block" : "none" }}
        >
          <div>Total List items:</div>
          <div>{totalTodoItems}</div>
        </div>
        <div
          className="completedItems"
          style={{ display: filter === "B" ? "block" : "none" }}
        >
          <div>completed List items:</div>
          <div>{completedTodoItems}</div>
        </div>
        <div
          className="pendingItems"
          style={{ display: filter === "C" ? "block" : "none" }}
        >
          <div>Pending List items:</div>
          <div>{pendingTodoItems}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
