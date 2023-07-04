// import images
import Hero_person from "./assets/images/Hero/person2.png";
import Hero_pic from "./assets/images/Hero/bitemoji.png";

import tail from "./assets/images/Skills/tailwind-css.png";
import ps from "./assets/images/Skills/ps.png";
import mongo from "./assets/images/Skills/mongodb.png";
import html from "./assets/images/Skills/html5.png";
import java from "./assets/images/Skills/java.png";
import js from "./assets/images/Skills/javascript.png";
import ex from "./assets/images/Skills/express.png";
import css from "./assets/images/Skills/css3.png";
import boot from "./assets/images/Skills/bootstrap.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import pic1 from "./assets/images/Services/recipe.png";
import pic2 from "./assets/images/Services/travel.png";
import pic3 from "./assets/images/Services/dis.png";
import pic4 from "./assets/images/Services/social.png";
import pic5 from "./assets/images/Services/port.png";
import pic6 from "./assets/images/Services/ecommerce.png";

import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },

    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "A Full Stack Web Dev",
    firstName: "VINAY",
    LastName: "B H",
    btnText: "Connect Me",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "LET'S BUILD SOMETHING TOGETHER",
      },
      {
        count: "20+",
        text: "I am a passionate FULL STACK DEVELOPER, currently in my final year of BCA degre in Computer Application. I'm focused on building responsive fullstack web applications while learning & exploring other technologies.",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "Technologies I use in my development",
    skills_content: [
      {
        name: "React js",
        logo: reactjs,
      },
      {
        name: "Node js",
        // para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Express js",
        // para: "Lorem ipsum text  dummy",
        logo: ex,
      },
      {
        name: "MongoDB",
        // para: "Lorem ipsum text  dummy",
        logo: mongo,
      },
      {
        name: "JavaScript",
        // para: "Lorem ipsum text  dummy",
        logo: js,
      },
      {
        name: "HTML",
        // para: "Lorem ipsum text  dummy",
        logo: html,
      },
      {
        name: "CSS",
        // para: "Lorem ipsum text  dummy",
        logo: css,
      },
      {
        name: "BootStrap",
        // para: "Lorem ipsum text  dummy",
        logo: boot,
      },
      {
        name: "Tailwind",
        // para: "Lorem ipsum text  dummy",
        logo: tail,
      },
      {
        name: "Java",
        // para: "Lorem ipsum text  dummy",
        logo: java,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Projects",
    subtitle: "Take a lot at my projects:",
    service_content: [
      {
        title: "Recipe Website",
        para: "A recipe website where people can share and discover recipes. It creates a lively community of food lovers, with an easy-to-use design, a variety of recipes, and a sense of connection through cooking.Tech stack - Reactjs, Nodejs, Expressjs, MongoDB",
        logo: pic1,
        demo: "https://github.com/vinaybh01/recipe-app/tree/main",
        code: "https://github.com/vinaybh01/recipe-app/tree/main",
      },
      {
        title: "Travel Website",
        para: "A travel website that allows users to explore various destinations, providing a visually appealing platform to discover and learn about different places, inspiring their wanderlust.Tech stack - Reactjs, Nodejs, Expressjs, MongoDB",
        logo: pic2,
        demo: "https://vinaybh0107-travel-website.netlify.app/",
        code: "https://github.com/vinaybh01/travelling-website",
      },
      {
        title: "Disaster Relief",
        para: "Enabling seamless connection and support in times of disaster through a comprehensive web application, uniting relief  organizations, volunteers, and victims. Tech stack - Html,Css,Javascript,Bootstrap",
        logo: pic3,
        demo: "https://ybhumi.github.io/disaster-relief/",
        code: "https://github.com/vinaybh01/disaster-relief",
      },
      {
        title: "Social Media",
        para: "A user-friendly social media website frontend, enabling seamless connection, content sharing, and interactive engagement among users.Tech stack - Reactjs.",
        logo: pic4,
        demo: "https://vinaybh0107-socialmedia.netlify.app/",
        code: "https://github.com/vinaybh01/social-media-frontend",
      },
      {
        title: "Portfolio",
        para: " I have built a personal website that showcases my skills, projects, and achievements, providing a comprehensive overview of my professional journey.Tech stack - Reactjs.",
        logo: pic5,
        demo: "#",
        code: "#",
      },
      {
        title: "E-commerce Website",
        para: "An eCommerce website I built, providing a user-friendly and visually appealing platform for online shopping.Tech stack - Reactjs.",
        logo: pic6,
        demo: "https://vinaybh0107-ecommerce.netlify.app/",
        code: "https://github.com/vinaybh01/ecommerce-website",
      },

      // {
      //   title: "PhotoShop Editing",
      //   para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
      //   logo: services_logo3,
      // },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "Get in touch",
    social_media: [
      {
        text: "vinaybh0107@gmail.com",
        icon: GrMail,
        link: "mailto:vinaybh0107@gmail.com",
      },
      {
        text: "+91 7022853572",
        icon: MdCall,
        link: "https://wa.me/7022853572",
      },
      {
        text: "___.vinay._",
        icon: BsInstagram,
        link: "https://www.instagram.com/___.vinay._/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
