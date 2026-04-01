import { add_number_db } from "../database/db.js";

export default function post_number(request, response) {
    const { number } = request.body;

    add_number_db(number);
    response.send(`${number} has been added to db`);
}