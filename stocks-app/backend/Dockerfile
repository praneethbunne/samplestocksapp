# ---- Build stage ----
FROM node:18-alpine AS builder
WORKDIR /app
COPY backend/package*.json ./        # path from repo‑root
COPY backend . .      
RUN npm ci --omit=dev
COPY . ./
RUN npm run build

# ---- Production image ----
FROM node:18-alpine
WORKDIR /app
COPY backend/package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/dist ./dist
EXPOSE 3001
CMD ["node", "dist/main.js"]


