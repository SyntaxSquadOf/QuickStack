<h1 align="center">⭐ QuickStack ⭐</h1>

<p align="center">
  Es un starter template para nuevos servicios basada en Express + Typescript con las mejores prácticas y lista para producción.
</p>

## ¿Qué incluye este template?

⚡️ **Express 5** configurado como framework HTTP con TypeScript 5 para máximo rendimiento.

👷 **SWC** para compilación ultra-rápida y ejecución optimizada del servicio.

🔒 **Helmet** para seguridad avanzada con headers de protección configurados automáticamente.

🌐 **CORS** configurado de forma inteligente con whitelist personalizable y soporte para herramientas de desarrollo.

🚦 **Rate Limiting** con express-rate-limit para prevenir ataques de fuerza bruta y abuso de API.

🔐 **Autenticación JWT** con bcrypt para hash de contraseñas seguro y manejo de tokens.

✅ **Validación de datos** con express-validator para sanitización y validación robusta de entrada.

📊 **Logging personalizado** con sistema de colores y niveles (INFO, ERROR, WARNING, DEBUG, SUCCESS).

📚 **Swagger/OpenAPI** preconfigurado para documentación automática de tu API.

🐶 **Husky** integrado para mantener calidad de código y convenciones durante el desarrollo:

- 💅 Ejecuta el linter sobre archivos modificados
- 💬 Conventional commits para mantener historial limpio
- ⚙️ Verificación automática de errores de TypeScript
- 🎨 Formateo automático con Prettier

🐦‍🔥 **Módulos ES** en lugar de CommonJS, siguiendo el estándar moderno de JavaScript.

📌 **Rutas personalizadas** con path aliases - usa `@/config/logger` en lugar de `../../../src/config/logger`.

📦 **pnpm** como gestor de paquetes para instalaciones más rápidas y eficientes.

🎯 **TypeScript estricto** con configuración optimizada para desarrollo moderno usando NodeNext.

🔧 **ESLint + Prettier** preconfigurados con reglas personalizadas para Node.js.

## Características

- **Express 5** con TypeScript 5 y importaciones absolutas
- **Compilación SWC** para desarrollo ultra-rápido
- **Seguridad robusta** con Helmet, CORS, Rate Limiting y autenticación JWT
- **Logging avanzado** con sistema de colores personalizado
- **Validación de datos** automática con express-validator
- **Documentación API** con Swagger/OpenAPI
- **Calidad de código** con ESLint, Prettier y Husky
- **Variables de entorno** con soporte nativo de Node.js
- **Conventional commits** para historial de cambios limpio

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** v18 o superior - [Descargar Node.js](https://nodejs.org/)
- **pnpm** (recomendado) o **npm** - Gestor de paquetes
  ```bash
  npm install -g pnpm
  ```
- **Git** - Para control de versiones y hooks de Husky

### ¿Por qué pnpm?

Aunque este template es **100% compatible con npm**, recomendamos pnpm por:

- **⚡ Velocidad**: Instalaciones hasta 2x más rápidas
- **💾 Espacio**: Usa symlinks, ahorrando gigabytes de espacio en disco
- **🔒 Seguridad**: Mejor resolución de dependencias y menos vulnerabilidades
- **🎯 Eficiencia**: Caché global compartido entre proyectos

## Getting started

Utiliza este repositorio como [GitHub template](https://github.com/SyntaxSquadOf/QuickStack/generate) o usa [degit](https://github.com/Rich-Harris/degit) para clonarlo en tu máquina con un historial git vacío:

```bash
npx degit SyntaxSquadOf/QuickStack#main my-app
```

o

```bash
pnpm dlx degit SyntaxSquadOf/QuickStack#main my-app
```

### A continuacion instala las dependencias

### Con pnpm (recomendado):

```bash
cd my-app
pnpm install
pnpm dev
```

### Con npm:

```bash
cd my-app
npm install
npm run dev
```

## Scripts

**Con pnpm:**

- `pnpm dev` - inicia servidor de desarrollo con hot reload
- `pnpm dev:api` - inicia servidor de desarrollo con modo API habilitado para herramientas como Postman
- `pnpm build` - compila para producción usando SWC y genera archivos en la carpeta dist
- `pnpm start` - ejecuta la aplicación compilada desde dist
- `pnpm prepare` - inicializa Husky y configura git hooks para calidad de código automática
- `pnpm lint` - ejecuta ESLint en todos los archivos TypeScript
- `pnpm format` - formatea todos los archivos TypeScript con Prettier

**Con npm (equivalentes):**

- `npm run dev`, `npm run dev:api`, `npm run build`, `npm start`, `npm run prepare`, `npm run lint`, `npm run format`

---

## 🐳 Docker

### Desarrollo con Docker Compose

**Comando rápido para desarrollo:**

```bash
pnpm docker:dev
```

**Servicios incluidos:**

- **QuickStack API** - Tu aplicación principal con hot reload
- **PostgreSQL** - Base de datos (opcional)
- **Redis** - Caché y sesiones (opcional)
- **Adminer** - Interfaz web para PostgreSQL en `http://localhost:8080`

### Scripts Docker disponibles

**Desarrollo:**

```bash
pnpm docker:dev          # Levantar todos los servicios con hot reload
pnpm docker:dev:detach   # Levantar en segundo plano
pnpm docker:stop         # Parar todos los servicios
pnpm docker:logs         # Ver logs de la API
```

**Producción:**

```bash
pnpm docker:build        # Construir imagen de desarrollo
pnpm docker:build:prod   # Construir imagen optimizada de producción
pnpm docker:run          # Correr contenedor único
pnpm docker:clean        # Limpiar contenedores y volúmenes
```

### Configuración

1. **Copia las variables de entorno:**

   ```bash
   cp .env.example .env
   ```

2. **Personaliza tu .env** según tus necesidades

3. **Levanta los servicios:**
   ```bash
   pnpm docker:dev
   ```

### Acceso a servicios

- **API:** `http://localhost:5000`
- **Documentación:** `http://localhost:5000/docs`
- **Adminer (DB):** `http://localhost:8080`
- **PostgreSQL:** `localhost:5432`
- **Redis:** `localhost:6379`

### Dockerfile Multi-Stage

El Dockerfile está optimizado con:

- **Multi-stage build** para imágenes ligeras en producción
- **Usuario no-root** para mayor seguridad
- **Health checks** para monitoreo
- **Caché de layers** para builds más rápidos

---

## Formatos aceptados por commitlint

Estos son los formatos de commit aceptados por la configuración de commitlint en este proyecto:

- `feat(archivos): mensaje commit`
- `feat: mensaje commit`
- `feat(archivos): mensaje commit\n\ndescripcion`

```markdown
Es decir: acepta con o sin scope, y acepta cuerpo adicional (descripcion)
```
