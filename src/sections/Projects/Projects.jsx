import styles from './ProjectsStyles.module.css';

import Case1 from '../../assets/case1.png';
import Case2 from '../../assets/case2.png';
import Case3 from '../../assets/case3.png';
import Case4 from '../../assets/case4.png';

import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Case Studies</h1>

      <div className={styles.projectsContainer}>
        
        <ProjectCard
          src={Case1}
          link="/case-study-1.pdf"
          h3="Case Study 01"
          p="Organic Growth Engine"
        />

        <ProjectCard
          src={Case2}
          link="/case-study-2.pdf"
          h3="Case Study 02"
          p="Campus Digital Momentum"
        />

        <ProjectCard
          src={Case3}
          link="/case-study-3.pdf"
          h3="Case Study 03"
          p="Performance Re-Engineering"
        />

        <ProjectCard
          src={Case4}
          link="/case-study-4.pdf"
          h3="Case Study 04"
          p="Real Estate Digital Evolution"
        />

      </div>
    </section>
  );
}

export default Projects;