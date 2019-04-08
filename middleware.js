const logger = (req, res, next) => {
    console.log(`${req.method} request from ${req.ip} for ${req.url}`);
    next();
}

module.exports = logger;