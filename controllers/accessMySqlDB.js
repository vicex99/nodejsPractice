const dbConn = require("./../config/mysql_cars");


module.exports = {

    getData: function(req, res) {
        dbConn().query("SELECT * FROM cars_moked.mock_data;", function (err, rows) {

            if (!err) {
                res.json(rows);
            }
        });
    }
};

