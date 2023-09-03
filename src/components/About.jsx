import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
// import { services } from '../constants';

// const ServiceCard = ({ index, title, icon }) => {
//   return (
//     <motion.div
//       variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
//       className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
//         <img src={icon} alt={title} className="w-16 h-16 object-contain" />
//         <h3 className="text-taupe text-[18px] font-bold text-center">
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   );
// };

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-eerieBlack text-[18px] max-w-3xl leading-[30px]">
          Hello, I'm Fahim Al Jadid, a Software Engineer deeply invested in both backend and frontend development. With a growing interest in DevOps, I cherish crafting full-stack applications and harmonizing complex tech components. My backend expertise involves architecting resilient systems in Node.js, Express.js & Nest.js , while my frontend exploration, notably with React, has brought user-friendly interfaces to life. Intrigued by DevOps' collaboration, I appreciate its role in streamlining pipelines. Collaborative discussions, fueled by active listening, guide my approach as a team player. I value diverse perspectives over winning debates, aiming for collective growth. My portfolio showcases projects mirroring technical competence and dedication to collaboration. Let's transcend tech and explore shared learning. Connect for synergies or to celebrate our passion for software engineering.
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </div>
  );
};

export default SectionWrapper(About, 'about');
