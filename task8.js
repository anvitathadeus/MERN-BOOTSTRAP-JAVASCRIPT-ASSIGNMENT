function validate() {
    var valid = true;
    var form = document.myForm;
    function displayPoor(inputName) {
        var inputField = form[inputName];
        var poorSpan = inputField.nextElementSibling;
        poorSpan.style.color = "red";
        poorSpan.innerHTML = "POOR";
    }
    function clearPoor(inputName) {
        var inputField = form[inputName];
        var poorSpan = inputField.nextElementSibling;
        poorSpan.innerHTML = "";
    }


    if (form.First_Name.value === "") {
        displayPoor("First_Name");
        valid = false;
    } else {
        clearPoor("First_Name");
    }

    if (form.Last_Name.value === "") {
        displayPoor("Last_Name");
        valid = false;
    } else {
        clearPoor("Last_Name");
    }

    if (form.Email.value === "") {
        displayPoor("Email");
        valid = false;
    }

    if (form.Password.value === "") {
        displayPoor("Password");
        valid = false;
    }

    if (form.Reenter_Password.value === "") {
        displayPoor("Reenter_Password");
        valid = false;
    }

    if (form.age.value === "") {
        displayPoor("age");
        valid = false;
    } else {
        clearPoor("age");
    }

    if (form.Mobile.value === "") {
        displayPoor("Mobile");
        valid = false;
    } else {
        clearPoor("Mobile");
    }
           

    if (form.address.value === "") {
        displayPoor("address");
        valid = false;
    } else {
        clearPoor("address");
    }

    if (form.State.value === "") {
        displayPoor("State");
        valid = false;
    } else {
        clearPoor("State");
    }

    return valid;
}