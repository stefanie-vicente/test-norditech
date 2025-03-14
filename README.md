
# Monorepo for Norditech Code Assignment

This monorepo contains both the frontend and backend for the assignment. It includes two main applications:

- **Vue.js Frontend**: A chat interface built with Vue 3 and TailwindCSS that communicates with the backend via an API.
- **Flask Backend**: A Flask API that integrates with OpenAI’s GPT-4 to provide chatbot functionality.

## Features

- **Frontend**: A chat interface built using Vue 3, Vite, and TailwindCSS. Communicates with the Flask API.
- **Backend**: A Flask-based REST API that handles user input and generates AI responses using OpenAI’s GPT-4 model.
- **Docker**: Dockerized setup for both frontend and backend for easy deployment.

## Project Setup

This repository includes both frontend and backend code. You can set up the entire project, including both the Flask API and Vue frontend, by following the steps below.

### Prerequisites

- Docker and Docker Compose installed
- Node.js (version 16 or higher) for frontend development
- Python (version 3.7 or higher) for backend development

## Running the Project with Docker

The entire project can be run using Docker and Docker Compose to simplify the setup and deployment process. This setup includes both the frontend (Vue) and backend (Flask) services.

### Step 1: Clone the repository

```bash
git clone https://github.com/stefanie-vicente/test-norditech.git
cd test-norditech
```

### Step 2: Docker Setup

Make sure that you have a `.env` file set up for both frontend and backend.

#### Frontend (`.env` file)

Create a `.env` file in the frontend directory with the following:

```env
VITE_API_BASE_URL=http://backend:8000/api
```

This ensures that the frontend points to the backend service in the Docker network.

#### Backend (`.env` file)

Create a `.env` file in the backend directory with the following:

```env
OPENAI_API_KEY=your_openai_api_key
CORS_ORIGIN=http://frontend:5173
PORT=8000
```

This will allow the backend to accept requests from the frontend and communicate with OpenAI’s API.

### Step 3: Running with Docker Compose

To build and start the Docker containers for both the frontend and backend, run the following commands:

1. **Build the Docker containers**

```bash
docker-compose build
```

2. **Start the containers**

```bash
docker-compose up
```

This will start both the frontend and backend containers:

- The **backend** Flask app will be available at `http://localhost:8000`.
- The **frontend** Vue app will be available at `http://localhost:5173`.

### Step 4: Access the Application

Once the containers are up and running, you can access the application by visiting `http://localhost:5173` in your browser. The frontend will make requests to the backend API (Flask) at `http://localhost:8000/api`.

### Step 5: Stopping the Containers

When you’re done, you can stop the Docker containers by running:

```bash
docker-compose down
```

## Running Without Docker (Development Mode)

If you prefer to run the application without Docker, follow these steps:

### Frontend

1. Navigate to the `frontend` directory and install dependencies:

```bash
cd frontend
npm install
```

2. Create a `.env` file with the following configuration:

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

3. Start the development server:

```bash
npm run dev
```

Your Vue app will be available at `http://localhost:5173`.

### Backend

1. Navigate to the `backend` directory and install dependencies:

```bash
cd backend
pip install -r requirements.txt
```

2. Create a `.env` file with your OpenAI API key and other configurations:

```env
OPENAI_API_KEY=your_openai_api_key
CORS_ORIGIN=http://localhost:5173
PORT=8000
```

3. Run the Flask app:

```bash
python app.py
```
