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

        const { products_name, products_price, products_description, products_img, products_stock } = req.body; 

        if (products_name === undefined || products_price === undefined || products_description === undefined || products_img === undefined || products_stock === undefined) {
            res.status(400).json({ message: "Bad Request. Please check your request" })
        }

        const connection = await getConnection();
        const product = { products_name, products_price, products_description, products_img, products_stock };
        const result = await connection.query("INSERT INTO products SET ?", product);


        res.json(result);

    } catch (err) {
        res.status(500)
        res.send(err.message);
    }
};


const deleteProduct = async (req, res) => {

    try {

        const { products_id } = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM products WHERE products_id= ?", products_id);
        res.json(result);

    } catch (err) {
        res.status(500)
        res.send(err.message);
    }
};



const updateProduct = async (req, res) => {

    try {
        const { products_id } = req.params
        const { products_name, products_price, products_description, products_img, products_stock } = req.body

        if (products_id === undefined || products_name === undefined || products_price === undefined || products_description === undefined || products_img === undefined || products_stock === undefined) {
            res.status(400).json({ message: "Bad Request. Please check your request" })
        }

        const product = { products_id, products_name, products_price, products_description, products_img, products_stock };
        
        const connection = await getConnection();
        const result = await connection.query("UPDATE products SET ? WHERE products_id = ?", [product, products_id]);
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
    updateProduct,
    deleteProduct,
}