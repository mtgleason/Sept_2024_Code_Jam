// Load environment variables from the .env file
require('dotenv').config();

// Access the environment variables
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

// Log the values (for testing purposes)
console.log(`Client ID: ${clientId}`);
console.log(`Client Secret: ${clientSecret}`);
