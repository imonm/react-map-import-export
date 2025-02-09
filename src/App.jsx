import MapComponent from "./MapComponent";
import "./app.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <h1>نقشه در React</h1> */}
      <MapComponent />
    </div>
  );
}

export default App;
