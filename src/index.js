import React from "react";
import ReactDOM from "react-dom";
import autoBind from "auto-bind";
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
=======
import ReactGA from "react-ga";
import moment from "moment";
import { format } from "d3-format";
>>>>>>> 9de366837028f3a00b7701da173539a5cb15ee18

import "./styles.css";

const SECONDS_IN_YEAR = 1 / 31536000;
const MILLISECONDS_IN_YEAR = SECONDS_IN_YEAR / 1000;
const AGE_FORMAT = ".12s";

const projects = [
  {
    name: "apache/incubator-superset",
    url: "https://github.com/apache/incubator-superset"
  },
  { name: "St. George Learning Center", url: "http://always123.com/" },
  { name: "uRyde", url: "https://github.com/hamt3ch/uryde-board" },
  { name: "KickSwap", url: "https://github.com/kickswap" },
  { name: "locale", url: "https://www.youtube.com/watch?v=h6Xm-M20yMo" }
];

const socialMedia = [
  { name: "Linkedin", url: "https://www.linkedin.com/in/hugh-miles-75956488" },
  { name: "Medium", url: "https://medium.com/hacksnextdoor" },
  { name: "Github", url: "https://github.com/hughhhh" },
  { name: "Twitter", url: "https://twitter.com/hugh_____" }
];

const quotes = [
  {
    name: "Jerry Lorenzo",
    quote:
      "You know you can achieve it when you see it differently then anyone else"
  },
  {
    name: "Earnst Hemingway",
    quote:
      "There is no bole in being superior to your fellow man; True nobility is being superior to your former self"
  }
];

const miscellaneous = [
  {
    name: "What I'm listening to",
    link: "https://itunes.apple.com/profile/hughhhh"
  },
  { name: "Goto Drake.gif", link: "http://gph.is/2ARKaxV" },
  {
    name: "Proof I walked on to UF",
    link: "https://floridagators.com/roster.aspx?rp_id=1821"
  }
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
      width: window.innerWidth,
      isMobile: window.innerWidth <= 600
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
        className="padding-sm"
        style={{
          width: isMobile ? "" : "25%"
        }}
      >
        <div className="bld">Projects</div>
        {projects.map(item => (
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
          projects ranging from landing pages to data pipelines. To see some of
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
        <div className="bld">Project Details</div>
        <div>Coming soon....</div>
        <div style={{ flexGrow: 1 }} />
      </div>
    );
  }

  renderQuotes() {
    return (
      <div
        className="padding-sm"
        style={{
          justifyContent: "flex-end",
          display: "flex"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{quotes[0].quote} </div>
          <div> - {quotes[0].name}</div>
        </div>
      </div>
    );
  }

  renderMiscellaneous() {
    return (
      <div className="padding-sm" style={{ color: "black" }}>
        <div className="bld">Miscellaneous</div>
        {miscellaneous.map(item => (
          <div>
            <a
              className="rm-link-dec"
              style={{ color: "black", textDecorationLine: null }}
              href={item.link}
              key={item.link}
            >
              {item.name}
            </a>
          </div>
        ))}
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
