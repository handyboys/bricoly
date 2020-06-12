-- To create database and its tables execute the following command from the terminal
-- mysql -u root -p < server/database/db-init/schema.sql

DROP DATABASE IF EXISTS bricolyDB;

CREATE DATABASE bricolyDB;

USE bricolyDB;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
	email varchar(255) NOT NULL UNIQUE,
	phone INT NOT NULL UNIQUE,
	is_professional BOOLEAN NOT NULL, -- TODO : add default value 'false'
	profile_picture_url TEXT,
	PRIMARY KEY (id)
);

CREATE TABLE professionals (
	id INT NOT NULL,
	category_id INT NOT NULL,
	adress TEXT NOT NULL,
	longitude DECIMAL NOT NULL,
	latitude DECIMAL NOT NULL,
	motorized BOOLEAN NOT NULL,
	description TEXT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE services (
	id INT NOT NULL AUTO_INCREMENT,
	service varchar(255) NOT NULL,
	category_id INT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE service_categories (
	id INT NOT NULL AUTO_INCREMENT,
	category varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE messages (
	id INT NOT NULL AUTO_INCREMENT,
	receiver_id INT NOT NULL,
	sender_id INT NOT NULL,
	message_text TEXT NOT NULL,
	created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

CREATE TABLE jobs (
	id INT NOT NULL AUTO_INCREMENT,
	client_id INT NOT NULL,
	service_type varchar(255) NOT NULL,
	service_id INT NOT NULL,
	client_type VARCHAR(255),
	status varchar(255) NOT NULL DEFAULT 'open', -- TODO : add predefined values {open, in_progress, closed}
	longitude decimal NOT NULL,
	latitude decimal NOT NULL,
	related_info TEXT ,
	PRIMARY KEY (id)
);

CREATE TABLE contracts (
	id INT NOT NULL AUTO_INCREMENT,
	job_id INT NOT NULL,
	professional_id INT NOT NULL,
	status TEXT NOT NULL, -- TODO : add predefined values {accepted, closed, declined}
	end_reason TEXT,
	signature_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	closure_date DATETIME,
	expected_start_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	duration INT NOT NULL, -- duration is expressed in days
	expected_price DECIMAL,
	tasks TEXT,
	PRIMARY KEY (id)
);

CREATE TABLE reviews (
	id INT NOT NULL AUTO_INCREMENT,
	comment TEXT,
	service_quality INT, -- Integer representing the number of stars
	price INT, -- same as above
	communication INT, -- same as above
	overall_rating decimal , -- average stars rating of three above
	contract_id INT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE credentials (
	id INT NOT NULL,
	password TEXT NOT NULL,
	salt TEXT NOT NULL,
	token TEXT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE images (
	id INT NOT NULL AUTO_INCREMENT,
	uri TEXT NOT NULL,
	job_id INT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE job_applications (
	id INT NOT NULL AUTO_INCREMENT ,
	job_id INT NOT NULL,
	professional_id INT NOT NULL,
	PRIMARY KEY (id)
);

ALTER TABLE professionals ADD CONSTRAINT professionals_fk0 FOREIGN KEY (id) REFERENCES users(id);

ALTER TABLE professionals ADD CONSTRAINT professionals_fk1 FOREIGN KEY (category_id) REFERENCES service_categories(id);

ALTER TABLE services ADD CONSTRAINT services_fk0 FOREIGN KEY (category_id) REFERENCES service_categories(id);

ALTER TABLE messages ADD CONSTRAINT messages_fk0 FOREIGN KEY (receiver_id) REFERENCES users(id);

ALTER TABLE messages ADD CONSTRAINT messages_fk1 FOREIGN KEY (sender_id) REFERENCES users(id);

ALTER TABLE jobs ADD CONSTRAINT jobs_fk0 FOREIGN KEY (client_id) REFERENCES users(id);

ALTER TABLE jobs ADD CONSTRAINT jobs_fk1 FOREIGN KEY (service_id) REFERENCES services(id);

ALTER TABLE contracts ADD CONSTRAINT contract_fk0 FOREIGN KEY (job_id) REFERENCES jobs(id);

ALTER TABLE contracts ADD CONSTRAINT contract_fk1 FOREIGN KEY (professional_id) REFERENCES users(id);

ALTER TABLE reviews ADD CONSTRAINT reviews_fk0 FOREIGN KEY (contract_id) REFERENCES contracts(id);

ALTER TABLE credentials ADD CONSTRAINT credentials_fk0 FOREIGN KEY (id) REFERENCES users(id);

ALTER TABLE images ADD CONSTRAINT images_fk0 FOREIGN KEY (job_id) REFERENCES jobs(id);

ALTER TABLE job_applications ADD CONSTRAINT job_applications_fk0 FOREIGN KEY (job_id) REFERENCES jobs(id);

ALTER TABLE job_applications ADD CONSTRAINT job_applications_fk1 FOREIGN KEY (professional_id) REFERENCES users(id);