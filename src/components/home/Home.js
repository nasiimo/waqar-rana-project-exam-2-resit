import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Register } from "../layout/TabForms";
import { Login } from "../layout/TabForms";
import BackgroundVideo from "./BackgroundVideo";

function Home() {
  return (
    <>
      <BackgroundVideo />
      <div class="content">
        <div className="form__container">
          <h2 id="welcome">Welcome to Bits & Bots</h2>
          <hr color="#410275"></hr>
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
          >
            {/* REGISTER */}
            <Tab eventKey="home" title="Register">
              <Register />
            </Tab>
            {/* LOGIN */}
            <Tab eventKey="profile" title="Login">
              <Login />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Home;
