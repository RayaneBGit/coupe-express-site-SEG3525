import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import { db } from "../../server/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

export default function Contact() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [service, setService] = useState("");
  const [coiffeur, setCoiffeur] = useState("");
  const [heure, setHeure] = useState("");
  const [nom, setNom] = useState("");
  const [courriel, setCourriel] = useState("");
  const [tel, setTel] = useState("");

  const [step, setStep] = useState(1);
  const [reservations, setReservations] = useState({});
  const [errors, setErrors] = useState({});
  const [disponibilites, setDisponibilites] = useState([]);

  const today = new Date();
  const todayString = today.toISOString().split("T")[0];

  const serviceCoiffeurs = {
    coiffure: ["Audrey", "Karim", "Catherine", "Julie", "Lucie"],
    coloration: ["Karim", "Catherine", "Julie"],
    rallonges: ["Audrey", "Julie", "Lucie"],
  };

  useEffect(() => {
    async function fetchDisponibilites() {
      const dispoSnapshot = await getDocs(collection(db, "disponibilites"));
      const dispo = dispoSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setDisponibilites(dispo);
    }

    fetchDisponibilites();
  }, []);

  async function generateDisponibilites() {
    const services = Object.keys(serviceCoiffeurs);
    const slots = getTimeSlots();
    const dateStr = today.toISOString().split("T")[0];

    for (let service of services) {
      for (let coiffeur of serviceCoiffeurs[service]) {
        for (let heure of slots) {
          await addDoc(collection(db, "disponibilites"), {
            date: dateStr,
            heure,
            service,
            coiffeur,
          });
        }
      }
    }
  }

  async function supprimerDisponibilitesDuJour() {
    const q = query(collection(db, "disponibilites"), where("date", "==", todayString));
    const snapshot = await getDocs(q);
    snapshot.forEach(async (docu) => {
      await deleteDoc(doc(db, "disponibilites", docu.id));
    });
  }

  async function supprimerChoix(date, heure, service, coiffeur) {
    const q = query(
      collection(db, "disponibilites"),
      where("date", "==", date),
      where("heure", "==", heure),
      where("service", "==", service),
      where("coiffeur", "==", coiffeur)
    );

    const snapshot = await getDocs(q);
    snapshot.forEach(async (docu) => {
      await deleteDoc(doc(db, "disponibilites", docu.id));
    });
  }

  function getTimeSlots() {
    const heuresDisponibles = [];
    let heure = 9;

    while (heure <= 17) {
      let heureTexte = heure.toString().padStart(2, "0");
      heuresDisponibles.push(heureTexte + ":00");
      if (heure !== 17) {
        heuresDisponibles.push(heureTexte + ":30");
      }
      heure++;
    }

    return heuresDisponibles;
  }

  function updateHeures() {
    if (!selectedDate || !coiffeur || !service) return [];
    return disponibilites
      .filter(
        (d) =>
          d.date === selectedDate &&
          d.coiffeur === coiffeur &&
          d.service === service
      )
      .map((d) => d.heure);
  }

  async function handleSubmitStep2() {
    const estValide = validateStep2();
    if (!estValide) return;

    await supprimerChoix(selectedDate, heure, service, coiffeur);
    await supprimerDisponibilitesDuJour();
    setStep(3);
  }

  function generateCalendarDays() {
    const jours = [];
    const premierJour = new Date(currentYear, currentMonth, 1).getDay();
    const joursDansLeMois = new Date(currentYear, currentMonth + 1, 0).getDate();

    let debut = 0;
    if (premierJour === 0) {
      debut = 6;
    } else {
      debut = premierJour - 1;
    }

    for (let i = 0; i < debut; i++) {
      jours.push(<div key={"empty-" + i}></div>);
    }

    for (let d = 1; d <= joursDansLeMois; d++) {
      const date = new Date(currentYear, currentMonth, d);
      const fullDate = date.toISOString().split("T")[0];
      const estAvantAujourdHui = date <= today;
      const estDimanche = date.getDay() === 0;

      const estDésactivé = estAvantAujourdHui || estDimanche;
      jours.push(
        <div
          key={d}
          className={
            styles.day +
            (selectedDate === fullDate ? " " + styles.selected : "") +
            (estDésactivé ? " " + styles.disabled : "")
          }
          onClick={() => {
            if (!estDésactivé) {
              handleDateClick(fullDate);
            }
          }}
        >
          {d}
        </div>
      );
    }
    return jours;
  }

  function validateStep1() {
    const erreurs = {};

    if (service === "") {
      erreurs.service = "Veuillez sélectionner un service.";
    }

    if (coiffeur === "") {
      erreurs.coiffeur = "Veuillez sélectionner un coiffeur.";
    }

    if (heure === "") {
      erreurs.heure = "Veuillez sélectionner une heure.";
    }

    if (!selectedDate) {
      alert("Veuillez sélectionner une date sur le calendrier.");
    }

    setErrors(erreurs);

    return Object.keys(erreurs).length === 0 && selectedDate !== null;
  }

  function validateStep2() {

    const erreurs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (nom === "") {
      erreurs.nom = "Veuillez entrer votre nom.";
    }
    if (courriel === "") {
      erreurs.courriel = "Veuillez entrer votre courriel.";
    } else {
      if (!emailRegex.test(courriel)) {
        erreurs.courriel = "Veuillez entrer un courriel valide.";
      }
    }

    if (tel === "") {
      erreurs.tel = "Veuillez entrer votre numéro de téléphone.";
    } else {
      if (!phoneRegex.test(tel)) {
        erreurs.tel = "Veuillez entrer un numéro de téléphone valide.";
      }
    }
    setErrors(erreurs);

    return Object.keys(erreurs).length === 0;
  }

  function handleSubmitStep1() {
    const estValide = validateStep1();
    if (estValide) {
      setStep(2);
    }
  }

  function handleSubmitStep2() {
    const estBon = validateStep2();

    if (!estBon) {
      return;
    }

    setReservations((prev) => {
      const copie = { ...prev };

      if (!copie[selectedDate]) {
        copie[selectedDate] = {};
      }
      if (!copie[selectedDate][coiffeur]) {
        copie[selectedDate][coiffeur] = [];
      }

      copie[selectedDate][coiffeur].push(heure);

      return copie;
    });

    setStep(3);
  }

  const monthYearLabel = new Date(currentYear, currentMonth).toLocaleString("fr-FR", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className={styles.containerBody}>
      <div className={styles.container}>
        <h1>Prendre un rendez-vous</h1>

        {step === 1 && (
          <>
            <label>Type de service :</label>
            <select value={service} onChange={(e) => { setService(e.target.value); setCoiffeur(""); }}>
              <option value="">- Sélectionner -</option>
              <option value="coiffure">Coiffure & coupe de cheveux</option>
              <option value="coloration">Coloration & balayage</option>
              <option value="rallonges">Rallonges capillaires</option>
            </select>
            {errors.service && <div className={styles.error}>{errors.service}</div>}

            <div className={styles.calendarHeader}>
              <button onClick={() => {
                if (currentMonth === 0) {
                  setCurrentMonth(11);
                  setCurrentYear((y) => y - 1);
                } else {
                  setCurrentMonth((m) => m - 1);
                }
              }}>◀</button>
              <h3>{monthYearLabel.charAt(0).toUpperCase() + monthYearLabel.slice(1)}</h3>
              <button onClick={() => {
                if (currentMonth === 11) {
                  setCurrentMonth(0);
                  setCurrentYear((y) => y + 1);
                } else {
                  setCurrentMonth((m) => m + 1);
                }
              }}>▶</button>
            </div>

            <div className={styles.calendarDays}>
              <div>Lun</div><div>Mar</div><div>Mer</div><div>Jeu</div><div>Ven</div><div>Sam</div><div>Dim</div>
            </div>
            <div className={styles.calendar}>{generateCalendarDays()}</div>

            {selectedDate && (
              <>
                <label>Coiffeur :</label>
                <select value={coiffeur} onChange={(e) => setCoiffeur(e.target.value)}>
                  <option value="">- Sélectionner -</option>

                  {serviceCoiffeurs[service]?.map((nomCoiffeur) => (
                    <option key={nomCoiffeur} value={nomCoiffeur}>
                      {nomCoiffeur}
                    </option>
                  ))}
                </select>
                {errors.coiffeur && <div className={styles.error}>{errors.coiffeur}</div>}

                <label>Heure :</label>
                <select value={heure} onChange={(e) => setHeure(e.target.value)}>
                  <option value="">- Sélectionner -</option>
                  {updateHeures().map((h) => (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  ))}
                </select>
                {errors.heure && <div className={styles.error}>{errors.heure}</div>}
              </>
            )}

            <button onClick={handleSubmitStep1}>Réserver</button>
          </>
        )}

        {step === 2 && (
          <>
            <div className={styles.summary}>
              <p>Rendez-vous le {selectedDate} à {heure} pour une {service} avec {coiffeur}.</p>
              <button onClick={() => setStep(1)}>Modifier</button>
            </div>

            <label>Nom :</label>
            <input value={nom} onChange={(e) => setNom(e.target.value)} />
            {errors.nom && <div className={styles.error}>{errors.nom}</div>}

            <label>Courriel :</label>
            <input type="email" value={courriel} onChange={(e) => setCourriel(e.target.value)} />
            {errors.courriel && <div className={styles.error}>{errors.courriel}</div>}

            <label>Téléphone :</label>
            <input type="tel" value={tel} onChange={(e) => setTel(e.target.value)} />
            {errors.tel && <div className={styles.error}>{errors.tel}</div>}

            <button onClick={handleSubmitStep2}>Soumettre</button>
          </>
        )}

        {step === 3 && (
          <div className={styles.confirmation}>
            <div className={styles.checkmark}>✔️</div>
            <p id="confirmation-text">Votre rendez-vous est le {selectedDate} à {heure} avec {coiffeur}. On vous enverra un courriel de confirmation si votre réservation est acceptée.</p>
          </div>
        )}
      </div>
    </div>
  );
};

