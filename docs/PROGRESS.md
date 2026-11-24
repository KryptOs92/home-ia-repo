# IA-Casa — Project Progress

Last recorded update: 2026-11-24.

## Current phase

Phase 0 / Phase 1 — Development environment and monorepo initialization.

## Current environment

| Component | Status |
|---|---|
| Operating system | Windows |
| Development environment | WSL |
| IDE | VS Code |
| Docker Desktop | Running |
| GitHub repository | Created |
| Repository name | ia-casa |
| Repository architecture | Monorepo |
| Local repository | Cloned inside WSL |
| Development workspace container | Successfully started |
| Host Node.js | 12.22.9, obsolete |
| Container Node.js | Expected 24.x, verification pending |
| Container pnpm | Expected 10.x, verification pending |

## Completed operations

- [x] Defined project architecture.
- [x] Selected Apache Kafka instead of BullMQ.
- [x] Selected Qdrant instead of pgvector.
- [x] Selected PostgreSQL.
- [x] Selected local S3-compatible object storage.
- [x] Selected Next.js and Express.js.
- [x] Selected Capacitor and PWA.
- [x] Selected monorepo architecture.
- [x] Selected independent Helm releases.
- [x] Created GitHub repository.
- [x] Cloned repository inside WSL.
- [x] Opened repository in VS Code.
- [x] Successfully executed Docker Compose build and startup.
- [x] Created project documentation files.

## Expected initial directories

```text
apps/frontend/
apps/backend/
workers/
services/
packages/
infrastructure/docker/
infrastructure/helm/
.github/workflows/
docs/
```

Verify actual directories against the repository.

## Expected development Dockerfile

Path:

`infrastructure/docker/Dockerfile.dev`

```dockerfile
FROM node:24-bookworm-slim

RUN npm install -g pnpm@10

WORKDIR /workspace

CMD ["sleep", "infinity"]
```

This image provides the initial Node.js development environment.

The exact pnpm version will be pinned after verification.

## Expected Docker Compose configuration

Path:

`compose.yaml`

```yaml
name: ia-casa

services:
  workspace:
    build:
      context: .
      dockerfile: infrastructure/docker/Dockerfile.dev

    working_dir: /workspace

    user: "${LOCAL_UID:-1000}:${LOCAL_GID:-1000}"

    environment:
      HOME: /tmp

    volumes:
      - .:/workspace

    ports:
      - "127.0.0.1:3000:3000"
      - "127.0.0.1:4000:4000"

    stdin_open: true
    tty: true
```

The workspace container is a temporary shared development environment.

Future applications will have independent development and production containers.

## Last successful command reported by developer

```bash
docker-compose up -d --build
```

The developer confirmed that the command completed successfully.

Prefer the modern Docker Compose command in future instructions:

```bash
docker compose up -d --build
```

## Next immediate task

Verify the actual repository and the running workspace container.

Execute:

```bash
pwd
git status
docker compose ps
```

Verify the runtime inside the container:

```bash
docker compose exec workspace node --version
docker compose exec workspace npm --version
docker compose exec workspace pnpm --version
```

Inspect:

- package.json
- pnpm-workspace.yaml
- pnpm-lock.yaml
- turbo.json
- compose.yaml
- infrastructure/docker/Dockerfile.dev
- .gitignore

Some of these files may not exist yet.

Do not overwrite existing configuration without inspection.

## Pending monorepo tasks

- [ ] Verify container runtime versions.
- [ ] Initialize package.json if missing.
- [ ] Configure pnpm Workspaces if missing.
- [ ] Install Turborepo if missing.
- [ ] Configure turbo.json.
- [ ] Pin exact package manager version.
- [ ] Verify permissions.
- [ ] Verify workspace installation.
- [ ] Review initial project configuration.
- [ ] Request approval before first commit.

## Target root package.json

```json
{
  "name": "ia-casa",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "test": "turbo run test"
  }
}
```

The packageManager field must be added using the actual installed pnpm version.

## Target pnpm-workspace.yaml

```yaml
packages:
  - "apps/*"
  - "workers/*"
  - "services/*"
  - "packages/*"
```

## Target turbo.json

```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [
        ".next/**",
        "!.next/cache/**",
        "out/**",
        "dist/**"
      ]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "test": {
      "dependsOn": ["^build"]
    }
  }
}
```

These configurations were proposed but have not been confirmed as implemented.

## Components not yet confirmed as implemented

- pnpm Workspaces.
- Turborepo.
- Next.js frontend.
- Express backend.
- PostgreSQL.
- Kafka.
- Qdrant.
- SeaweedFS.
- Docling.
- Ollama.
- Keycloak.
- Capacitor.
- GitHub Actions.
- Kubernetes.
- Helm.
- Strimzi.
- Argo CD.
- Monitoring infrastructure.

## Open technical decisions

- Exact dependency and container image versions.
- Final Node.js Kafka client.
- Sparse embedding encoder.
- Production server configuration.
- Production persistent storage.
- Backup strategy implementation.
- Private remote access configuration.
- Mobile signing and distribution.
- Exact resource requirements.

## Progress maintenance rules

Update this file after every completed task.

Record:

- Date.
- Completed operation.
- Modified files.
- Commands executed.
- Verification results.
- Remaining issues.
- Next immediate task.

Do not mark planned or unverified work as completed.

The actual repository always takes precedence over this progress document.