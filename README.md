# Callback Javascript

## Contents

content 1 edit

```js
const Button = (text, callback) => {
  const body = document.querySelector("div.group-btn")
  const button = document.createElement("button")
  button.textContent = text
  button.classList.add("btn-style")
  button.setAttribute("role", "button")

  callback(button)

  body.insertAdjacentElement("beforeend", button)

  return button
}
```
content 2 edit

```js
Button("Primary", (button) => {
  button.style.cssText = `
    background-color: #007bff;
    border-color: #007bff;
  `
  button.setAttribute("aria-describedby", "primary alert button")

  button.addEventListener("click",() => {
    alert("Primary button click!")
  })
})
```
<br/>

# Complementary material

## Live Server (extension for Visual Studio code)
Link: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

## Element: insertAdjacentHTML() method
Link: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

## CSSStyleDeclaration: cssText property
Link: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/cssText

## Editorconfig
https://editorconfig.org/

Element: classList property ->
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
