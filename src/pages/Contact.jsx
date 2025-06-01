import React, { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    tel: '',
    date: '',
    heure: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const heures = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const day = selectedDate.getUTCDay();
    if (day === 0) {
      alert("Le salon est fermé le dimanche. Veuillez choisir un autre jour.");
      e.target.value = '';
      return;
    }
    handleChange(e);
  };

  const validate = () => {
    const champs = {
      nom: 'Nom complet',
      email: 'Adresse e-mail',
      tel: 'Téléphone',
      date: 'Date du rendez-vous',
      heure: 'Heure',
      service: 'Service souhaité'
    };
    const newErrors = {};
    for (const champ in champs) {
      if (!formData[champ].trim()) {
        newErrors[champ] = `Le champ ${champs[champ]} n'est pas rempli.`;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setFormData({
        nom: '',
        email: '',
        tel: '',
        date: '',
        heure: '',
        service: '',
        message: ''
      });
      setConfirmationVisible(true);
    }
  };

  return (
    <div className={styles.container}>

      <div className={styles.content}>
        <div className={styles.infoSection}>
         
          <h2 className={styles.infoTitle}>Nos informations</h2>
          <p><strong>Téléphone:</strong> 514-123-4567</p>
          <p><strong>Adresse:</strong> 123 rue des Coiffeurs, Montréal, QC</p>
          <p><strong>Email:</strong> contact@boreal.ca</p>
        </div>

        <div className={styles.formSection}>
          <h2 className={styles.title}>Prendre un rendez-vous</h2>
          <form onSubmit={handleSubmit}>
            {['nom', 'email', 'tel', 'date', 'heure', 'service', 'message'].map((field) => (
              <div key={field} className={styles.formGroup}>
                <label htmlFor={field} className={styles.label}>
                  {field === 'nom' && 'Nom complet'}
                  {field === 'email' && 'Adresse e-mail'}
                  {field === 'tel' && 'Téléphone'}
                  {field === 'date' && 'Date du rendez-vous'}
                  {field === 'heure' && 'Heure'}
                  {field === 'service' && 'Service souhaité'}
                  {field === 'message' && 'Message (facultatif)'}
                </label>
                {field === 'heure' ? (
                  <select
                    name="heure"
                    value={formData.heure}
                    onChange={handleChange}
                    className={errors.heure ? styles.inputError : styles.input}
                  >
                    <option value="">-- Sélectionnez une heure --</option>
                    {heures.map((h) => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                ) : field === 'service' ? (
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={errors.service ? styles.inputError : styles.input}
                  >
                    <option value="">-- Sélectionnez un service --</option>
                    <option value="coupe">Coupe</option>
                    <option value="coloration">Coloration</option>
                    <option value="brushing">Brushing</option>
                    <option value="soin">Soin capillaire</option>
                  </select>
                ) : field === 'message' ? (
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={styles.input}
                  ></textarea>
                ) : (
                  <input
                    type={field === 'email' ? 'email' : field === 'tel' ? 'tel' : field === 'date' ? 'date' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={field === 'date' ? handleDateChange : handleChange}
                    className={errors[field] ? styles.inputError : styles.input}
                  />
                )}
                {errors[field] && (
                  <div className={styles.error}>{errors[field]}</div>
                )}
              </div>
            ))}

            <button type="submit" className={styles.button}>
              Envoyer
            </button>
          </form>

          {confirmationVisible && (
            <div className={styles.confirmation}>
              Vous avez réservé. Une confirmation vous sera envoyée par courriel.
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
