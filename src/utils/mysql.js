import knex from 'knex';
import config from '../config';

const mysql = knex({
    client: 'mysql',
    connection: {
        host: config.mysql.host,
        port: config.mysql.port,
        user: config.mysql.user,
        password: config.mysql.pass,
        database: config.mysql.db,
        charset: config.mysql.char
    }
})

module.exports = mysql;