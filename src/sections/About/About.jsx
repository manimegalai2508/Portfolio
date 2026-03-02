import React from 'react';
import styles from './AboutStyles.module.css';
import aboutImg from '../../assets/about-image.png';


function About() {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={aboutImg}
          alt="Manimegalai portrait"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.sectionTitle}>About Me</h1>
        <p>
           Hey, I’m Manimegalai—a performance-focused marketer with a background in Computer Science and Business Systems, blending technical thinking with consumer psychology to build scalable, high-impact campaigns.

        </p>
        <p>
          Certified in Google Ads, Meta Ads, and Programmatic Strategy, I work with data-driven optimization and growth frameworks. I’m naturally curious, quick to learn, and constantly exploring new tools and automation platforms to sharpen my edge.

        </p>
        <p>
          Outside of work, I enjoy binge-watching shows—<i>Mad Men</i> being a favorite. After all, marketers are a little “mad” in the way we think, create, and build bold ideas.
        </p>
      </div>
    </section>
  );
}

export default About;
