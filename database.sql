
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

INSERT INTO "item" ("description", "image_url", "user_id") 
VALUES ('a goat','goat1.jpg','1'),('a goat','goat2.jpg','2'),('a goat','goat3.jpg','3'),('a goat','goat4.jpg','4'),
('a funny goat','funnygoat1.jpg','1'),('a funny goat','funnygoat2.jpg','2'),('a funny goat','funnygoat3.jpg','3'),('a funny goat','funnygoat4.jpg','4')