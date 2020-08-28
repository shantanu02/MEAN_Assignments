const mysql = require('mysql');
const Promise = require('bluebird');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);

Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require('./config');

let addQuery = async (sid, name, city) => {
    try {
        const con = mysql.createConnection(config.DB_CONF);

        await con.connectAsync();

        let sql = "INSERT INTO members VALUES (?,?,?)";
        let result = await con.queryAsync(sql, [sid, name, city]);

        await con.endAsync();
        console.log(result.affectedRows);
        return result.affectedRows;
    } catch (err) {
        console.log("There is some error :", err.name);
    }

}

let addQueryJSON = async (user) => {
    try {
        const con = mysql.createConnection(config.DB_CONF);

        await con.connectAsync();

        let sql = "INSERT INTO members VALUES (?,?,?)";
        let result = await con.queryAsync(sql, [
            user.sid,
            user.name,
            user.city
        ]);

        await con.endAsync();
        console.log(result.affectedRows);
        return result.affectedRows;
    } catch (err) {
        console.log("There is some error :", err.name);
    }

}




module.exports = {
    addQuery,
    addQueryJSON
};