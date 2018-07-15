-- When editing the databse, add schema migration to the bottom.
-- Nevery edit current lines after push
drop database if EXISTS leadcoin;
CREATE DATABASE IF NOT EXISTS leadcoin;
use leadcoin;
CREATE TABLE IF NOT EXISTS users (
	id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	user longtext
);

DROP TABLE IF EXISTS `leadcoin`.`leads_upload`;
CREATE TABLE  `leadcoin`.`leads_upload` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    leads_upload longtext
);

DROP TABLE IF EXISTS `leadcoin`.`leads`;
CREATE TABLE  `leadcoin`.`leads` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  lead longtext
);