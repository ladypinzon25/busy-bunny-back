# Busy Bunny - Back-end


![Busy Bunny](https://user-images.githubusercontent.com/20824314/84136097-72c60480-aa10-11ea-93d7-138569ad64ac.png)

[Demo](https://todoappbunny.web.app/)

[Desktop Video](https://www.youtube.com/watch?v=m3Icdh5nFDs&feature=youtu.be)

[Mobile Video](https://www.youtube.com/watch?v=VsE84veL2P0&feature=youtu.be)

[Back-end](https://github.com/ljpinzon12/busy-bunny-back)

[Front-end](https://github.com/ljpinzon12/busy-bunny-front)

## Setup
### DB
Before running the project, make sure to create a mysql db and run:
```
create database db;
use db;
```
In order to create the tables and fill the tables, you need to run the file `./dbDefinition.sql` in your db.
### Firebase
```
npm i -g firebase
firebase login
```
### npm
```
cd functions
npm i
```
### Credentials
You need to have the `env.ts` file which contains the credentials required for the connection with the db, execute the following in `/busy-bunny-back` (remember to use your own credentials): 
```
echo "const dbCredentials: any = {
  name: 'DB-NAME',
  username: 'DB-USERNAME',
  password: 'DB-PASSWORD',
  host: 'DB-HOST'
};
   
export default dbCredentials;" > env.ts
```
**Note:** For this project I am using remotemysql.com which provides free DBs, I have identified sometimes a high latency because of that, keep in mind this when testing the project.

### How to run in local
```
cd functions
npm run serve
```

## Architecture
![Architecture](https://user-images.githubusercontent.com/20824314/84135075-20381880-aa0f-11ea-836e-d0c127d2fa5e.png)
