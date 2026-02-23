# devswarm-test

Self-hosted [Medplum](https://www.medplum.com/) FHIR server stack using Docker Compose.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (v20+)
- [Docker Compose V2](https://docs.docker.com/compose/install/) (included with Docker Desktop)

## Quick Start

1. **Copy the environment file and adjust as needed:**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` to change passwords and settings. Defaults work for local development.

2. **Start all services:**

   ```bash
   docker compose up -d
   ```

3. **Wait for services to become healthy** (first run may take 30-60s for database migrations):

   ```bash
   docker compose ps
   ```

   All services should show `(healthy)`.

4. **Open Medplum in your browser:**

   - App: [http://localhost:3000](http://localhost:3000)
   - API: [http://localhost:8103](http://localhost:8103)
   - Health check: [http://localhost:8103/healthcheck](http://localhost:8103/healthcheck)

## Services

| Service | Description | Port |
|---------|-------------|------|
| **postgres** | PostgreSQL 16 database | 5432 |
| **redis** | Redis 7 cache | 6379 |
| **medplum-server** | Medplum FHIR API server | 8103 |
| **medplum-app** | Medplum web application | 3000 |

## Useful Commands

```bash
# View logs
docker compose logs -f

# View logs for a specific service
docker compose logs -f medplum-server

# Stop all services
docker compose down

# Stop and remove volumes (deletes all data)
docker compose down -v

# Restart a single service
docker compose restart medplum-server
```

## Configuration

All configuration is managed through environment variables in `.env`. See `.env.example` for available options and descriptions.
