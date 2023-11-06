// // import { getConnection } from '../database/database';

// // // REGISTER

// // const registerUser = async (req, res) => {
// //     const email = req.body.email;
// //     const username = req.body.username;
// //     const password = req.body.password;

// //     try {
// //         const result = await new Promise((resolve, reject) => {
// //             getConnection.query(
// //                 "INSERT INTO users (users_name, users_email, users_password) VALUES(?, ?, ?)",
// //                 [email, username, password],
// //                 (err, result) => {
// //                     if (result) {
// //                         reject(err);
// //                     } else {
// //                         resolve(result);
// //                     }
// //                 }
// //             );
// //         });

// //         res.send(result);
// //     } catch (err) {
// //         res.send({ message: "ENTER CORRECT DETAILS" });
// //     }
// // };

// // export const methods = {
// //     registerUser
// // };
