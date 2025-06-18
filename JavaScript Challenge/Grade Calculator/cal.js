// Alert the user when the page loads
alert("Welcome to the Grade Calculator!");

// Function to calculate the grade based on the score
function calculateGrade(userScore) {
  if (userScore >= 90) {
    return "A";
  } else if (userScore >= 80) {
    return "B";
  } else if (userScore >= 70) {
    return "C";
  } else if (userScore >= 60) {
    return "D";
  } else {
    return "F";
  }
}
// Function to handle the form submission
function handleCalculate() {
  // Prevent the default form submission behavior
  if (event) event.preventDefault();

  // Get the user's name, class, subject and score
  let userName = document.getElementById("studentName").value;
  let userClass = document.getElementById("classSelect").value;
  let userSubject = document.getElementById("subjectSelect").value;
  let userScore = Number(document.getElementById("scoreInput").value);

  let grade = calculateGrade(userScore);

  // Display your result in the result div
  let resultDiv = document.getElementById("resultDisplay");
  resultDiv.innerHTML = `<h2>Grade Result</h2>
                         <p>Name: ${userName}</p>
                         <p>Class: ${userClass}</p>
                         <p>Subject: ${userSubject}</p>
                         <p>Score: ${userScore}</p>
                         <p>Grade: ${grade}</p>`;
  // change the style of the result div
  resultDiv.style.display = "block";
}
