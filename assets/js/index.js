// Copy email to user's clipboard
const copyEmailButton = document.getElementById("contact-email");
const cEBToolTip = document.getElementById("tool-text-email");
const email = "inquires@james-boyette.com";

window.onload = () => {
  copyEmailButton.href = `mailto:${email}`;
};

copyEmailButton.addEventListener("mouseover", (event) => {
  copyEmailButton.classList.add("mystyle");
});

const copyToClipBoard = () => {
  cEBToolTip.innerText = "Copied!";
  navigator.clipboard.writeText(email);
};

cEBToolTip.addEventListener("mouseout", (event) => {
  console.log("Moused Away");
  cEBToolTip.innerText = "Copy";
});
