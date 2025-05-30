
import styles from "./Accueil.module.css"
import img from "./img/AventNB.jpg"
export default function Accueil() {

  const StyleApp = {
  backgroundImage: `url(${img})`,
  backgroundColor: "rgb(0, 0, 0)",
  backgroundSize:"cover",
  color: "rgb(255, 255, 255)",
  fontSize: "15px",
  width: "100%",
  height: "130vh",
  overflow: "hidden",
  position: "relative",

}
  return (
    <div>
      <nav className={styles.menubar}>
        <a href="#">
          <img className="logoMenu" src="/logo192.png" alt="Logo" />
        </a>

        <div className="burger" id="burger">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={styles.navMenu} id="navMenu">
          <ul>
            <li><a href="#section1">Accueil</a></li>
            <li><a href="#section2">Service</a></li>
            <li><a href="#section3">À propos</a></li>
            <li><a href="#section4">Prendre rendez vous</a></li>
          </ul>
        </div>
      </nav>

      <div style={StyleApp} id="section1"></div>

      <div className="sectionService" id="section2">
        <h1>- Notre offre de service -</h1>
        <br />
        <div className="service-container">
          <div className="service" style={{ backgroundImage: "url('./img/im_image-entete.jpg')" }}>
            <h3>Coiffure & coupe de cheveux</h3>
          </div>
          <div className="service" style={{ backgroundImage: "url('./img/im_image-entete.jpg')" }}>
            <h3>Coloration & balayage</h3>
          </div>
          <div className="service" style={{ backgroundImage: "url('./img/im_image-entete.jpg')" }}>
            <h3>Rallonges capillaires</h3>
          </div>
        </div>
      </div>

      <div className={styles.sectionBien}>
        <div className="imgBienv"></div>
        <div className={styles.msgBienv}>
          <h2>BIENVENUE AU SALON BORÉAL</h2>
          <p>
            Venez vivre une expérience de coiffure haute gamme avec des produits capillaires luxueux!
            Nous sommes toujours à votre service afin de vous transmettre nos connaissances et notre expérience.
            L'Estime et la confiance en soi commencent toujours par notre reflet dans la glace.
            Ne sous-estimez pas le pouvoir d'une belle chevelure! Votre style, notre passion!
          </p>
        </div>
      </div>

      <div className={styles.sectionApropo} id="section3">
        <h1>- L’équipe du Salon Boréal -</h1>
        <br />
        <div className={styles.equipe-container}>
          <div className="equipe">
            <img src="./img/equipe/anne.jpg" alt="Anne" />
            <h3>Anne</h3>
            <p>Directrice du salon</p>
          </div>
          <div className="equipe">
            <img src="./img/equipe/Audrey.jpg" alt="Audrey" />
            <h3>Audrey</h3>
            <p>Experte coupe & mèches</p>
          </div>
          <div className="equipe">
            <img src="./img/equipe/Karim.jpg" alt="Karim" />
            <h3>Karim</h3>
            <p>Experte coupe & mèches</p>
          </div>
          <div className="equipe">
            <img src="./img/equipe/cami.jpg" alt="Catherine" />
            <h3>Catherine</h3>
            <p>Experte coupe & mèches</p>
          </div>
          <div className="equipe">
            <img src="./img/equipe/julie.jpg" alt="Julie" />
            <h3>Julie</h3>
            <p>Experte coupe & mèches</p>
          </div>
          <div className="equipe">
            <img src="./img/equipe/lucie.jpg" alt="Lucie" />
            <h3>Lucie</h3>
            <p>Experte coupe & mèches</p>
          </div>
        </div>
      </div>

      <footer className={styles.footer} id="footer">
        <div className="footer-container">
          <div className="footer-text">
            <h3>Gardons le contact.</h3>
            <p>...</p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 Boréal | Tous droits réservés
        </div>
      </footer>
    </div>
  );
}
