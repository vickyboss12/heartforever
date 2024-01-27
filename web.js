const fileInput = document.querySelector('#file-js-example input[type=file]');
fileInput.onchange = () => {
  if (fileInput.files.length > 0) {
    const fileName = document.querySelector('#file-js-example .file-name');
    fileName.textContent = fileInput.files[0].name;
  }
}

function sendemail(){
  Email.send({
Host : "smtp.gmail.com",
Username : "lokiuniverse@gmail.com",
Password : "3F9C0B708731CA0A37EAAEC8BA03D6914545",
To : 'vigneshc2909@gmail.com',
From : document.getElementById("email").value,
Subject : "new contact form enquiry",
Body : "name:"+ document.getElementById("name").value
       +"<br> email:" + document.getElementById("email").value
       +"<br> select option:" + document.getElementById("option").value
       +"<br> subject:" + document.getElementById("message").value
      }).then(
message => alert("message send succesfully")
);
}