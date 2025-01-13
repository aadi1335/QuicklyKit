const express = require('express');
const cluster = require('node:cluster');
const os = require('node:os');
const cookieParser = require('cookie-parser');
const path = require('path');

// Number of CPUs available for clustering
// Creating only  worker cpus
// const cpuNums = os.availableParallelism();
const cpuNums = 2;
// Check if the current process is the master
if (cluster.isPrimary) {
    console.log(`Master process ${process.pid} is running`);

    // Fork workers
    for (let i = 0; i < cpuNums; i++) {
        cluster.fork();
    }

    // Listen for workers exiting and replace them
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} exited. Spawning a new one.`);
        cluster.fork();
    });
} else {
    // Worker processes
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    app.set('view engine', 'ejs');

    // Routes
    const authRoutes = require('./routes/authRoutes');
    const pageRoutes = require('./routes/pageRoutes');
    const toolRoutes = require('./routes/toolRoutes');

    app.use(authRoutes);
    app.use(pageRoutes);
    app.use(toolRoutes);

    // Start server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Worker ${process.pid}:: [Started - http://localhost:${PORT}/Login]`);
    });
}
