import { getConnection } from '../database/database';

//LOGIN

app.post('/login', (req, res) => {
    const username = req.body.users_name;
    const password = req.body.users_password;


    getConnection.query("SELECT * FROM users WHERE users_name = ? AND users_password = ?)", [username, password],
        (err, result) => {
            if (err) {
                res.setEncoding({ err: err });
            } else {
                if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send({ message: "WRONG USERNAME" })
                }
            }
        }
    )
})