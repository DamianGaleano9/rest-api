import { getConnection } from '../database/database';

// GET USER 

const getUser = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM users");
        res.json(result);
    } catch (err) {
        res.status(500)
        res.send(err.message);
    }
};

// GET SINGLE USER  

const getProduct = async (req, res) => {

    try {

        console.log(req.params);
        const { users_id } = req.params
        const connection = await getConnection();
        const result = await connection.query("SELECT users_id, users_name FROM users WHERE users_id= ?", users_id);
        res.json(result);

    } catch (err) {
        res.status(500)
        res.send(err.message);
    }
};
