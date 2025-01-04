# Authentication System with Node.js, Express, and MongoDB

This project is a simple authentication system that uses Node.js and Express for the backend and MongoDB for data storage. It features user registration, login, and authentication using cookies to maintain session persistence. The frontend is styled with Tailwind CSS and includes a vertical navigation bar.

## Project Structure

The project is organized into the following directories and files:

project-root
├── controllers
│   ├── authController.js     # Contains logic for authentication (login, register, logout)
├── routes
│   ├── authRoutes.js         # Handles routing for authentication-related endpoints
├── models
│   ├── user.js               # Mongoose schema and model for user data
├── views
│   ├── Home.ejs              # Home page view
│   ├── index.ejs             # Login page view
│   ├── Register.ejs          # Registration page view
├── public                    # Static files like CSS, JS, and images
├── app.js                    # Main entry point for the application
├── package.json              # Project metadata and dependencies
├── README.md                 # Project documentation



## Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### Clone the Repository

Clone the project to your local machine using the following command:

```bash
git clone https://github.com/your-username/your-repository-name.git

Install Dependencies
Navigate to the project directory and install dependencies:
cd your-repository-name
npm install