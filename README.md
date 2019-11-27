# Visitor-Checkpoint
## Requirements

* Node 8
* Git
* Contentful CLI (only for write access)


## What is Visitors Checkpoint?

It is a Entry maangement Application in which it takes details from visitors like -:
* Visitor's name
* Visitor's Number
* Visitor's Email Address
* check-out Time
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
git clone https://github.com/contentful/the-example-app.nodejs.git
cd the-example-app.nodejs
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


