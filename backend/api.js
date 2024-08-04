const express = require('express');
const { Pool } = require('pg');
const router = express.Router();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'agile',
    password: 'agile',
    port: 5432,
});

router.post('/login', (req, res) => {
  const { userId, password } = req.body;

  // Check if userId and password are provided
  if (!userId || !password) {
    return res.status(400).send('Both userId and password are required.');
  }

  // Query to fetch user from database based on userId
  const query = {
    text: 'SELECT * FROM users WHERE userId = $1',
    values: [userId],
  };

  // Perform database query
  pool.query(query, (error, result) => {
    if (error) {
      console.error('Query Error', error);
      return res.status(500).send('Server Issue.');
    }

    // Check if user with given userId exists
    const user = result.rows[0];
    if (!user) {
      return res.status(404).send('User not found.');
    }
    console.log(user);
    // Check if password matches
    if (password === user.userpassword) {
      return res.status(200).send('Login successful.');
    } else {
      return res.status(401).send('Incorrect password.');
    }
  });
});

router.post('/signup', async (req, res) => {
  const { userId, fullName, password } = req.body;

  // Check if userId and password are provided
  if (!userId || !password) {
    return res.status(400).send('Both userId and password are required.');
  }

  try {
    // Check if user with given userId exists
    const { rows } = await pool.query('SELECT * FROM users WHERE userId = $1', [userId]);
    const user = rows[0];

    if (user) {
      return res.status(409).send('User already exists.');
    }

    // Insert data into the database
    await pool.query('INSERT INTO users (userId, userPassword, fullName) VALUES ($1, $2, $3)', [userId, password, fullName]);

    return res.status(201).send('User signed up successfully.');
  } catch (error) {
    console.error('Error executing query', error);
    return res.status(500).send('Server Issue.');
  }
});

router.get('/user', async (req, res) => {
  try {
    const { userEmail } = req.query;
    // Define the SQL query
    const query = {
      text: 'SELECT (fullname) FROM users WHERE userId = $1',
      values: [userEmail],
    };

    // Perform the database query
    pool.query(query, (error, result) => {
      if (error) {
        console.error('Error fetching user:', error);
        return res.status(500).send('Server error.');
      }
      // If user exists, return user data
      if (result.rows.length > 0) {
        return res.status(200).json(result.rows[0]);
      } else {
        // If user does not exist, return 404 error
        return res.status(404).send('User not found.');
      }
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).send('Server error.');
  }
});

router.post('/team', async (req, res) => {
  const { team_name, team_description, assignee_id } = req.body;

  // Check if all fields are provided
  if (!team_name || !team_description || !assignee_id) {
    return res.status(400).send('All fields are required.');
  }

  try {
    // Check if the assignee exists in the users table
    const userCheckQuery = {
      text: 'SELECT * FROM users WHERE id = $1',
      values: [assignee_id]
    };

    const userCheckResult = await pool.query(userCheckQuery);
    const userExists = userCheckResult.rows.length > 0;
    console.log(userCheckResult.rows);
    if (!userExists) {
      return res.status(404).send('Assignee not found.');
    }

    // Insert the team into the database
    const insertQuery = {
      text: 'INSERT INTO team (team_name, team_description, assignee_id) VALUES ($1, $2, $3)',
      values: [team_name, team_description, assignee_id]
    };

    await pool.query(insertQuery);

    return res.status(201).send('team added successfully.');
  } catch (error) {
    console.error('Error adding team:', error);
    return res.status(500).send('Server Error.');
  }
});


router.put('/team', async (req, res) => {
  try {
    // Extract team_id and other_assignee from the request body
    const { team_id, other_assignee } = req.body;

    // Check if team_id and other_assignee are provided
    if (!team_id || !other_assignee) {
      return res.status(400).json({ error: 'Both team_id and other_assignee are required.' });
    }

    console.log(team_id, other_assignee);

    const teamCheckQuery = {
      text: 'SELECT * FROM team WHERE team_id = $1',
      values: [team_id]
    };

    const teamCheckResult = await pool.query(teamCheckQuery);
    const teamExists = teamCheckResult.rows.length > 0;
    console.log(teamCheckResult.rows);
    if (!teamExists) {
      return res.status(404).send('team not found');
    }

    if (other_assignee.includes(teamCheckResult.rows[0].assignee_id)) {
      return res.status(400).send('Can not add other_assignee, owner id is in other_assignee.');
    }

    oldAssignId = teamCheckResult.rows[0].other_assignee;
    if (!oldAssignId) {
      oldAssignId = "";
    }

    updateStr = oldAssignId;
    other_assignee.forEach(id => {
      console.log("id: ", id.toString(), updateStr);
      if(oldAssignId.includes(id.toString())) {
        throw new Error("Can not add other_assignee, other_assignee already exist.")
      } else {
        updateStr += ("," + id.toString());
      }
    });
    console.log("updateStr: ", updateStr);
    await pool.query('UPDATE team SET other_assignee = $1 WHERE team_id = $2', [other_assignee, team_id]);
    return res.status(200).json({ message: 'team assignee updated successfully.' });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
});


module.exports = router;