import express from "express";
import morgan from "morgan";
// import { getConnection } from '../database/database';


// Routes 
import ProductsRoute from "./routes/products.routes";
import UsersRoute from "./routes/users.routes";
// import RegisterRoute from "./routes/register.routes";
// import LoginRoute from "./routes/login.routes";


const app = express();
const cors = require('cors');


// Settings
app.set("port", 4000);



/////////////

// const  express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');


// const app = express();


// app.use(express.json());
// app.use(cors());


// const con = mysql.createConnection(
//     {
//         user: 'root',
//         host: 'localhost',
//         password: "",
//         database: "my database"


//     }
// )

// app.post('/register', (req, res) => {
//     const email = req.body.email;
//     const username = req.body.username;
//     const password = req.body.password;

//     con.query("INSERT INTO users(users_name, users_email, users_password) VALUES(?, ?, ?)", [email, username, password],
//         (err, result) => {
//             if (result) {
//                 res.send(result);
//             } else {
//                 res.send({ message: "ENTER CORRECT ASKED DETAILS" })
//             }
//         }
//     )

// })



// app.post('/login', (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     getConnection.query("SELECT * FROM users WHERE users_name = ? AND password = ?", [username, password],
//         (err, result) => {
//             if (err) {
//                 req.setEncoding({ err: err });
//             } else {
//                 if (result.length > 0) {
//                     res.send(result)
//                 } else {
//                     res.send({ message: "WRONG USERNAME OR PASSWORD" })
//                 }
//             }
//         }
//     )
// })


// app.listen(3001, () => {
//     console.log('Runnig Backend server');

// }
// )
////////////////////////////////////////////////////////////////




// Middlewares 
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/products", ProductsRoute)
app.use("/api/users", UsersRoute)
// app.use("/api/register", UsersRoute)


// app.use("/api/login", UsersRoute)




export default app;