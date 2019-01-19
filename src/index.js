import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row",
          backgroundColor: "green"
        }}
      >
        <div style={{ justifyContent: "flex-start" }}>
          Hugh Miles
          <br />
          Software Engineer
          <div style={{ flexGrow: 1 }}>
            Pleff lorem monaq morel plaff lerom baple merol pliff ipsum ponaq
            mipsu ploff pimsu caple supim pluff sumip qonaq issum daple ussum
            ronaq ossom fap25 abcde tonaq fghij gaple klmno vonaq pqrst haple
            uvwxy nonaq zzzz. Laple pleff lorem monaq morel plaff sumip qonaq
            issum daple ussum ponaq gaple klm50 lorem monaq morel plaff lerom
            baple merol pliff ipsum ponaq mipsu ploff pimsu caple supim pluff
            sumip qonaq issum daple ussum ronaq ossom faple abc75 tonaq fghij
            gaple klmno vonaq pqrst haple uvwxy nonaq zzzzz laple pleff lorem
            monaq morel plaff sumip qonaq issum daple ussum ponaq gapl.
          </div>
          <div>hugh@hacksnextdoor.com</div>
          <div>Linkedin Instagram Github Linkedin</div>
        </div>
        <div
          style={{ justifyContent: "flex-start", backgroundColor: "blue" }}
        />
        <div style={{ justifyContent: "flex-start", backgroundColor: "red" }}>
          Projects
        </div>
        <div style={{ justifyContent: "flex-start", backgroundColor: "blue" }}>
          Project Details
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
