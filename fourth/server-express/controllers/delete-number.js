import { delete_number_db } from "../database/db.js";

const delete_number = (req, res) => {
    let {number} = req.params;
    number = parseInt(number);
    delete_number_db(number);
    res.send(`${number} is deleted`);
}

export default delete_number;