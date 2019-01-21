import React from "react";
import ReactDOM from "react-dom";
import autoBind from "auto-bind";
import ReactGA from "react-ga";

import "./styles.css";

const projects = [
  { name: "protoc-gen-flaskbluerint" },
  { name: "St. George Learning Center" },
  { name: "Rapbook" },
  { name: "KickSwap" },
  { name: "uRyde" }
];

const socialMedia = [
  { name: "Linkedin", url: "https://www.linkedin.com/in/hugh-miles-75956488" },
  { name: "Medium", url: "https://medium.com/hacksnextdoor" },
  { name: "Github", url: "https://github.com/hughhhh" }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    ReactGA.initialize("UA-132787552-1");
    ReactGA.pageview("/home");

    ReactGA.event({
      category: "user",
      action: "visited-site"
    });
  }

  renderProjects() {
    return (
      <div
        style={{
          width: "25%"
        }}
      >
        <div className="padding-x-sm">Projects</div>
        {projects.map(item => (
          <div>{item.name}</div>
        ))}
      </div>
    );
  }

  renderBio() {
    return (
      <div style={{ width: "25%", color: "black" }}>
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
          {socialMedia.map(item => (
            <div>
              <a
                className="rm-link-dec"
                style={{ color: "black", textDecorationLine: null }}
                href={item.url}
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }

  renderProjectDetails() {
    return (
      <div
        className="padding-sm"
        style={{
          justifyContent: "flex-start",
          width: "50%"
        }}
      >
        <div>Project Details</div>
        <div className>Coming soon....</div>
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
