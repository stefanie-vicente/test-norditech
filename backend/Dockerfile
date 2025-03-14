# Stage 1: Build environment
FROM python:3.12-slim AS backend-builder

# Set the working directory
WORKDIR /app

# Copy and install Python dependencies
COPY backend/requirements.txt ./
RUN pip install -r requirements.txt

# Copy the rest of the backend files
COPY backend/ .

# Expose the Flask app port
EXPOSE 8000
# Run the Flask app
CMD ["flask", "run", "--host=0.0.0.0", "--port=8000"]
