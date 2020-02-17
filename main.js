// var allPersons = [
//   {
//     id: 1,
//     name: "Artek",
//     lastname: "Horosin",
//     gender: "male",
//     phone: 792804136,
//     email: "artek.horosin@gmail.com",
//     date: new Date()
//   }
// ];

window.onload = () => {
  const buttonAdd = document.getElementById("addBtn");
  const allPersons = [];
  buttonAdd.addEventListener("click", event => {
    event.preventDefault();
    //wartosc z input 'Name'
    let namePerson = document.getElementById("name");
    let firstName = namePerson.value;
    //wartosc z input 'Last name'
    let surnamePerson = document.getElementById("lastname");
    let lastName = surnamePerson.value;
    //wartosc z input 'gender'
    let genType = document.getElementById("gender");
    let myGender = genType.value;
    //wartosc z input 'phonenumber'
    let number = document.getElementById("phone");
    let phoneNum = number.value;
    let myEmail = document.getElementById("email");
    let emailAdress = myEmail.value;
    //dodaje do tablicy obiekty
    function addToArray(arr, id) {
      arr.push({ id, firstName, lastName, myGender, phoneNum, emailAdress });
      console.log(arr);
    }

    addToArray(allPersons, allPersons.length + 1);
    addElementToBody(firstName, lastName, myGender, phoneNum, emailAdress);
    //dodaje tbody tabelki
    function addElementToBody(name, surname, gen, phone, email) {
      const tbody = document.getElementsByTagName("tbody")[0];
      const trow = document.createElement("tr");
      tbody.appendChild(trow);
      //pierwsza komorka
      tdata1 = document.createElement("td");
      tdata1.innerText = name;
      trow.appendChild(tdata1);
      //druga komorka
      tdata2 = document.createElement("td");
      tdata2.innerText = surname;
      trow.appendChild(tdata2);
      //trzecia komorka
      tdata3 = document.createElement("td");
      tdata3.innerText = gen;
      trow.appendChild(tdata3);
      //czwarta komorka
      tdata4 = document.createElement("td");
      tdata4.innerText = phone;
      trow.appendChild(tdata4);
      //piata komorka
      tdata5 = document.createElement("td");
      tdata5.innerText = email;
      trow.appendChild(tdata5);
      //szósta komorka
      tdata6 = document.createElement("td");
      tdata6.innerText = new Date();
      trow.appendChild(tdata6);
    }
  });

  function checkEmail() {
    let email = document.getElementById("email");
    email = email.value;
    console.log(email);
    const mailRegex = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
    if (mailRegex.test(email)) {
      console.log("E-mail is ok");
    } else {
      console.log("Not correct e-mail format");
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
  checkEmail();
  validateRequiredInputs();


  //   function goToTheNextInput() {
  //     var inputs = document.querySelectorAll("input");
  //     inputs.forEach(
  //       (element, index).addEventListener("focusout", function swapInputField() {
  //         var nextInput = element.indexOf(index + 1);
  //         nextInput.();
  //       })
  //     );
  //   }
  

//   goToTheNextInput();
};
