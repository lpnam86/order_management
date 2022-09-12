

export const checkToken = (req, res, next) => {
    try {
        const { authorization } = req.headers
        if (authorization) {
            const token = '#VNTRIP20!9@4749'
            if (authorization === `Bearer ${token}`) {
                next()
            } else {
                throw new Error('Wrong token!')
            }
        } else {
            throw new Error('Fail to authorize!')
        }
    } catch (error) {
        throw error
    }
}