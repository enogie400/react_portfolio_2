// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/react.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/wps.png";
import reactjs from "./assets/images/Skills/php.png";
import nodejs from "./assets/images/Skills/html.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/teco.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import project4 from "./assets/images/projects/img4.png";
import project5 from "./assets/images/projects/img5.png";
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
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "ENOGIE",
    LastName: "OMOROGBE",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Ract Js",
        para: "Core Competencies in React.js",
        logo: figma,
      },
      {
        name: "HTML",
        para: "I have a strong command of HTML (HyperText Markup Language).",
        logo: nodejs,
      },
      {
        name: "WordPress Developer",
        para: "I am a skilled WordPress Developer with hands-on experience in designing",
        logo: ps,
      },
      {
        name: "PHP Developer",
        para: "I am an experienced PHP Developer with a strong background in developing dynamic web. ",
        logo: reactjs,
      },
      {
        name: "CSS",
        para: "I am a skilled CSS Developer with a strong focus on creating visually appealing, responsive, and accessible user interfaces.",
        logo: sketch,
      },
      {
        name: "Javascript",
        para: "Problem-solving and analytical thinking, Communication and teamwork, Adaptability in fast-changing tech environments, Attention to detail and code quality",
        logo: sketch,
      },
      {
        name: "WEB HOSTING",
        para: "IT professional who is responsible for managing and maintaining web servers and infrastructure that host websites, web applications, and related services. ",
        logo: sketch,
      },
      {
        name: "SEO",
        para: "digital marketing professional who specializes in improving the visibility and ranking of websites in search engine results pages (SERPs) like Google, Bing, and Yahoo.",
        logo: sketch,
      },
      {
        name: "CMS INTEGRATIONS",
        para: "CMS like WordPress, Drupal, Joomla, Shopify, or Headless CMS (like Strapi, Sanity, or Contentful) often needs to be integrated with tools for analytics, eCommerce, marketing automation, payment gateways, CRMs, and more.",
        logo: sketch,
      },
      {
        name: "PROJECT MAMAGEMENT",
        para: "planning, organizing, and overseeing tasks and resources to achieve specific goals within a defined timeframe and budget.",
        logo: sketch,
      },
      {
        name: "CUSTOMER SERVICE REPRESNTATIVE",
        para: "frontline professional who interacts with customers on behalf of a company to resolve issues, answer questions, provide information, and ensure a positive experience",
        logo: sketch,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
       // para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "Project Management",
       // para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        //para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "Recent Projects",
    image: person_project,
    project_content: [
      {
        title: "Techo Group Ng Ltd",
        image: project1,
      },
      {
        title: "Anchoria Investment",
        image: project2,
      },
      {
        title: "Daimond Luxury MarketPlace",
        image: project3,
      },
      {
        title: "MICHAEL ABANYE INSIGHTS (M.A.I)",
        image: project4,
      },
      {
        title: "NOLT FINANCE LTD",
        image: project5,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Working with Enogie Omorogbe was a game changer for our online presence. They took the time to understand our vision and delivered a beautiful, functional website ahead of schedule. We've already seen an increase in traffic and customer inquiries!”",
        img: avatar1,
        name: "MR ELO ZINO",
      },
      {
        review:
          "“From start to finish, the team was professional, communicative, and full of creative ideas. They built a custom platform that perfectly fit our startup’s needs. We couldn’t have asked for a better partner in this critical phase of our business.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "David L., Co-Founder, LaunchHub",
      },
      {
        review:
          "“Our new website not only looks amazing but also runs smoothly and converts better. The integrated shopping cart and inventory management features have saved us hours of manual work every week!”",
        img: avatar3,
        name: "MRS GLORIA  EMUMEJAKPOR",
      },
      {
        review:
          "“I finally have a portfolio that reflects my work and personality. The team really listened to what I wanted and turned it into something better than I imagined. I’m proud to send people to my site now.”",
        img: avatar4,
        name: "Tara S",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I am a passionate self-taught developer with a deep understanding of creating web products. I have about 13 years of experiece in web development, specializing in front-end technologies. My journey has been filled with learning and growth, and I am excited to share my work with you. Feel free to explore my product and projects, and don't hesitate to reacout to me for any inquiries or collaborations.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "sstechnology1985@gmail.com",
        icon: GrMail,
        link: "mailto:sstechnology1985@gmail.com",
      },
      {
        text: "+234 816 541 7645",
        icon: MdCall,
        link: "https://wa.me/2348165417645",
      },
      {
        text: "samtechng",
        icon: BsInstagram,
        link: "https://www.instagram.com/samtechng/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2025",
  },
};
