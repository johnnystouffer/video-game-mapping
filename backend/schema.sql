DROP TABLE IF EXISTS user_progress;
DROP TABLE IF EXISTS worlds;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    username VARCHAR(20) NOT NULL,
    passhash VARCHAR(255) NOT NULL,
    salt VARCHAR(10) NOT NULL,
    role VARCHAR(10) CHECK (role IN ('user', 'admin')) NOT NULL
);

CREATE TABLE worlds (
    world_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    game VARCHAR(100) NOT NULL,
    map_name VARCHAR(100) UNIQUE NOT NULL,
    max_limit VARCHAR(2048) NOT NULL
);

CREATE TABLE user_progress (
    prog_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT NOT NULL,
    world_id INT NOT NULL,
    progress VARCHAR(2048) NOT NULL,
    UNIQUE(user_id, world_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (world_id) REFERENCES worlds(world_id) ON DELETE CASCADE
);
