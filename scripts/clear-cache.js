// Скрипт очистки кэша node_modules. Запускается после установки какой-либо зависимости (см. package.json -> scripts -> postinstall)

const fs = require('fs');
const { join: joinPath } = require('path');

const cacheDir = joinPath(__dirname, '..', 'node_modules/.cache');

fs.rmSync(cacheDir, { recursive: true, force: true });

/*
    Либо установить пакет rmraf

    rimraf ./node_modules/.cache

    Работает как на винде, так и на линукс/маке
*/