-- To insert data into db execute the following command from the terminal
-- mysql -u root -p < server/database/db-init/mock-data/categories.sql

USE bricolyDB;

INSERT INTO service_categories (category)
VALUES
('Plumbing'),
('Security'),
('Elevators'),
('Painting'),
('Electricity'),
('Air Conditionning & Cooling'), 
('Cleaning'),
('Doors & Windows'),
('Gardening & Outdoor'),
('Construction & Renovation'),
('Renewable & Solar Energy'),
('Heating'),
('Bathroom & Sanitary'),
('Home Appliances'),
('Other');