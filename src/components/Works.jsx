import { Tilt } from "react-tilt";
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {github, link} from '../assets';
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useMobile } from "./canvas/Computers";

const Div = ({children, ...props}) => <div {...props}>{children}</div>
const P = ({children, ...props}) => <p {...props}>{children}</p>
const ProjectCard = ({index, name, description, tags, image, source_code_link, website}) => {
  const isMobile = useMobile()
  const Comp = isMobile ? Div : motion.div
  return (
    <div
    variants={fadeIn("up", "sping", index * 0.5, 0.75)}>
      <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary rounded-2xl sm:w-[360px] p-5 w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"/>
          <div className="absolute inset-0 flex m-3 justify-end card-img_hover">
            <div onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient mr-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain"/>
            </div>
            <div onClick={() => window.open(website, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={link} alt="github" className="w-1/2 h-1/2 object-contain"/>
            </div>
          </div>
        </div>
        
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div class="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </div>
  )
}

const Works = () => {
  const isMobile = useMobile()
  const Comp = isMobile ? Div : motion.div
  const CompP = isMobile ? P : motion.p
  return (
    <>
    <div
    variants={textVariant()}>
      <p className={styles.sectionSubText}>My Work</p>
      <h2 className={styles.sectionHeadText}>Projects</h2>
    </div>
    <div className="w-full flex">
      <p
      variants={fadeIn('', '', 0.1, 1)}
      className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I've done a collection of projects that not only demonstrate my skills but also highlight my journey through both academic and personal endeavors. Each project is succinctly described and accompanied by links to their respective code repositories.
      </p>
    </div>
    <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, index) => (
        <ProjectCard 
        key={`project-${index}`}
        index={index}
        {...project}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Works, "")