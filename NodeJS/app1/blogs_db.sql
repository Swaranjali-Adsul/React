create database blogs_db;


use blogs_db;

create table user(
    id integer primary key auto_increment,
    firstName varchar(20),
    lastName varchar(20),
    email varchar(50),
    password varchar(100)
);


create table blogs(
    id integer primary key auto_increment,
    title varchar(100),
    description varchar(500),
    status int default 0,
    userId integer
);