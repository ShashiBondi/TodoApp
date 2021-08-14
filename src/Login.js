import { Link } from "react-router-dom";
import { useState } from "react";
import { Auth } from "./Config/fire";
import "./Login.css";

function Login(props) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function inputEmail(event) {
    setEmail(event.target.value);
  }
  function inputPassword(event) {
    setPassword(event.target.value);
  }
  function buttonClick() {
    Auth.signInWithEmailAndPassword(Email, Password)
      .then(() => {
        props.history.push("/todo");
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  return (
    <div className="loginPage">
      <div className="loginButton">
        <h1>Loads Of Tasks To Accomplish!</h1>
        {/* <div>LOGIN HERE</div> */}
        <div>Enter Email</div>
        <input
          onChange={inputEmail}
          value={Email}
          className="emailInput"
          placeholder="Your Email"
        ></input>
        <div>Enter your Password</div>
        <input
          onChange={inputPassword}
          value={Password}
          className="passwordInput"
          type="password"
          placeholder="Your Password"
        ></input>
        <div>
          <button onClick={buttonClick} className="handleButton">
            LOGIN
          </button>
        </div>
        <div>
          Don't have an account?{" "}
          <Link to="/register">
            <span>Create One</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
