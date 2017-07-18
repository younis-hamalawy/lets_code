# Schema Information

## users
column name     | data type | details
----------------|-----------|---------------------------
id              | integer   | not null, primary key
first_name      | string    | not null
last_name       | string    | not null
email           | string    | not null, indexed, unique
image_url       | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
city_id         | integer   | 

## cities
column name | data type | details
------------|-----------|---------------------------
id          | integer   | not null, primary key
city_abrv   | string    | not null, indexed, unique
name        | string    | not null
image_url   | string    | not null


## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | text      | not null
date        | string    | not null
address     | string    | not null
city_id     | integer   | not null, indexed
host_id     | integer   | not null, indexed

## registrations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, indexed
event_id    | integer   | not null, indexed
