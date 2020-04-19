CREATE TABLE IF NOT EXISTS accounts(
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20) NOT NULL,
  password VARCHAR(20) NOT NULL,
  email VARCHAR(20)
);

INSERT INTO accounts(username, password, email) VALUES
  ('admin', 'admin', 'admin@gmail.com'),
  ('user', 'user', 'user@gmail.com'),
  ('tom', '1234', 'tom@gmail.com'),
  ('jack', '5678', 'jack@gmail.com');
