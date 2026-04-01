import {get_all_numbers_present_db} from "../database/db.js"

function get_all_numbers(request, response){
    const numbers = get_all_numbers_present_db(); // dummy database

    response.status(200).send(numbers);
}

export default get_all_numbers;