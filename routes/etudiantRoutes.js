// Importer Express et créer un routeur
const express = require('express');
const router = express.Router();

// Importer toutes les fonctions du contrôleur
const {
    getAllEtudiants,
    getEtudiantById,
    createEtudiant,
    updateEtudiant,
    deleteEtudiant,
    getEtudiantsByFiliere,
    searchEtudiants,
    getEtudiantsInactifs
} = require('../controllers/etudiantController');

// ============================================
// DÉFINITION DES ROUTES
// ============================================

// Route:  /api/etudiants
// GET  → Liste tous les étudiants
// POST → Crée un nouvel étudiant
router.route('/')
    .get(getAllEtudiants)
    .post(createEtudiant);

// ⚠️ IMPORTANT: Cette route DOIT être avant /:id
router.get('/filiere/:filiere', getEtudiantsByFiliere);

// Route de recherche par nom
router.get('/search', searchEtudiants);

// voir les etudiants inactifs
router.get('/inactifs', getEtudiantsInactifs); // Toujours avant /:id


// Route: /api/etudiants/:id
router.route('/:id')
    .get(getEtudiantById)
    .put(updateEtudiant)
    .delete(deleteEtudiant);

// Exporter le routeur
module.exports = router;
