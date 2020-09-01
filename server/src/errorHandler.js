module.exports = (error, req, res, next) => {
    res.status(error.status ? error.status : 500).json({
        message: error.message.startsWith('E11000') ? 'Slug is already in use!' : error.message,
        stack: process.env.NODE_ENV === 'production' ? '' : error.stack
    });
};