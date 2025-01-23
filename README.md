# Full-Stack Project: Next.js Frontend and Express Backend

This project consists of a **Next.js frontend** and an **Express backend**, connected to MongoDB. The project is fully containerized using Docker Compose.

---

## Prerequisites

Before starting, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## Environment Variables

Make sure you configure the required environment variables for both the frontend and backend.

### Frontend (`front/.env`)

```env
API_URL=http://localhost:5000
```

### Backend (back/.env)

```env
PORT=5000
MONGODB_USER=<your-mongodb-username>
MONGODB_PASSWORD=<your-mongodb-password>
MONGODB_URL=<your-mongodb-cluster-url>
MONGODB_DB=<your-database-name>

CLOUD_NAME=<your-cloudinary-cloud-name>
API_KEY=<your-cloudinary-api-key>
API_SECRET=<your-cloudinary-api-secret>
```

Replace placeholders (<...>) with your actual credentials.

### Docker Setup

1. Build and Start the Project
   To start the entire project (both backend and frontend), use the following command:

```
docker-compose up --build
```

2. Access the Application
   Once the containers are running:

Frontend: Open http://localhost:3000
Backend: The backend is available at http://localhost:5000.

---

## Running Locally Without Docker

If you'd like to run the project locally without Docker, follow these steps:

### Backend

1. Navigate to the back folder:

```
cd back
```

2. Install dependencies:

```
npm install
```

3. Add environment variables in a .env file inside the back directory as shown above.

4. Start the backend server:

```
npm start
```

The backend will be running at http://localhost:5000.

## Frontend

1. Navigate to the back folder:

```
cd front
```

2. Install dependencies:

```
npm install
```

3. Add environment variables in a .env file inside the front directory as shown above.

4. Start the frontend development server:

```
npm run dev
```

5. Alternatively, you can build the project for production:

```
npm run build
```

Then, start the production server:

```
npm start
```

This approach will load pages faster as it serves the optimized production build.

The frontend will be running at http://localhost:3000.
