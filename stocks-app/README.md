# Stocks App – Full‑stack sample

Simple NestJS + React + Postgres demo.

## Local dev

```bash
docker compose up --build
```

* API → <http://localhost:3001/ping>
* UI  → <http://localhost:3000>

## Deploy on Render

1. Push this repo to GitHub/GitLab.
2. In the Render UI click **New → Blueprint** and select the repo.
3. Review the generated services (defined in `render.yaml`) and hit **Create resources**.
4. Wait for the build logs to show `Live!`, then open the frontend URL.
