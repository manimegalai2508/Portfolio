import styles from './Certifications.module.css';

function Certifications() {
  return (
    <section id="certifications" className={styles.container}>
      <h1 className={styles.sectionTitle}>Certifications</h1>

      <div className={styles.certificationsContainer}>
        
        <a
          href="/digital-marketing-hubspot.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h3>Digital Marketing Certified</h3>
          <p>HubSpot</p>
        </a>

        <a
          href="/email-marketing-hubspot.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h3>Email Marketing Certified</h3>
          <p>HubSpot</p>
        </a>

        <a
          href="/social-media-hubspot.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h3>Social Media Certified</h3>
          <p>HubSpot</p>
        </a>

        <a
          href="/google-ads-certifications.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h3>Google Ads Certifications</h3>
          <p>Google</p>
        </a>

        <a
          href="/google-data-analytics.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h3>Google Data Analytics</h3>
          <p>Google</p>
        </a>

        <a
          href="/google-project-management.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h3>Google Project Management</h3>
          <p>Google</p>
        </a>

        <a
          href="/sql-advanced-hackerrank.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h3>SQL Advanced</h3>
          <p>HackerRank</p>
        </a>

        <a
          href="/python-basic-hackerrank.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h3>Python Basic Certificate</h3>
          <p>HackerRank</p>
        </a>

      </div>
    </section>
  );
}

export default Certifications;