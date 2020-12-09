import { Router } from "express";
import { signUp, login } from "../../controllers/auth.controller";
import { UserValidator } from "../../utils/validator/user.validator";

export const router: Router = Router();

router.post('/register', UserValidator.getSignUpValidator(), signUp)

router.post('/login', UserValidator.getLoginValidator(), login)
