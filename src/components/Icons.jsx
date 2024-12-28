import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Icons = () => {
  return (
    <div className="flex gap-4">
      <a 
        href="https://www.linkedin.com/in/svitlanapavlovska/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group text-white hover:text-blue-500"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="transition-colors duration-200 group-hover:text-blue-400 p-1" />
      </a>
      <a 
        href="https://github.com/SvitLanaPavl" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group text-white hover:text-blue-500"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" className="transition-colors duration-200 group-hover:text-blue-400 p-1" />
      </a>
      <a 
        href="/Resume_Svitlana_Pavlovska.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group text-white hover:text-blue-500"
      >
        <FontAwesomeIcon icon={faFileAlt} size="2x" className="transition-colors duration-200 group-hover:text-blue-400 p-1" />
      </a>
    </div>
  );
};

export default Icons;
