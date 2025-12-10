import { nanoid } from 'nanoid';
import themesStore from '../data/themesStore.js';
import preferenceStore from '../data/preferenceStore.js';

export const listThemes = (req, res) => {
    res.json({ data: themesStore.all() });
};

export const getTheme = (req, res) => {
    const theme = themesStore.get(req.params.id);
    if (!theme) return res.status(404).json({ message: 'Theme not found' });
    res.json({ data: theme });
};

export const createTheme = (req, res) => {
    const id = nanoid(8);
    const theme = { id, name: req.body.name, colors: req.body.colors };
    themesStore.save(theme);
    res.status(201).json({ data: theme });
};

export const updateTheme = (req, res) => {
    const exists = themesStore.get(req.params.id);
    if (!exists) return res.status(404).json({ message: 'Theme not found' });
    const updated = { ...exists, name: req.body.name, colors: req.body.colors };
    themesStore.save(updated);
    res.json({ data: updated });
};

export const deleteTheme = (req, res) => {
    const removed = themesStore.delete(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Theme not found' });
    res.json({ message: 'Deleted' });
};

export const selectTheme = (req, res) => {
    const theme = themesStore.get(req.params.id);
    if (!theme) return res.status(404).json({ message: 'Theme not found' });
    preferenceStore.setDefault(theme.id);
    res.status(200).send(renderThemedPage(theme));
};

function renderThemedPage(theme) {
    const { primary, background, text } = theme.colors;
    return `<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Тема: ${theme.name}</title>
  <style>
    :root { --primary: ${primary}; --background: ${background}; --text: ${text}; }
    body { margin: 0; padding: 24px; font-family: Inter, system-ui, -apple-system, sans-serif; background: var(--background); color: var(--text); }
    main { max-width: 720px; margin: 0 auto; }
    a { color: var(--primary); }
    button { background: var(--primary); color: var(--background); border: none; padding: 10px 14px; border-radius: 8px; cursor: pointer; }
    pre { background: rgba(0,0,0,0.04); padding: 12px; border-radius: 8px; overflow: auto; }
  </style>
</head>
<body>
  <main>
    <h1>Текущая тема: ${theme.name}</h1>
    <p>Цвета:</p>
    <pre>${JSON.stringify(theme.colors, null, 2)}</pre>
    <p><a href="/">Вернуться на главную</a></p>
  </main>
</body>
</html>`;
}