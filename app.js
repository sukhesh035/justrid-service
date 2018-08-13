const express = require('express');
const bodyParser = require('body-parser');

const app = express();
/**
 * Start Express server.
 */
app.listen(9000, () => {
    console.log('%s App is running at http://localhost:%d in %s mode');
});

module.exports = app;