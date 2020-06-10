-- To insert data into db execute the following command from the terminal
-- mysql -u root -p < server/database/db-init/mock-data/professional.sql

USE bricolyDB;

INSERT INTO professionals (id, category_id, adress, longitude, latitude, motorized, description)
VALUES
(1,4, 'nope', 3.14, 5.1, true, 'nnnope')