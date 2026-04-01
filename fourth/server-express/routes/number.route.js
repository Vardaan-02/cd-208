import { Router } from "express";
import dummy from "../controllers/dummy.controller.js";
import get_all_numbers from "../controllers/get-all-numbers.js";
import post_number from "../controllers/post-number.js";
import is_number_present from "../controllers/isNumberPresent.js";
import delete_number from "../controllers/delete-number.js";

const router = Router();

router.get('/get-all-numbers', get_all_numbers);

router.post('/post-number', post_number);

router.get('/is-number-present/:number', is_number_present);

router.delete('/delete/:number', delete_number);

export default router;