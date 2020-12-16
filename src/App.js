import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SignIn from "./components/SignUp/SignUp";
import SignUp from "./components/SignIn/SignIn";
import Chat from "./components/Chat/Chat";
import "./index.css";
import "axios";

function App() {
  const [togle, setTogle] = useState(true);
  const onButtonClick = () => {
    setTogle(!togle);
  };
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/">
            <Header />
            {!togle && <SignIn onButtonClick={onButtonClick} />}
            {togle && <SignUp onButtonClick={onButtonClick} />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
