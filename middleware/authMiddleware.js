import { NotAuthenticatedError, UnathorizedError } from "./ErrorHandlerMiddleware.js"
import { verifyToken } from "../utils/jwt.js";

export const authenticatedUser = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        throw new NotAuthenticatedError('authentication invalid');
    }

    try {
        const { userId, role } = verifyToken(token)
        req.user = { userId, role };
        next()
    } catch (error) {
        throw new NotAuthenticatedError('authentication invalid');   
    }
}

export const authorizePermissions = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new UnathorizedError('Unauthorized to access this route');
        }
        next();
    }
}