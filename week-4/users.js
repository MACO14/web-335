/**
  Title: users.js
  Author: Mackenzie Lubben-Ortiz
  Date: 1/30/24
  Description: MongoDB shell scripts for users collection
 */

/**
 Creating user documents
 */

bach = {
        "firstName": "Johann",
        "lastName": "Bach",
        "employeeId": "1007",
        "email": "jbach@me.com",
        
}

ludwig = {
         "firstName": "Ludwig",
         "lastName": "Beethoven",
         "employeeId": "1008",
         "email": "lbeethoven@me.com",
         
}

mozart = {
         "firstName": "Wolfgang",
         "lastName": "Mozart",
         "employeeId": "1009",
         "email": "wmozart@me.com",
         
}

brahms = {
         "firstName": "Johannes",
         "lastName": "Brahms",
         "employeeId": "1010",
         "email": "jbrahms@me.com",
        
}

wagner = {
         "firstName": "Richard",
         "lastName": "Wagner",
         "employeeId": "1011",
         "email": "rwagner@me.com",
         
}

debussy = {
          "firstName": "Claude",
          "lastName": "Debussy",
          "employeeId": "1012",
          "email": "cdebussy@me.com",
          
}

db.users.insertOne(bach)
db.users.insertOne(ludwig)
db.users.insertOne(mozart)
db.users.insertOne(brahms)
db.users.insertOne(wagner)
db.users.insertOne(debussy)