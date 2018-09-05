// provide value from environment or from this file
const envOr = (key, def) => process.env[key] || def;

module.exports = exports = {
    'server': {
        'host': 'http://localhost:8080',
        'logger': {
            'debug': true,
            'logRequest': true
        },
        'acceptMimes': ['application/json'],
        'httpsPort': false,
        'httpPort': "8080",
        'mount': [
            {endpoints:
                {
                    '/api/v0':'./src/routes/v0/**/controllers/*.ts'
                }
            },
            {middlewares:'./src/middlewares/*.ts'},
            {services:'./src/services/*.ts'}
        ]
    },
    'database': {
        'name': 'default',
        'type': 'postgres',
        'username': envOr('xxx','xxxx'),
        'password': envOr('xxx','xxxx'),
        'database': envOr('xxx','xxx'),
        'host': envOr('xxx','xxx'),
        'port': envOr('xxx','xxx'),
        'synchronize': false,
        'logging': 'error',
        'cli': {
            'migrationsDir': 'migrations',
            'entitiesDir': 'src/entities'
        },
        'entities': [
            './src/entities/*.ts'
        ],
        'migrations': [
            './migrations/*.ts'
        ],
        'subscribers': [
            './src/subscribers/*.ts'
        ]
    },
    'aws': {
        'bucket': 'xxx',
        'accessKeyId': 'xxx',
        'secretAccessKey': 'xxx'
    }
}