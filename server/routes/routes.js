import express from 'express';
import { addUser, getAllUsers, getSingleUser, getUserDetails, updateEmail } from '../controllers/userController.js';
const router = express.Router();

router.get('/', getAllUsers);
router.post('/register', addUser);
router.post('/login', getSingleUser);
router.post('/updateUserDetails', getUserDetails);


router.post('/update', updateEmail);



export default router;