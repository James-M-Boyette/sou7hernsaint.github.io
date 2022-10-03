// Copy email to user's clipboard
const myEmail = document.getElementById("contact-email");
const copyEmailButton = document.getElementById("copy-email");
const cEBToolTip = document.getElementById("tool-text-email");
const email = "inquires@james-boyette.com";

window.onload = () => {
  myEmail.href = `mailto:${email}`;
};

copyEmailButton.addEventListener("mouseover", (event) => {
  console.log("Moused over!");
  copyEmailButton.classList.add("mystyle");
});

const copyToClipBoard = () => {
  cEBToolTip.innerText = "Copied!";
  navigator.clipboard.writeText(email);
};

copyEmailButton.addEventListener("mouseout", (event) => {
  console.log("Moused Away");
  cEBToolTip.innerText = "Copy Email";
});
