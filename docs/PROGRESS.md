# IA-Casa — Project Progress

Last recorded update: 2026-11-25.

## Current phase

Phase 0 is verified. Phase 1 meets its technical acceptance criteria.
The initial Git commit (`332a497`) already exists. The Phase 1 changes are
pending developer review and commit approval.

## Verified development environment

| Component | Status |
|---|---|
| Development filesystem | Repository under `/home/kryptos/project/home-ia-repo` in Ubuntu on WSL 2 |
| Docker | Docker Desktop with Linux engine 29.9.3 and Compose 5.7.0 |
| Compose workspace | Rebuilt and running, with ports 3000 and 4000 bound to loopback |
| Workspace user | UID/GID 1000:1000, matching the WSL user and checked files and directories |
| Node.js | 24.22.3 in the container |
| npm | 11.19.1 in the container |
| pnpm | 10.34.9 in the container |
| Turborepo | 2.11.13 from the workspace lockfile |

Before this verification, the repository already had the development
Dockerfile, Compose service, project documentation, root manifest, lockfile,
`pnpm-workspace.yaml` and `turbo.json`. The workspace folders existed locally,
with no application or shared package manifests. The first Turbo dry run
failed because `package.json` lacked a package manager declaration.

## Phase 1 changes

| File | Change |
|---|---|
| `package.json`, `pnpm-lock.yaml` | Declare the exact pnpm version, add shared development tools and expose the type check task |
| `pnpm-workspace.yaml` | Verify the four workspace patterns and format the file |
| `turbo.json` | Add the type check task and include shared TypeScript and ESLint settings in task hashes |
| `tsconfig.base.json` | Enable strict type checking and consistent file name casing for projects that extend it |
| `eslint.config.mjs`, `.prettierrc.json`, `.prettierignore` | Define shared lint rules and use Prettier's defaults while leaving the generated lockfile to pnpm |
| `compose.yaml`, `infrastructure/docker/Dockerfile.dev` | Limit the build context to the Dockerfile directory and pin the verified Node.js and pnpm versions |
| `docs/ARCHITECTURE.md`, `docs/TECH_STACK.md`, `docs/ROADMAP.md`, `docs/PROGRESS.md` | Record verified architecture, tool versions and milestones |

## Verification on 2026-11-25

- `git status`, `git ls-files`, `git log`, and `git check-ignore` confirmed
  the repository history, tracked files and ignore rules for generated files,
  local data and environment files. The `.env.example` exception works.
- `docker compose config --quiet`, `docker compose build workspace`,
  `docker compose up -d --no-build workspace`, and `docker compose ps --all`
  validated the configuration and the rebuilt service. Runtime version,
  identity and ownership checks ran inside the rebuilt container.
- `pnpm install --frozen-lockfile` succeeded in the workspace and in a clean
  temporary directory inside the container. The clean installation ran
  Turbo 2.11.13 without downloading a fallback binary.
- `pnpm dev`, `pnpm build`, `pnpm lint`, `pnpm test`, and `pnpm typecheck`
  all exited successfully. ESLint checked the workspace configuration.
  Turbo reported zero package tasks because the repository currently has
  only the root package.
- `pnpm exec prettier --check` passed on the workspace configuration files.
- Two temporary packages verified `workspace:*` linking, dependency-first
  Turbo builds, shared TypeScript settings and ESLint rules. Build and
  type checking passed. The negative checks produced the expected ESLint
  error for explicit `any` and TypeScript error for implicit `any`.

## Next immediate task

Review the verified Phase 1 changes. The next implementation phase in
`ROADMAP.md` is the Next.js frontend foundation in `apps/frontend`.

## Open technical decisions

- Exact versions for future dependencies and container images.
- Final Node.js Kafka client.
- Sparse embedding encoder.
- Production server configuration and persistent storage.
- Backup strategy and private remote access.
- Mobile signing and distribution.
- Exact resource requirements.

## Progress maintenance rules

Update this file after every completed task. Record the date, operation, files,
commands, verification results, remaining issues and next immediate task.
Mark tasks complete after verification. The actual repository takes
precedence over this progress document.
