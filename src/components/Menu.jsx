import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

export default function Menu() {
  const burgerRef = useRef(null);
  const navMenuRef = useRef(null);
  const menubarRef = useRef(null);
  const logoMenuRef = useRef(null);
  const logoMenuTRef = useRef(null);


  useEffect(() => {
    const burger = burgerRef.current;
    const navMenu = navMenuRef.current;
    const menubar = menubarRef.current;
    const logoMenu = logoMenuRef.current;
    const logoMenuT = logoMenuTRef.current;

    // quand on clique sur le burger
    const toggleMenu = (e) => {
      navMenu.classList.toggle(styles.open);
      e.stopPropagation();
    };

    // pour fermer le menu
    const closeMenu = () => {
      navMenu.classList.remove(styles.open);
    };

    // si on clique n’importe
    const handleDocumentClick = () => {
      if (navMenu.classList.contains(styles.open)) {
        navMenu.classList.remove(styles.open);
      }
    };

    // pour pas que le clic sur le menu
    const stopPropagation = (e) => e.stopPropagation();

    // quand on scrolle la page
    const handleScroll = () => {
      let current = window.scrollY;
      const screenWidth = window.innerWidth;

      menubar.style.transition = 'top 0.3s, background-color 0.3s';

      if (current === 0 || current < lastScroll) {
        menubar.style.top = '0';
        menubar.style.backgroundColor = '#fdecdd';

        // afficher le bon logo selon la taille d'écran
        if (screenWidth <= 1118) {
          logoMenuTRef.current.style.display = 'block';
          logoMenuRef.current.style.display = 'none';
        } else {
          logoMenuRef.current.style.display = 'block';
          logoMenuTRef.current.style.display = 'none';
        }

      } else {
        menubar.style.top = '-100px';
      }

      lastScroll = current;
    };

    let lastScroll = 0;

    burger.addEventListener('click', toggleMenu);
    document.addEventListener('click', handleDocumentClick);
    navMenu.addEventListener('click', stopPropagation);

    const links = navMenu.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      burger.removeEventListener('click', toggleMenu);
      document.removeEventListener('click', handleDocumentClick);
      navMenu.removeEventListener('click', stopPropagation);
      links.forEach((link) => {
        link.removeEventListener('click', closeMenu);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // le menu en haut de la page
    <nav className={styles.menubar} ref={menubarRef}>
      <Link to="/">
        <img className={styles.logoMenu} ref={logoMenuRef} src="/img/logo.png" alt="Logo" />
        <img className={styles.logoMenuT} ref={logoMenuTRef} src="/img/logopn.png" alt="Logo" />
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
