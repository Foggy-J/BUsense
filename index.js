const express = require('express');
const app = express();
const { serverPort } = require('./config/config.json');

// Custom Console Library
const conlog = require('./utils/console');

// Remove Express Header on Responses
app.disable('x-powered-by');

// Set ejs as View Engine for Express
app.set('view engine', 'ejs');

// Add Routing Modules
const uiRoutes = require('./routes/ui');
app.use('/ui', uiRoutes);

// Redirect root to UI
app.get('/', (req, res) => {
    res.redirect('/ui');
});

app.listen(serverPort, () => {
    conlog.welcome(
        `BUsense has started successfully on port ${serverPort}!`
    );
    conlog.welcome(
        `Created by Foggy -> https://github.com/Foggy-J/BUsense\n`
    );
});