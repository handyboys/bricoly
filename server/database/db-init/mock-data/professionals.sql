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
        'Hello, my name is P1_FName, I am a painter based in Tunis.',
        5
    ),
    (
        12,
        4,
        'Tunis',
        10.171078,
        36.806112,
        0,
        'Hello, my name is P2_FName, I am a painter based in Tunis.',
        5
    ),
    (
        13,
        4,
        'Ariana',
        10.193371,
        36.860117,
        1,
        'Hello, my name is P3_FName, I am a painter based in Ariana.',
        5
    ),
    (
        14,
        4,
        'Manouba',
        10.097205,
        36.808029,
        1,
        'Hello, my name is P4_FName, I am a painter based in Manouba.',
        5
    ),
    (
        15,
        4,
        'Manouba',
        10.097205,
        36.808029,
        0,
        'Hello, my name is P5_FName, I am a painter based in Manouba.',
        5
    ),
    (
        16,
        6,
        'Tunis',
        10.171078,
        36.806112,
        1,
        'Hello, my name is P7_FName, I am an exprert in Air Conditioners and Coolers based in Tunis.',
        5
    ),
    (
        17,
        6,
        'Tunis',
        10.171078,
        36.806112,
        1,
        'Hello, my name is P8_FName, I am an exprert in Air Conditioners and Coolers based in Tunis.',
        5
    ),
    (
        18,
        6,
        'Ariana',
        10.193371,
        36.860117,
        0,
        'Hello, my name is P9_FName, I am an exprert in Air Conditioners and Coolers based in Ariana.',
        5
    ),
    (
        19,
        6,
        'Ariana',
        10.193371,
        36.860117,
        1,
        'Hello, my name is P10_FName, I am an exprert in Air Conditioners and Coolers based in Ariana.',
        5
    );