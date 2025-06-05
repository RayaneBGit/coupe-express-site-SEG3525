import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

export default function Menu() {
  let lastScroll = 0;

    function ouvrirOuFermerMenu(e) {
      if (navMenu.classList.contains(styles.open)) {
        navMenu.classList.remove(styles.open);
      } else {
        navMenu.classList.add(styles.open);
      }
      e.stopPropagation();
    }

    function fermerMenu() {
      if (navMenu.classList.contains(styles.open)) {
        navMenu.classList.remove(styles.open);
      }
    }

    function cliquerDehors(e) {
      if (navMenu.classList.contains(styles.open)) {
        navMenu.classList.remove(styles.open);
      }
    }

    function empecherPropagation(e) {
      e.stopPropagation();
    }

    function gererScroll() {
      let positionActuelle = window.scrollY;
      menubar.style.transition = 'top 0.3s, background-color 0.3s';

      if (positionActuelle === 0) {
        menubar.style.top = '0';
        menubar.style.backgroundColor = '#fdecdd';
        logoMenu.style.display = 'block';
      } else {
        if (positionActuelle > lastScroll) {
          menubar.style.top = '-100px';
        } else {
          menubar.style.top = '0';
          menubar.style.backgroundColor = '#fdecdd';
          logoMenu.style.display = 'block';
        }
      }

      lastScroll = positionActuelle;
    }

    if (burger) {
      burger.addEventListener('click', ouvrirOuFermerMenu);
    }

    if (navMenu) {
      navMenu.addEventListener('click', empecherPropagation);
    }

    document.addEventListener('click', cliquerDehors);
    window.addEventListener('scroll', gererScroll);

    const tousLesLiens = navMenu.querySelectorAll('a');
    tousLesLiens.forEach((lien) => {
      lien.addEventListener('click', fermerMenu);
    });

  return (
    <nav className={styles.menubar} ref={menubarRef}>
      <Link to="/">
        <img className={styles.logoMenu} ref={logoMenuRef} src="/img/logo.png" alt="Logo" />
      </Link>

      <div className={styles.burger} ref={burgerRef}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={styles.navMenu} ref={navMenuRef}>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/services">Service</Link></li>
          <li><Link to="/apropos">À propos</Link></li>
          <li><a href="/Contact" className={styles.ctRdv}>Prendre rendez-vous</a></li>
        </ul>
      </div>
    </nav>
  );
}
