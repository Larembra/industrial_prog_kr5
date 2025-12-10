export default function requestLogger(req, res, next) {
    req.requestTime = Date.now();
    next();
}