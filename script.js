// Get the HTML element with the ID "present"
const present = document.getElementById("present");

// Define options for the confetti effect, including an array of colors
const options = {
  colors: [
    "#34D963", // Green
    "#068C2C", // Dark Green
    "#FF5757", // Red
    "#8C1414", // Dark Red
    "#D9D74A", // Yellow
    "#1E91D9", // Blue
    "#1B608C", // Dark Blue
  ],
};

// Add an event listener for when the mouse enters the "present" element
present.addEventListener("mouseenter", () => {
  // Trigger the confetti effect with the specified options
  confetti(options);
});

// Add an event listener for touchstart events on the "present" element
present.addEventListener("touchstart", () => {
  // Trigger the confetti effect with the specified options
  confetti(options);
});
