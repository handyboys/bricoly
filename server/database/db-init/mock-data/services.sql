-- To insert data into db execute the following command from the terminal
-- mysql -u root -p < server/database/db-init/mock-data/services.sql

USE bricolyDB;
INSERT INTO services (service , category_id)
 VALUES
 ('interior painting',34),
 ('exterior painting',34),
 ('wall paper',34),
 ('Decorative painting',34),
 ('installation Ac',36),
 ('Reparation Ac',36),
 ('Gaz furnaces',36);
 
