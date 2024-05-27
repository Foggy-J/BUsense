const { existsSync, mkdirSync, writeFileSync } = require('fs');
const conlog = require('../utils/console');
const { exit } = require('process');

function setup() {
    conlog.info('Starting setup process...');

    // Create /backups directory if non-existent
    conlog.info('Checking if /backups directory exists...');
    if (!existsSync('./backups')) {
        conlog.info('Creating /backups directory');
        mkdirSync('./backups');
    } else {
        conlog.info('/backups directory exists');
    }

    // Create SQLite DB if non-existent
    conlog.info('Checking if SQLite DB exists...');
    if (!existsSync('./config/data.db')) {
        conlog.info('Creating data.db SQLite database');
        try {
            writeFileSync('./config/data.db', '');
        } catch (err) {
            conlog.error('Failed to create data.db SQLite database');
            exit(1);
        }
    } else {
        conlog.info('data.db SQLite database exists');
    }
}

module.exports = setup;