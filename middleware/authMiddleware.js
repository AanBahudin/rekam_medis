import { NotAuthenticatedError, UnathorizedError } from "./ErrorHandlerMiddleware.js"
import { verifyToken } from "../utils/jwt.js";

export const authenticatedUser = (req, res, next) => {
    const { token } = req.cookies

    if (!token) {
        throw new NotAuthenticatedError('Error')
    }
    try {
        const isTokenValid = verifyToken(token)
        req.user = { ...isTokenValid }
        next()
    } catch (error) {
        throw new NotAuthenticatedError('authenticated failed')
    }
}

// untuk menghalangi dokter mengakses resource dari admin/super admin
export const authorizedAdminPermission = (req, res, next) => {
    const { role } = req.user
    if (role === 'admin' || role === 'super admin') {
        return next()
    }
    throw new UnathorizedError('Not Authorized')
}

// untuk menghalangi admin/super admin mengakses resource dari dokter
export const authorizeDokterPermission = (req, res, next) => {
    const { role } = req.user;
    console.log(req.user);
    

    if (role !== 'Dokter') {
        throw new UnathorizedError('Not Authorized')
    }

    next()
}