-- To insert data into db execute the following command from the terminal
-- mysql -u root -p < server/database/db-init/mock-data/user.sql

USE bricolyDB;
INSERT INTO users (first_name , last_name, email, phone, is_professional )
 VALUES
  ('testt','bentestt', 'test@test1.com',11111144, TRUE );
	
	 
	
	
