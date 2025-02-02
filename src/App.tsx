import { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ height: "20%", background: "#f0f0f0" }}>
          <button onClick={() => {}}>Throw Error</button>
        </div>
        <div style={{ height: "80%", overflowY: "scroll" }}></div>
      </div>
    );
  }
}

export default App;
