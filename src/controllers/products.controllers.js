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

const addProducts = async (req, res) => {

    try {
        const { products_name, products_price, products_description, products_img, products_stock } = req.body;
        const connection = await getConnection();
        const product = { products_name, products_price, products_description, products_img, products_stock };

        const result = await connection.query("INSERT INTO products SET ?", product);


        res.json(result);

    } catch (err) {
        res.status(500)
        res.send(err.message);
    }

};


export const methods = {
    getProducts,
    addProducts
}