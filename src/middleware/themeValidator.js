export default function validateThemePayload(req, res, next) {
    const { name, colors } = req.body;
    if (!name) return res.status(400).json({ message: 'name is required' });
    if (!colors || typeof colors !== 'object') return res.status(400).json({ message: 'colors object is required' });
    if (!colors.primary || !colors.background || !colors.text) {
        return res.status(400).json({ message: 'colors must include primary, background, text' });
    }
    next();
}