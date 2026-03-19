#  Simple Message Website

A beginner full-stack project where users can send messages and the owner can view them through an admin panel.

---

##  Features

* Send messages from frontend
* Messages stored in a text file
* Admin panel to view messages
* Simple UI with animations

---

##  Installation

1. Install Node.js
2. Clone or download this project
3. Open terminal in project folder

Run:

npm install

---

##  Running the Project

Start the server:

open the file as whatever you saved it (eg:C:\Users\User\Desktop\websiteproj) using command promt

type:

node server.js

Then open:

http://localhost:3000

---

##  Admin Panel

Go to:

http://localhost:3000/admin.html

Default password:

HELLO123

---

## Change Admin Password

Open `server.js` and find:

const ADMIN_PASSWORD = "HELLO123";

Change it to your own password, then restart the server.

---

##  Project Structure

* server.js → backend server
* public/ → frontend files
* messages.txt → stored messages

---

##  Notes

* Keep the server running while using the site
* Messages are stored locally (not permanent online)

---

## Author

Me. just trying to learn full stack development

## If any issues are faced message me on discord: diddysoldtoyz
