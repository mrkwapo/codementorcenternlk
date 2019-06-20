function searchByLanguage() {
    const input = document.getElementById("searchbylanguage").value;
    console.log(input)
    axios.get("/showprofile/" + input)
    .then(response => {
        document.getElementById("codingLanguageResults").innerHTML = response.data
    })
 
   }
   

   function handleMentorSignup() {
    const mentorName = document.getElementById("mentor-name").value;
    const mentorEmail = document.getElementById("mentor-email").value;
    const mentorPassword = document.getElementById("mentor-password").value;
    console.log( mentorName,  mentorEmail, mentorPassword);

    const payload = {
        mentorname: mentorName,
        mentoremail: mentorEmail,
        mentorpassword: mentorPassword
      }
      axios.post("/api/mentorsignup", payload)
        .then(response => {
          console.log(response)
        })
     
   }
   



   function handleMenteeSignup() {
    const menteeName = document.getElementById("mentee-name").value;
    const menteeEmail = document.getElementById("mentee-email").value;
    const menteePassword = document.getElementById("mentee-password").value;
    console.log(menteeName, menteeEmail, menteePassword);
   
    const payload = {
        menteename: menteeName,
        menteeemail: menteeEmail,
        menteepassword: menteePassword
      }
      axios.post("/api/menteesignup", payload)
        .then(response => {
          console.log(response)
        })
     
}
   


