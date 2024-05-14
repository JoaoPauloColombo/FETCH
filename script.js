//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMTIzQGFkbWluLmNvbS5iciIsInVzZXJJZCI6IjY2NDI2YTg2MjcwOGI3MzFiNzc0NmY2ZiIsImlhdCI6MTcxNTYyODczMSwiZXhwIjoxNzE1NjQzMTMxfQ.QxhSw3EjrdsUv4WyR0NTo_s_wAXuhXg3ZA3jXL_Cqpc"


const form = document.getElementById("form");

form.addEventListener("submit", function (e) {

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    e.preventDefault();

    const userData = JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
    });

    fetch("http://10.92.198.38:8080/auth/signup", {
        method: "POST",
        body: userData,
        headers:{
            "Content-Type": "application/json; charset=utf-8"
        }
    })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
    console.log(userData);
})
