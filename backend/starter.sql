-- Check if the users table exists
DO $$
BEGIN
IF NOT EXISTS (
  SELECT 1
  FROM   information_schema.tables 
  WHERE  table_schema = 'public'
  AND    table_name = 'users'
) THEN
  -- Create the users table
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    userId VARCHAR(100) UNIQUE,
    fullname VARCHAR(100),
    userPassword VARCHAR(100)
  );

  -- Insert initial users
  INSERT INTO users (userId, fullname, userPassword) VALUES ('pranjal', 'Pranjal pimpale' , 'Chico@123');
  INSERT INTO users (userId, fullname, userPassword) VALUES ('yash', 'Yash Kalantri' ,'Chico@123');
  INSERT INTO users (userId, fullname, userPassword) VALUES ('prasad', 'Prasad Shinde','Chico@123');
  INSERT INTO users (userId, fullname, userPassword) VALUES ('prathamesh', 'Prathamesh Kalantri','Chico@123');
  INSERT INTO users (userId, fullname, userPassword) VALUES ('gitesh', 'Gitesh Pawar','Chico@123');

END IF;
END $$;

-- Check if the team table exists
DO $$
BEGIN
IF NOT EXISTS (
  SELECT 1
  FROM   information_schema.tables 
  WHERE  table_schema = 'public'
  AND    table_name = 'team'
) THEN
  -- Create the team table
  CREATE TABLE team (
    team_id SERIAL PRIMARY KEY,
    team_name VARCHAR(255) NOT NULL,
    team_description TEXT,
    assignee_id INT,
    other_assignee VARCHAR(255),
    FOREIGN KEY (assignee_id) REFERENCES users(id)
  );

  -- Insert initial users
  INSERT INTO team (team_name, team_description, assignee_id) VALUES ('team1', 'team one description', 1);
  INSERT INTO team (team_name, team_description, assignee_id) VALUES ('team2', 'team one description', 2);
  INSERT INTO team (team_name, team_description, assignee_id) VALUES ('team3', 'team one description', 3);
  INSERT INTO team (team_name, team_description, assignee_id) VALUES ('team4', 'team one description', 4);
  INSERT INTO team (team_name, team_description, assignee_id) VALUES ('team5', 'team one description', 5);
END IF;
END $$;
