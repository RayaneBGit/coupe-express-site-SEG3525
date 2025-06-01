import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footerContainer}>
        <div className={styles.footerText}>
          <h3>Gardons le contact.</h3>
          <p>...</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        &copy; 2025 Boréal | Tous droits réservés
      </div>
    </footer>
  );
}
