
import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaJsSquare, FaDatabase, FaJava, FaAndroid, FaFigma } from 'react-icons/fa';
import { SiRedux, SiSass, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    {
      title: "HTML5",
      icon: <FaHtml5 color="#ffa800" />,
      description: "I possess a strong foundation in HTML5, utilizing it to structure web content and ensure cross-browser compatibility. My expertise in HTML5 extends to creating semantically meaningful and accessible web pages."
    },
    {
      title: "CSS3",
      icon: <FaCss3 color="#ffa800" />,
      description: "Proficient in CSS3, I specialize in crafting visually appealing and responsive designs. My CSS skills include creating layouts, styling elements, and implementing modern design trends for an enhanced user experience."
    },
    {
      title: "Node.js",
      icon: <FaNodeJs color="#ffa800" />,
      description: "Experienced in server-side development with Node.js, I have successfully built scalable and efficient back-end solutions. From handling API requests to managing data persistence, I leverage Node.js for robust server-side applications."
    },
    {
      title: "React.js",
      icon: <FaReact color="#ffa800" />,
      description: "Skilled in React.js, I develop dynamic and interactive user interfaces for web applications. I leverage React's component-based architecture and virtual DOM for efficient rendering and state management."
    },
    {
      title: "JavaScript (ES6+)",
      icon: <FaJsSquare color="#ffa800" />,
      description: "My JavaScript skills extend to implementing dynamic front-end functionalities, enhancing user interactions for a seamless browsing experience. Proficient in ES6+, I leverage the latest features for modern web development."
    },
    {
      title: "MongoDB",
      icon: <FaDatabase color="#ffa800" />,
      description: "Proficient in MongoDB, I handle data storage and retrieval efficiently for scalable and flexible applications. Experienced in designing MongoDB schemas and optimizing queries for performance."
    }
    ,
    {
      title: "PostgreSQL",
      icon: <FaDatabase color="#ffa800" />,
      description: "With PostgreSQL, I ensure robust and reliable data management solutions. Skilled in writing complex SQL queries, optimizing database performance, and ensuring data integrity with transactions and constraints."
    },
    
    {
      title: "Sequelize ORM",
      icon: <FaDatabase color="#ffa800"/>,
      description: "Using Sequelize ORM, I seamlessly integrate Node.js applications with relational databases like PostgreSQL and MySQL. I leverage Sequelize's features for efficient data modeling, querying, and transaction management."
    },
  
    {
      title: "Java",
      icon: <FaJava color="#ffa800"/>,
      description: "Proficient in Java, I develop scalable and high-performance backend systems and enterprise applications. Experienced in Java EE and Spring Framework, I implement robust solutions for complex business requirements."
    },
    {
      title: "Java Android Apps",
      icon: <FaAndroid color="#ffa800"/>,
      description: "As an Android developer, I create engaging and feature-rich mobile applications for Android devices. Skilled in Java or Kotlin, I design and develop applications that deliver exceptional user experiences and adhere to best practices."
    },
    
    {
      title: "Figma",
      icon: <FaFigma color="#ffa800"/>,
      description: "Proficient in Figma, I design intuitive and visually appealing user interfaces for web and mobile applications. I collaborate with teams to create wireframes, prototypes, and high-fidelity designs, ensuring a seamless design-to-development workflow."
    },
    {
      title: "TypeScript",
      icon: <SiTypescript color="#ffa800"/>,
      description: "Proficient in TypeScript, I leverage static typing to build scalable and maintainable web applications. With TypeScript, I catch errors early in the development process, enhance code readability, and enforce strict type checks for robust codebases."
    },
{
  title: "Redux",
  icon: <SiRedux color="#ffa800"/>,
  description: "Skilled in Redux, I manage application state efficiently for complex web applications. With Redux, I centralize and manage state changes, enabling predictable data flow and simplified debugging."
},
{
  title: "SCSS",
  icon: <SiSass color="#ffa800" />,
  description: "Proficient in SCSS (Sass), I streamline CSS development by leveraging features like variables, mixins, and nesting. With SCSS, I write cleaner and more maintainable stylesheets, speeding up the development process and improving code organization."
}
  ];

  return (
    <>
      {skillsData.map((skill, index) => (
        <div className="skill-card" key={index}>
          <p className="title">
            {skill.icon}
            {skill.title}
          </p>
          <div className="description">
          </div>
        </div>
      ))}
    </>
  );
}

export default Skills;
