FROM alpine:3.20 as builder

# Install build dependencies
RUN apk update && \
    apk add --no-cache \
    nodejs \
    npm

# Set working directory
WORKDIR /app

# Copy source code
COPY . /app

# Install dependencies
RUN npm install

FROM alpine:3.20 as release

# Install runtime dependencies
RUN apk update && \
    apk add --no-cache \
    nodejs && \
    rm -rf /var/cache/apk/*

# Set user
USER node

# Set working directory
WORKDIR /app

# Copy built files
COPY --chown=node:node --from=builder /app /app

# Expose port
EXPOSE 8080

# Start the application
ENTRYPOINT ["node", "index.js"]