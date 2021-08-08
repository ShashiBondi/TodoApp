import "./TodoItem.css";
import x from "../../Icons/delete.png";

function TodoItem(item, checkboxChange, onItemDeletion) {
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
          <img src={x} style={{ height: "20px" }} />
        </div>{" "}
      </div>
    </div>
  );
}
export default TodoItem;
