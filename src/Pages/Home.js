import React from "react";
import tontachiLogo from "../Images/tontachiLogo.png";
import handphone from "../Images/handphone.png";
import discorbButton from "../Images/discord.png";
import twitterButton from "../Images/tweet.png";
import networkButton from "../Images/Network.png";
import barback from "../Images/Playbar.png";
import barback1 from "../Images/Htpbar.png";
import "../App.css";
import { Label } from "reactstrap";

const Home = () => {
  return (
    <div className="background">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md">
            <img
              className="tontachiLogo"
              src={tontachiLogo}
              id="tontachiLogo"
              alt="tontachiLogo"
              height="265"
              width="265"
              top="20"
              left="43"
            />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md d-flex justify-content">
              <img
                className="barback"
                src={barback1}
                alt="barback1"
                class="float-left"
                class="center"
                position="center"
                top="20"
                left="43"
              />
              <img
                className="handphone"
                src={handphone}
                id="handphone"
                alt="handphone"
                class="center"
                position="center"
                top="100"
                sticky="top"
                left="43"
              />
              <img
                className="barback"
                src={barback}
                alt="barback"
                class="float-right"
                class="center"
                position="center"
                top="20"
                left="43"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md d-flex justify-content pb-5">
            <a href="https://discord.gg/QYH8sqTmRw" target="_blank">
              <img
                className="socialMediaLink"
                src={networkButton}
                id="networkButton"
                alt="networkButton"
              />
            </a>
            <a href="https://discord.gg/QYH8sqTmRw" target="_blank">
              <img
                className="socialMediaLink"
                src={discorbButton}
                id="discorbButton"
                alt="discorbButton"
              />
            </a>
            <a href="https://twitter.com/tontachiAR" target="_blank">
              <img
                className="socialMediaLink"
                src={twitterButton}
                id="twitterButton"
                alt="twitterButton"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
