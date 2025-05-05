import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="container pt-2">
      <AdjustableTimer />
    </div>
  );
}
export default App;

function AdjustableTimer() {
  const [seconds, setSeconds] = useState(0);
  const [intervalMs, setIntervalMs] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [intervalMs]);

  return (
    <div>
      <div>Seconds: {seconds}</div>
      <input
        type="number"
        value={intervalMs}
        onChange={(e) => setIntervalMs(Number(e.target.value))}
      />
      <label>Adjust interval (ms)</label>
    </div>
  );
}
