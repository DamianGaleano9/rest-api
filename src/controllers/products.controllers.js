import { getConnection } from "../database/database";

// GET PRODUCTS


const getProducts = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(`
            SELECT products_name, products_description, products_id, products_img, products_price, products_stock
            FROM products
            WHERE (products_name, products_id) IN (
                SELECT products_name, MAX(products_id) AS max_id
                FROM products
                GROUP BY products_name
            )
        `);
        res.json(result);

    } catch (err) {
        res.status(500)
        res.send(err.message);
    }
};



// GET SINGLE PRODUCT 

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


// ADD PRODUCT

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


// DELETE PRODUCT

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



// UPDATE PRODUCT 

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