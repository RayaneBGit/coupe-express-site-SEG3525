import styles from "./Accueil.module.css";


export default function Accueil() {
  return (
    <div>
      {/* Section Accueil */}
      <div className={styles.sectionAcc} style={{ backgroundImage: "url('/img/AvenNB.jpg')"}} id="section1"></div>

      {/* Section Services */}
      <div className={styles.sectionService} id="section2">
        <h1>- Notre offre de service -</h1>
        <br />
        <div className={styles.serviceContainer}>
          <div
            className={styles.service}
            style={{ backgroundImage: "url('/img/salon-de-coiffure-eco-responsable.jpg')" }}
          >
            <h3>Coiffure & coupe de cheveux</h3>
          </div>
          <div
            className={styles.service}
            style={{ backgroundImage: "url('/img/salon-de-coiffure-eco-responsable.jpg')" }}
          >
            <h3>Coloration & balayage</h3>
          </div>
          <div
            className={styles.service}
            style={{ backgroundImage: "url('/img/salon-de-coiffure-eco-responsable.jpg')" }}
          >
            <h3>Rallonges capillaires</h3>
          </div>
        </div>
      </div>

      {/* Section Bienvenue */}
      <div className={styles.sectionBien}>
        <div className={styles.imgBienv} style={{ backgroundImage: "url('/img/salon-de-coiffure-eco-responsable.jpg')"}}></div>
        <div className={styles.msgBienv}>
          <h2>BIENVENUE AU SALON BORÉAL</h2>
          <p>
            Venez vivre une expérience de coiffure haut de gamme avec des produits capillaires luxueux !
            Nous sommes toujours à votre service afin de vous transmettre nos connaissances et notre expérience.
            L'estime et la confiance en soi commencent toujours par notre reflet dans la glace.
            Ne sous-estimez pas le pouvoir d'une belle chevelure ! Votre style, notre passion !
          </p>
        </div>
      </div>

      {/* Section À propos */}
      <div className={styles.sectionApropo} id="section3">
        <h1>- L’équipe du Salon Boréal -</h1>
        <br />
        <div className={styles.equipeContainer}>
          {[
            { src: "anne.jpg", nom: "Anne", role: "Directrice du salon" },
            { src: "Audrey.jpg", nom: "Audrey", role: "Experte coupe & mèches" },
            { src: "Karim.jpg", nom: "Karim", role: "Expert coupe & mèches" },
            { src: "cami.jpg", nom: "Catherine", role: "Experte coupe & mèches" },
            { src: "julie.jpg", nom: "Julie", role: "Experte coupe & mèches" },
            { src: "lucie.jpg", nom: "Lucie", role: "Experte coupe & mèches" },
          ].map((personne, index) => (
            <div className={styles.equipe} key={index}>
              <img src={`/img/equipe/${personne.src}`} alt={personne.nom} />
              <h3>{personne.nom}</h3>
              <p>{personne.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
