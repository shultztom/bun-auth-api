# bun-auth-api

Simple bun api with /register and /login endpoints.

- /register creates account
- /login returns whether or not credentials are valid

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
