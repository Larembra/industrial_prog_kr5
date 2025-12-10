# Theme Switcher

Простое Express-приложение для управления темами и выдачи главной страницы в выбранной теме.

## Возможности
- Базовый сервер Express
- CRUD для тем (GET/POST/PUT/DELETE)
- Параметры `req.params`, обработка тела `express.json()` и `express.urlencoded()`
- Собственный middleware
- Раздача статики через `express.static()`
- Маршрут для выбора темы и отдачи главной страницы в этой теме

## Маршруты
- `GET /api/themes` — список всех тем
- `GET /api/themes/:id` — тема по id
- `POST /api/themes` — создать тему `{ name, colors: { primary, background, text } }`
- `PUT /api/themes/:id` — обновить тему
- `DELETE /api/themes/:id` — удалить тему
- `GET /api/themes/:id/select` — отдать главную страницу, стилизованную выбранной темой

Статика: `GET /` (index.html, styles.css, main.js).

## Запуск
```bash
npm install
npm run dev
```

Открой:  
- Главная: http://localhost:3000/  
- Селект темы: http://localhost:3000/api/themes/dark/select (подставь id существующей темы)  
- API: http://localhost:3000/api/themes

## Скриншоты
<img width="965" height="948" alt="image" src="https://github.com/user-attachments/assets/eb05977f-7ca5-49b2-86c4-cc7d43fd9ddc" />

<img width="913" height="464" alt="image" src="https://github.com/user-attachments/assets/7b53a982-6493-4514-9bcf-9ec20860cd4b" />
