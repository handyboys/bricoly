-- To insert data into db execute the following command from the terminal
-- mysql -u root -p < server/database/db-init/mock-data/services.sql

USE bricolyDB;
INSERT INTO services (service , category_id)
 VALUES
 ('interior painting',4),
 ('exterior painting',4),
 ('wall paper',4),
 ('Decorative painting',4),
 ('installation Ac',6),
 ('Reparation Ac',6),
 ('Gaz furnaces',6);
 
