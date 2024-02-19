#
## Title: usersp1.py
### Author: Mackenzie Lubben-Ortiz
#### Date: 18 Feb 2024
##### Description: Python with MongoDB, Part 1

### import the MongoDB Client ###

from pymongo import MongoClient

### build a connection string to connect to ###

client = MongoClient("mongodb+srv://web335_user:s3cret>@bellevueuniversity.eacnwx4.mongodb.net/web335DBretryWrites=true&w=majority")

### configure a variable to access the web335DB ###
db = client['web335DB']

### call the find function to display all the users of a collection ###
for user in db.users.find({}, {"firstName": 1, "lastName": 1}):
    print(user)

### call the find function to display a document with specific employeeId ###
print(db.users.find_one({"employeeId": "1011"}))


### call to find document with specific last name ###
print(db.users.find_one({"lastName": "Mozart"}))