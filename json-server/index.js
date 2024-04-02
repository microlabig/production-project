const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const uuid = require('uuid');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
    await new Promise(res => {
        setTimeout(res, 800);
    });
    next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = [] } = db;

        const userFromBd = users.find(user => user.username === username && user.password === password);

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// Эндпоинт для проверки существования пользователя
server.get('/check-user', (req, res) => {
    try {
        const { username } = req.query || {};

        if (!username) {
            return res.status(403).json({ message: 'User not found' });
        }

        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = [] } = db;

        const userFromBd = users.find(user => user.username === username);

        return res.json({ existed: !!userFromBd });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// Эндпоинт для регистрации пользователя
server.post('/register', (req, res) => {
    try {
        const { username, password, roles, avatar = '' } = req.body;

        const userId = uuid.v4();
        const newUser = {
            username,
            password,
            roles,
            avatar,
            features: {},
            jsonSettings: {},
            id: userId
        };
        const newProfile = {
            id: userId,
            first: username,
            lastname: username,
            age: 20,
            currency: 'EUR',
            country: 'Belarus',
            city: '',
            username,
            avatar,
        };

        // запись в БД
        router.db.get('users').push(newUser).write();
        router.db.get('profile').push(newProfile).write();

        return res.status(201).json(newUser);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    next();
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
