const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/', express.static("public"));

app.get('/', (req, res) => res.send('Hello World!'))

var data = [];

//mentor sign up route
app.post('/api/mentorsignup', function (req, res) {
    const mentorName = req.body.mentorname;
    const mentorEmail = req.body.mentoremail;
    const mentorPassword = req.body.mentorpassword;

    const temp = {
        mentorname: mentorName,
        mentoremail: mentorEmail,
        mentorpassword: mentorPassword
      }
     
      data.push(temp)
      console.log(data);
     

    const reply = `${mentorName} has been registered`

        res.send(reply);
   }) 

//mentor edit profile route
app.post('/api/mentorprofile', function (req, res) {
    const mentorName = req.body.mentorname;
    const mentorCodingLanguage = req.body.mentorcodinglanguage;
    const mentorFrameWork = req.body.mentorframework;
    const mentorSkillLevel = req.body.mentorskilllevel;

    const temp = {
        mentorname: menteeName,
        mentorcodinglanguage: mentorCodingLanguage,
        mentorframework: mentorFrameWork,
        mentorskilllevel: mentorSkillLevel
      }
     
      data.push(temp)
      console.log(data);
     
    const reply = `${mentorName} profile been updated`

        res.send(reply);
   })  


//mentee signup route
   app.post('/api/menteesignup', function (req, res) {
    const menteeName = req.body.menteename;
    const menteeEmail = req.body.menteeemail;
    const menteePassword = req.body.menteepassword;
   

    const temp = {
        menteename: menteeName,
        menteeemail: menteeEmail,
        menteepassword: menteePassword
      }
     
      data.push(temp)
      console.log(data);
     
    const reply = `${menteeName} has been registered`

        res.send(reply);
   })
 
   
   //mentee edit profile route
   app.post('/api/menteeprofile', function (req, res) {
    const menteeName = req.body.menteename;
    const menteeCodingLanguage = req.body.menteecodinglanguage;
    const menteeFrameWork = req.body.menteeframework;
    const menteeSkillLevel = req.body.menteeskilllevel;

    const temp = {
        menteename: menteeName,
        menteecodinglanguage: menteeCodingLanguage,
        menteeframework: menteeFrameWork,
        menteeskilllevel: menteeSkillLevel
      }
     
      data.push(temp)
      console.log(data);
     
    const reply = `${menteeName} profile has been updated!`

        res.send(reply);
   })



   
   app.get("/showprofile/:mentorcodinglanguage", function (req, res) {
 
    const language = req.params.mentorcodinglanguage;

    console.log(language);

   
    res.send(`Results for mentors who know ${language}:`);
   })
   

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


console.log("server running");