# Первая часть практической реализации

## Инициализация проекта и базовая инфраструктура

На данном этапе подготовлена базовая инфраструктура проекта чат-бота для поддержки пользователей научного портала.

Выполнено:

- создана структура `backend/` и `frontend/`;
- backend подготовлен на Node.js, TypeScript и Express;
- frontend подготовлен на React, TypeScript и Vite;
- добавлен технический endpoint `GET /health`;
- добавлены минимальные тесты Vitest и Supertest;
- настроены ESLint и Prettier;
- добавлены общие npm scripts для lint, tests и build;
- добавлен базовый GitHub Actions workflow `lint -> tests -> build`;
- зафиксировано использование Node.js 24 LTS.

На этом этапе намеренно не реализуются Dialogflow CX, SQLite, webhook и функциональные сценарии чат-бота. Они относятся к следующим этапам рабочего плана.

## Первый запуск

Из корня репозитория:

```bash
npm install
npm run lint
npm test
npm run build
```

Backend:

```bash
npm run dev:backend
```

Проверка:

```text
http://localhost:3000/health
```

Ожидаемый ответ:

```json
{
  "status": "ok",
  "service": "science-portal-backend"
}
```

Frontend (во втором терминале):

```bash
npm run dev:frontend
```

Открыть:

```text
http://localhost:5173
```
