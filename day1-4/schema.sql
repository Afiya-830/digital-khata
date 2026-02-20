CREATE TABLE customers (
    id  INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100) NOT NULL,
    phone VARCHAR(50) UNIQUE
);

CREATE TABLE transactions (
    id INT  PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    item_name VARCHAR(50) NOT NULL,
    amount DECIMAL(10,2) CHECK (amount > 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);