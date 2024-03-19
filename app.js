const express = require('express');
const path = require('path');

// Routes
//const rootRouter = require('./routes/root');
const rootRouter = require('./routes/rootPage');
const cityRouter = require('./routes/city');
const countryLanguageRouter = require('./routes/countries');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//app.use('/', rootRouter);
app.use('/', rootRouter);
app.use('/cities', cityRouter);
app.use('/countrylanguages', countryLanguageRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
