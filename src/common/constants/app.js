import HeroImage from "../../assets/heroImage.png";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImg from "../../assets/react.png";
import github from "../../assets/github.png";
import tailwind from "../../assets/tailwind.png";
import vue from "../../assets/vue.png";
import git from "../../assets/git.png";
import py from "../../assets/py.png";
import django from "../../assets/django.png";
import quasar from "../../assets/quasar.png";
import mysqlworkbench from "../../assets/mysqlworkbench.png";

import devfolio from "../../assets/portfolio/devfolio.png";
import authmircoservice from "../../assets/portfolio/authmicroservice.png";
import eccomerce from "../../assets/portfolio/eccomerce.png";
import chatapp from "../../assets/portfolio/chatapp.png";
import futapp from "../../assets/portfolio/futapp.png";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const APP_CONSTS = {
  HOME: {
    HEADING: "I'm a Full Stack Developer",
    DESC: "Proficient in HTML, CSS, JavaScript, Python, Vue.js, Quasar, Django, MySQL, React.js, and more. Crafting the digital future with expertise and creativity, turning ideas into stunning web experiences that leave a lasting impact.",
    DEV: HeroImage,
  },

  ABOUT: {
    HEADING: "About",
    DESC_1:
      "Aspiring to learn, innovate, and excel in the world of technology. My journey as a developer is marked by a thirst for knowledge and a commitment to solving complex problems. I bring expertise in HTML, CSS, JavaScript, Python, Vue.js, Quasar, Django, MySQL, React.js, and more to create captivating web experiences.",
    DESC_2:
      "With a blend of creativity and dedication, I'm on a mission to shape the digital landscape, one project at a time.",
  },

  SOCIALS: {
    LINKS: [
      {
        child: (
          <>
            Linkedin
            <FaLinkedin size={30}></FaLinkedin>
          </>
        ),
        href: "https://www.linkedin.com/in/abdul-mueed-shahbaz-8455b618a/",
        style: "rounded-tr-md",
      },
      {
        child: (
          <>
            Github
            <FaGithub size={30}></FaGithub>
          </>
        ),
        href: "https://github.com/Abdul-Mueed-Shahbaz?tab=repositories",
      },
      {
        child: (
          <>
            Mail
            <HiOutlineMail size={30}></HiOutlineMail>
          </>
        ),
        href: "mailto:abdulmueedshahbaz@gmail.com",
      },
      {
        child: (
          <>
            Resume
            <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
          </>
        ),
        href: "/Abdul's Resume.pdf",
        style: "rounded-br-md",
        download: true,
      },
    ],
  },

  NAVBAR: {
    TITLE: "Mueed",
    LINKS: [
      {
        link: "home",
      },
      {
        link: "about",
      },
      {
        link: "portfolio",
      },
      {
        link: "experience",
      },
      {
        link: "contact",
      },
    ],
  },

  PORTFOLIO: {
    HEADING: "Portfolio",
    TAGLINE: "Check out some of my work right here",
    PORTFOLIOS: [
      {
        src: devfolio,
        code: "https://github.com/Abdul-Mueed-Shahbaz/DevFolio",
        demo: "https://abdulsdevfolio.vercel.app/#/",
      },
      {
        src: authmircoservice,
        code: "https://github.com/Abdul-Mueed-Shahbaz/Auth-Microservice",
        demo: "",
      },
      {
        src: chatapp,
        code: "https://github.com/Abdul-Mueed-Shahbaz/Secure_Channels-Hub",
        demo: "",
      },
      {
        src: eccomerce,
        code: "https://github.com/Abdul-Mueed-Shahbaz/Eccomerce-Application",
        demo: "",
      },
      {
        src: futapp,
        code: "",
        demo: "https://github.com/Abdul-Mueed-Shahbaz/FutTradingBot",
      },
    ],
  },

  EXPERIENCE: {
    HEADING: "Experience",
    TAGLINE: "These are the technologies I've worked with",
    TECHS: [
      {
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
      },
      {
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
      },
      {
        src: javascript,
        title: "JavaScript",
        style: "shadow-yellow-500",
      },
      {
        src: py,
        title: "Python",
        style: "shadow-blue-300",
      },
      {
        src: vue,
        title: "Vue",
        style: "shadow-green-500",
      },
      {
        src: quasar,
        title: "Quasar",
        style: "shadow-white",
      },
      {
        src: django,
        title: "Django",
        style: "shadow-green-600",
      },
      {
        src: git,
        title: "Git",
        style: "shadow-red-500",
      },
      {
        src: github,
        title: "Github",
        style: "shadow-gray-400",
      },
      {
        src: mysqlworkbench,
        title: "MySQL",
        style: "shadow-sky-700",
      },
      {
        src: reactImg,
        title: "React",
        style: "shadow-blue-600",
      },
      {
        src: tailwind,
        title: "Tailwind",
        style: "shadow-sky-400",
      },
    ],
  },

  CONTACT: {
    HEADING: "Contact",
    TAGLINE: "Submit the form below to get in touch with me",
    FORM_ACTIONS: {
      ACTION: "https://getform.io/f/962b1922-73c2-4cfa-b300-ed8225d85a90",
      METHOD: "POST",
    },
    FORM_LABELS: {
      NAME: "Enter your name",
      EMAIL: "Enter your email",
      MESSAGES: "Enter your message",
    },
  },
};
