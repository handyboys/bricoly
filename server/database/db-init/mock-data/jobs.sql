
USE bricolyDB;

INSERT INTO jobs (client_id, service_type, service_id, client_type, status, longitude, latitude, related_info)
VALUES
(1, 'test-service-type', 1, 'test-client-type', 'open', 3.14, 4, '7atchay'),
(1, 'test-service-type2', 1, 'test-client-type2', 'open', 5.46, 2, '7atchay2');