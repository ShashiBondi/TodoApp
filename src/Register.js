import { useState } from "react";
import { Auth, Db } from "./Config/fire";
import "./Register.css";

function Register(props) {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function inputName(event) {
    setName(event.target.value);
  }
  function inputEmail(event) {
    setEmail(event.target.value);
  }
  function inputPassword(event) {
    setPassword(event.target.value);
  }
  function AddNameInDatabase(userId) {
    Db.collection("Users")
      .doc(userId)
      .set({
        name: Name,
      })
      .then(() => {
        props.history.push("/");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }
  function buttonClick() {
    console.log(Name, Email, Password, Auth);
    Auth.createUserWithEmailAndPassword(Email, Password)
      .then(function (X) {
        const userId = X.user.uid;
        AddNameInDatabase(userId);
      })
      .catch(function (error) {
        window.alert(error.message);
      });
  }
  return (
    <div className="registerPage">
      <div className="registerButton">
        <h2>Start Your Tasks by Registering</h2>
        <div>Enter Your Name</div>
        <input
          onChange={inputName}
          value={Name}
          className="nameInput"
          placeholder="Your Name"
        ></input>
        <div>Enter Your Email</div>
        <input
          onChange={inputEmail}
          value={Email}
          className="emailInput"
          placeholder="Your Email"
        ></input>
        <div>Enter Your Password</div>
        <input
          onChange={inputPassword}
          value={Password}
          className="passwordInput"
          type="password"
          placeholder="Your Password"
        ></input>
        <div>
          <button onClick={buttonClick} className="handleButton">
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
}
export default Register;
