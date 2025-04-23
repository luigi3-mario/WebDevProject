function validateForm() {
    isValid = true;
    form = document.getElementById("contactForm");
    alertText = "";
    tel = "";
    email = "";
    message = "";
    tel = tel.concat(String(form.telephoneNumber.value));
    email = email.concat(form.email.value);
    message = message.concat(form.message.value);
    if(tel.length != 10){
        isValid = false;
        alertText = alertText.concat("Error: telephone number should be 10 characters, example: 0123456789\n");
        turnBackGroundRed("telephoneNumber");
    }
    if(! /^\d+$/.test(tel)){//I learned this regex at https://stackoverflow.com/questions/1779013/check-if-string-contains-only-digits
        isValid = false;
        alertText = alertText.concat("Error: telephone number must contain only numbers, example: 0123456789\n");
        turnBackGroundRed("telephoneNumber");
    }
    if((! tel) && (form.contactPref.value == "text")){
        alertText = alertText.concat("Error: \"text\" was chosen as preferred method of contact, but no phone number was put in\n");
        turnBackGroundRed("telephoneNumber");
        isValid = false;
    }
    if((! email) && (form.contactPref.value == "email")){
        alertText = alertText.concat("Error: \"email\" was chosen as preferred method of contact, but no email address was put in\n");
        turnBackGroundRed("email");
        isValid = false;
    }
    if(! message){
        alertText = alertText.concat("Error: no message was typed in\n");
        turnBackGroundRed("message");
        isValid = false;
    }
    if(!isValid){
        alert(alertText);
    }
    return isValid;
}
function turnRed(id){
    document.getElementById(id).style.color = "#F5B2B2";
}
function turnBackGroundRed(id){
    document.getElementById(id).style.backgroundColor = "#F5B2B2";
}
