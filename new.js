document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    let gender = "";

    if (document.getElementById("male").checked) {
        gender = "Male";
    } else if (document.getElementById("female").checked) {
        gender = "Female";
    }

    alert(
        "Student Details\n\n" +
        "Name: " + name + "\n" +
        "Gender: " + gender + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Address: " + address
    );
});


