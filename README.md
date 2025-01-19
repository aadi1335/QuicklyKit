# QuicklyKit - Version 1.2.01

QuicklyKit is an Express.js application offering a suite of general-purpose tools for everyday tasks,
including a QR Code Generator, URL Shortener, and more. Built with Express.js, MongoDB, and EJS, it emphasizes simplicity and functionality for routine activities. The website is only created for educational purpose.

## Features

- **QR Code Generator**: Create QR codes for URLs or text.
- **URL Shortener**: Shorten long URLs for easy sharing.
- **Color Picker**: Helps you pick colors and their hex code.
- **Ip finder**: Finds your IP address details.
- **Text to speech**: A interactive tool to convert your text into sound.
- **BMI calculator**: Helps to find your current bmi index.
- Additional tools to enhance daily productivity.

## Project Structure

```plaintext
QuicklyKit/
├── controllers/        # Application logic.
├── middleware/         # Contains user defined middlewares.
├── models/             # Database schemas (MongoDB).
├── routes/             # Express route definitions/.
├── views/              # EJS templates for the frontend.
├── views/tools/        # EJS templates for the tools.
├── public/             # Static assets (CSS, JS, images).
├── app.js              # Main application entry point.
├── package.json        # Project metadata and dependencies.
└── README.md           # Project documentation.
```

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine. [Download Node.js](https://nodejs.org/)
- **MongoDB**: Set up a MongoDB database. [Install MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. **Clone the Repository**:

   ```bash
   >> git clone https://github.com/aadi1335/QuicklyKit.git
   >> cd QuicklyKit
   ```

2. **Install Dependencies**:

   ```bash
   >> npm install
   ```

4. **Start the Application**:

   ```bash
   >> npm start
   ```

   The application will run at `http://localhost:3000/Login`.

5. **Start application under development server**

   ```bash
   >> npm run start:dev
   ```

   The application will run at `http://localhost:3000/Login`.

## Usage

- Navigate to `http://localhost:3000/Login` in your browser.
- Access the tools via the navigation menu.
- Utilize the QR Code Generator, URL Shortener, and other available utilities.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your enhancements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

This `README.md` provides an overview of QuicklyKit, including its features, project structure, installation steps, usage instructions, and contribution guidelines. Adjust the content as needed to accurately reflect your project's specifics. 
