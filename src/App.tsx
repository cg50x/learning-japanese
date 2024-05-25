import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import lightbulbOff from "./assets/bulb.png";
import lightbulbOn from "./assets/bulb-on.png";
import "./App.css";

function App() {
  const [condition, setCondition] = useState<string>("青いボタンを押す");

  const [result, setResult] = useState<string>("顔がうれしくなる");

  const [faceEmotion, setFaceEmotion] = useState<"happy" | "sad">("happy");

  const onClickBlueButton = () => {
    console.log("BLUE button clicked");
    if (condition !== "青いボタンを押す") {
      return;
    }
    if (result === "顔がうれしくなる") {
      setFaceEmotion("happy");
    } else if (result === "顔がかなしくなる") {
      setFaceEmotion("sad");
    } else if (result === "電気をつける") {
      setLightIsOn(true);
    } else if (result === "電気を消す") {
      setLightIsOn(false);
    }
  };

  const [lightIsOn, setLightIsOn] = useState<boolean>(true);
  const onClickRedButton = () => {
    console.log("RED button clicked");
    if (condition !== "赤いボタンを押す") {
      return;
    }
    if (result === "顔がうれしくなる") {
      setFaceEmotion("happy");
    } else if (result === "顔がかなしくなる") {
      setFaceEmotion("sad");
    } else if (result === "電気をつける") {
      setLightIsOn(true);
    } else if (result === "電気を消す") {
      setLightIsOn(false);
    }
  };

  return (
    <>
      <div>
        {faceEmotion === "sad" ? (
          <span className="emoji">😞</span>
        ) : (
          <span className="emoji">😊</span>
        )}
        {lightIsOn ? (
          <img className="lightbulb" src={lightbulbOn} alt="lightbulb on" />
        ) : (
          <img className="lightbulb" src={lightbulbOff} alt="lightbulb off" />
        )}
      </div>
      <div>
        {/* TODO: Turn these into actual buttons and style them  */}
        <button className="emoji button" onClick={onClickBlueButton}>
          🔵
        </button>
        <button className="emoji button" onClick={onClickRedButton}>
          🔴
        </button>
      </div>
      <div
        className="card"
        style={{
          fontSize: "2rem",
        }}
      >
        <select
          name=""
          id=""
          style={{
            fontSize: "2rem",
          }}
          value={condition}
          onChange={(ev) => {
            setCondition(ev.target.value);
          }}
        >
          <option>青いボタンを押す</option>
          <option>赤いボタンを押す</option>
        </select>
        <span>と</span>
        <select
          name=""
          id=""
          style={{
            fontSize: "2rem",
          }}
          value={result}
          onChange={(ev) => {
            setResult(ev.target.value);
          }}
        >
          <option>顔がうれしくなる</option>
          <option>顔がかなしくなる</option>
          <option>電気をつける</option>
          <option>電気を消す</option>
        </select>
      </div>
    </>
  );
}

export default App;
