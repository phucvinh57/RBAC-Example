-- Use as root
CREATE DATABASE IF NOT EXISTS rbac_example;
USE rbac_example;

-- Creates the user
CREATE USER 'rbac_example_dbuser'@'%' IDENTIFIED BY 'yourPassword#1';

-- Gives all privileges to the new user on the newly created database
GRANT ALL ON tickfund.* to 'rbac_example_dbuser'@'%';