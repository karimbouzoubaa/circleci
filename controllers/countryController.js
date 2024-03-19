
const CountryLanguage = require('../models/country');

async function listCountryLanguages(req, res) {
  try {
    const [languages, _] = await CountryLanguage.getAll();
    res.render('countries', { languages });
  } catch (error) {
    res.status(500).send('Error retrieving country languages');
  }
};


module.exports = {
  listCountryLanguages
};