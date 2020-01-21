// var allPersons = [
//   {
//     id: 1,
//     name: "Artek",
//     lastname: "Horosin",
//     gender: "male",
//     phone: 845968458,
//     email: "artek.horosin@gmail.com",
//     date: new Date()
//   }
// ];

window.onload = () => {
  const buttonAdd = document.getElementById("addBtn");
  const allPersons = [];

  //   buttonAdd.addEventListener("click", event => {
  //     event.preventDefault();
  //     let;
  //   });
  function checkEmail() {
    let email = document.getElementById("email");
    email = email.value;
    console.log(email);
    const mailRegex = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
    if (mailRegex.test(email)) {
      console.log("E-mail is ok");
    } else {
      console.log("Incorrect e-mail format");
    }
  }
  function validateRequiredInputs() {
    var requiredInputs = document.querySelectorAll("[required]");
    console.log(requiredInputs);

    requiredInputs.forEach(element => {
      var input = element.value;
      var inputRegex = /^.+/s;
      if (input === "" || inputRegex.test(input)) {
        alert(
          "At least the required fields have to be filled in to add the person"
        );
        return;
      }
    });
  }

//   function goToTheNextInput() {
//     var inputs = document.querySelectorAll("input");
//     inputs.forEach(
//       (element, index).addEventListener("focusout", function swapInputField() {
//         var nextInput = element.indexOf(index + 1);
//         nextInput.();
//       })
//     );
  }

  checkEmail();
  validateRequiredInputs();
  goToTheNextInput();
};
