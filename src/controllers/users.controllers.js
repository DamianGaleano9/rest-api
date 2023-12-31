import { getConnection } from '../database/database';
// import express from 'express';


// GET USER 

const getUsers = async (req, res) => {
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

const getUser = async (req, res) => {

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

// ADD USER

const addUser = async (req, res) => {

    try {

        const { users_name, users_email, users_password } = req.body;

        if (users_name === undefined || users_email === undefined || users_password === undefined) {
            res.status(400).json({ message: "Bad Request. Please check your request" })
        }

        const connection = await getConnection();
        const user = { users_name, users_email, users_password };
        const result = await connection.query("INSERT INTO users SET ?", user);


        res.json(result);

    } catch (err) {
        res.status(500)
        res.send(err.message);
    }
};


// DELETE USER

const deleteUser = async (req, res) => {

    try {

        const { users_id } = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM users WHERE users_id= ?", users_id);
        res.json(result);

    } catch (err) {
        res.status(500)
        res.send(err.message);
    }
};

// UPDATE USER 

const updateUser = async (req, res) => {

    try {
        const { users_id } = req.params
        const { users_name, users_email, users_password } = req.body

        if (users_id === undefined || users_name === undefined || users_email === undefined || users_password === undefined) {
            res.status(400).json({ message: "Bad Request. Please check your request" })
        }

        const user = { users_id, users_name, users_email, users_password };

        const connection = await getConnection();
        const result = await connection.query("UPDATE users SET ? WHERE users_id = ?", [user, users_id]);
        res.json(result);

    } catch (err) {
        res.status(500)
        res.send(err.message);
    }
};



const register = async (req, res) => {

    try {

        const { users_name, users_email, users_password } = req.body;

        if (users_name === undefined || users_email === undefined || users_password === undefined) {
            res.status(400).json({ message: "Bad Request. Please check your request" })
        }

        const connection = await getConnection();
        const user = { users_name, users_email, users_password };
        const result = await connection.query("INSERT INTO users SET ?", user);


        res.json(result);

    } catch (err) {
        res.status(500)
        res.send(err.message);
    }
};

const login = async (req, res) => {

    try {
        const username = req.body.username;
        const password = req.body.password;

        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM users WHERE users_name = ? AND users_password = ?", [username, password]);
            if (result.length > 0) {
                res.send({ message: "LOGGIN SUCCESSFULL" });
            } else {
                res.send({ message: "WRONG USERNAME OR PASSWORD" });
            }
        
    } catch (err) {
        res.status(500).send(err.message);
    }

};









// Exporta tus controladores
export const methods = {
    getUsers,
    addUser,
    getUser,
    updateUser,
    deleteUser,
    register,
    login
};
