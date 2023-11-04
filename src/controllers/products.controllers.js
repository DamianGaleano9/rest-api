import { getConnection } from "../database/database";

// GET PRODUCTS
const getProducts = async (req, res) => {
    try {
        const connection = await getConnection();

        const result = await connection.query(`
            SELECT
                p1.products_name,
                p1.products_description,
                p1.products_id,
                p1.products_url,
                p1.products_price
            FROM products p1
        `);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// GET SINGLE PRODUCT
const getProduct = async (req, res) => {
    try {
        const { products_id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT products_id, products_name FROM products WHERE products_id = ?", products_id);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// ADD PRODUCT
const addProducts = async (req, res) => {
    try {
        const { products_name, products_price, products_description, products_url } = req.body;

        if (products_name === undefined || products_price === undefined || products_description === undefined || products_url === undefined) {
            res.status(400).json({ message: "Bad Request. Please check your request" });
        } else {
            const connection = await getConnection();
            const product = { products_name, products_price, products_description, products_url };
            const result = await connection.query("INSERT INTO products SET ?", product);
            res.json(result);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// DELETE PRODUCT
const deleteProduct = async (req, res) => {
    try {
        const { products_id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM products WHERE products_id = ?", products_id);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// UPDATE PRODUCT
const updateProduct = async (req, res) => {
    try {
        const { products_id } = req.params;
        const { products_name, products_price, products_description, products_url } = req.body;

        if (products_id === undefined || products_name === undefined || products_price === undefined || products_description === undefined || products_url === undefined) {
            res.status(400).json({ message: "Bad Request. Please check your request" });
        } else {
            const product = { products_name, products_price, products_description, products_url };
            const connection = await getConnection();
            const result = await connection.query("UPDATE products SET ? WHERE products_id = ?", [product, products_id]);
            res.json(result);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const methods = {
    getProducts,
    addProducts,
    getProduct,
    updateProduct,
    deleteProduct,
};
