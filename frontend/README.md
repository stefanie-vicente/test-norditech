
# Vue Chat App

This is a Vue.js-based frontend that communicates with a Flask API that integrates OpenAI's GPT-4 model. The app allows users to chat with the AI by sending messages and receiving replies.

## Features

- **Vue 3**: Uses the latest Vue.js framework to build the frontend.
- **TailwindCSS**: For styling the components with utility-first CSS.
- **Axios**: Used to send HTTP requests to the backend API (Flask).
- **Vite**: A fast development server and build tool.
- **OpenAI GPT-4 Integration**: Uses a Flask API to send user input to GPT-4 and receive responses.

## Requirements

- Node.js (version 16 or higher recommended)
- npm or yarn

## Installation

### Step 1: Clone the repository

```bash
git clone https://github.com/stefanie-vicente/test-norditech.git
cd test-norditech/frontend
```

### Step 2: Install dependencies

Use npm or yarn to install the necessary dependencies:

```bash
npm install
# or
yarn install
```

### Step 3: Set up the API base URL

In order to communicate with your backend API (Flask app), you need to set the base URL of the API. You can achieve this using a `.env` file.

#### Creating the `.env` file

Create a `.env` file in the root of your project and add the following:

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

Make sure the URL points to the Flask API you're running. The `VITE_` prefix is required for Vite to load environment variables.

#### Example `.env` file

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

Now, your app will use the base URL specified in the `.env` file when making API requests.

### Step 4: Configure Axios

In your `axiosInstance.js` file, Axios will use the environment variable you've set in the `.env` file:

```javascript
import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api", // Use the env variable or fallback to localhost
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
```

This will ensure that the app communicates with the Flask backend using the base URL defined in your `.env` file.

### Step 5: Run the app

Start the development server using Vite:

```bash
npm run dev
# or
yarn dev
```

Your app will now be running at `http://localhost:5173` (default Vite port).

### Step 6: Configure TailwindCSS (if not configured)

If TailwindCSS is not configured yet, follow these steps:

1. Install TailwindCSS and its dependencies:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

2. Add the following to your `tailwind.config.js`:

   ```javascript
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./index.html",
       "./src/**/*.{vue,js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. Create a `src/assets/tailwind.css` file and add the following lines:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. Make sure to import the Tailwind CSS file in your `main.js` or `main.ts`:

   ```javascript
   import './index.css';
   ```

## Troubleshooting

- **Error: `CORS` issue**: Ensure the Flask backend has CORS enabled for your Vue frontend (`http://localhost:5173`).
- **Error: `Failed to get response`**: Check if the backend API is running and accessible.
- **Error: `.env` variable not loading**: Make sure the `.env` file is correctly placed in the root of the project and that the variable starts with `VITE_`.
