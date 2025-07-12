# ---------- Build stage ----------
FROM node:18-alpine AS builder
WORKDIR /app

# 1. Copy dependency manifests *only*
COPY stocks-app/backend/package*.json ./


# 2. Install production deps
#    • If you’ve COMMITTED package‑lock.json   → keep npm ci
#    • If you have NO lock‑file                → use npm install
RUN npm install --omit=dev          # ← or `npm ci --omit=dev` if lock‑file exists

# 3. Copy the rest of the source
COPY stocks-app/backend . .

# 4. Compile NestJS
RUN npm run build


# ---------- Runtime image ----------
FROM node:18-alpine
WORKDIR /app

# 5. Copy dependency manifests again
COPY package*.json ./
RUN npm install --omit=dev          # ← same rule as above

# 6. Copy compiled output from the builder stage
COPY --from=builder /app/dist ./dist

EXPOSE 3001
CMD ["node", "dist/main.js"]