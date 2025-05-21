CREATE TABLE IF NOT EXISTS collaborators (
    id SERIAL PRIMARY KEY,
    name VARCHAR(155),
    role VARCHAR(155),
    can_develop BOOLEAN DEFAULT FALSE
);