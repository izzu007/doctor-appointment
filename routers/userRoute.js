import express from 'express';
import { authController, loginController, registerController} from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Login Route
router.post('/login', loginController);

// Login Route
router.post('/register', registerController);

//Auth || POST
router.post('/getUserData', authMiddleware, authController)

export default router;