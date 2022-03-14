from flask import Flask
import pyrebase

app = Flask(__name__)


config = {
  "apiKey": "AIzaSyD5v6urtha_8G9d1qdjQJC6n3ZJskiOJOM",
  "authDomain": "smartfarming-b6f1a.firebaseapp.com",
  "databaseURL": "https://smartfarming-b6f1a-default-rtdb.firebaseio.com",
  "projectId": "smartfarming-b6f1a",
  "storageBucket": "smartfarming-b6f1a.appspot.com",
  "messagingSenderId": "355310653007",
  "appId": "1:355310653007:web:9e1ff129bfcb1fd393243a",
  "measurementId": "G-G96Q8QE7HX"
}

firebase = pyrebase.initialize_app(config);

db = firebase.database();

userdata = {"members":["member1","member2","member3","member4","member5"]};
db.child("flaskdata").child("1918295").push(userdata)
users = db.child("flaskdata").child("1918295").child("-My2Adtwf2sWBBczDPvL").get()



@app.route("/members")
def hello_world():
    return users.val();

app.run(debug=True)