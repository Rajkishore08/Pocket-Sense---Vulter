# Pocket Sense

**Pocket Sense** is a financial management tool designed to empower users with financial literacy, debt management, budgeting tools, and personalized investment suggestions. This full-stack application combines a React frontend, a Node.js backend, a Laravel-based chatbot, and serverless inference for machine learning capabilities. Pocket Sense is deployed on Vultr, utilizing cloud-based resources to ensure scalability and high performance.

## Table of Contents
- [Project Objectives](#project-objectives)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Deployment on Vultr](#deployment-on-vultr)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Technical Documentation](#technical-documentation)
- [Contributing](#contributing)
- [License](#license)

## Project Objectives

1. **Improve Financial Decision-Making**: Provide personalized investment suggestions.
2. **Reduce Debt and Enhance Savings**: Budgeting tools, EMI calculator, and debt management guidance.
3. **Collaborative Learning**: Real-time chatrooms for discussions and market insights.
4. **Financial Literacy**: Interactive quizzes and gamified learning paths.

## Features

- **Expense Tracker**: Log daily expenses and receive budget suggestions.
- **Investment Quiz**: Offers tailored investment plans based on responses.
- **EMI Calculator**: Helps users plan loan repayments effectively.
- **Chat Room**: Real-time chat for financial discussions and market trends.
- **Machine Learning Predictions**: Serverless ML integration for personalized financial insights.
- **Laravel Chatbot**: Provides a conversational interface for financial guidance.

## Technologies Used

- **Frontend**: React, Redux, Axios
- **Backend**: Node.js, Express, MongoDB
- **Database**: MongoDB (Atlas)
- **Serverless**: AWS Lambda for inference
- **Cloud Hosting**: Vultr (for backend deployment and object storage)
- **Chatbot**: Laravel with serverless deployment for inference

## Architecture

- **Frontend** (React) ↔ **Backend** (Node.js) ↔ **Database** (MongoDB)
- **ML Models** via **Serverless Functions** for real-time financial predictions
- **Real-time Chat** powered by WebSocket connections

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB (Atlas or local)
- AWS CLI (for serverless deployment)
- Vultr account for cloud hosting

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/Pocket-Sense.git
   cd Pocket-Sense
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Laravel Chatbot Setup**
   ```bash
   cd ../chatbot
   composer install
   ```

### Environment Variables

Create a `.env` file in each of the backend and chatbot directories with the following keys:

#### Backend `.env`
```plaintext
MONGO_URI=your_mongo_db_uri
PORT=5000
```

#### Frontend `.env`
```plaintext
REACT_APP_BACKEND_URL=http://localhost:5000
```

#### Chatbot `.env`
```plaintext
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
```

## Usage

1. **Run the Backend**
   ```bash
   cd backend
   node server.js
   ```

2. **Run the Frontend**
   ```bash
   cd frontend
   npm start
   ```

3. **Run the Laravel Chatbot (Locally)**
   ```bash
   cd chatbot
   php artisan serve
   ```

The app will be accessible at `http://localhost:3000` (frontend) and `http://localhost:5000` (backend).

## Deployment on Vultr

1. **Backend Deployment**: Set up a Vultr VPS, configure Node.js, and run the backend server.
2. **Frontend Deployment**: Host on a service like Netlify or directly on Vultr.
3. **Chatbot and Serverless ML**: Deploy the Laravel chatbot and serverless inference using AWS Lambda.

## API Documentation

### Authentication Endpoints

- **POST** `/api/register`  
  Registers a new user.  
  **Body**: `{ "name": "User Name", "email": "user@example.com", "password": "password" }`

- **POST** `/api/login`  
  Authenticates the user and returns a token.  
  **Body**: `{ "email": "user@example.com", "password": "password" }`

### Expense Tracker Endpoints

- **GET** `/api/expenses/:userId`  
  Fetches all expenses for a user.

- **POST** `/api/expenses`  
  Adds a new expense.  
  **Body**: `{ "userId": "123", "amount": 100, "category": "Food" }`

### Chatbot Endpoint

- **POST** `/chatbot/query`  
  Accepts a user query and provides a response based on ML inference.

## Project Structure

```plaintext
Pocket-Sense/
├── backend/               # Node.js backend
├── frontend/              # React frontend
├── chatbot/               # Laravel-based chatbot
└── README.md              # Documentation
```

## Technical Documentation

### System Architecture

- **Frontend**: React app for user interface and interaction.
- **Backend**: Node.js API for managing data, integrated with MongoDB.
- **Database**: MongoDB stores user data, expenses, quiz responses.
- **Serverless Inference**: ML models hosted on AWS Lambda for real-time predictions.
- **Chatbot**: Laravel-based chatbot with serverless deployment.

### Key Modules and Components

- **Expense Tracker**: Logs expenses, categorizes, and suggests budget adjustments.
- **Investment Quiz**: Uses ML inference to provide tailored investment advice.
- **Real-time Chat**: Facilitates user discussions with WebSocket for real-time communication.

### API Design

- RESTful endpoints for user management, expense tracking, quiz submission, and chat messaging.
- All endpoints are documented for consistency and ease of use.

### Setup and Usage Instructions

- Set up each service (backend, frontend, chatbot) with environment variables.
- Follow the instructions in each subfolder’s README for more details.

## Contributing

Contributions are welcome! Please open an issue or pull request for any bug fixes, improvements, or new features.

### Development Guidelines

- Follow consistent coding standards for each technology.
- Document any new endpoints or features clearly in the README.
- Run tests before submitting any pull requests.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

This README provides a complete overview of Pocket Sense, along with setup, usage, and deployment instructions. Let me know if you need more details on any part!
