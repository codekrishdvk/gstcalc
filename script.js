function calculate() {
  const amount = parseFloat(document.getElementById("amount").value);
  const beverageType = document.getElementById("beverage-type").value;

  let gstRate, sgstRate, cgstRate, cessRate;

  if (beverageType === "gas") {
    gstRate = 40;
    sgstRate = 14;
    cgstRate = 14;
    cessRate = 12;
  } else if (beverageType === "juice") {
    gstRate = 12;
    sgstRate = 6;
    cgstRate = 6;
    cessRate = 0;
  } else if (beverageType === "water") {
    gstRate = 18;
    sgstRate = 9;
    cgstRate = 9;
    cessRate = 0;
  }

  // Calculate original price before GST
  const originalPrice = amount / (1 + gstRate / 100);

  // Calculate SGST, CGST, and Cess based on the original price
  const sgst = originalPrice * (sgstRate / 100);
  const cgst = originalPrice * (cgstRate / 100);
  const cess = originalPrice * (cessRate / 100);

  // Calculate the new total price after adding the new taxes
  const newTotalPrice = originalPrice + sgst + cgst + cess;

  // Display the results in the table
  document.getElementById(
    "originalPrice"
  ).innerText = `₹${originalPrice.toFixed(2)}`;
  document.getElementById("sgst").innerText = `₹${sgst.toFixed(2)}`;
  document.getElementById("cgst").innerText = `₹${cgst.toFixed(2)}`;
  document.getElementById("cess").innerText = `₹${cess.toFixed(2)}`;
  document.getElementById("totalPrice").innerText = `₹${newTotalPrice.toFixed(
    2
  )}`;

  // Display the percentage in the table
  document.getElementById("sgstPercentage").innerText = `${sgstRate}%`;
  document.getElementById("cgstPercentage").innerText = `${cgstRate}%`;
  document.getElementById("cessPercentage").innerText = `${cessRate}%`;

  // Show the total tax percentage
  document.getElementById("totalPercentage").innerText = `${gstRate}%`;

  // Show the results section
  document.getElementById("results").style.display = "block";
}

function updateFields() {
  const beverageType = document.getElementById("beverage-type").value;

  // Hide all rows initially
  document.getElementById("sgstRow").style.display = "none";
  document.getElementById("cgstRow").style.display = "none";
  document.getElementById("cessRow").style.display = "none";

  if (beverageType === "gas") {
    document.getElementById("sgstRow").style.display = "table-row";
    document.getElementById("cgstRow").style.display = "table-row";
    document.getElementById("cessRow").style.display = "table-row";
  } else if (beverageType === "juice") {
    document.getElementById("sgstRow").style.display = "table-row";
    document.getElementById("cgstRow").style.display = "table-row";
  } else if (beverageType === "water") {
    document.getElementById("sgstRow").style.display = "table-row";
    document.getElementById("cgstRow").style.display = "table-row";
  }
}

function refresh() {
  // Reset input fields
  document.getElementById("amount").value = "";
  document.getElementById("beverage-type").value = "gas";

  // Hide the results section
  document.getElementById("results").style.display = "none";
}
