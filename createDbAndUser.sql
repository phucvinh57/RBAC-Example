-- Use as root
CREATE DATABASE IF NOT EXISTS rbac_example;
USE rbac_example;

CREATE TABLE IF NOT EXISTS `role` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS `user` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) UNIQUE NOT NULL,
    role_id INT DEFAULT NULL,
    FOREIGN KEY (role_id) REFERENCES `role`(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS `resource` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS `action` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS `permission` (
    role_id INT,
    resource_id INT,
    action_id INT,
    PRIMARY KEY (role_id, resource_id, action_id),
    FOREIGN KEY (role_id) REFERENCES `role`(id)
        ON DELETE CASCADE,
    FOREIGN KEY (resource_id) REFERENCES `resource`(id)
        ON DELETE CASCADE,
    FOREIGN KEY (action_id) REFERENCES `action`(id)
        ON DELETE CASCADE
);

-- Creates the user
CREATE USER 'rbac_example_dbuser'@'%' IDENTIFIED BY 'yourPassword#1';

-- Gives all privileges to the new user on the newly created database
GRANT ALL ON rbac_example.* to 'rbac_example_dbuser'@'%';