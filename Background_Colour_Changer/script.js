function changeBackground() {
  const colorInput = document.getElementById("colorInput").value;
  const message = document.getElementById("message");

  if (colorInput.trim() === "") {
    message.textContent = "Please enter a color!";
    message.style.color = "red";
    return;
  }

  document.body.style.backgroundColor = colorInput;
  message.textContent = `Background changed to ${colorInput}`;
  message.style.color = "green";
}
