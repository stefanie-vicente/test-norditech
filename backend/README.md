
# Flask OpenAI Chat API

This is a simple Flask API that integrates with OpenAI's GPT-4 model to provide chat functionality. The API provides two endpoints: one to test the connection and another to send and receive messages from the AI.

## Features

- **CORS support**: Allows cross-origin requests from a specified origin (default is `http://localhost:5173`).
- **OpenAI GPT-4 Integration**: Send user messages and get AI responses using OpenAI's GPT-4 model.
- **Environment variable support**: Loads sensitive keys (like the OpenAI API key) from a `.env` file for secure configuration.

## Requirements

- Python 3.8+
- Flask
- Flask-CORS
- python-dotenv
- OpenAI SDK

## Installation

### Step 1: Clone the repository

```bash
git clone https://github.com/stefanie-vicente/test-norditech.git
cd test-norditech/backend
```

### Step 2: Set up a virtual environment (optional but recommended)

If you are using virtual environments, create and activate one:

```bash
python3 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

### Step 3: Install dependencies

```bash
pip install -r requirements.txt
```

### Step 4: Set up environment variables

Create a `.env` file in the root of the project and add your configuration values.

#### How to Get Your OpenAI API Key

1. Go to the [OpenAI website](https://platform.openai.com/).
2. Create an account or log in.
3. Navigate to the **API** section in the dashboard.
4. Generate a new API key from the API settings page.
5. Copy the API key and save it in the `.env` file as shown below:

#### Example `.env` file

```env
OPENAI_API_KEY=your-openai-api-key
CORS_ORIGIN=http://localhost:5173  # Adjust as needed
PORT=8000
```

Make sure to replace `your-openai-api-key` with the actual OpenAI API key you just obtained.

### Step 5: Run the app

Start the Flask app:

```bash
python app.py
```

The API should now be running on `http://localhost:8000`.

## API Endpoints

### 1. `/api/hello` (GET)

**Description**: A simple endpoint to check if the API is running.

- **Response**: 
  ```json
  {
    "message": "Hello from Flask API!"
  }
  ```

### 2. `/api/chat` (POST)

**Description**: Send a message to the AI and get a response from OpenAI's GPT-4 model.

- **Request**: 
  - **Body** (JSON):
    ```json
    {
      "message": "Your message here"
    }
    ```

- **Response**: 
  - Success (200 OK):
    ```json
    {
      "reply": "AI's response to your message"
    }
    ```
  - Error (400 or 500):
    ```json
    {
      "error": "Error message"
    }
    ```


## Troubleshooting

- **Error: `Message is required`**: Ensure that you're sending a valid `message` key in the POST body to the `/api/chat` endpoint.
- **Error: `API Key`**: Make sure the OpenAI API key is properly set in the `.env` file.

