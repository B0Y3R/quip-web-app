function safeNext(handler) {
    return async (req, res, next) => {
        try {
        await handler(req, res);
        } catch (err) {
            console.error(err);

            if (err.status) {
                res.send(err.status, { message: err.message || '' });
            } else {
                res.send(500, { message: err.message || 'Whoops. An unexpected error occurred.' });
            }
        }
        
        next();
    };
}

module.exports = safeNext;
  