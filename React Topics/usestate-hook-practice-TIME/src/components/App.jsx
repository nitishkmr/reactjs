import React from "react";

function App() {

  let [time, setTime] = React.useState(new Date().toLocaleTimeString());
  //time = current Time, getTime = function it will call

  function updateTime(){
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
