const form = document.querySelector("#contact-form");
const userName = document.querySelector("#demo-name");
const email = document.querySelector("#demo-email");
const message = document.querySelector("#demo-message");
const submitionButton = document.querySelector("#demo-submit");

userName.addEventListener("keydown", function (event) {
  // console.log(event);
  // console.log("keyDOWN");
  // console.log(`The key pressed is ${event.key}, and its code is ${event.code}`);
  // console.log(userName.value);
});

email.addEventListener("keydown", function (event) {
  // console.log(event);
  // console.log("keyDOWN");
  // console.log(`The key pressed is ${event.key}, and its code is ${event.code}`);
});

message.addEventListener("keydown", function (event) {
  // console.log(event);
  // console.log("keyDOWN");
  // console.log(`The key pressed is ${event.key}, and its code is ${event.code}`);
});

// submit.addEventListener("keydown", function(event) {
//     console.log(event);
//     console.log("keyDOWN");
//     console.log(`The key pressed is ${event.key}, and its code is ${event.code}`);
// })
console.log(submitionButton);
submitionButton.onclick = function (e) {
  // console.log(`Submission Button clicked!`);
  // console.log(e);
};

// Custom Submission logic
// const form = document.querySelector("#signUpForm");

form.addEventListener("demo-submit", function (e) {
  e.preventDefault(); // This will prevent the browser from trying to submit the info, and then refreshing the page - behaviors that are baked in to the browser originally
  // console.log(e); // What's been stored in the form variable

  // (Me) Logic to execute when data for First Name is submitted:
  // console.log(`User submitted "${firstName.value}" as their 'first name'`);
  // console.log(`"${firstName.value}" is ${firstName.value.length} characters long -`);
  if (firstName.value.length < 3) {
    console.log(`${firstName.value.length} is less than 3`);
  }

  // (Me) Logic to execute when data for Last Name is submitted:
  // console.log(`User submitted "${lastName.value}" as their 'last name'`);
  // console.log(`"${lastName.value}" is ${lastName.value.length} characters long -`);

  // Logic to execute if submissions fail to meet our minimum requirements:
  if (lastName.value.length < 3) {
    // console.log(`${lastName.value.length} is less than 3`);
  }
  // if(firstName.value === "" || lastName.value === ""){ // Original conditional
  if (firstName.value.length < 3 || lastName.value.length < 3) {
    // (Me) A custom conditional
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red";
    errorMessage.style.fontWeight = 800;
    errorMessage.innerText =
      "Sorry - all fields must have an entry that is at least 3 characters-long";
    form.append(errorMessage); // append it to the DOM and the form
  }
});
