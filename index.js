// Add your code here
let idNum = document.getElementById("idNum");
let form = document.getElementById("idNum");
/**
 * @param {string} name
 * @param {string} email
 */
function submitData(name, email) {
    // method: "POST" is missing from the object below
    let formData = {
        name: name,
        email: email,
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };

    fetch("http://localhost:3000/users", configObj)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            console.log(object.id);
            idNum.innerHTML = object.id;
        })
        .catch(function (error) {
            console.log(error.message);
        });
}
