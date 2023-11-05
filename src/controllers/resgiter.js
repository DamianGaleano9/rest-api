import { getConnection } from '../database/database';

//REGISTER

app.post('/register', (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;


    getConnection.query("INSERT INTO users (users_email, users_name, users_password) VALUES(?, ?, ?)", [email, username, password],
        (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send({ message: "ENTER CORRECT DETAILS" });
            }
        }

    )
})