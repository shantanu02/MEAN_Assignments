const mysql = require('mysql');
const Promise = require('bluebird');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);

Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require('./config');


let readQuery = async (members) => {
    try {
        const con = mysql.createConnection(config.DB_CONF);

        await con.connectAsync();

        let sql = "SELECT * FROM members WHERE city = ? OR name = ?";
        let result = await con.queryAsync(sql, [
            members.city,
            members.name
        ]);

        await con.endAsync();
        console.log(result);
        return result;
    } catch (err) {
        console.log("There is some error :", err.name);
    }

}

module.exports = {
    readQuery
};