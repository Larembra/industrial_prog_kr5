const themes = new Map();

const defaults = [
    { id: 'light', name: 'Light', colors: { primary: '#1976d2', background: '#ffffff', text: '#0f172a' } },
    { id: 'dark', name: 'Dark', colors: { primary: '#8b5cf6', background: '#0b1224', text: '#f8fafc' } }
];

defaults.forEach(t => themes.set(t.id, t));

export default {
    all: () => Array.from(themes.values()),
    get: id => themes.get(id),
    save: theme => themes.set(theme.id, theme),
    delete: id => themes.delete(id)
};