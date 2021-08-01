import "./ChooseTasks.css";

function ChooseTasks(onRadioButtonChange, filter) {
  <div onChange={onRadioButtonChange} className="radioObjects">
    <div>
      <input type="radio" value="A" checked={filter === "A"}></input>
      <span>All Tasks</span>
    </div>
    <div>
      <input type="radio" value="B" checked={filter === "B"}></input>
      <span>Completed Tasks</span>
    </div>
    <div>
      <input type="radio" value="C" checked={filter === "C"}></input>
      <span>Pending Tasks</span>
    </div>
  </div>;
}
export default ChooseTasks;
