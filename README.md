# Visitor-Checkpoint
## Requirements

* Node 8
* Git
* Contentful CLI (only for write access)

### Application User Interface

![Screenshot](https://user-images.githubusercontent.com/49001649/69724496-06ee0f80-1142-11ea-99b8-8a72698adfff.png)

#### visitor's Email and Message
<img src="https://user-images.githubusercontent.com/49001649/69725910-4f5afc80-1145-11ea-9c0a-6f56b2b1394c.jpeg" width="300" heigth="300">
<img src="https://user-images.githubusercontent.com/49001649/69725929-5eda4580-1145-11ea-8a1d-03e1f9720d04.png" width="300" heigth="300" >

#### Host's Email and Message

<img src="https://user-images.githubusercontent.com/49001649/69726168-f475d500-1145-11ea-9aed-b1a3979dc5ab.jpeg" width="200" heigth="200">
<img src="https://user-images.githubusercontent.com/49001649/69726014-921cd480-1145-11ea-8545-99edc002e739.png" width="200" heigth="200">




## What is Visitors Checkpoint?

It is a Entry mangement Application in which it takes details from visitors like -:
* Visitor's Name
* Visitor's Number
* Visitor's Email Address
* Check-out Time
* Host's name
* Host's Number
* Host's Email Address

All data entries  are done in Form, Form data entries are passed to server.js, now after fetching data in Server.js we have to send an email and SMS to visitor and host regarding the details of meeting.
For Sending a Mail we have used node mailer and for sending SMS we have used NEXMO API

* Node Mailer
require to set host's gmail id and password for authentication

* Nexmo API 
requires Host's registered Phone Number on NEXMO API, API key and API Secret

used timestamp for checkin Time that is whenever visitor clicks on submit button it is recorded as a checkin Time




## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/apshada/Visitor-Checkpoint.git
cd Visitor-Checkpoint
```

```bash
npm install
```

## Steps for read-only access

To start the express server, run the following

```bash
npm run start:dev
```

Open [http://localhost:4000](http://localhost:4000) and take a look around.


