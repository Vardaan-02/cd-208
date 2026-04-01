const numbers = new Set()

numbers.add(1);
numbers.add(10);
numbers.add(100);
numbers.add(1000);

const add_number_db = (number) => {
    numbers.add(number)
}

const is_number_present_db = (number) => {
    return numbers.has(number)
}

const delete_number_db = (number) => {
    return numbers.delete(number)
}

const get_all_numbers_present_db = () => {
    return Array.from(numbers)
}

export { get_all_numbers_present_db, is_number_present_db, add_number_db, delete_number_db }