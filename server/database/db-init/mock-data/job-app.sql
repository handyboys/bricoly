-- To insert data into db execute the following command from the terminal
-- mysql -u root -p < server/database/db-init/mock-data/job-app.sql


USE bricolyDB;

INSERT INTO job_applications(job_id, professional_id)
VALUES (3, 1);