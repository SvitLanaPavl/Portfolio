import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    python,
    mysql,
    nodejs,
    bootstrap,
    git,
    figma,
    docker,
    ywca,
    atlas,
    first,
    winter,
    consolee,
    todo,
    flask,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Flask",
        icon: flask,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Student Full-Stack Developer",
      company_name: "Atlas School",
      icon: atlas,
      iconBg: "#383E56",
      date: "May 2023 - December 2024",
      points: [
        "Atlas (former Holberton) is an innovative software engineering school that provides a comprehensive 20-month education program, organized into 5 trimesters. This curriculum encompasses not only the fundamentals of computer science but also specialized areas that students begin exploring from the third trimester onwards. The curriculum is centered around a peer-learning and project-based approach, effectively preparing future software engineers for the dynamic technology industry.",
      ],
    },
    {
      title: "Student Tutor",
      company_name: "Atlas School",
      icon: atlas,
      iconBg: "#E6DEDD",
      date: "September 2023 - Current",
      points: [
        "Providing project support and conceptual exposure",
        "Conducting live coding sessions to 20+ participants",
        "Collaborating with instructors to facilitate educational experience",
        "Conducting manual reviews of peer projects",
      ],
    },
    {
      title: "Refugee Case Worker",
      company_name: "YWCA",
      icon: ywca,
      iconBg: "#383E56",
      date: "March 2023 - April 2023",
      points: [
        "Case assessment and control",
        "Coordination with social service agencies for 50+ individuals",
        "Refugee database management ensuring accuracy",
        "Facilitating employment, contributing to a 10% increase in job placements",
        "Translation and interpretation expertise",
      ],
    },
    {
      title: "ESL Instructor",
      company_name: "First Future Education Solutions",
      icon: first,
      iconBg: "#E6DEDD",
      date: "February 2016 - March 2022",
      points: [
        "Teaching English to over 200 students per month through interactive online platforms",
        "Delivering classes and lectures following structured plan, leading to 20% increase in student exam scores.",
        "Evaluating students' progress, giving assessments, recommendations and feedback",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Winter In Tulsa",
      description:
        "An interactive website focusing on tourism in Tulsa. The website curates engaging winter activities and provides users with key information about each event, all while promoting a festive, Christmasy atmosphere. The project was done with Eric Dzyk.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "Figma",
          color: "violet-gradient",
        },
        {
          name: "JavaScript",
          color: "orange-text-gradient",
        },
      ],
      image: winter,
      source_code_link: "https://github.com/SvitLanaPavl/Hacksprint-2023",
    },
    {
      name: "AirBnb Clone - The Console",
      description:
        "The AirBnb Clone project console serves as a versatile developer tool designed for efficient management of objects and data through a command-line interface (CLI). It offers a range of functionalities including creating, updating, destroying, and displaying objects/data. One of its key features is the seamless storage and persistence of objects to a JSON file. This tool is instrumental in abstracting the interaction between the storage engine and object/data management, thereby providing flexibility to easily switch between different storage types. It was a partner project done together with Chris Stephens",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "JSON",
          color: "green-text-gradient",
        },
        {
          name: "unit testing",
          color: "pink-text-gradient",
        },
      ],
      image: consolee,
      source_code_link: "https://github.com/SvitLanaPavl/holbertonschool-AirBnB_clone",
    },
    {
      name: "To-Do App",
      description:
        "A user-friendly to-do application in Vanilla JavaScript incorporating essential features such as task input, search functionality, and intuitive task management.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/SvitLanaPavl/ToDoList",
    },
  ];
  
  export { services, technologies, experiences, projects };