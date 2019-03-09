import React from "react";
import ReactDOM from "react-dom";
import autoBind from "auto-bind";
import ReactGA from "react-ga";
import moment from "moment";
import { format } from "d3-format";

import "./styles.css";

const SECONDS_IN_YEAR = 1 / 31536000;
const MILLISECONDS_IN_YEAR = SECONDS_IN_YEAR / 1000;
const AGE_FORMAT = ".12s";

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

const formatTime = time => format(AGE_FORMAT)(time);

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

    // Move this to a config at the top
    const unixAgeSeconds =
      moment().unix() - moment("19921106", "YYYYMMDD").unix();
    const codingAgeSeconds =
      moment().unix() - moment("20141225", "YYYYMMDD").unix();

    this.state = {
      age: unixAgeSeconds * SECONDS_IN_YEAR,
      howLongIveBeenCoding: codingAgeSeconds * SECONDS_IN_YEAR,
      width: window.innerWidth
    };

    this.timer = setInterval(
      () =>
        this.setState({
          age: this.state.age + MILLISECONDS_IN_YEAR,
          howLongIveBeenCoding:
            this.state.howLongIveBeenCoding + MILLISECONDS_IN_YEAR
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
    this.setState({
      width: window.innerWidth,
      isMobile: window.innerWidth <= 600
    });
  };

  renderProjects() {
    const { isMobile } = this.state;
    return (
      <div
        style={{
          width: isMobile ? "" : "25%"
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
    const { age, howLongIveBeenCoding, isMobile } = this.state;
    return (
      <div style={{ color: "black", width: isMobile ? "" : "25%" }}>
        <div className="padding-sm">
          Hugh Miles
          <br />
          Software Engineer
        </div>
        <div className="padding-sm">
          I am Hugh Miles, a {formatTime(age)} year old software engineer living
          in San Francisco. I work for the best transportation company in the
          world - Lyft. I've been coding for over{" "}
          {formatTime(howLongIveBeenCoding)} years and have worked on multiple
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
    const { isMobile } = this.state;
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
