// server.js
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const FILE_PATH = './reservations.json';

// Lire les réservations
app.get('/reservations', (req, res) => {
  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) return res.status(500).send("Erreur de lecture.");
    res.send(JSON.parse(data || '{}'));
  });
});

// Enregistrer une nouvelle réservation
app.post('/reservations', (req, res) => {
  const { date, coiffeur, heure } = req.body;

  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    let reservations = {};
    if (!err && data) reservations = JSON.parse(data);

    if (!reservations[date]) reservations[date] = {};
    if (!reservations[date][coiffeur]) reservations[date][coiffeur] = [];

    reservations[date][coiffeur].push(heure);

    fs.writeFile(FILE_PATH, JSON.stringify(reservations, null, 2), (err) => {
      if (err) return res.status(500).send("Erreur d'écriture.");
      res.send({ success: true });
    });
  });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
