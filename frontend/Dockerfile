FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build
RUN npm run build

# Production server
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Security headers
RUN echo $'server_tokens off;\n\
add_header X-Frame-Options "SAMEORIGIN" always;\n\
add_header X-Content-Type-Options "nosniff" always;\n\
add_header X-XSS-Protection "1; mode=block" always;\n\
add_header Referrer-Policy "no-referrer-when-downgrade" always;\n\
add_header Content-Security-Policy "default-src \'self\' http: https: data: blob: \'unsafe-inline\';" always;' > /etc/nginx/conf.d/security-headers.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]