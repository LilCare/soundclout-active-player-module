DROP DATABASE IF EXISTS soundClout;

CREATE DATABASE soundClout;

USE soundClout;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  length INT NOT NULL,
  timestamp INT DEFAULT 0,
  isliked TINYINT DEFAULT 0,
  songfile VARCHAR(50),
  title VARCHAR(50),
  artist VARCHAR(30),
  album VARCHAR(30),
  thumbnail VARCHAR(40),
  PRIMARY KEY (id)
);

CREATE TABLE upnext (
  position INT AUTO_INCREMENT,
  songid INT,
  FOREIGN KEY (songid) 
    REFERENCES songs(id)
    ON UPDATE CASCADE,
  UNIQUE KEY (position)
);

CREATE TABLE previousplays (
  position INT AUTO_INCREMENT,
  songid INT,
  FOREIGN KEY (songid) 
    REFERENCES songs(id)
    ON UPDATE CASCADE,
  UNIQUE KEY (position)
);

