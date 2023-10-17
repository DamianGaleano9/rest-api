import { getConnection } from "../database/database";


const getProducts = async (req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM products");
        res.json(result);

    } catch (err) {
        res.status(500)
        res.send(err.message);
    }


};


const getProduct = async (req, res) => {

    try {

        console.log(req.params);
        const { products_id } = req.params
        



        const connection = await getConnection();
        const result = await connection.query("SELECT products_id, products_name FROM products WHERE products_id= ?", products_id);
        res.json(result);

    } catch (err) {
        res.status(500)
        res.send(err.message);
    }


};





const addProducts = async (req, res) => {

    try {

        const { products_name, produc, products_stock } = req.body; ts_price, products_description, products_img


        if (products_name === undefined || products_price === undefined || products_description === undefined || products_img === undefined || products_stock === undefined) {
            res.status(400).json({ message: "Bad Request. Please check your request" })
        }

        const connection = await getConnection();
        const product = { products_name, products_price, products_description, products_img, products_stock };

        const result = await connection.query("INSERT INTO products SET ?", product);


        res.json(me);

    } catch (err) {
        res.status(500)
        res.send(err.message);
    }

};



const deleteProduct = async (req, res) => {

    try {

        console.log(req.params);
        const { products_id } = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM products WHERE products_id= ?", products_id);
        res.json(result);

    } catch (err) {
        res.status(500)
        res.send(err.message);
    }


};


export const methods = {
    getProducts,
    addProducts,
    getProduct,
    deleteProduct
}