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


// GET JUST ONE USER 


const getJustOneUser = async (req, res) => {
    try {
        console.log(req.params);
        const { users_id }  = req.params
        const {connection} = await getConnection();
        
        
        const result = await connection.query("SELECT users_id, users_name FROM users WHERE users_id= ?", users_id);
        res.json(result);
    }


    catch (err) {
        res.status(500)
        res.send(err.message);
    }

};


// ADD USER 

const addUser = async(req, res) => {
    try {

        const { users_name, users_price, users_description, users_img, users_stock } = req.body;

        if (users_name === undefined || users_price === undefined || users_description === undefined || users_img === undefined || users_stock === undefined) {
            res.status(400).json({ message: "Bad Request. Please check your request" })
        }

        const connection = await getConnection();
        const product = { users_name, users_price, users_description, users_img, users_stock };
        const result = await connection.query("INSERT INTO users SET ?", product);


        res.json(result);

    } catch (err) {
        res.status(500)
        res.send(err.message);
    }
};

