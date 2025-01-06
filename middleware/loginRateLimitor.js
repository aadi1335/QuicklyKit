const WAIT_TIME = 5 * 60 * 1000; // 5 minutes
const MAX_ATTEMPT = 5;
const CLIENT_LIMIT = {};

const limitor = function rateLimitor(req, res, next) {
    const userIp = req.ip;
    const currentTime = Date.now();

    if (!CLIENT_LIMIT[userIp]) {
        // Initialize the user IP address in CLIENT_LIMIT object
        CLIENT_LIMIT[userIp] = { Attempt: 1, firstRequestTime: currentTime };
    } else {
        const { Attempt, firstRequestTime } = CLIENT_LIMIT[userIp];

        // Check if waiting time is over
        if (currentTime - firstRequestTime > WAIT_TIME) {
            // Reset the counter for this user
            CLIENT_LIMIT[userIp] = { Attempt: 1, firstRequestTime: currentTime };
        } else {
            // Check if user attempts exceed the limit
            if (Attempt >= MAX_ATTEMPT) {
                const retryAfter = Math.ceil((WAIT_TIME - (currentTime - firstRequestTime)) / 1000);
                return res.status(429).json({
                    message: `Too many login attempts. Please try again after ${retryAfter} seconds.`,
                });
            }

            // Increment the attempt counter
            CLIENT_LIMIT[userIp].Attempt += 1;
        }
    }

    next(); // Proceed to the next middleware or route handler
};

module.exports = { limitor };
