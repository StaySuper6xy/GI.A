# Gia - AI Integrated Business Management Solution

Gia is an all-in-one AI-integrated business management solution built with Node.js, MongoDB, and React. It provides a comprehensive platform for managing various aspects of your business with the help of AI assistants.

## Features

- User authentication (register, login, logout)
- Dashboard with AI-powered assistants:
  - Filly: Financial advisor
  - Marcus: Marketing strategist
  - Sally: Sales expert
  - Dan: Data analyst
- Responsive design with a modern UI

## Tech Stack

- Frontend: React, React Router, Axios
- Backend: Node.js, Express.js
- Database: MongoDB
- State Management: React Hooks
- Styling: CSS with custom variables

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Installation

1. Clone the repository:
2. Navigate to the backend directory and run `npm install`
3. Set up environment variables:

   For the backend:
   Create a `.env` file in the `backend` directory and add the following:
   \`\`\`
   MONGODB_URI=your_mongodb_uri_here
   JWT_SECRET=your_jwt_secret_here
   PORT=5000
   \`\`\`

   For the frontend:
   Create a `.env` file in the `frontend` directory and add the following:
   \`\`\`
   REACT_APP_API_URL=http://localhost:5000
   \`\`\`

## Environment Variables

### Backend

- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: A secret key for JWT token generation
- `PORT`: The port on which the backend server will run (default: 5000)

### Frontend

- `REACT_APP_API_URL`: The URL of your backend API (default: http://localhost:5000)

Make sure to replace the placeholder values with your actual configuration details. Do not commit the `.env` files to version control.
