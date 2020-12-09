import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import { authService } from "../services/entities/auth.service";
import { ErrorHandler } from "../handlers/error.handler";

export const signUp = async (req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(errors.array())
    }

    try {
        const newUser = await authService.signUp(req.body);
        res.json({
            data: newUser,
        });
    } catch (e) {
        throw new ErrorHandler(e, 422);
    }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(errors.array());
    }

    try {
        const user = await authService.login(req.body.email, req.body.password);

        const token = jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email
        }, "secret");

        res.json({
            data: user,
            token: token
        })
    } catch (e) {
        throw new ErrorHandler('User not exist', 400)
    }
}

