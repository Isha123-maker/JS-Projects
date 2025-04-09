const BASE_URL = "https://open.er-api.com/v6/latest/";

const dropDownsSelects = document.querySelectorAll(".drop-down select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const amountInput = document.querySelector(".amount input");
const msgBox = document.querySelector(".msg");

// Populate dropdowns with currency options
for (let select of dropDownsSelects) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    // Set default values
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "PKR") {
      newOption.selected = "selected";
    }

    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// Update flag dynamically when dropdown value changes
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

// Function to fetch and display conversion rate
const fetchAndDisplayRate = async () => {
  let amtValue = amountInput.value;

  // Validate amount input
  if (amtValue === "" || amtValue < 1) {
    amtValue = 1;
    amountInput.value = "1";
  }

  const URL = `${BASE_URL}${fromCurr.value}`;

  try {
    let response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();
    let rate = data.rates[toCurr.value];

    if (rate) {
      const convertedAmount = (amtValue * rate).toFixed(2);
      msgBox.innerText = `${amtValue} ${fromCurr.value} = ${convertedAmount} ${toCurr.value}`;
    } else {
      msgBox.innerText = "Conversion failed. Please try again.";
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    msgBox.innerText =
      "An error occurred. Please check your connection or API.";
  }
};

// Handle conversion button click
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  fetchAndDisplayRate();
});

// Perform default conversion on page load
window.addEventListener("DOMContentLoaded", fetchAndDisplayRate);
