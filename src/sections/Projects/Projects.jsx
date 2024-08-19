import styles from './ProjectsStyles.module.css';
import AetherAI from '../../assets/AetherAI.png';
import Nutritious from '../../assets/Nutritious.png';
import FinFlex from '../../assets/FinFlex.png';
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
          src={FinFlex}
          link="https://finflex-xi.vercel.app/"
          h3="FinFlex"
          p="Credit Solutions"
        />
        <ProjectCard
          src={ChatApp}
          link="https://chat-app-mern-2fzb.onrender.com/login"
          h3="ChatApp"
          p="Chatting App"
        />
      </div>
    </section>
  );
}

export default Projects; 