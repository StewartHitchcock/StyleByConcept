function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    if (x === "") {
      alert("Name cannot be blank");
      return false;
    }

    let x = document.forms["myForm"]["email"].value;
    if (x === "") {
      alert("Email cannot be blank");
      return false;
    }
    if(x.includes("@") === false){
        alert("Email must be a valid email address");
        return false;
    }
    

    let x = document.forms["myForm"]["phone"].value;
    if (x === "") {
      alert("Telephone Number cannot be blank");
      return false;
    }

    let x = document.forms["myForm"]["subject"].value;
    if (x === "") {
      alert("Message cannot be blank.");
      return false;
    }
}
