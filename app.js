const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path')
const authRoutes = require('./routes/authRoutes');
const pageRoutes = require('./routes/pageRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
app.use(authRoutes);
app.use(pageRoutes);

// Start server
app.listen(3000, () => {
    console.log('Live Server: http://localhost:3000/Login');
});
