const fs = require('fs')
const path = require('path')
const {
    mysql: config
} = require('../config')

const DB_FILE_NAME = process.argv[2];

console.log('\n======================================')
console.log(`开始初始化数据库... ${DB_FILE_NAME}`)

const DB = require('knex')({
    client: 'mysql',
    connection: {
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.pass,
        database: config.db,
        charset: config.char,
        multipleStatements: true
    }
})

console.log(`准备读取 SQL 文件： ${DB_FILE_NAME}.sql`)

// 读取.sql 文件内容
const content = fs.readFileSync(`${DB_FILE_NAME}.sql`, 'utf8');

console.log('开始执行 SQL 文件...')

// 执行 .sql 文件内容
DB.raw(content).then((res) => {
    console.log('数据库初始化成功');
    process.exit(0);
}).catch((err) => {
    throw new Error(err);
})