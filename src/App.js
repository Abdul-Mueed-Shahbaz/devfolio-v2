import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import { APP_CONSTS } from "./common/constants/app.js";

function App() {
  return (
    <div className="App">
      <NavBar
        title={APP_CONSTS.NAVBAR.TITLE}
        tagline={APP_CONSTS.NAVBAR.TAGLINE}
        links={APP_CONSTS.NAVBAR.LINKS}
      />
      <Home heading={APP_CONSTS.HOME.HEADING} desc={APP_CONSTS.HOME.DESC} />
      <About
        heading={APP_CONSTS.ABOUT.HEADING}
        desc_1={APP_CONSTS.ABOUT.DESC_1}
        desc_2={APP_CONSTS.ABOUT.DESC_2}
      />
      <Portfolio
        heading={APP_CONSTS.PORTFOLIO.HEADING}
        tagline={APP_CONSTS.PORTFOLIO.TAGLINE}
        portfolios={APP_CONSTS.PORTFOLIO.PORTFOLIOS}
      />
      <Experience
        heading={APP_CONSTS.EXPERIENCE.HEADING}
        tagline={APP_CONSTS.EXPERIENCE.TAGLINE}
        techs={APP_CONSTS.EXPERIENCE.TECHS}
      />
      <Contact
        heading={APP_CONSTS.CONTACT.HEADING}
        tagline={APP_CONSTS.CONTACT.TAGLINE}
        formLabels={APP_CONSTS.CONTACT.FORM_LABELS}
        action={APP_CONSTS.CONTACT.FORM_ACTIONS}
      />
      <SocialLinks links={APP_CONSTS.SOCIALS.LINKS} />
    </div>
  );
}

export default App;
