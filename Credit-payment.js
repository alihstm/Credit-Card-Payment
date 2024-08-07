const cardholder_name = document.getElementById("card-holder-input");
const card_number = document.getElementById("card-number-input");
const card_expired = document.getElementById("card-exp-input");
const card_cvv = document.getElementById("card-cvv-input");
const continue_btn = document.getElementById("continue-btn");
const holder_warning_text = document.getElementById("holder-warning");
const number_warning_text = document.getElementById("number-warning");
const exp_warning_text = document.getElementById("exp-warning");
const cvv_warning_text = document.getElementById("cvv-warning");

// Add event listeners to input fields
cardholder_name.addEventListener("input", updateCardHolder);
card_number.addEventListener("input", updateCardNumber);
card_expired.addEventListener("input", updateCardExpired);
card_cvv.addEventListener("input", updateCardCVV);

// Update card detail sections as user types
function updateCardHolder() {
  const cardHolderText = document.getElementById("card-holder");
  cardHolderText.textContent = cardholder_name.value;
}

function updateCardNumber() {
  const cardNumberText = document.getElementById("card-number-p");
  cardNumberText.textContent = card_number.value;
}

function updateCardExpired() {
  const cardExpiredText = document.getElementById("card-exp");
  cardExpiredText.textContent = card_expired.value;
}

function updateCardCVV() {
  const cardCVVText = document.getElementById("card-cvv");
  cardCVVText.textContent = card_cvv.value;
}

// Validate input fields
function validateCardHolder() {
  const value = cardholder_name.value.trim();
  return value !== "" && value !== null;
}

function validateCardNumber() {
  const value = card_number.value.trim();
  return value !== "" && value !== null && value.length === 19;
}

function validateCardExpired() {
  const value = card_expired.value.trim();
  return (
    value !== "" && value !== null && /^(0[1-9]|1[0-2])\/\d{2}$/.test(value)
  );
}

function validateCardCVV() {
  const value = card_cvv.value.trim();
  return value !== "" && value !== null && /^\d{4}$/.test(value);
}

continue_btn.onclick = function () {
  const cardholder_valid = validateCardHolder();
  const cardnumber_valid = validateCardNumber();
  const cardexpired_valid = validateCardExpired();
  const cardcvv_valid = validateCardCVV();

  if (!cardholder_valid) {
    holder_warning_text.textContent = "Fullname required";
    holder_warning_text.style.color = "red";
    cardholder_name.style.border = "1px solid red";
  } else {
    holder_warning_text.textContent = "";
    cardholder_name.style.border = "";
  }

  if (!cardnumber_valid) {
    number_warning_text.textContent = "Invalid card number";
    number_warning_text.style.color = "red";
    card_number.style.border = "1px solid red";
  } else {
    number_warning_text.textContent = "";
    card_number.style.border = "";
  }

  if (!cardexpired_valid) {
    exp_warning_text.textContent = "Invalid date";
    exp_warning_text.style.color = "red";
    card_expired.style.border = "1px solid red";
  } else {
    exp_warning_text.textContent = "";
    card_expired.style.border = "";
  }

  if (!cardcvv_valid) {
    cvv_warning_text.textContent = "Invalid CVV2";
    cvv_warning_text.style.color = "red";
    card_cvv.style.border = "1px solid red";
  } else {
    cvv_warning_text.textContent = "";
    card_cvv.style.border = "";
  }

  if (
    cardholder_valid &&
    cardnumber_valid &&
    cardexpired_valid &&
    cardcvv_valid
  ) {
    continue_btn.textContent = "Detail Confirmed";
    continue_btn.style.backgroundColor = "green";
    // Add functionality to proceed to the next step or submit the form
  } else {
    continue_btn.textContent = "Continue";
    continue_btn.style.backgroundColor = "red";
  }
};

document
  .getElementById("dark-mode-toggle")
  .addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
  });
