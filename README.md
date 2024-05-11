# Requirement
```
NodeJs 20.11.1
Mysql >= 8.3.0
phpMyAdmin (optional)
```

# Set up
## Server
- Move to server directory
```bash
cd server
```

- Create your .env file in root directory
```Dotenv
NODE_ENV=development | test | production 
PORT=<your mysql port>
DATABASE_USERNAME=<username>
DATABASE_PASSWORD=<password>
DATABASE_NAME=<database name>
DATABASE_HOST=<your host>
DATABASE_DIALECT=mysql
DATABASE_PORT=<mysql port>
LOGGING_FORMAT=<format for morgan log, check out morgan page for detail>
```

- Install packages and library
```bash
npm install
```

- Create database
```bash
npx sequelize-cli db:create
```

- Running migration
```bash
npx sequelize-cli db:migrate
```

- Start server
```bash
npm start
```

## Client
- Move to client directory
``` bash
cd client
```

- Install dependencies
```bash
npm install
```

- Run application
```bash
npm run dev
```