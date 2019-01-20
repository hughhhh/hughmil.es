import React from "react";
import ReactDOM from "react-dom";
import autoBind from "auto-bind";

import "./styles.css";

const projects = [{ name: "St. George Learning Center" }];

class App extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  renderProjects() {
    return (
      <div
        style={{
          width: "25%"
        }}
      >
        <div>Projects</div>
        {projects.map(item => (
          <div>{item.name}</div>
        ))}
      </div>
    );
  }

  renderBio() {
    return (
      <div style={{ width: "25%" }}>
        <div className="padding-sm">
          Hugh Miles
          <br />
          Software Engineer
        </div>
        <div className="padding-sm">
          I am Hugh Miles, a 26 year old Software engineer living in San
          Francisco working for the best transportation company in the world
          Lyft. I've been coding for over 5 years and have worked on multiple
          projects ranging from landing pages and data pipelines. To see some of
          my work feel free to explore the side-B of the site.
        </div>
        <div className="padding-sm">hugh@hacksnextdoor.com</div>
        <div className="padding-sm">
          <div>Linkedin</div>
          <div>Medium </div>
          <div>Github </div>
          <div>Instagram</div>
        </div>
      </div>
    );
  }

  renderProjectDetails() {
    return (
      <div
        style={{
          justifyContent: "flex-start",
          width: "50%"
        }}
      >
        Project Details
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
            width: "100%"
          }}
        >
          {this.renderBio()}
          {this.renderProjects()}
          {this.renderProjectDetails()}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
