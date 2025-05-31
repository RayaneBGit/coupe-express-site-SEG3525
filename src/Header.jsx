
function Header() {
  return (
    <header>
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

    </header>
  );
}