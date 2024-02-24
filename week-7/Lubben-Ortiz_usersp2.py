#
## Title: usersp2.py
### Author: Mackenzie Lubben-Ortiz
#### Date: 20 Feb 2024
##### Description: Python with MongoDB, Part 2

# Importing the MongoClient #
from pymongo import MongoClient 
import datetime

# build a connection string to connect to #

client = MongoClient("mongodb+srv://web335_user:s3cret@bellevueuniversity.eacnwx4.mongodb.net/web335DBretryWrites=true&w=majority")

# configure a variable to access the web335DB #
db = client['web335DB']

# create a new user document and add to users collection #
haydn = {
    "firstName": "Joseph",
    "lastName": "Haydn",
    "employeeId": "1013",
    "email": "jhayden@me.com",
    "dateCreated": datetime.datetime.utcnow()
}

# insert the document into the users collection #
haydn_user_id = db.users.insert_one(haydn).inserted_id
print(haydn_user_id)

# prove the insert worked by searching the collection for the document #
print(db.users.find_one({"employeeId": "1013"}))

# update query to change the user's email address #
db.users.update_one(
    {"employeeId": "1013"},
    {
        "$set": {
            "email": "joseph.haydn@me.com"
        }
    }
)

# proof the update worked #
print(db.users.find_one({"employeeId": "1013"}))

# remove a user document #
result = db.users.delete_one({
    "employeeId": "1013"
})
print(result)

# proof the delete worked #
print(db.users.find_one({"employeeId": "1013"}))