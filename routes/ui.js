const router = require('express').Router();
const { version } = require('../package.json');

router.get('/', (req, res) => {
    res.render('pages/index', {
        version: version,
    });
});

module.exports = router;