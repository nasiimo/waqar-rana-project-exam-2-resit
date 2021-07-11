import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Register } from "../layout/TabForms";
import { Login } from "../layout/TabForms";
import vrGaming from "../../img/vrGaming.mp4";

function Home() {
  return (
    <>
      <video
        src={vrGaming}
        muted
        loop
        maxWidth="100%"
        autoplay="true"
        type="video/mp4"
      />
      <div class="content">
        <div className="form__container">
          <Tabs
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
    </>
  );
}

export default Home;

{
  /* 
      <div className="form__container">
        <Tabs
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
 */
}
