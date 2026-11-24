# IA-Casa — Technology Stack

## 1. Development environment

| Technology | Purpose |
|---|---|
| Windows | Host operating system |
| WSL2 | Linux development environment |
| VS Code | IDE |
| Codex | AI coding assistant |
| Docker Desktop | Container engine |
| Git | Version control |
| GitHub | Private source code repository |

Source code must reside inside the WSL Linux filesystem.

## 2. Monorepo

| Technology | Purpose |
|---|---|
| pnpm | Package manager |
| pnpm Workspaces | Workspace dependency management |
| Turborepo | Task orchestration and build caching |
| TypeScript | Shared language |

A monorepo allows shared packages while preserving independent application deployments.

## 3. Frontend

| Technology | Purpose |
|---|---|
| React | UI library |
| Next.js | Frontend framework |
| TypeScript | Static typing |
| Tailwind CSS | Styling |
| shadcn/ui | UI components |
| Lucide React | Icons |
| TanStack Query | Server state and API fetching |
| TanStack Table | Data tables |
| Zustand | Client-side global state |
| React Hook Form | Forms |
| Zod | Input validation |
| Recharts | Charts |
| React PDF | Document previews |

Use Next.js App Router.

The frontend must support static export for mobile packaging.

## 4. Mobile

| Technology | Purpose |
|---|---|
| Capacitor | Android and iOS application packaging |
| PWA | Browser-based installation |
| Android Studio | Android builds |
| Xcode | iOS builds |

Capacitor was chosen to reuse the React web interface instead of maintaining a separate React Native application.

iOS builds require a compatible macOS and Xcode environment.

## 5. Backend

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js 5 | REST API |
| TypeScript | Static typing |
| Zod | Request validation |
| OpenAPI / Swagger | API documentation |
| Drizzle ORM | Database access and migrations |
| Pino | Structured logging |

Initial runtime baseline: Node.js 24 LTS.

Initial package manager baseline: pnpm 10.

Verified development toolchain: Node.js 24.22.3, npm 11.19.1, pnpm 10.34.9,
Turborepo 2.11.13, TypeScript 6.0.3, ESLint 10.15.0, typescript-eslint 8.74.0,
and Prettier 3.10.1. The development Dockerfile pins Node.js and pnpm.
The root manifest declares the pnpm version and the lockfile pins the
dependency graph.

## 6. Authentication

| Technology | Purpose |
|---|---|
| Keycloak | Identity provider |
| OpenID Connect | Authentication |
| OAuth 2.0 | Authorization framework |
| PKCE | Public-client authorization flow |

## 7. Database and persistence

| Technology | Purpose |
|---|---|
| PostgreSQL | Relational application database |
| Qdrant | Dedicated vector search engine |
| SeaweedFS | Local S3-compatible object storage |
| Redis | Optional future cache |

### Why PostgreSQL?

- Relational data modeling.
- ACID transactions.
- Reliable application state.
- Transactional Outbox implementation.
- Strong indexing and query capabilities.

### Why Qdrant instead of pgvector?

- Dedicated vector search engine.
- Dense and sparse vector support.
- Hybrid search.
- Payload filtering.
- Independent scaling.
- REST and gRPC interfaces.
- Educational value for vector database architecture.

PostgreSQL remains the source of truth.

### Why SeaweedFS?

- Self-hosted object storage.
- S3-compatible API.
- Separation of binary documents from application metadata.
- Potential future distributed storage.

## 8. Event streaming

| Technology | Purpose |
|---|---|
| Apache Kafka | Event streaming platform |
| KRaft | Kafka metadata management |
| KafkaJS or compatible Node.js client | Kafka producer and consumer |
| Kafbat UI | Kafka administration and visualization |
| Strimzi | Kafka operator for Kubernetes |
| KEDA | Optional event-driven autoscaling |

### Why Kafka instead of BullMQ?

Kafka was explicitly selected for:

- Event-Driven Architecture.
- Independent consumer groups.
- Event retention.
- Event replay.
- Partitioning.
- Future home automation integration.
- Experience with enterprise event-streaming architecture.

BullMQ is not part of the selected architecture.

Retries, dead-letter handling and job progress must be implemented explicitly where required.

The final Node.js Kafka client must be selected after verifying compatibility and maintenance status.

## 9. Document processing and AI

| Technology | Purpose |
|---|---|
| Python | Document processing runtime |
| Docling | Parsing, OCR and structural extraction |
| Ollama | Local AI runtime |
| BGE-M3 | Multilingual dense embeddings |
| Compatible sparse encoder | Lexical retrieval |
| Qdrant | Hybrid document search |
| Qwen / Gemma | Candidate future local LLMs |

### Why Docling?

- Local document processing.
- Support for multiple document formats.
- OCR capabilities.
- Table and document structure extraction.

### Why Ollama?

- Local model execution.
- HTTP API.
- Separation of AI processing from business logic.
- No external AI provider required during inference.

### Why BGE-M3?

- Multilingual document retrieval.
- Suitable for Italian documents.
- Dense embeddings with 1024 dimensions in its standard configuration.

Ollama dense embeddings alone do not implement the sparse BM25 retrieval pipeline.

The sparse encoder and final LLM must be evaluated during their respective development phases.

## 10. Containers and orchestration

| Technology | Purpose |
|---|---|
| Docker | Containerization |
| Docker Compose | Local development |
| Kubernetes | Production orchestration |
| K3s | Lightweight Kubernetes distribution |
| Helm | Kubernetes packaging and releases |
| Strimzi | Kafka cluster management |
| Traefik | Ingress controller |
| Argo CD | GitOps deployment |

## 11. CI/CD

| Technology | Purpose |
|---|---|
| GitHub | Source control platform |
| GitHub Actions | CI/CD pipelines |
| GitHub Container Registry | Docker image registry |
| Trivy | Container vulnerability scanning |
| SOPS + age | Encrypted configuration and secrets |

## 12. Testing

| Technology | Purpose |
|---|---|
| Vitest | Unit and integration tests |
| Playwright | End-to-end tests |
| Supertest | Express API tests |
| ESLint | Code quality |
| Prettier | Code formatting |
| TypeScript compiler | Type checking |

## 13. Observability

| Technology | Purpose |
|---|---|
| Prometheus | Metrics |
| Grafana | Monitoring dashboards |
| Loki | Centralized logs |
| Pino | Application logging |
| Kafbat UI | Kafka monitoring |

## 14. Infrastructure and privacy

| Technology | Purpose |
|---|---|
| Tailscale or WireGuard | Private remote access |
| Restic | Encrypted backups |
| Persistent volumes | Stateful Kubernetes workloads |

## 15. Version management

Do not use unpinned latest tags for production images.

Pin:

- Node.js runtime.
- pnpm package manager.
- Application dependencies through the lockfile.
- Kafka version.
- PostgreSQL version.
- Qdrant version.
- AI model versions.
- Container image versions.
- Helm chart versions.

The exact version matrix has not been finalized.

Verify compatibility with official documentation before installing each component.

## 16. Technology decisions

Technologies explicitly selected:

- React and Next.js.
- Express.js.
- PostgreSQL.
- Qdrant.
- Apache Kafka.
- Docker Compose.
- Kubernetes.
- Helm.
- GitHub Actions.
- Capacitor.

Other technologies in this document are architectural selections or candidates and must be introduced progressively.

Do not substitute a selected technology without discussing the decision with the developer.
