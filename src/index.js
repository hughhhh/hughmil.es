import React from "react";
import ReactDOM from "react-dom";
import autoBind from "auto-bind";
import ReactGA from "react-ga";
import moment from "moment";
import { format } from "d3-format";

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

const formatTime = time => {
  return time;
};

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

    const seconds = moment().unix() - moment("199211306", "YYYYMMDD").unix();
    const unixAgeInYears = seconds / 31536000;

    this.state = {
      age: unixAgeInYears,
      width: window.innerWidth
    };

    this.timer = setInterval(
      () =>
        this.setState({
          age: formatTime(this.state.age + 1 / 31536)
        }),
      1
    );
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

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
    const { age } = this.state;
    return (
      <div style={{ width: "25%", color: "black" }}>
        <div className="padding-sm">
          Hugh Miles
          <br />
          Software Engineer
        </div>
        <div className="padding-sm">
          I am Hugh Miles, a {age} year old Software engineer living in San
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
                key={item.url}
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
        <div>Coming soon....</div>
      </div>
    );
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    return (
      <div className="App">
        <div
          className="Container"
          style={{ flexDirection: isMobile ? "column" : "row" }}
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
