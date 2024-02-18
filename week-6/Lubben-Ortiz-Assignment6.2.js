/**
  Title: Lubben-Ortiz-Assignment6.2.js
  Author: Mackenzie Lubben-Ortiz
  Date: 16 Feb 2024
  Description: Aggregate Queries
 */



// Show list of documents in the houses collection

db.houses.find()

// Show list of documents in the students collection

db.students.find()

// Add a document to the students collection/validate creation

db.students.insertOne(dumbledore = {
    "firstName": "Albus",
    "lastName": "Dumbledore",
    "studentId": "s1007",
    "houseId": "h1007"
})

db.students.findOne({ studentId: "s1007"})

// Delete document 

db.students.deleteOne({ studentId: "s1007"})

db.students.findOne({ studentId: "s1007"})

// Show list of students by house ($lookup and $match)

{
    from: "students",
    localField: "houseId",
    foreignField: "houseId",
    as: "result"
}

{
    "houseId": "h1007"
}

// Show lists of items from "Eagle" mascot

db.houses.find({ mascot: "Eagle"})