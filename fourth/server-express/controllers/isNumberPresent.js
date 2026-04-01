import { is_number_present_db } from "../database/db.js";

export default function is_number_present(request, response) {
    let { number } = request.params;
    number = parseInt(number);
    const result = is_number_present_db(number);
    response.send(`${number} is ${result}`);
}