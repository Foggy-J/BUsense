const Client = require('ssh2-sftp-client');
const node = new Client();
const dayjs = require('dayjs');
const conlog = require('./console');

const { nodeAddress, nodeUsername, nodePassword } = require('../config/config.json');

function sshBackup() {
    const currentTimeDate = dayjs().format('MM.DD.YYYY-HH:mm:ss');

    node.connect({
        host: nodeAddress.toString(),
        username: nodeUsername.toString(),
        password: nodePassword.toString()
    }).then(() => {
        return node.get('/cf/conf/config.xml', `${process.cwd()}/backups/${nodeAddress}-${currentTimeDate}-config.xml`);
    }).then(() => {
        node.end();
        conlog.info(`Backup complete on ${currentTimeDate}!`);
    }).catch(err => {
       conlog.error(`SSH Error - ${err.message}`);
    });
}

function webBackup() {
    // 
}

module.exports = {
    "sshBackup": sshBackup
}