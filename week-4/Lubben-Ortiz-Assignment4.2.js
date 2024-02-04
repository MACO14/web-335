/**
  Title: Lubben-Ortiz-Assignment.js
  Author: Mackenzie Lubben-Ortiz
  Date: 2/4/24
  Description: Composer Queries
 */

  /* Query for all composer documents */

  db.users.find()

  /* 

  {
    _id: 7,
    firstName: 'Johann',
    lastName: 'Bach',
    employeeId: '1007',
    email: 'jbach@me.com'
  }
  {
    _id: 8,
    firstName: 'Ludwig',
    lastName: 'Beethoven',
    employeeId: '1008',
    email: 'lbeethovenh@me.com'
  }
  {
    _id: 9,
    firstName: 'Wolfgang',
    lastName: 'Mozart',
    employeeId: '1009',
    email: 'wmozarth@me.com'
  }
  {
    _id: 10,
    firstName: 'Johannes',
    lastName: 'Brahms',
    employeeId: '1010',
    email: 'jbrahms@me.com'
  }
  {
    _id: 11,
    firstName: 'Richard',
    lastName: 'Wagner',
    employeeId: '1011',
    email: 'rwagner@me.com'
  }
  {
    _id: 12,
    firstName: 'Claude',
    lastName: 'Debussy',
    employeeId: '1012',
    email: 'cdebussy@me.com'
  }
  */

db.users.find( { email: "jbach@me.com"})

/*
{
    _id: 7,
    firstName: 'Johann',
    lastName: 'Bach',
    employeeId: '1007',
    email: 'jbach@me.com'
  }
  */

db.users.find({ lastName: "Mozart"})

/* 
{
    _id: 9,
    firstName: 'Wolfgang',
    lastName: 'Mozart',
    employeeId: '1009',
    email: 'wmozarth@me.com'
  }

*/

db.users.find({ firstName: "Richard"})

/*
 {
    _id: 11,
    firstName: 'Richard',
    lastName: 'Wagner',
    employeeId: '1011',
    email: 'rwagner@me.com'
  }
*/

db.users.find({ employeeId: "1010"})
/*
 {
    _id: 10,
    firstName: 'Johannes',
    lastName: 'Brahms',
    employeeId: '1010',
    email: 'jbrahms@me.com'
  }
*/
