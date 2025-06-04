import styles from "./Accueil.module.css";


export default function Accueil() {
  console.log(`
    ╔══════════════════════════════════════════════════════════════════════════════╗
    ║                                                                              ║
    ║   Le design de notre site web a été pensé pour être simple, doux            ║
    ║   et facile à utiliser. On voulait que ça reflète l’ambiance du Salon       ║
    ║   Boréal : chaleureux, naturel et accueillant.                              ║
    ║                                                                              ║
    ║   Les couleurs, les formes et les textes ont été choisis pour que tout      ║
    ║   le monde s’y retrouve facilement, que ce soit sur ordi ou sur téléphone.  ║
    ║                                                                              ║
    ║   On espère que vous allez aimer naviguer dessus autant que nous on         ║
    ║   a aimé le créer !                                                          ║
    ║                                                                              ║
    ║   🎨 Conception par : https://nicolabaker.github.io/                         ║
    ║                                                                              ║
    ╚══════════════════════════════════════════════════════════════════════════════╝
  `);

  return (
    <div>
      {/* Section Accueil */}
      <div className={styles.sectionAcc} style={{ backgroundImage: "url('/img/lorealnb.jpg')"}} id="section1"></div>

      {/* Section Services */}
      <div className={styles.sectionService} id="section2">
        <h1>- Notre offre de service -</h1>
        <br />
        <div className={styles.serviceContainer}>
          <div className={styles.service} style={{ backgroundImage: "url('/img/Coiffure.jpg')" }}>
            <a href="/services"><h3>Coiffure & coupe de cheveux</h3></a>
          </div>
          <div className={styles.service} style={{ backgroundImage: "url('/img/Coloration.jpg')" }}>
            <a href="/services"><h3>Coloration & balayage</h3></a>
          </div>
          <div className={styles.service} style={{ backgroundImage: "url('/img/Rallonges.jpg')" }}>
            <a href="/services"><h3>Rallonges capillaires</h3></a>
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

      {/* Section À propos – L’équipe du salon */}
      <div className={styles.sectionApropo} id="section3">
        <h1>- L’équipe du Salon Boréal -</h1>
        <br />

        {/* Conteneur de l’équipe */}
        <div className={styles.equipeContainer}>
          {/* Chaque personne de l’équipe */}
          <div className={styles.equipe}>
            <img src="/img/equipe/anne.jpg" alt="Anne" />
            <h3>Anne</h3>
            <p>Directrice du salon</p>
          </div>

          <div className={styles.equipe}>
            <img src="/img/equipe/Audrey.jpg" alt="Audrey" />
            <h3>Audrey</h3>
            <p>Experte coupe & mèches</p>
          </div>

          <div className={styles.equipe}>
            <img src="/img/equipe/Karim.jpg" alt="Karim" />
            <h3>Karim</h3>
            <p>Expert coupe & mèches</p>
          </div>

          <div className={styles.equipe}>
            <img src="/img/equipe/cami.jpg" alt="Catherine" />
            <h3>Catherine</h3>
            <p>Experte coupe & mèches</p>
          </div>

          <div className={styles.equipe}>
            <img src="/img/equipe/julie.jpg" alt="Julie" />
            <h3>Julie</h3>
            <p>Experte coupe & mèches</p>
          </div>

          <div className={styles.equipe}>
            <img src="/img/equipe/lucie.jpg" alt="Lucie" />
            <h3>Lucie</h3>
            <p>Experte coupe & mèches</p>
          </div>
        </div>
      </div>

    </div>
  );
}
