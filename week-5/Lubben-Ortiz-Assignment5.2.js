/**
  Title: Lubben-Ortiz-Assignment5.2.js
  Author: Mackenzie Lubben-Ortiz
  Date: 2/7/24
  Description: User Collection
 */


/* Add a new user to a collection */

db.users.insertOne( [ {_id: 6, firstName: "John", lastName: "Adams", employeeId: "1006", email: "jadams@me.com"}])


/* Update composer's email */

db.users.update(
    { "_id": "9" },
    {
       $set: {
            "email": "mozart@me.com"
       }
    }
)

/* Query to show the email update */

db.users.find( {email: "mozart@me.com"})

/* List all documents in user's collection. Display only firstName, lastName, and email fields */

db.users.aggregate([{$project: {firstName: 1, lastName: 1, email: 1}}])

