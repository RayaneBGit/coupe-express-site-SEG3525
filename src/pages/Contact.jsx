import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
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
  const today = new Date();

  const serviceCoiffeurs = {
    coiffure: ["Audrey", "Karim", "Catherine", "Julie", "Lucie"],
    coloration: ["Karim", "Catherine", "Julie"],
    rallonges: ["Audrey", "Julie", "Lucie"],
  };

  const getTimeSlots = () => {
    const slots = [];
    for (let h = 9; h <= 17; h++) {
      slots.push(`${h.toString().padStart(2, "0")}:00`);
      if (h !== 17) slots.push(`${h.toString().padStart(2, "0")}:30`);
    }
    return slots;
  };

  const updateHeures = () => {
    if (!selectedDate || !coiffeur) return [];
    const reserved = reservations[selectedDate]?.[coiffeur] || [];
    return getTimeSlots().filter((t) => !reserved.includes(t));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const generateCalendarDays = () => {
    const days = [];
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const startDay = firstDay === 0 ? 6 : firstDay - 1;

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} />);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(currentYear, currentMonth, d);
      const fullDate = date.toISOString().split("T")[0];
      const isDisabled = date <= today || date.getDay() === 0;

      days.push(
        <div
          key={d}
          className={`${styles.day} ${
            selectedDate === fullDate ? styles.selected : ""
          } ${isDisabled ? styles.disabled : ""}`}
          onClick={() => !isDisabled && handleDateClick(fullDate)}
        >
          {d}
        </div>
      );
    }

    return days;
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!service) newErrors.service = "Veuillez sélectionner un service.";
    if (!coiffeur) newErrors.coiffeur = "Veuillez sélectionner un coiffeur.";
    if (!heure) newErrors.heure = "Veuillez sélectionner une heure.";
    if (!selectedDate) alert("Veuillez sélectionner une date sur le calendrier.");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 && selectedDate;
  };

  const validateStep2 = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!nom) newErrors.nom = "Veuillez entrer votre nom.";
    if (!emailRegex.test(courriel)) newErrors.courriel = "Veuillez entrer un courriel valide.";
    if (!phoneRegex.test(tel)) newErrors.tel = "Veuillez entrer un numéro de téléphone valide.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitStep1 = () => {
    if (validateStep1()) setStep(2);
  };

  const handleSubmitStep2 = () => {
    if (!validateStep2()) return;
    setReservations((prev) => {
      const updated = { ...prev };
      if (!updated[selectedDate]) updated[selectedDate] = {};
      if (!updated[selectedDate][coiffeur]) updated[selectedDate][coiffeur] = [];
      updated[selectedDate][coiffeur].push(heure);
      return updated;
    });
    setStep(3);
  };

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
                  {serviceCoiffeurs[service]?.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                {errors.coiffeur && <div className={styles.error}>{errors.coiffeur}</div>}

                <label>Heure :</label>
                <select value={heure} onChange={(e) => setHeure(e.target.value)}>
                  <option value="">- Sélectionner -</option>
                  {updateHeures().map((h) => (
                    <option key={h} value={h}>{h}</option>
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

export default Contact;
