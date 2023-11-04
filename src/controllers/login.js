import { getConnection } from '../database/database';

//LOGIN

app.post('/login', (req, res) => {
    const username = req.body.users_name;
    const password = req.body.users_password;


    getConnection.query("SELECT * FROM users WHERE username (users_email, users_name, users_password) VALUES(?, ?, ?)", [email, username, password],
        (err, result) => {
            if (result) {
                res.send(result);
            } else {
                res.send({ message: "ENTER CORRECT DETAILS" });
            }
        }

    )
})