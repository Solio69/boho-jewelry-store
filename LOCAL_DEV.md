# Локальная разработка: запуск и мониторинг

## 1. Что установлено

- Node.js 20+
- pnpm 9
- Docker Desktop (Engine running)

## 2. Основные команды

1. Установка зависимостей:

```powershell
pnpm install
```

2. Первый запуск (поднять infra + запустить backend/frontend):

```powershell
pnpm dev:up
```

3. Остановить инфраструктуру:

```powershell
pnpm dev:stop
```

4. Логи инфраструктуры (PostgreSQL + MinIO):

```powershell
pnpm logs:infra
```

5. Prisma:

```powershell
pnpm prisma:generate
pnpm prisma:migrate -- --name init
pnpm prisma:studio
```

## 3. Адреса

- Frontend: `http://localhost:3000`
- Backend health: `http://localhost:4000/api/health`
- MinIO Console: `http://localhost:9001`
- PostgreSQL (docker): `localhost:5433`

## 4. Где смотреть состояние и логи

1. Состояние контейнеров:

```powershell
docker compose ps
```

2. Логи БД и MinIO:

```powershell
pnpm logs:infra
```

3. Логи backend/frontend:
- в терминале, где запущен `pnpm dev:up` (цветные префиксы `BACKEND` и `FRONTEND`).

## 5. Где смотреть запросы и console.log

1. HTTP-запросы frontend -> backend:
- браузер `F12` -> вкладка `Network`.

2. `console.log` в React client-компонентах:
- браузер `F12` -> `Console`.

3. `console.log` в backend (NestJS):
- терминал `pnpm dev:up` с префиксом `BACKEND`.

4. `console.log` в server-части Next.js:
- терминал `pnpm dev:up` с префиксом `FRONTEND`.

