

function saveData()
{
let name, email, subject, details;
name=document.getElementById("name").value;
email=document.getElementById("email").value;
subject=document.getElementById("subject").value;
details=document.getElementById("details").value;

localStorage.setItem("name",name)
localStorage.setItem("email",email)
localStorage.setItem("subject",subject)
localStorage.setItem("details",details)
}




