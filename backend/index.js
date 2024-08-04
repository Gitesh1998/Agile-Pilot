// const express = require('express');
// const fs = require('fs');
// const { Pool } = require('pg');
// const apiRouter = require('./api');

// const app = express();
// const port = 3000;

// // PostgreSQL database configuration
// const pool = new Pool({
//   user: 'agile',
//   host: 'localhost',
//   database: 'agile',
//   password: 'agile',
//   port: 5432,
// });

// // Test the database connection
// pool.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//   } else {
//     console.log('Connected to the database at:', res.rows[0].now);
//   }
// });

// const initScript = fs.readFileSync('starter.sql').toString();
// pool.query(initScript, (err, res) => {
//   if (err) {
//     console.error('Error executing init script:', err);
//   } else {
//     console.log('Initialization script executed successfully');
//   }
// });

// app.use(express.json());
// app.use('/api', apiRouter);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



const express = require('express');
const fs = require('fs');
const { Pool } = require('pg');
const cors = require('cors');
const apiRouter = require('./api');

const app = express();
app.use(cors({
  origin: "*",
  credentials:true
}));
const port = 3001;

// PostgreSQL database configuration
const pool = new Pool({
  user: 'agile',
  host: 'localhost',
  database: 'agile',
  password: 'agile',
  port: 5432,
});

// Test the database connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error connecting to the database:', err.stack);
  }
  console.log('Connected to the database');

  // Read the initialization script
  const initScript = fs.readFileSync('starter.sql').toString();

  // Execute the initialization script
  client.query(initScript, (err, result) => {
    release(); // Release the client back to the pool
    if (err) {
      console.error('Error executing init script:', err.stack);
    } else {
      console.log('Initialization script executed successfully');
    }
  });
});

app.use(express.json());
app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
