const formid = document.querySelector("#formId")
const input = document.querySelector("#form-value")

formid.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(input.value)
})