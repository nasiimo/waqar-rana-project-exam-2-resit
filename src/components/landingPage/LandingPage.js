import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Register from "../forms/Register";
import Login from "../forms/Login";
import BackgroundVideo from "./BackgroundVideo";

function LandingPage() {
  return (
    <>
      <BackgroundVideo />
      <div id="landingPage">
        <div class="content">
          <div className="form__container">
            <h2 id="welcome">Welcome to Bits & Bots</h2>
            <hr color="#410275"></hr>
            <Tabs
              className="sect"
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
            >
              <Tab eventKey="home" title="Register">
                <Register />
              </Tab>
              <Tab eventKey="profile" title="Login">
                <Login />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
