import { Link } from "react-router-dom";
import { useState } from "react";
import { Auth } from "./Config/fire";

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
    <div>
      <div>LOGIN HERE</div>
      <div>Enter Email</div>
      <input onChange={inputEmail} value={Email}></input>
      <div>Enter your Password</div>
      <input onChange={inputPassword} value={Password}></input>
      <div>
        <button onClick={buttonClick}>LOGIN</button>
      </div>
      <div>
        Don't have an account?{" "}
        <Link to="/register">
          <span>Create One</span>
        </Link>
      </div>
    </div>
  );
}
export default Login;
