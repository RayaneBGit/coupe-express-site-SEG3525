import styles from './Footer.module.css';

export default function Footer() {
  return (

    // footer pour le bas de page
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerText}>
          <h2>Salon Boréal</h2>
          <p>Un moment pour vous, entre de bonnes mains.</p>
        </div>

        <div className={styles.footerLogo}>
          <img src="/img/logopn.png" alt="Boréal" />
        </div>

        <div className={styles.footerInfos}>
          <ul>
            <li>
              <span className={styles.icon}>
                <img src="/img/marker.png" alt="Adresse" />
              </span>
              <div className={styles.info}>
                <strong>Adresse</strong>
                <br />
                123 Rue adam,<br/>
                Ottawa, ON K0C 1W0
              </div>
            </li>
            <li>
              <span className={styles.icon}>
                <img src="/img/phone-call.png" alt="Téléphone" />
              </span>
              <div className={styles.info}>
                <strong>Téléphone</strong>
                <br />
                <a href="tel:6135554567">(613) 555-4567</a>
              </div>
            </li>
            <li>
              <span className={styles.icon}>
                <img src="/img/envelope (1).png" alt="Courriel" />
              </span>
              <div className={styles.info}>
                <strong>Courriel</strong>
                <br />
                <a href="mailto:info@boreal.ca">info@boreal.ca</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        &copy; 2025 SalonBoréal | Tous droits réservés
      </div>
    </footer>
  );
}
