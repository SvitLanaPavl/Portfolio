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
    jquery,
    natural,
    visily,
    firebase,
    smiling,
    shell,
    victory,
    cinema,
    qa,
    redux,
    kash,
    landing
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "JQuery",
      icon: jquery,
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
    /*{
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Visily",
      icon: visily,
    },*/
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "HTML 5",
      icon: html,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Victory Christian Center",
      icon: victory,
      iconBg: "#383E56",
      date: "July 2024 - Current",
      points: [
        "Debug and Maintain Current Websites",
        "Create Web Applications to Query Data from Multiple Sources",
        "Build Systems to Bridge Gaps Between 3rd Party Applications",
        "Use and Interpret Third-Party APIs",
        "Collaborate with Other Departments to Meet Ministry Objectives"
      ],
    },
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
      date: "September 2023 - April 2024",
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
      name: "Trove",
      description:
        `<b>Trove</b> is a financial literacy app helping families manage allowances, improve spending habits, and enhance financial education. It features a web app for parents to track finances and a mobile app for children to set goals and learn money management. Built with React, Tailwind CSS, Next.js, and React Native.`,
      tags: [
        {
          name: "Next.js",
          color: "pink-text-gradient",
        },
        {
          name: "Prisma",
          color: "green-text-gradient",
        },
        {
          name: "NextAuth",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "orange-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Vercel",
          color: "blue-text-gradient",
        },
      ],
      image: landing,
      source_code_link: "https://github.com/michaellgans/trove-capstone",
      website: "https://trove-capstone.vercel.app/",
    },
    {
      name: "Cinema Guru",
      description:
        `<b>Cinema Guru</b> is a Next.js website for browsing movies, with filters by title, year, or search. It fetches data from Supabase to populate the homepage. Users can favorite movies or add them to a "Watch Later" list, and view their activity history.`,
      tags: [
        {
          name: "Next.js",
          color: "pink-text-gradient",
        },
        {
          name: "Supabase",
          color: "green-text-gradient",
        },
        {
          name: "NextAuth",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "orange-text-gradient",
        },
      ],
      image: cinema,
      source_code_link: "https://github.com/SvitLanaPavl/atlas-cinema-guru",
      website: "https://atlas-cinema-guru-virid.vercel.app/",
    },
    {
      name: "Atlas Q&A",
      description:
        `<b>Atlas Q&A</b> is a full-stack questions and answers application built with Next.js. Users can sign in, create topics, ask and vote on questions, and view discussions. The app features a multi-page setup, database integration, authentication, and real-time voting, all deployed on Vercel for seamless interaction. For viewing: Login Email: user@atlasmail.com Password: 123456`,
      tags: [
        {
          name: "Next.js",
          color: "pink-text-gradient",
        },
        {
          name: "Supabase",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "orange-text-gradient",
        },
      ],
      image: qa,
      source_code_link: "https://github.com/SvitLanaPavl/atlas-nextjs",
      website: "https://atlas-nextjs-spavlovska.vercel.app/",
    },
    {
      name: "Atlas Kanban Board",
      description:
        `<b>Atlas Kanban Board</b> is a project built with React and Redux, designed to create a Trello-like Kanban board. It features drag-and-drop functionality, global state management, and state persistence via local storage. The app demonstrates advanced Redux usage, including managing lists and cards and persisting state without a backend.`,
      tags: [
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Dnd Kit",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "orange-text-gradient",
        },
      ],
      image: redux,
      source_code_link: "https://github.com/SvitLanaPavl/atlas-react-redux",
      website: "https://atlas-react-redux-spavlovska.netlify.app/",
    },
    {
      name: "To-Do App",
      description:
        "A user-friendly to-do application in Vanilla JavaScript incorporating essential features such as task input, search functionality, and intuitive task management.",
      tags: [
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/SvitLanaPavl/ToDoList",
      website: "https://svitlanapavl.github.io/ToDoList/",
    },
    {
      name: "Simple Shell",
      description:
        `This program is the recreation of the UNIX shell - a command line interpreter - that allows a user to interact with a computer by running commands or programs. The shell parses the commands and sends them to the operating system to perform. The project was done in partnership with <a href="https://www.linkedin.com/in/mei-sibley/" target="_blank" style="font-weight: bold; color: #0073b1; rel="noopener noreferrer">Mei Sibley</a>`,
      tags: [
        {
          name: "C",
          color: "pink-text-gradient",
        },
        {
          name: "UNIX",
          color: "green-text-gradient",
        },
        {
          name: "GCC",
          color: "blue-text-gradient",
        },
        {
          name: "GNU",
          color: "orange-text-gradient",
        },
      ],
      image: shell,
      source_code_link: "https://github.com/SvitLanaPavl/holbertonschool-simple_shell?tab=readme-ov-file",
      website: "https://github.com/SvitLanaPavl/holbertonschool-simple_shell?tab=readme-ov-file",
    },
    {
      name: "America's Natural Canvas",
      description:
        `Fully functioning website/digital exhibit, created from scratch, with interactive features allowing users to search, select, and filter states based on climate types, it offers an engaging experience that captures the essence of America's breathtaking scenery. The database and deployment are hosted through Firebase, the interactive temperature range is achieved with Chart.js. The project was done in partnership with <a href="https://www.linkedin.com/in/c-r-stephens/" target="_blank" style="font-weight: bold; color: #0073b1; rel="noopener noreferrer">Christopher Stephens</a>`,
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
          name: "Visily",
          color: "violet-gradient",
        },
        {
          name: "Responsive Web Design",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "orange-text-gradient",
        },
        {
          name: "JQuery",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "orange-text-gradient",
        },
      ],
      image: natural,
      source_code_link: "https://github.com/SvitLanaPavl/t3-final-garden_of_dreams",
      website: "https://america-s-natural-canvas.web.app/",
    },
    {
      name: "Smiling School",
      description:
        "The Smiling School assignment was completed in three stages: 1. Static Website with HTML and CSS: Initially, I created the website from scratch using only HTML and CSS, focusing on the desktop version. 2. Responsive Design with Bootstrap: In the second stage, I rebuilt the website using minimal CSS and primarily Bootstrap to ensure a responsive design that adapts to various screen sizes. 3. Dynamic Website with API Integration: Finally, I transformed the static website into a dynamic one by loading content from an API, incorporating a carousel feature for enhanced user interaction. This mock website was designed by Nicolas Philippot, and the Figma prototype served as the reference for the design.",
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
          name: "Responsive Web Design",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "orange-text-gradient",
        },
        {
          name: "JQuery",
          color: "green-text-gradient",
        },
      ],
      image: smiling,
      source_code_link: "https://github.com/SvitLanaPavl/atlas-smiling-school-javascript",
      website: "https://svitlanapavl.github.io/atlas-smiling-school/",
    },
    {
      name: "AirBnb Clone - The Console",
      description:
      `The AirBnb Clone - the Console project serves as a versatile developer tool designed for efficient management of objects and data through a command-line interface (CLI). It offers a range of functionalities including creating, updating, destroying, and displaying objects/data. One of its key features is the seamless storage and persistence of objects to a JSON file. This tool is instrumental in abstracting the interaction between the storage engine and object/data management, thereby providing flexibility to easily switch between different storage types. It was a partner project done together with <a href="https://www.linkedin.com/in/c-r-stephens/" target="_blank" style="font-weight: bold; color: #0073b1; rel="noopener noreferrer">Christopher Stephens</a>`,
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
      website: "https://github.com/SvitLanaPavl/holbertonschool-AirBnB_clone",
    },
    {
      name: "Winter In Tulsa",
      description:
        `An interactive website focusing on tourism in Tulsa. The website curates engaging winter activities and provides users with key information about each event, all while promoting a festive, Christmasy atmosphere. The project was done in partnership with <a href="https://www.linkedin.com/in/ericdzyk/" target="_blank" style="font-weight: bold; color: #0073b1; rel="noopener noreferrer">Eric Dzyk</a>`,
      tags: [
        {
          name: "HTML",
          color: "orange-text-gradient",
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
          color: "blue-text-gradient",
        },
      ],
      image: winter,
      source_code_link: "https://github.com/SvitLanaPavl/Hacksprint-2023",
      website: "https://svitlanapavl.github.io/Hacksprint-2023/",
    },
  ];
  
  export { services, technologies, experiences, projects };