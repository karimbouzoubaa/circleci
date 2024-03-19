const db = require('./db');

class CountryLanguage {
  static getAll() {
    const sql = 'SELECT country.Code, country.Name, countrylanguage.Language, countrylanguage.IsOfficial, countrylanguage.Percentage FROM country JOIN countrylanguage ON country.Code = countrylanguage.CountryCode';
    return db.query(sql);
  }
}

module.exports = CountryLanguage;
