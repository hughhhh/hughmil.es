import React from "react";
import ReactDOM from "react-dom";
import autoBind from "auto-bind";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
  { name: "Medium" },
  { name: "Github", url: "https://github.com/hughhhh" },
  { name: "Instagram" }
];

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

  renderHome = () => {
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
    )
  }
  

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/library">
            <Library/>
          </Route>
          <Route path="/">
            {this.renderHome()}
          </Route>
        </Switch>
      </Router>
    );
  }
}

const Library = () => {
  return <iframe src="https://www.analogue.app/collection/reads-wxrkxz/embed" title="library" allowfullscreen style={{width: '100%', height: '100%'}}></iframe>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
