const themesEl = document.getElementById('themes');
const endpointsEl = document.getElementById('endpoints');

const endpoints = [
    { method: 'GET', path: '/api/themes', desc: 'Список всех тем' },
    { method: 'GET', path: '/api/themes/:id', desc: 'Получить тему по id' },
    { method: 'POST', path: '/api/themes', desc: 'Создать тему { name, colors: { primary, background, text } }' },
    { method: 'PUT', path: '/api/themes/:id', desc: 'Обновить тему' },
    { method: 'DELETE', path: '/api/themes/:id', desc: 'Удалить тему' },
    { method: 'GET', path: '/api/themes/:id/select', desc: 'Отдать главную страницу в выбранной теме без userId' }
];

function renderEndpoints() {
    endpointsEl.innerHTML = endpoints
        .map(ep => `<article><strong>${ep.method}</strong> <code>${ep.path}</code><div>${ep.desc}</div></article>`)
        .join('');
}

async function loadThemes() {
    const res = await fetch('/api/themes');
    const { data } = await res.json();
    themesEl.innerHTML = data
        .map(t => `<article><h3>${t.name}</h3><pre>${JSON.stringify(t.colors, null, 2)}</pre></article>`)
        .join('');
}

renderEndpoints();
loadThemes();