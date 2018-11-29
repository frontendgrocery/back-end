CREATE TABLE `comments`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `open_id` VARCHAR
(50) NOT NULL,
  `book_id` VARCHAR
(20) NOT NULL,
  `comment` VARCHAR
(200) NOT NULL,
  `location` VARCHAR
(50),
  `phone_info` VARCHAR
(50),
  PRIMARY KEY
(`id`),
  KEY `id`
(`id`) USING BTREE

) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8