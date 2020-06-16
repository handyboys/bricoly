-- To insert data into db execute the following command from the terminal
-- mysql -u root -p < server/database/db-init/mock-data/users.sql
USE bricolyDB;

INSERT INTO
    users (first_name, last_name, email, phone, is_professional)
VALUES
('C1_FName' , 'C1_LName' , 'c1@gmail.com' , 53000001, 0),
('C2_FName' , 'C2_LName' , 'c2@gmail.com' , 53000002, 0),
('C3_FName' , 'C3_LName' , 'c3@gmail.com' , 53000003, 0),
('C4_FName' , 'C4_LName' , 'c4@gmail.com' , 53000004, 0),
('C5_FName' , 'C5_LName' , 'c5@gmail.com' , 53000005, 0),
('C6_FName' , 'C6_LName' , 'c6@gmail.com' , 53000006, 0),
('C7_FName' , 'C7_LName' , 'c7@gmail.com' , 53000007, 0),
('C8_FName' , 'C8_LName' , 'c8@gmail.com' , 53000008, 0),
('C9_FName' , 'C9_LName' , 'c9@gmail.com' , 53000009, 0),
('C10_FName', 'C10_LName', 'c10@gmail.com', 53000010, 0),
('P1_FName' , 'P2_LName' , 'p1@gmail.com' , 98000001, 1),
('P2_FName' , 'P2_LName' , 'p2@gmail.com' , 98000002, 1),
('P3_FName' , 'P3_LName' , 'p3@gmail.com' , 98000003, 1),
('P4_FName' , 'P4_LName' , 'p4@gmail.com' , 98000004, 1),
('P5_FName' , 'P5_LName' , 'p5@gmail.com' , 98000005, 1),
('P7_FName' , 'P7_LName' , 'p7@gmail.com' , 98000007, 1),
('P8_FName' , 'P8_LName' , 'p8@gmail.com' , 98000008, 1),
('P9_FName' , 'P9_LName' , 'p9@gmail.com' , 98000009, 1),
('P10_FName', 'P10_LName', 'p10@gmail.com', 98000010, 1);