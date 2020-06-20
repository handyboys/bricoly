-- To insert data into db execute the following command from the terminal
-- mysql -u root -p < server/database/db-init/mock-data/users.sql
USE bricolyDB;

INSERT INTO
    users (first_name, last_name, email, phone, is_professional, profile_picture_url)
VALUES
('Fouad' , 'Hussain' , 'c1@gmail.com' , 53000001, 0, '../../../assets/ui-faces/16.jpg'),
('Salah' , 'Amin' , 'c2@gmail.com' , 53000002, 0, '../../../assets/ui-faces/15.jpg'),
('Wassim' , 'Ahmad' , 'c3@gmail.com' , 53000003, 0, '../../../assets/ui-faces/3.jpg'),
('Anas' , 'Adam' , 'c4@gmail.com' , 53000004, 0, '../../../assets/ui-faces/4.jpg'),
('khaled' , 'Abbas' , 'c5@gmail.com' , 53000005, 0, '../../../assets/ui-faces/1.jpg'),
('Selma' , 'Said' , 'c6@gmail.com' , 53000006, 0, '../../../assets/ui-faces/20.jpg'),
('Mohamed' , 'Khaled' , 'c7@gmail.com' , 53000007, 0, '../../../assets/ui-faces/7.jpg'),
('Halim' , 'Rahmani' , 'c8@gmail.com' , 53000008, 0, '../../../assets/ui-faces/8.jpg'),
('Fahim' , 'Rabbai' , 'c9@gmail.com' , 53000009, 0, '../../../assets/ui-faces/9.jpg'),
('Amel', 'Ghribi', 'c10@gmail.com', 53000010, 0, '../../../assets/ui-faces/20.jpg'),
('Tayeb' , 'Slim' , 'p1@gmail.com' , 98000001, 1, '../../../assets/ui-faces/1.jpg'),
('Zahid' , 'Mouradi' , 'p2@gmail.com' , 98000002, 1, '../../../assets/ui-faces/12.jpg'),
('Amir' , 'Kamel' , 'p3@gmail.com' , 98000003, 1, '../../../assets/ui-faces/13.jpg'),
('Nadia' , 'Abdi' , 'p4@gmail.com' , 98000004, 1, '../../../assets/ui-faces/10.jpg'),
('Khalil' , 'Mehrez' , 'p5@gmail.com' , 98000005, 1, '../../../assets/ui-faces/2.jpg'),
('Karim' , 'Badri' , 'p7@gmail.com' , 98000007, 1, '../../../assets/ui-faces/14.jpg'),
('Zakaria' , 'Laabidi' , 'p8@gmail.com' , 98000008, 1, '../../../assets/ui-faces/11.jpg'),
('Malik' , 'Chakroun' , 'p9@gmail.com' , 98000009, 1, '../../../assets/ui-faces/17.jpg'),
('Nadir', 'Ali', 'p10@gmail.com', 98000010, 1, '../../../assets/ui-faces/5.jpg');