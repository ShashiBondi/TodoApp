import { useState } from "react";
import "./App.css";
import TodoItem from "./Components/TodoItem/TodoItem";
import InputTodo from "./Components/InputTodo/InputTodo";
import ChooseTasks from "./Components/ChooseTasks/ChooseTasks";

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
    return TodoItem(item, checkboxChange, onItemDeletion);
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
    return TodoItem(item, checkboxChange, onItemDeletion);
  });

  const y = myTasks.filter(function (item) {
    return !item.completed;
  });

  const pendingTodoItems = y.map(function (item) {
    return TodoItem(item, checkboxChange, onItemDeletion);
  });
  // console.log(myTasks);
  return (
    <div className="completeTodo">
      <div style={{ backgroundColor: "lightslategray" }}>
        {InputTodo(inputText, handleInputChange, onAddTask)}
        {ChooseTasks(onRadioButtonChange, filter)}

        <div>
          <div
            className="totalItems"
            style={{ display: filter === "A" ? "block" : "none" }}
          >
            <div>{totalTodoItems}</div>
          </div>
          <div
            className="completedItems"
            style={{ display: filter === "B" ? "block" : "none" }}
          >
            <div>{completedTodoItems}</div>
          </div>
          <div
            className="pendingItems"
            style={{ display: filter === "C" ? "block" : "none" }}
          >
            <div>{pendingTodoItems}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
