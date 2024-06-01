const router = require('express').Router();
const { version } = require('../package.json');
const { nodeAddress, backupInterval } = require('../config/config.json');

router.get('/', (req, res) => {
    res.render('pages/index', {
        version: version,
        host: nodeAddress,
        interval: backupInterval,
    });
});

module.exports = router;