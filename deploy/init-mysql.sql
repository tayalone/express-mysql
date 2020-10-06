-- drop database
DROP DATABASE `shippop_member`;

-- create data base
CREATE SCHEMA `shippop_member` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;


DROP TABLE `shippop_member`.`User`;

-- create User Table
CREATE TABLE `shippop_member`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(128) NULL,
  `salt` VARCHAR(128) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC));
