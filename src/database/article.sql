CREATE TABLE `articles`
(
  `id` INT NOT NULL AUTO_INCREMENT,
  `object_id` VARCHAR(50) NOT NULL,
  `collection_count`  INT(20) NOT NULL,
  `comments_count` INT(20),
  `views_count` INT(20),
  `hot` INT(10),
  `title` VARCHAR(100) NOT NULL, 
  `screenshot` VARCHAR(200), 
  `is_collected` INT, 
  `summary` VARCHAR(400) NOT NULL, 
  `content` VARCHAR(400) NOT NULL, 
  `hot_index` INT, 
  `type` VARCHAR(20) NOT NULL, 
  `original_url` VARCHAR(100) NOT NULL, 
  `tag` VARCHAR(100) NOT NULL, 
  `check_status` INT, 
  `user_info` VARCHAR(200) NOT NULL, 
  `createdAt` VARCHAR(200), 
  `updatedAt` VARCHAR(200), 
  PRIMARY KEY(`id`),
   KEY `id` (`id`) USING BTREE

) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8