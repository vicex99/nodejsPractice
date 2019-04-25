let access_controller = require('../controllers/accessMySqlDB');

module.exports = function (app) {
    app.get('/',(req, res) => {res.render('index.ejs')});
    app.get('/hola',(req, res) => {res.render('otro.ejs')});
    app.get('/cars/access', access_controller.handle_database);
};
