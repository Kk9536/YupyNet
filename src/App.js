import React, { useState } from "react";
import Section2 from "./component/pages/Section2";
import AgeGate from "./component/pages/AgeGate";
import './style.css';
import BottomRight from "./component/BottomRight";
import BottomLeft from "./component/BottomLeft";
import Homepage from "./component/pages/Homepage/Homepage";

const AGEGATE_KEY = "agegate_passed_time";
const AGEGATE_EXPIRE_HOURS = 3;

function checkAgeConfirmed() {
  const passedTime = localStorage.getItem(AGEGATE_KEY);
  if (passedTime) {
    const now = Date.now();
    const diffHours = (now - Number(passedTime)) / (1000 * 60 * 60);
    if (diffHours < AGEGATE_EXPIRE_HOURS) {
      return true;
    }
  }
  return false;
}

function App() {
  const [ageConfirmed, setAgeConfirmed] = useState(checkAgeConfirmed);

  const handleAgeConfirm = () => {
    localStorage.setItem(AGEGATE_KEY, Date.now());
    setAgeConfirmed(true);
  };

  if (!ageConfirmed) {
    return <AgeGate onConfirm={handleAgeConfirm} />;
  }

  return (
    <div id="main">
      <Homepage />
      <Section2 />
      <BottomLeft />
      <BottomRight />
    </div>
  );
}

export default App;
