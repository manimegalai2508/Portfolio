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
  <SkillList src={checkMarkIcon} skill="Meta Ads Manager" />
  <SkillList src={checkMarkIcon} skill="Google Ads" />
  <SkillList src={checkMarkIcon} skill="Performance Marketing" />
  <SkillList src={checkMarkIcon} skill="SEM & SEO Strategy" />
  <SkillList src={checkMarkIcon} skill="Email & SMS Marketing" />
</div>

<hr />

<div className={styles.skillList}>
  <SkillList src={checkMarkIcon} skill="Google Analytics (GA4)" />
  <SkillList src={checkMarkIcon} skill="Python for Marketing Analytics" />
  <SkillList src={checkMarkIcon} skill="CRM Management" />
  <SkillList src={checkMarkIcon} skill="Marketing Automation" />
  <SkillList src={checkMarkIcon} skill="Data Visualization" />
</div>
      <hr />
      
  <div className={styles.skillList}>
  <SkillList src={checkMarkIcon} skill="Content & Copywriting" />
  <SkillList src={checkMarkIcon} skill="Growth Strategy" />
  <SkillList src={checkMarkIcon} skill="Conversion Rate Optimization (CRO)" />
  <SkillList src={checkMarkIcon} skill="Market & Competitor Research" />
  <SkillList src={checkMarkIcon} skill="Campaign Performance Audit" />
</div>
    </section>
  );
}

export default Skills;



