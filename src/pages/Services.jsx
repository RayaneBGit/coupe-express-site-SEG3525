import styles from "./Services.module.css";

export default function Services() {
  return (
    <div className={styles.containerBody}>
      <section className={styles.servicesSection}>
        <div className={styles.service}>
          <div className={styles.serviceImg}>
            <img src="/img/Coiffure_Service.jpg" alt="Coiffure et coupe de cheveux"/>
          </div>
          <div className={styles.serviceText}>
            <h2>Coiffure & Coupe de cheveux</h2>
            <p>
              Des coupes modernes, classiques ou créatives pour femmes, hommes et enfants.
            </p>
          </div>
        </div>

        <div className={`${styles.service} ${styles.reverse}`}>
          <div className={styles.serviceImg}>
            <img
              src="/img/Couleur.jpeg"
              alt="Coloration et balayage"
            />
          </div>
          <div className={styles.serviceText} id="coloratio">
            <h2>Coloration & Balayage</h2>
            <p>
              Coloration, mèches et balayages pour donner de l'éclat à vos cheveux.
            </p>
          </div>
        </div>

        <div className={styles.service}>
          <div className={styles.serviceImg}>
            <img
              src="/img/Rallonges.jpg"
              alt="Rallonges capillaires"
            />
          </div>
          <div className={styles.serviceText}>
            <h2>Rallonges capillaires</h2>
            <p>
              Ajoutez du volume ou de la longueur avec nos rallonges capillaires de qualité.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}