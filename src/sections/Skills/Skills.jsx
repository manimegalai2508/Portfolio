import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Node.js" />
      </div>
      
      <hr />
      
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React.js" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        <SkillList src={checkMarkIcon} skill="UX/UI Design" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="Data Visualization" />
      </div>
      
      <hr />
      
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Project Management" />
        <SkillList src={checkMarkIcon} skill="Business Intelligence" />
        <SkillList src={checkMarkIcon} skill="Interpersonal Skills" />
        <SkillList src={checkMarkIcon} skill="Creativity" />
        <SkillList src={checkMarkIcon} skill="Team Coordination" />
      </div>
    </section>
  );
}

export default Skills;



