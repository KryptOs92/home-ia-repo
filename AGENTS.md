# AGENTS.md

## Project overview

IA-Casa is a self-hosted, AI-powered home management platform.

The project has two main goals:

- Build a real application for managing household documents, expenses, bills, maintenance, deadlines and home automation.
- Gain practical experience with modern software architectures, event streaming, vector databases, local AI, Kubernetes and DevOps.

## Communication

- Communicate with the developer in Italian.
- Write source code, variable names, class names, API endpoints and technical identifiers in English.
- Explain architectural decisions and the purpose of each new technology.
- Explain important commands before executing them.
- Follow a progressive, educational approach.

## Working rules

- Before starting a task, read the documentation inside `docs/`.
- Inspect the actual repository before assuming that a component has been implemented.
- Follow the development roadmap.
- Implement one development phase at a time.
- Do not implement future phases without explicit approval.
- Do not introduce new frameworks or replace agreed technologies without discussing the decision.
- Do not perform destructive operations without authorization.
- Do not commit or push changes without explicit authorization.
- Report errors, limitations and unresolved issues.
- Never claim that a test or command succeeded without executing it.

## Architecture constraints

- Use a single Git repository organized as a monorepo.
- Use pnpm Workspaces and Turborepo.
- Frontend: React, Next.js and TypeScript.
- Mobile: Capacitor and PWA.
- Backend: Express.js and TypeScript.
- Relational database: PostgreSQL.
- Vector database: Qdrant.
- Event streaming: Apache Kafka in KRaft mode.
- Document storage: local S3-compatible SeaweedFS.
- Document extraction: Docling.
- Local AI runtime: Ollama.
- Do not replace Kafka with BullMQ or Qdrant with pgvector without explicit approval.

## Development environment

- Host operating system: Windows.
- Development filesystem: WSL2 Linux.
- IDE: Visual Studio Code with WSL integration.
- Container engine: Docker Desktop.
- Use Docker Compose for local development.
- Execute Node.js and pnpm commands inside the development container.
- Avoid depending on the Node.js version installed on the host.
- Keep source code in the WSL Linux filesystem.
- Avoid creating files owned by root.
- Use environment variables for environment-specific configuration.

## Software engineering principles

- Follow SOLID, DRY, KISS and separation of concerns.
- Prefer a modular monolith for the main backend.
- Use independent workers for asynchronous processing.
- Avoid premature microservice decomposition.
- Keep controllers thin and business logic in dedicated services.
- Use repository abstractions where appropriate.
- Validate API inputs with Zod.
- Prefer strict TypeScript typing.
- Avoid unnecessary use of `any`.
- Handle errors explicitly.
- Use structured logging.
- Document public API contracts with OpenAPI.

## Event-driven architecture

- Use Kafka for asynchronous domain events.
- Use REST APIs for synchronous client requests.
- Use the Transactional Outbox Pattern for reliable event publication.
- Assume events can be delivered more than once.
- Implement idempotent consumers.
- Commit consumer offsets only according to a reliable processing strategy.
- Implement explicit retry and dead-letter handling.
- Use stable event identifiers and versioned event schemas.
- Do not send large binary documents through Kafka.
- Send document identifiers and storage references instead.

## Data management

- PostgreSQL is the authoritative source of application data.
- Qdrant is a rebuildable document search index.
- Original documents must remain in local object storage.
- Support lexical and semantic document search.
- Preserve document metadata and page references.
- Handle partial failures between PostgreSQL, Qdrant and object storage.
- Use migrations for database schema changes.

## Security and privacy

- All private documents must remain on local infrastructure.
- AI inference and embeddings must run locally.
- Do not send private data to external AI services.
- Never commit credentials, secrets, personal documents or database dumps.
- Provide `.env.example` files with placeholders only.
- Validate file uploads and enforce size limits.
- Enforce authentication and authorization on backend APIs.
- Do not expose internal databases directly to the public internet.

## DevOps

- Each custom application must have its own production Dockerfile.
- Each custom application must support independent image versioning.
- Use independent GitHub Actions workflows where appropriate.
- Publish images to GitHub Container Registry.
- Use Kubernetes for deployment.
- Use independent Helm releases for independently deployable applications.
- Use Strimzi to manage Kafka on Kubernetes.
- Use Argo CD for GitOps in a later phase.
- Do not deploy Kubernetes infrastructure prematurely.

## Testing

- Use Vitest for unit and integration tests.
- Use Playwright for end-to-end frontend tests.
- Run relevant tests, linting and type checking after changes.
- Test failure scenarios for asynchronous processing.
- Do not silently skip failing tests.

## Documentation

Maintain the following files:

- `docs/ARCHITECTURE.md`
- `docs/TECH_STACK.md`
- `docs/ROADMAP.md`
- `docs/PROGRESS.md`

Update `PROGRESS.md` after each completed development phase.

Only mark tasks as completed after their implementation has been verified.

Document architecture changes and explain why they were introduced.

## Definition of done

A task is complete when:

- The implementation satisfies the agreed requirements.
- Relevant tests and checks have been executed.
- The changes are explained to the developer.
- Relevant documentation has been updated.
- Remaining limitations or technical debt are explicitly reported.