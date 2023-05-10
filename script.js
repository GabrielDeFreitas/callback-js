const Button = (text, callback) => {
  const body = document.querySelector("div.group-btn")
  const button = document.createElement("button")
  button.textContent = text
  button.classList.add("btn-style")

  callback(button)

  body.insertAdjacentElement("beforeend", button)

  return button
}

Button("Primary", (button) => {
  button.style.cssText = `
    background-color: #007bff;
    border-color: #007bff;
  `

  button.addEventListener("click",() => {
    alert("Primary button click!")
  })
})

Button("Danger", (button) => {
  button.style.cssText = `
    background-color: #c82333;
    border-color: #bd2130;
  `

  button.addEventListener("click",() => {
    alert("Danger button click!")
  })
})
