-- To insert data into db execute the following command from the terminal
-- mysql -u root -p < server/database/db-init/mock-data/categories.sql

USE bricolyDB;

INSERT INTO service_categories(category, icon_url)
VALUES
('Plumbing', 'https://img.icons8.com/cotton/80/000000/plumbing--v2.png'),
('Security', 'https://img.icons8.com/cotton/80/000000/security-shield.png'),
('Elevators', 'https://img.icons8.com/cotton/80/000000/fork-lift.png'),
('Painting', 'https://img.icons8.com/cotton/80/000000/roller-brush.png'),
('Electricity', 'https://img.icons8.com/cotton/80/000000/electricity.png'),
('Air Conditionning & Cooling', 'https://img.icons8.com/cotton/80/000000/air-conditioner--v4.png'),
('Cleaning', 'https://img.icons8.com/cotton/80/000000/laptop-cleaning.png'),
('Doors & Windows', 'https://img.icons8.com/cotton/80/000000/frozen-window.png'),
('Gardening & Outdoor', 'https://img.icons8.com/cotton/80/000000/n-gardening-plant--v2.png' ),
('Construction & Renovation', 'https://img.icons8.com/cotton/80/000000/construction.png'),
('Renewable & Solar Energy', 'https://img.icons8.com/cotton/80/000000/--solar-panels.png'),
('Heating' , 'https://img.icons8.com/cotton/80/000000/gas-industry.png'),
('Bathroom & Sanitary', 'https://img.icons8.com/cotton/80/000000/shower-and-tub.png'),
('Home Appliances', 'https://img.icons8.com/cotton/80/000000/fridge.png');