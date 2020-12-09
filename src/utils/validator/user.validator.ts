import { check, ValidationChain } from "express-validator";

export class UserValidator {

    static getSignUpValidator(): ValidationChain[] {
        return [
            check('email', "validation:signUp:emailIsIncorrect").trim().isEmail(),
            check('name', "validation:signUp:name").not().isEmpty(),
            check('password',
                "validation:signUp:PasswordNotValid")
                .trim()
                .isLength({ min: 8 })
        ];
    }

    static getLoginValidator(): ValidationChain[] {
        return [
            check('email', 'Enter a valid email.').trim().not().isEmpty().isEmail(),
            check('password', 'Invalid password.').trim().not().isEmpty()
        ]
    }
}
