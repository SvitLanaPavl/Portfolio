import { motion } from 'framer-motion';
import { styles } from '../styles';
import {ComputersCanvas} from './canvas';
import {profile_pic} from '../assets';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] "/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        
        <div>
      <div>
          <h1 className={`${styles.heroHeadText} text-white3`}>Hi, I'm <span className="text-[#915eff]">Svitlana</span></h1>
          <div className="flex flex-row items-center mt-4">
          <img 
        src={profile_pic}
        alt='Profile'
        className='mt-4 w-32 h-32 md:mt-0 md:w-48 md:h-48 rounded-full object-cover'
      />
          <p className={`${styles.heroSubText} mt-2 text-white-100 ml-5 pl-5`}>Software developer <br className="sm:block hidden"/>with hands-on experience in designing and building websites and applications.
          </p>
          </div>
          </div>
        </div>
      </div>
      <ComputersCanvas/>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero