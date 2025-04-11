// Define the delay function
function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

// Use the delay function
delay(1000).then(() => {
  console.log("This message appears after 1 second");
});
