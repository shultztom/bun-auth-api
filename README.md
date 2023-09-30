# bun-auth-api

Simple bun api with /register, /login, /token endpoints.

- /register creates account
- /login returns JWT if valid, error if not
- /token verifies token; must be passed as x-auth-token

Uses bun, prisma, and postgresql

To install dependencies:

```bash
bun install
```

To run:

Populate .env with `DATABASE_URL`

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
