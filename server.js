require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js'); // Import Mongoose connection
const path = require('path')

const app = express();

//views configuration

app.set('view engine','ejs')

app.set('views',path.join(process.cwd(),'views'))

app.use(express.static(path.join(process.cwd(),'views')));

// Import route files
const userRoutes = require('./routes/api/users');
const formRoutes = require('./routes/api/forms');
const staticRoutes = require('./routes/static/static.routes.js')

// --- Initialize App and Database Connection ---

connectDB();

// --- Middleware ---
app.use(cors("*"));
app.use(express.json({limit:"16kb"})); // Parse incoming JSON request bodies

// --- API Routes ---
app.use('/',staticRoutes)
app.use('/api/users', userRoutes); // Routes for /api/users/register, /api/users/login
app.use('/api/forms', formRoutes); // Routes for /api/forms/contact, /api/forms/appointment


// --- Start Server ---
/*const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});*/

module.exports = app