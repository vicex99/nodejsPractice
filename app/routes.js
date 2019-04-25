const access_controller = require('../controllers/accessMySqlDB');

module.exports = function (app) {
    app.get('/',(req, res) => {res.render('index.ejs')});
    app.get('/hello',(req, res) => {res.render('otro.ejs')});


    //debug

    // get json
    app.get('/cars/data', access_controller.getData);
};
