# Проект по предмету "Технологии программирования"

## Доступные скрипты:

- запуск локального сервера разработки с HMR:

```bash
npm run dev
```

- сборка проекта:

```bash
npm run build
```

- форматирование кода:

```bash
npm run lint
```

- превью проекта из сборки на локальном сервере:

```bash
npm run preview
```

По умолчанию проекта запускается на [localhost:8080](localhost:8080)

## Сборка Docker образа и запуск Docker контейнера:

0. Проверить наличие [Docker Engine](https://docs.docker.com/engine/install/) для Linux или установить [Docker Desktop](https://www.docker.com/products/docker-desktop/) для Windows, macOS или Linux.

1. Собрать Docker образ:

```bash
docker build -t <название_образа> .
```

2. Запустить Docker контейнер:

```bash
docker run -d -p 8080:80 <название_образа>
```

Docker образ будет запущен на [localhost:8080](localhost:8080)

## Авторы:

- [@sonanted](https://github.com/sonanted)
- [@anngracea](https://github.com/anngracea)
