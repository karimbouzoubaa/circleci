const express = require('express');
const router = express.Router();
const countryLanguageController = require('../controllers/countryController');


router.get('/', countryLanguageController.listCountryLanguages);

module.exports = router;
