function myFunction() {
    document.getElementById("myForm").reset();
}


function openNav() {
    document.getElementById("settingSidebar").style.width = "300px";
    document.getElementById("body_content").style.marginLeft = "460px";
    
}
  
function closeNav() {
    document.getElementById("settingSidebar").style.width = "0";
    document.getElementById("body_content").style.marginLeft = "160px";
}

function checkFunction(){
    
    const contactForm = document.querySelector(".myForm");
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    const email = document.querySelector("#email");
    const address = document.querySelector("#address");
    const number = document.querySelector("#number");
    const city = document.querySelector("#city");

    

    contactForm.addEventListener("submit", submitForm);

    function submitForm(e) {
        e.preventDefault();
    
        const firstNameValue = firstName.value;
        const lastNameValue = lastName.value;
        const emailValue = email.value;
        const addressValue = address.value;
        const numberValue = number.value;
        const cityValue = city.value;
    
        if (firstNameValue === "") {
            firstName.style.border = "2px solid red";
        }
    
        if (lastNameValue === "") {
            lastName.style.border = "2px solid red";
        }
        if (emailValue === "") {
            email.style.border = "2px solid red";
        }
        if (addressValue === "") {
            address.style.border = "2px solid red";
        }
        if (numberValue === "") {
            number.style.border = "2px solid red";
        }
        if (cityValue === "") {
            city.style.border = "2px solid red";
        }
    }

    
}


function ValidateEmail()
{
    var inputText = document.getElementById("email").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.match(mailformat))
        {
            alert("You have entered an valid email address!")
            document.myForm.email.focus();
            return true;
        } else {
            alert("You have entered an invalid email address!")
            document.myForm.email.focus();
            return false;
        }
}  



const loginBtn = document.getElementById("login-btn");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

usernameInput.onchange = () => {
    username = usernameInput.value;
  };
passwordInput.onchange = () => {
    password = passwordInput.value;
};

async function login() {
  console.log("login");
  return fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
      // expiresInMins: 60, // optional
    }),
  }).then((res) => {
    if (res.status !== 200) {
      console.log("Loi " + res.status);
      return;
    }
    return res.json();
  });

}

async function checkOutput() {
    const output = await login();
    console.log(output);
    localStorage.setItem("token", output.token);
    window.location.assign("editprofile.html");
  }
loginBtn.onclick = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    checkOutput();
};