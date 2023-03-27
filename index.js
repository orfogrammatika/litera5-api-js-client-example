const L5 = require('litera5-api-js-client');
const Logger = require('js-logger');
const cfg = require('./cfg');

/*
Для начала инициализируем API настройками.

В случае необходимости отладки, увеличиваем количество отображаемых сообщений
уровнем Logger.DEBUG
 */
const api = L5.createApi(cfg, Logger.INFO);

/*
API настроено, можно вызывать методы. Например, посмотрим текущие настройки.
 */
api
    .setup({})
    .then(function (resp) {
        /*
        Если параметры для входа настроены верно, то мы получим на экране список текущих настроек
         */
        console.log('success:', resp);
    })
    .catch(function (error) {
        /*
        Если что-то пошло не так, то увидим сообщение об ошибке
         */
        console.error('error:', error);
        /*
        И дополнительно выведем человекочитаемое сообщение от ошибке переданное сервером
         */
        if (error.text) {
            error.text().then(function (txt) {
                console.log('text:', txt);
            });
        }
    });
