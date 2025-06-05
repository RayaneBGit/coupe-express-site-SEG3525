import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

export default function Menu() {
  const burgerRef = useRef(null);
  const navMenuRef = useRef(null);
  const menubarRef = useRef(null);
  const logoMenuRef = useRef(null);

  useEffect(() => {
    const burger = burgerRef.current;
    const navMenu = navMenuRef.current;
    const menubar = menubarRef.current;
    const logoMenu = logoMenuRef.current;

    const toggleMenu = (e) => {
      navMenu.classList.toggle(styles.open);
      e.stopPropagation();
    };

    const closeMenu = () => {
      navMenu.classList.remove(styles.open);
    };

    const handleDocumentClick = () => {
      if (navMenu.classList.contains(styles.open)) {
        navMenu.classList.remove(styles.open);
      }
    };

    const stopPropagation = (e) => e.stopPropagation();

    const handleScroll = () => {
      let current = window.scrollY;
      menubar.style.transition = 'top 0.3s, background-color 0.3s';
      if (current === 0) {
        menubar.style.top = '0';
        menubar.style.backgroundColor = '#fdecdd';
        logoMenu.style.display = 'block';
      } else if (current > lastScroll) {
        menubar.style.top = '-100px';
      } else {
        menubar.style.top = '0';
        menubar.style.backgroundColor = '#fdecdd';
        logoMenu.style.display = 'block';
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
