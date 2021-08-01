import "./InputTodo.css";

function InputTodo(inputText, handleInputChange, onAddTask) {
  return (
    <div>
      <input
        value={inputText}
        onChange={handleInputChange}
        placeholder="ENTER TO DO ITEMS"
        className="inputTask"
      ></input>
      <button onClick={onAddTask} className="addButton">
        ADD
      </button>
    </div>
  );
}
export default InputTodo;
