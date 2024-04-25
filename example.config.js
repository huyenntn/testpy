example.config = {
    my_environment: {
        "server": {
            "base_url": "http://lurus.in",
            "host": "localhost",
            "port": 8000
        },
        "database": {
            "username": "myuser",
            "password": "mypass",
            "host": "127.0.0.0",
            "port": 5432,
            "name": "postgres"
        }
    },
}

module.exports = example.config;