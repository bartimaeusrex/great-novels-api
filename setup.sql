CREATE DATABASE great-novels;

CREATE USER 'great-novels'@'localhost' IDENTIFIED BY 'novels;TheyrrrreGrrrrEAAAT$!';

GRANT ALL ON great-novels.* TO 'great-novels'@'localhost';

USE great-novels;

CREATE TABLE authors (
  id INT auto_increment,
  nameFirst VARCHAR(255) NOT NULL,
  nameLast VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);

CREATE TABLE genres (
  id INT auto_increment,
  name VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY (authorId) REFERENCES authors(id)
);

INSERT INTO genres (name) VALUES ("Adventure");
INSERT INTO genres (name) VALUES ("African Literature");
INSERT INTO genres (name) VALUES ("Crime");
INSERT INTO genres (name) VALUES ("Drama");
INSERT INTO genres (name) VALUES ("Dystopia");
INSERT INTO genres (name) VALUES ("Fantasy");
INSERT INTO genres (name) VALUES ("Fiction");
INSERT INTO genres (name) VALUES ("French Literature");
INSERT INTO genres (name) VALUES ("Gothic");
INSERT INTO genres (name) VALUES ("Historical Fiction");
INSERT INTO genres (name) VALUES ("Horror");
INSERT INTO genres (name) VALUES ("Mystery");
INSERT INTO genres (name) VALUES ("Plays");
INSERT INTO genres (name) VALUES ("Russian Literature");
INSERT INTO genres (name) VALUES ("Science Fiction");
INSERT INTO genres (name) VALUES ("Thriller");
INSERT INTO genres (name) VALUES ("Time Travel");
INSERT INTO genres (name) VALUES ("War");


INSERT INTO author (nameFirst, nameLast) VALUES ("Agatha", "Christie");
INSERT INTO author (nameFirst, nameLast) VALUES ("Alexandre", "Dumas");
INSERT INTO author (nameFirst, nameLast) VALUES ("Alice", "Walker");
INSERT INTO author (nameFirst, nameLast) VALUES ("Arthur", "Conan Doyle");
INSERT INTO author (nameFirst, nameLast) VALUES ("Arthur", "Miller");
INSERT INTO author (nameFirst, nameLast) VALUES ("Bram", "Stoker");
INSERT INTO author (nameFirst, nameLast) VALUES ("Charles", "Dickens");
INSERT INTO author (nameFirst, nameLast) VALUES ("Chinua", "Achebe");
INSERT INTO author (nameFirst, nameLast) VALUES ("Fyodor", "Dostoyevsky");
INSERT INTO author (nameFirst, nameLast) VALUES ("George", "Orwell");
INSERT INTO author (nameFirst, nameLast) VALUES ("H.G.", "Wells");
INSERT INTO author (nameFirst, nameLast) VALUES ("Leo", "Tolstoy");
INSERT INTO author (nameFirst, nameLast) VALUES ("Oscar", "Wilde");
INSERT INTO author (nameFirst, nameLast) VALUES ("Ray", "Bradbury");
INSERT INTO author (nameFirst, nameLast) VALUES ("Robert", "Louis Stevenson");
;

INSERT INTO novels (title) VALUES ("Dracula", );
INSERT INTO novels (title) VALUES ("The Picture of Dorian Gray", );
INSERT INTO novels (title) VALUES ("The Color Purple", );
INSERT INTO novels (title) VALUES ("War and Peace", );
INSERT INTO novels (title) VALUES ("A Tale of Two Cities", );
INSERT INTO novels (title) VALUES ("The Crucible", );
INSERT INTO novels (title) VALUES ("The Three Musketeers", );
INSERT INTO novels (title) VALUES ("The Hound of the Baskervilles", );
INSERT INTO novels (title) VALUES ("The Strange Case of Dr. Jekyll and Mr. Hyde", );
INSERT INTO novels (title) VALUES ("Crime and Punishment", );
INSERT INTO novels (title) VALUES ("Murder on the Orient Express", );
INSERT INTO novels (title) VALUES ("Fahrenheit 451", );
INSERT INTO novels (title) VALUES ("Animal Farm", );
INSERT INTO novels (title) VALUES ("The Time Machine", );
INSERT INTO novels (title) VALUES ("Things Fall Apart", );
