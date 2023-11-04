import { getConnection } from '../database/database';

//REGISTER

app.post('/register', (req, res) => {
    const email = req.body.users_email;
    const username = req.body.users_name;
    const password = req.body.users_password;


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