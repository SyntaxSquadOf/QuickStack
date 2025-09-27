# Build stage - Compilación con SWC
FROM node:22-alpine AS builder

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias (solo producción para optimizar)
RUN pnpm install --frozen-lockfile

# Copiar código fuente
COPY . .

# Compilar aplicación con SWC
RUN pnpm build

# Production stage - Imagen final optimizada
FROM node:22-alpine AS production

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Crear usuario no-root para seguridad
RUN addgroup -g 1001 -S nodejs && \
    adduser -S quickstack -u 1001

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# Instalar solo dependencias de producción
RUN pnpm install --frozen-lockfile --prod

# Copiar aplicación compilada desde builder stage
COPY --from=builder /app/dist ./dist

# Cambiar ownership a usuario no-root
RUN chown -R quickstack:nodejs /app
USER quickstack

# Exponer puerto
EXPOSE 5000

# Variables de entorno por defecto
ENV NODE_ENV=production
ENV PORT=5000
ENV API_VERSION=v1

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5000/api/v1', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Comando por defecto
CMD ["pnpm", "start"]