const express = require('express');
const app = express();
const logger = require('./middleware');
const api = require('./api/index');

app.use(logger);
app.use('/api', api);

app.get('/', (req, res) => {
    res.send('Hellow World!');
})

app.listen(8080, () => {
    console.log(`Listening on PORT 8080`);
});