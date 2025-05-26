CREATE TABLE IF NOT EXISTS collaborators (
    id SERIAL PRIMARY KEY,
    name VARCHAR(155),
    role VARCHAR(155),
    can_develop BOOLEAN DEFAULT FALSE
);

CREATE TABLE customers (
    code SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    birth_date DATE,
    rg VARCHAR(20),
    cpf VARCHAR(14) UNIQUE,
    phone VARCHAR(20),
    address VARCHAR(255),
    number_house VARCHAR(10),
    city VARCHAR(100),
    uf CHAR(2),
    cep VARCHAR(9)
);