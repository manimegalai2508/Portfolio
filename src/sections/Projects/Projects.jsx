import styles from './ProjectsStyles.module.css';
import AetherAI from '../../assets/AetherAI.png';
import Nutritious from '../../assets/Nutritious.png';
import FinFlex from '../../assets/deals.png';
import ChatApp from '../../assets/ChatApp.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={AetherAI}
          link="https://aether-ai-sigma.vercel.app/"
          h3="AetherAI"
          p="AI Website"
        />
        <ProjectCard
          src={Nutritious}
          link="https://nutritious-theta.vercel.app/"
          h3="Nutritious"
          p="Nutritious Restaurant"
        />
        <ProjectCard
          src={deals}
          link="https://github.com/manimegalai2508/Doorstep-Deals"
          h3="Doorstep Deals"
          p="E-Commerce Website"
        />
        <ProjectCard
          src={ChatApp}
          link="https://github.com/manimegalai2508/Chat-app"
          h3="ChatApp"
          p="Chatting App"
        />
      </div>
    </section>
  );
}

export default Projects; 
