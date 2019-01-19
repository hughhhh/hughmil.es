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
          <div style={{ margin: "10px 0" }}>
            Hugh Miles
            <br />
            Software Engineer
          </div>
          <div>
            I am Hugh Miles, a 26 year old Software engineer living in San
            Francisco working for the best transportation company in the world
            Lyft. I've been coding for over 5 years and have worked on multiple
            projects ranging from landing pages and data pipelines. To see some
            of my work feel free to explore the side-B of the site.
          </div>
          <div>hugh@hacksnextdoor.com</div>
          <div>Linkedin Instagram Github Medium</div>
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
