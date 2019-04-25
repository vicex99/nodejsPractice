const accessMysql = require('mysql');

exports.handle_database = function (req,res) {

    const pool = accessMysql.createPool({
        host: '127.0.1.1',
        user: 'root',
        password: 'root',
        database: 'cars_moked',
        debug: false
    });

    pool.getConnection(function (err, connection) {
        if (err) {

            res.json({"code": 100, "status": "Error in connection database"});
        }

        console.log('connected as id ' + connection.threadId);

        connection.query("SELECT * FROM cars_moked.mock_data;", function (err, rows) {
            connection.release();
            if (!err) {
                res.json(rows);
            }
        });

        connection.on('error', function (err) {
            res.json({"code": 100, "status": "Error in connection database: " + err.message});

        });
    });
};



