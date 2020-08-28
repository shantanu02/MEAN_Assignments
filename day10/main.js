const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const add = require('./add');
const read = require('./read');


app.get("/adduser", async (req, res) => {
    try {
        const i = req.query.sid;
        const id = parseInt(i);
        const na = req.query.name;
        const ci = req.query.city;

        await add.addQueryJSON({
            sid: id,
            name: na,
            city: ci
        });
        const mj = {
            message: "success"
        };
        res.json(mj)

    } catch (err) {
        console.log(err.name);
    }

});


// app.get("/users", async (req, res) => {
//     try {
//         const result = await read.readQuery();
//         res.json(result);

//     } catch (err) {
//         console.log(err);
//     }

// });


app.post("/adduser", async (req, res) => {
    try {
        const i = req.body.sid;
        const id = parseInt(i);
        const na = req.body.name;
        const ci = req.body.city;

        await add.addQueryJSON({
            sid: id,
            name: na,
            city: ci
        });


        res.json({
            mesage: "Success"
        });

    } catch (err) {

        res.json({
            mesage: "Failure"
        });

    }
});





app.listen(3000);