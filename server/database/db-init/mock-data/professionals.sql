-- To insert data into db execute the following command from the terminal
-- mysql -u root -p < server/database/db-init/mock-data/professional.sql
USE bricolyDB;

INSERT INTO
    professionals(
        id,
        category_id,
        adress,
        longitude,
        latitude,
        motorized,
        description,
        average_review
    )
VALUES
    (
        11,
        4,
        'Tunis',
        10.171078,
        36.806112,
        1,
        'Hello, my name is Tayeb, I am a painter based in Tunis.',
        5
    ),
    (
        12,
        4,
        'Tunis',
        10.171078,
        36.806112,
        0,
        'Hello, my name is Zahid, I am a painter based in Tunis.',
        5
    ),
    (
        13,
        4,
        'Ariana',
        10.193371,
        36.860117,
        1,
        'Hello, my name is Amir, I am a painter based in Ariana.',
        5
    ),
    (
        14,
        4,
        'Manouba',
        10.097205,
        36.808029,
        1,
        'Hello, my name is Nadia, I am a painter based in Manouba.',
        5
    ),
    (
        15,
        4,
        'Manouba',
        10.097205,
        36.808029,
        0,
        'Hello, my name is Khalil, I am a painter based in Manouba.',
        5
    ),
    (
        16,
        6,
        'Tunis',
        10.171078,
        36.806112,
        1,
        'Hello, my name is Karim, I am an exprert in Air Conditioners and Coolers based in Tunis.',
        5
    ),
    (
        17,
        6,
        'Tunis',
        10.171078,
        36.806112,
        1,
        'Hello, my name is Zakaria, I am an exprert in Air Conditioners and Coolers based in Tunis.',
        5
    ),
    (
        18,
        6,
        'Ariana',
        10.193371,
        36.860117,
        0,
        'Hello, my name is Malik, I am an exprert in Air Conditioners and Coolers based in Ariana.',
        5
    ),
    (
        19,
        6,
        'Ariana',
        10.193371,
        36.860117,
        1,
        'Hello, my name is Nadir, I am an exprert in Air Conditioners and Coolers based in Ariana.',
        5
    );