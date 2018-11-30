const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const db = {
    development: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'front_end_article',
        pass: '123456',
        char: 'utf8mb4'
    },
    production: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        db: 'front_end_article',
        pass: '707418',
        char: 'utf8mb4'
    }
}

console.log(db[env]);


module.exports = {
    port: 8082,
    mysql: db[env]
}