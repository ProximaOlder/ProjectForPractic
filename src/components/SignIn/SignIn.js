import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CloudMoon from "../../img/Cloud-Moon.png";
import Eye from "./eyeIcon";
import "./SignIn.css"

export default function SignIn({ onButtonClick }) {
  let [count, setCount] = useState("password");
  let [item, setItem] = useState(true);
  let login = React.createRef();
  let password = React.createRef();
  let history = useHistory();

  const change = () => {
    if (item) {
      setCount("text");
      setItem(!item);
    } else {
      setItem(!item);
      setCount("password");
    }
  };
  const ButCall = () => {
    const axios = require("axios");
    axios
      .post("https://reqres.in/api/register", {
        name: login.current.value,
        job: password.current.value,
      })
      .then(function (res) {
        if (res.status === 200) {
          history.push("/chat");
        }
      })
      .catch(function (err) {
        if (err.response.status === 400) {
          alert(err.response.data.error,  err.response.data.details);   
        } else if (err.response.status === 500) {
          alert('ошибка на сервере, можешь сделать плажку где будешь писать что-то в духе "Упс, сервер временно недоступен, попробуйте позже"')
        }
      })
  };

  return (
    <div className="SignIn">
      <div className="Sign-in-header">
        <img src={CloudMoon}></img>
      </div>
      <div className="Sign-in">
        <div className="pointer">
          <a
            onClick={() => {
              onButtonClick();
            }}
          >
            <small>Sign up </small>
            <font> &gt;</font>
          </a>
        </div>
        <h1>Sign In</h1>
        <small>Please enter your login/email and password</small>
        <br />
        <div className="MySendCodeForm">
          <form>
            <input
              className="InputLogin"
              placeholder="login"
              type="text"
              ref={login}
            ></input>
          </form>
          <form>
            <div className="Vlads">
              <input
                required
                id="InputPassword"
                className="InputPassword"
                type={count}
                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                ref={password}
              ></input>
              <button className="Eye" type="button" onClick={change}>
                <Eye />
              </button>
            </div>
          </form>
          <a href="#">
            <small>Forgot your password?</small>
          </a>
          <div className="footerBut">
            <button className="ButSignIn" onClick={ButCall}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
