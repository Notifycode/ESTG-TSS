const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectDB = require('./database/DB.js');
const session = require("express-session")
const MongoStore = require("connect-mongo")
const annoucement_router = require('./routers/annoucement_router.js');
const event_news_router = require('./routers/event_news_route.js');
const account_routes = require('./routers/account_routes.js');
const Accountmodel = require("./models/account_schema")
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// allow the usage of session
// Session middleware (without MongoStore)
app.use(session({
  secret: "ddklddk", // Replace with your own secret key
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ 
    mongoUrl: 'mongodb://localhost:27017/estg-tss', // MongoDB URL
    collectionName: 'sessions', // Optional: name of the collection to store sessions
  }),
  cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24,sameSite: 'lax'}
}));


// API Routes
app.use('/api/announcement', annoucement_router);
app.use('/api/event-news', event_news_router);
app.use('/api/account', account_routes);


app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
