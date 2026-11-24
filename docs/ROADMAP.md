# IA-Casa — Development Roadmap

## Development strategy

The project must be implemented progressively.

Each phase must produce a working and verifiable result.

Do not start the next phase until the current phase has been validated.

## Phase 0 — Development environment

- [x] Create private GitHub repository.
- [x] Clone repository inside WSL.
- [x] Open repository with VS Code.
- [x] Create initial directory structure.
- [x] Create development Dockerfile and Docker Compose configuration.
- [x] Start development workspace container.
- [ ] Verify Docker and WSL configuration.
- [ ] Verify Node.js, npm and pnpm inside the container.

Acceptance criteria: development workspace is running and required commands work.

## Phase 1 — Monorepo initialization

- [ ] Initialize root package.json.
- [ ] Configure pnpm Workspaces.
- [ ] Install Turborepo.
- [ ] Configure turbo.json.
- [ ] Configure shared TypeScript settings.
- [ ] Configure ESLint and Prettier.
- [ ] Review gitignore and Docker build context.
- [ ] Verify monorepo commands.
- [ ] Create initial Git commit after approval.

Acceptance criteria: workspace dependencies and shared development commands operate correctly.

## Phase 2 — Frontend foundation

- [ ] Initialize Next.js inside apps/frontend.
- [ ] Configure React and TypeScript.
- [ ] Configure Tailwind CSS.
- [ ] Install shadcn/ui.
- [ ] Configure static export compatibility.
- [ ] Create responsive application layout.
- [ ] Create sidebar.
- [ ] Create dashboard home page.
- [ ] Configure API client.
- [ ] Verify hot reload.

Acceptance criteria: frontend dashboard is accessible at localhost:3000.

## Phase 3 — Backend foundation

- [ ] Initialize Express inside apps/backend.
- [ ] Configure TypeScript.
- [ ] Configure environment variables.
- [ ] Create modular folder structure.
- [ ] Configure logging.
- [ ] Configure centralized error handling.
- [ ] Add health check endpoint.
- [ ] Configure CORS.
- [ ] Add OpenAPI documentation.
- [ ] Add initial tests.

Acceptance criteria: backend health endpoint responds successfully.

## Phase 4 — Docker application architecture

- [ ] Create dedicated frontend Dockerfile.
- [ ] Create dedicated backend Dockerfile.
- [ ] Configure development containers.
- [ ] Configure production container builds.
- [ ] Configure Docker networking.
- [ ] Configure health checks.
- [ ] Connect frontend to backend.
- [ ] Verify independent application builds.

Acceptance criteria: frontend and backend run in independent containers and communicate successfully.

## Phase 5 — PostgreSQL

- [ ] Add PostgreSQL to Docker Compose.
- [ ] Configure persistent volume.
- [ ] Configure Drizzle ORM.
- [ ] Create database package.
- [ ] Configure migrations.
- [ ] Create initial application schema.
- [ ] Test database connection.

Acceptance criteria: application can execute migrations and persist data.

## Phase 6 — Authentication

- [ ] Add Keycloak.
- [ ] Configure realm.
- [ ] Configure frontend and backend clients.
- [ ] Implement login.
- [ ] Implement logout.
- [ ] Implement token validation.
- [ ] Implement authorization.
- [ ] Protect frontend routes and API endpoints.

Acceptance criteria: authenticated users can access protected features.

## Phase 7 — Apache Kafka

- [ ] Add Kafka in KRaft mode.
- [ ] Configure persistent storage.
- [ ] Add Kafbat UI.
- [ ] Select and configure Node.js Kafka client.
- [ ] Create shared Kafka package.
- [ ] Create shared event schemas.
- [ ] Implement test producer.
- [ ] Implement test consumer.
- [ ] Configure consumer groups.
- [ ] Test event publication and consumption.
- [ ] Implement Transactional Outbox.
- [ ] Implement Outbox Publisher.
- [ ] Implement retry and dead-letter strategy.

Acceptance criteria: a database transaction can reliably produce an event consumed by an independent worker.

## Phase 8 — Document management

- [ ] Add SeaweedFS.
- [ ] Configure S3-compatible storage.
- [ ] Create document database schema.
- [ ] Implement file upload endpoint.
- [ ] Validate uploads.
- [ ] Calculate checksums.
- [ ] Implement document listing.
- [ ] Implement document categories.
- [ ] Implement download.
- [ ] Implement document deletion workflow.
- [ ] Publish document.uploaded events.
- [ ] Create document management frontend.

Acceptance criteria: documents can be uploaded, listed, downloaded and stored locally.

## Phase 9 — Document processing

- [ ] Create document-worker application.
- [ ] Implement Kafka consumer.
- [ ] Add Python Docling service.
- [ ] Implement text extraction.
- [ ] Implement OCR.
- [ ] Implement document chunking.
- [ ] Preserve document and page metadata.
- [ ] Implement processing status.
- [ ] Implement idempotent processing.
- [ ] Handle processing failures.

Acceptance criteria: uploaded documents are automatically converted into searchable text chunks.

## Phase 10 — Vector search and AI

- [ ] Add Ollama.
- [ ] Download and configure BGE-M3.
- [ ] Add Qdrant.
- [ ] Create document collection.
- [ ] Generate dense embeddings.
- [ ] Implement sparse retrieval encoder.
- [ ] Index document chunks.
- [ ] Implement semantic search.
- [ ] Implement lexical search.
- [ ] Implement hybrid search.
- [ ] Implement metadata filters.
- [ ] Implement reindexing and deletion.
- [ ] Create document search interface.
- [ ] Verify search quality with Italian documents.

Acceptance criteria: users can retrieve relevant documents using keywords and natural language.

## Phase 11 — Mobile application

- [ ] Configure PWA manifest.
- [ ] Configure service worker.
- [ ] Verify Next.js static export.
- [ ] Configure Capacitor.
- [ ] Create Android application.
- [ ] Create iOS application.
- [ ] Configure mobile API connectivity.
- [ ] Implement camera document acquisition.
- [ ] Verify mobile authentication.

Acceptance criteria: application is installable on supported mobile devices.

iOS build verification requires macOS and Xcode.

## Phase 12 — GitHub Actions

- [ ] Configure frontend CI.
- [ ] Configure backend CI.
- [ ] Configure worker CI.
- [ ] Configure affected-project build triggers.
- [ ] Configure automated tests.
- [ ] Configure Docker image builds.
- [ ] Configure Trivy scanning.
- [ ] Publish images to GHCR.
- [ ] Configure independent versioning.

Acceptance criteria: GitHub Actions can automatically build and publish affected applications.

## Phase 13 — Kubernetes and Helm

- [ ] Configure Kubernetes development environment.
- [ ] Configure K3s production environment.
- [ ] Create frontend Helm Chart.
- [ ] Create backend Helm Chart.
- [ ] Create document-worker Helm Chart.
- [ ] Create outbox-publisher Helm Chart.
- [ ] Create document-parser Helm Chart.
- [ ] Install Strimzi.
- [ ] Deploy Kafka.
- [ ] Deploy persistent databases.
- [ ] Configure persistent volumes.
- [ ] Configure secrets.
- [ ] Configure Traefik ingress.
- [ ] Verify independent releases and rollbacks.

Acceptance criteria: all required components run on Kubernetes and support independent deployments.

## Phase 14 — GitOps

- [ ] Install Argo CD.
- [ ] Configure individual applications.
- [ ] Configure environment-specific Helm values.
- [ ] Configure encrypted secrets.
- [ ] Configure automated synchronization.
- [ ] Verify Git-based rollback.

Acceptance criteria: Git is the authoritative deployment configuration.

## Phase 15 — Observability and backup

- [ ] Install Prometheus.
- [ ] Install Grafana.
- [ ] Install Loki.
- [ ] Configure application metrics.
- [ ] Configure Kafka consumer monitoring.
- [ ] Configure logging dashboards.
- [ ] Configure encrypted backups.
- [ ] Test data restoration.

Acceptance criteria: infrastructure and applications are observable and recoverable.

## Phase 16 — AI assistant

- [ ] Select local LLM.
- [ ] Implement retrieval pipeline.
- [ ] Implement prompt construction.
- [ ] Implement RAG.
- [ ] Add document citations.
- [ ] Add AI chat interface.
- [ ] Evaluate answer quality.

Acceptance criteria: users can ask questions about their documents and receive grounded answers.

## Phase 17 — Home management modules

- [ ] Expense management.
- [ ] Bill management.
- [ ] Mortgage management.
- [ ] Maintenance management.
- [ ] Deadlines.
- [ ] Notifications.
- [ ] Energy monitoring.
- [ ] Home Assistant integration.

Implementation order will be agreed with the developer.