
exports.userAuth = (req, res, next) => {
    return req.session?.username ? next() : res.status(401).send('Invalid session');
}
