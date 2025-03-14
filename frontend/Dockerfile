# Stage 1: Build environment
FROM node:20-alpine AS frontend-builder

# Set the working directory
WORKDIR /app

# Install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy the source files and build the frontend
COPY frontend/ .
RUN npm run build

# Expose the port the preview server will use
EXPOSE 5173

# Run the preview server to serve the built frontend
CMD ["npm", "run", "preview", "--", "--port", "5173", "--host"]
